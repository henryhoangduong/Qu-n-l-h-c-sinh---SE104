"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtMiddleware = void 0;
const jwt_config_1 = require("../helper/jwt.config");
const jsonwebtoken_1 = require("jsonwebtoken");
function jwtMiddleware(req, _res, next) {
    const accessToken = (0, jwt_config_1.getToken)(req);
    if (!accessToken) {
        return next(new Error('No token found'));
    }
    const jwtPayload = (0, jsonwebtoken_1.decode)(accessToken);
    if (jwtPayload.tokenType !== 'ACCESS_TOKEN') {
        return next(new Error('Invalid token type'));
    }
    try {
        (0, jwt_config_1.verifyToken)(accessToken);
    }
    catch (error) {
        return next(new Error('Invalid token'));
    }
    next();
}
exports.jwtMiddleware = jwtMiddleware;
//# sourceMappingURL=jwt.middleware.js.map