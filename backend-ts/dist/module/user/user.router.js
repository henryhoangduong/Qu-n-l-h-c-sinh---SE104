"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const user_controller_1 = require("./user.controller");
const jwt_middleware_1 = require("../../middleware/jwt.middleware");
exports.userRouter = (0, express_1.Router)();
exports.userRouter.get('/', jwt_middleware_1.jwtMiddleware, user_controller_1.findInformationController);
//# sourceMappingURL=user.router.js.map