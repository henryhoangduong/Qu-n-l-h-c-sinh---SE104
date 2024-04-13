import { HttpStatus } from '@nestjs/common';

export class BaseResponse<T> {
  code: HttpStatus;
  success: boolean;
  data: T | undefined;
  error: string | undefined;

  constructor(
    code: HttpStatus,
    success: boolean,
    data: T | undefined,
    error: string | undefined,
  ) {
    this.code = code;
    this.data = data;
    this.success = success;
    this.error = error;
  }
}
