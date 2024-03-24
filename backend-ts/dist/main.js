"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth_router_1 = require("./module/auth/auth.router");
const express = require("express");
const error_handler_middleware_1 = require("./middleware/error-handler.middleware");
const user_router_1 = require("./module/user/user.router");
require("dotenv/config");
const app = express();
app.use(express.json());
app.use('/auth', auth_router_1.authRouter);
app.use('/user', user_router_1.userRouter);
app.use(error_handler_middleware_1.errorHandlerMiddleware);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
//# sourceMappingURL=main.js.map