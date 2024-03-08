import { HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { JwtPayload, decode } from "jsonwebtoken";
import { BaseResponse } from '../core/base.response';

@Injectable()
export class TokenMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return next();
    const jwtPayload = decode(token) as JwtPayload;
    const tokenType = jwtPayload.type;
    if (tokenType === 'refresh_token') {
      return res.status(HttpStatus.BAD_REQUEST).json(
        new BaseResponse(HttpStatus.BAD_REQUEST, false, null, 'Invalid token type')
      );
    }
    next();
  }
}
