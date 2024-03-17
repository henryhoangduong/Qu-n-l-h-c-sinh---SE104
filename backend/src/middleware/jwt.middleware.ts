import { NextFunction, Request, Response } from 'express';
import { getToken } from 'src/core/jwt.config';
import { JwtPayload, decode } from 'jsonwebtoken';

export function jwtMiddleware(req: Request, res: Response, next: NextFunction) {
  const accessToken = getToken(req);
  if (!accessToken) {
    return next(new Error('No token found'));
  }
  const jwtPayload = decode(accessToken) as JwtPayload;
  if (jwtPayload.tokenType !== 'ACCESS_TOKEN') {
    return next(new Error('Invalid token type'));
  }
  next();
}
