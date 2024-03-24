"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findInformationController = void 0;
const jwt_config_1 = require("../../helper/jwt.config");
const data_source_1 = require("../../data-source");
const account_entity_1 = require("../auth/entities/account.entity");
const jsonwebtoken_1 = require("jsonwebtoken");
const user_entity_1 = require("./entities/user.entity");
const base_response_1 = require("../../core/base.response");
const findInformationController = async (req, res, next) => {
    try {
        const accessToken = (0, jwt_config_1.getToken)(req);
        const accountId = (0, jsonwebtoken_1.decode)(accessToken).sub;
        const account = await data_source_1.dataSource.getRepository(account_entity_1.Account).findOne({
            where: {
                id: accountId,
                isActive: true,
            },
        });
        if (!account) {
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
        const response = new base_response_1.BaseResponse({
            code: 200,
            data: user,
        });
        return res.status(200).json(response);
    }
    catch (error) {
        next(error);
    }
};
exports.findInformationController = findInformationController;
//# sourceMappingURL=user.controller.js.map