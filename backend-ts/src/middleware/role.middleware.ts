import { NextFunction, Request, Response } from 'express';
import { getToken } from 'src/helper/jwt.config';
import { JwtPayload, decode } from 'jsonwebtoken';
import { Role } from 'src/module/user/entities/role';

export function adminRoleMiddleware(
  req: Request,
  _res: Response,
  next: NextFunction,
) {
  const accessToken = getToken(req);
  if (!accessToken) {
    return next(new Error('No token found'));
  }
  const jwtPayload = decode(accessToken) as JwtPayload;
  const role: Role = Role[jwtPayload.role as keyof typeof Role];
  if (role !== Role.Admin) {
    return next(new Error('Invalid role'));
  }
  next();
}

export function teacherRoleMiddleware(
  req: Request,
  _res: Response,
  next: NextFunction,
) {
  const accessToken = getToken(req);
  if (!accessToken) {
    return next(new Error('No token found'));
  }
  const jwtPayload = decode(accessToken) as JwtPayload;
  const role: Role = Role[jwtPayload.role as keyof typeof Role];
  if (role !== Role.Teacher) {
    return next(new Error('Invalid role'));
  }
  next();
}

export function studentRoleMiddleware(
  req: Request,
  _res: Response,
  next: NextFunction,
) {
  const accessToken = getToken(req);
  if (!accessToken) {
    return next(new Error('No token found'));
  }
  const jwtPayload = decode(accessToken) as JwtPayload;
  const role: Role = Role[jwtPayload.role as keyof typeof Role];
  if (role !== Role.Student) {
    return next(new Error('Invalid role'));
  }
  next();
}
