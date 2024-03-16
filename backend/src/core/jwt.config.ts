import { JwtPayload, decode, sign } from 'jsonwebtoken';
import { JwtType } from './jwt.type';
import { Request } from 'express';

const secretKey =
  '6A576E5A7134743777217A25432A462D4A614E645267556B5870327335753878';
const accessTokenExpiry = '1h';
const refreshTokenExpiry = '7d';
const algorithm = 'HS256';

export function accessTokenSign(payload: any): string {
  return sign(payload, secretKey, {
    expiresIn: accessTokenExpiry,
    algorithm: algorithm,
  });
}

export function refreshTokenSign(payload: any): string {
  return sign(payload, secretKey, {
    expiresIn: refreshTokenExpiry,
    algorithm: algorithm,
  });
}

export function refreshJwt(refreshToken: string): string {
  const jwtPayload = decode(refreshToken) as JwtPayload;
  const accessTokenType: JwtType = 'ACCESS_TOKEN';
  const payload = {
    sub: jwtPayload.sub,
    username: jwtPayload.username,
    role: jwtPayload.role,
    type: accessTokenType,
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
