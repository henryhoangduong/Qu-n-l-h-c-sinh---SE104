"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentRoleMiddleware = exports.teacherRoleMiddleware = exports.adminRoleMiddleware = void 0;
const jwt_config_1 = require("../helper/jwt.config");
const jsonwebtoken_1 = require("jsonwebtoken");
const role_1 = require("../module/user/entities/role");
function adminRoleMiddleware(req, _res, next) {
    const accessToken = (0, jwt_config_1.getToken)(req);
    if (!accessToken) {
        return next(new Error('No token found'));
    }
    const jwtPayload = (0, jsonwebtoken_1.decode)(accessToken);
    const role = role_1.Role[jwtPayload.role];
    if (role !== role_1.Role.Admin) {
        return next(new Error('Invalid role'));
    }
    next();
}
exports.adminRoleMiddleware = adminRoleMiddleware;
function teacherRoleMiddleware(req, _res, next) {
    const accessToken = (0, jwt_config_1.getToken)(req);
    if (!accessToken) {
        return next(new Error('No token found'));
    }
    const jwtPayload = (0, jsonwebtoken_1.decode)(accessToken);
    const role = role_1.Role[jwtPayload.role];
    if (role !== role_1.Role.Teacher) {
        return next(new Error('Invalid role'));
    }
    next();
}
exports.teacherRoleMiddleware = teacherRoleMiddleware;
function studentRoleMiddleware(req, _res, next) {
    const accessToken = (0, jwt_config_1.getToken)(req);
    if (!accessToken) {
        return next(new Error('No token found'));
    }
    const jwtPayload = (0, jsonwebtoken_1.decode)(accessToken);
    const role = role_1.Role[jwtPayload.role];
    if (role !== role_1.Role.Student) {
        return next(new Error('Invalid role'));
    }
    next();
}
exports.studentRoleMiddleware = studentRoleMiddleware;
//# sourceMappingURL=role.middleware.js.map