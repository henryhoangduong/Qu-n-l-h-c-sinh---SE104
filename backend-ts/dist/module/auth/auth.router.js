"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const express_1 = require("express");
const auth_controller_1 = require("./auth.controller");
exports.authRouter = (0, express_1.Router)();
exports.authRouter.post('/sign-in', auth_controller_1.signInController);
exports.authRouter.post('/refresh', auth_controller_1.refreshController);
//# sourceMappingURL=auth.router.js.map