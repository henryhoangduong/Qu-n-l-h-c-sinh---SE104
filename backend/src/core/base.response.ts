import { HttpStatus } from "@nestjs/common";

export class BaseResponse<T> {
    code: HttpStatus;
    success: boolean;
    data: T | null;
    error: string | null;

    constructor(code: number, success: boolean, data: T | null, error: string | null) {
        this.code = code;
        this.data = data;
        this.success = success;
        this.error = error;
    }
}