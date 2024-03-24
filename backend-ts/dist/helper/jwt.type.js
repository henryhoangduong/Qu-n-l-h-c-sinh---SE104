"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateTokenPayload = void 0;
const generateTokenPayload = (account, user, tokenType) => ({
    sub: account.id,
    identifierId: account.identifierId,
    role: user.role,
    tokenType,
});
exports.generateTokenPayload = generateTokenPayload;
//# sourceMappingURL=jwt.type.js.map