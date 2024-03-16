import { NextFunction, Request, Response } from 'express';
import { getToken } from 'src/core/jwt.config';
import { JwtPayload, decode } from 'jsonwebtoken';
import { JwtType } from 'src/core/jwt.type';

export function jwtMiddleware(req: Request, res: Response, next: NextFunction) {
  const accessToken = getToken(req);
  const jwtPayload = decode(accessToken) as JwtPayload;
  const tokenType: JwtType = jwtPayload.type;
  if (tokenType !== 'ACCESS_TOKEN') {
    return next(new Error('Invalid token type'));
  }
  next();
}
