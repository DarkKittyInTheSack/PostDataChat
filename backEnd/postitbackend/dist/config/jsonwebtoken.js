"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonwebtoken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.jsonwebtoken = {
    createJwtToken(data) {
        return jsonwebtoken_1.default.sign(data, 'SECRET-KEY', { algorithm: 'HS256', expiresIn: 86400 * 1 });
    },
    createRefreshToken(data) {
        return jsonwebtoken_1.default.sign(data, 'SECRET_REFRESH_KEY', { algorithm: 'HS256', expiresIn: 86400 * 7 });
    },
    checkToken(data) {
        jsonwebtoken_1.default.verify(data, 'SECRET_KEY', (err, decode) => err);
    },
    checkRefreshToken(data) {
        jsonwebtoken_1.default.verify(data, 'SECRET_KEY', (err, decode) => err);
    },
    decodeToken(data) {
        return jsonwebtoken_1.default.decode(data);
    },
};
//# sourceMappingURL=jsonwebtoken.js.map