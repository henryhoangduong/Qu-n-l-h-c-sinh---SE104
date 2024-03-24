import { NextFunction, Request, Response } from 'express';
export declare const signInController: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>>>;
export declare const refreshController: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>>>;
