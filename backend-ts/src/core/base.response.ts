export class BaseResponse<T> {
  code: number = undefined;
  success: boolean = true;
  data: T = undefined;
  error: string = undefined;

  constructor(partial?: Partial<BaseResponse<T>>) {
    Object.assign(this, partial);
  }
}
