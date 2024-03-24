export declare class BaseResponse<T> {
    code: number;
    success: boolean;
    data: T;
    error: string;
    constructor(partial?: Partial<BaseResponse<T>>);
}
