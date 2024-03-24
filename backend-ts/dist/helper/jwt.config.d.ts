import { JwtPayload } from 'jsonwebtoken';
import { Request } from 'express';
import 'dotenv/config';
export declare function accessTokenSign(payload: JwtPayload): string;
export declare function refreshTokenSign(payload: JwtPayload): string;
export declare function refreshJwt(refreshToken: string): string;
export declare function getToken(req: Request): string | null;
export declare function verifyToken(token: string): void;
