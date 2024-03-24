import { NextFunction, Request, Response } from 'express';
export declare function adminRoleMiddleware(req: Request, _res: Response, next: NextFunction): void;
export declare function teacherRoleMiddleware(req: Request, _res: Response, next: NextFunction): void;
export declare function studentRoleMiddleware(req: Request, _res: Response, next: NextFunction): void;
