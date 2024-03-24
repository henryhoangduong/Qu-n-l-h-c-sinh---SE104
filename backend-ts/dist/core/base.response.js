"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseResponse = void 0;
class BaseResponse {
    constructor(partial) {
        this.code = undefined;
        this.success = true;
        this.data = undefined;
        this.error = undefined;
        Object.assign(this, partial);
    }
}
exports.BaseResponse = BaseResponse;
//# sourceMappingURL=base.response.js.map