"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandlerMiddleware = void 0;
const base_response_1 = require("../core/base.response");
function errorHandlerMiddleware(error, _req, res, _next) {
    const response = new base_response_1.BaseResponse({
        code: 500,
        success: false,
        data: undefined,
        error: error.message,
    });
    return res.status(response.code).json(response);
}
exports.errorHandlerMiddleware = errorHandlerMiddleware;
//# sourceMappingURL=error-handler.middleware.js.map