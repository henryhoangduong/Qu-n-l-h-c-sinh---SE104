import { BaseResponse } from 'src/core/base.response';
import { NextFunction, Request, Response } from 'express';

export function errorHandlerMiddleware(
  error: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
) {
  const response = new BaseResponse({
    code: 500,
    success: false,
    data: undefined,
    error: error.message,
  });
  return res.status(response.code).json(response);
}
