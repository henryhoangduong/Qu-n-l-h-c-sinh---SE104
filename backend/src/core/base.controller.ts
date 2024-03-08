import { Response } from 'express';
import { BaseResponse } from './base.response';

export abstract class BaseController {
  async executeService(res: Response, response: BaseResponse<any>) {
    return res.status(response.code).json(response);
  }
}
