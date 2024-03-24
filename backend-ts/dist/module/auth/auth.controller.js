"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.refreshController = exports.signInController = void 0;
const base_response_1 = require("../../core/base.response");
const jwt_config_1 = require("../../helper/jwt.config");
const data_source_1 = require("../../data-source");
const sign_in_response_dto_1 = require("./dto/sign-in-response.dto");
const account_entity_1 = require("./entities/account.entity");
const sign_in_request_dto_1 = require("./dto/sign-in-request.dto");
const validation_1 = require("../../helper/validation");
const refresh_token_request_dto_1 = require("./dto/refresh-token-request.dto");
const user_entity_1 = require("../user/entities/user.entity");
const bcrypt = require("bcrypt");
const jwt_type_1 = require("../../helper/jwt.type");
const signInController = async (req, res, next) => {
    try {
        const reqBody = new sign_in_request_dto_1.SignInRequestDTO(await req.body);
        await (0, validation_1.reqBodyValidation)(reqBody);
        const account = await data_source_1.dataSource.getRepository(account_entity_1.Account).findOne({
            where: {
                identifierId: reqBody.identifierId,
                isActive: true,
            },
        });
        if (!account) {
            throw new Error('Invalid identifierId or password');
        }
        const isPasswordMatch = await bcrypt.compare(reqBody.password, account.password);
        if (!isPasswordMatch) {
            throw new Error('Invalid identifierId or password');
        }
        const user = await data_source_1.dataSource.getRepository(user_entity_1.User).findOne({
            where: {
                account: account,
                isActive: true,
            },
        });
        if (!user) {
            throw new Error('User not found');
        }
        const accessTokenPayload = (0, jwt_type_1.generateTokenPayload)(account, user, 'ACCESS_TOKEN');
        const accessToken = (0, jwt_config_1.accessTokenSign)(accessTokenPayload);
        const refreshTokenPayload = (0, jwt_type_1.generateTokenPayload)(account, user, 'REFRESH_TOKEN');
        const refreshToken = (0, jwt_config_1.refreshTokenSign)(refreshTokenPayload);
        const responseData = new sign_in_response_dto_1.SignInResponseDTO({
            accessToken,
            refreshToken,
            user,
        });
        const response = new base_response_1.BaseResponse({
            code: 200,
            data: responseData,
        });
        return res.status(200).json(response);
    }
    catch (error) {
        next(error);
    }
};
exports.signInController = signInController;
const refreshController = async (req, res, next) => {
    try {
        const reqBody = new refresh_token_request_dto_1.RefreshTokenRequestDTO(await req.body);
        await (0, validation_1.reqBodyValidation)(reqBody);
        const accessToken = (0, jwt_config_1.refreshJwt)(reqBody.refreshToken);
        const data = {
            accessToken,
        };
        const response = new base_response_1.BaseResponse({
            code: 200,
            data: data,
        });
        return res.status(200).json(response);
    }
    catch (error) {
        next(error);
    }
};
exports.refreshController = refreshController;
//# sourceMappingURL=auth.controller.js.map