"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.getToken = exports.refreshJwt = exports.refreshTokenSign = exports.accessTokenSign = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
require("dotenv/config");
const secretKey = process.env.JWT_SECRET_KEY;
const accessTokenExpiry = '1h';
const refreshTokenExpiry = '7d';
const algorithm = 'HS256';
function accessTokenSign(payload) {
    return (0, jsonwebtoken_1.sign)(payload, secretKey, {
        expiresIn: accessTokenExpiry,
        algorithm: algorithm,
    });
}
exports.accessTokenSign = accessTokenSign;
function refreshTokenSign(payload) {
    return (0, jsonwebtoken_1.sign)(payload, secretKey, {
        expiresIn: refreshTokenExpiry,
        algorithm: algorithm,
    });
}
exports.refreshTokenSign = refreshTokenSign;
function refreshJwt(refreshToken) {
    verifyToken(refreshToken);
    const jwtPayload = (0, jsonwebtoken_1.decode)(refreshToken);
    const payload = {
        sub: jwtPayload.sub,
        identifierId: jwtPayload.identifierId,
        role: jwtPayload.role,
        tokenType: 'ACCESS_TOKEN',
    };
    return (0, jsonwebtoken_1.sign)(payload, secretKey, {
        expiresIn: accessTokenExpiry,
        algorithm: algorithm,
    });
}
exports.refreshJwt = refreshJwt;
function getToken(req) {
    const authorizationHeader = req.headers.authorization;
    if (authorizationHeader && authorizationHeader.startsWith('Bearer ')) {
        return authorizationHeader.substring(7);
    }
    return null;
}
exports.getToken = getToken;
function verifyToken(token) {
    (0, jsonwebtoken_1.verify)(token, secretKey);
}
exports.verifyToken = verifyToken;
//# sourceMappingURL=jwt.config.js.map