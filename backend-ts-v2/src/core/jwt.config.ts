import { JwtPayload, decode, sign, verify } from 'jsonwebtoken';
import { Request } from 'express';
import { Account } from 'src/entitie/entities/Account';
import { User } from 'src/entitie/entities/User';
export type JwtType = 'ACCESS_TOKEN' | 'REFRESH_TOKEN';

const secretKey = process.env.JWT_SECRET_KEY;
const accessTokenExpiry = '1h';
const refreshTokenExpiry = '7d';
const algorithm = 'HS256';

declare module 'jsonwebtoken' {
  export interface JwtPayload {
    identifierId: number;
    role: string;
    tokenType: JwtType;
  }
}

export const generateTokenPayload = (
  account: Account,
  user: User,
  tokenType: JwtType,
): JwtPayload => ({
  sub: account.id,
  identifierId: account.identifierId,
  role: user.role,
  tokenType,
});

export function accessTokenSign(payload: JwtPayload): string {
  return sign(payload, secretKey, {
    expiresIn: accessTokenExpiry,
    algorithm: algorithm,
  });
}

export function refreshTokenSign(payload: JwtPayload): string {
  return sign(payload, secretKey, {
    expiresIn: refreshTokenExpiry,
    algorithm: algorithm,
  });
}

export function refreshJwt(refreshToken: string): string {
  verifyToken(refreshToken);
  const jwtPayload = decode(refreshToken) as JwtPayload;
  const payload: JwtPayload = {
    sub: jwtPayload.sub,
    identifierId: jwtPayload.identifierId,
    role: jwtPayload.role,
    tokenType: 'ACCESS_TOKEN',
  };
  return sign(payload, secretKey, {
    expiresIn: accessTokenExpiry,
    algorithm: algorithm,
  });
}

export function getToken(req: Request): string | null {
  const authorizationHeader = req.headers.authorization;
  if (authorizationHeader && authorizationHeader.startsWith('Bearer ')) {
    return authorizationHeader.substring(7);
  }
  return null;
}

export function verifyToken(token: string) {
  verify(token, secretKey);
}