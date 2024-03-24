"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reqBodyValidation = void 0;
const class_validator_1 = require("class-validator");
async function reqBodyValidation(reqBody) {
    const errors = await (0, class_validator_1.validate)(reqBody);
    if (errors.length > 0) {
        throw new Error(errors[0].constraints[Object.keys(errors[0].constraints)[0]]);
    }
}
exports.reqBodyValidation = reqBodyValidation;
//# sourceMappingURL=validation.js.map