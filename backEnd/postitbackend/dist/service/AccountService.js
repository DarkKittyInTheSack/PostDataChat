"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountService = void 0;
const common_1 = require("@nestjs/common");
const PrismaService_1 = require("./PrismaService");
const bcrypt = __importStar(require("bcrypt"));
const MessageUtils_1 = require("../utils/MessageUtils");
const RandomId_1 = require("../utils/RandomId");
const response_1 = require("../config/response");
const jwt_1 = require("@nestjs/jwt");
let AccountService = class AccountService {
    constructor(prisma, jwtService) {
        this.prisma = prisma;
        this.jwtService = jwtService;
    }
    checkJwtToken(jwtToken) {
        const checkToken = this.jwtService.verify(jwtToken);
        let isVerify = false;
        checkToken === null ? isVerify = true : isVerify = false;
        return isVerify;
    }
    getUserFromHeader(jwtToken) {
        return (this.jwtService.decode(jwtToken));
    }
    async getAllData() {
        const data = await this.prisma.account.findMany();
        return data;
    }
    async getDataByUsername(username) {
        const accountData = await this.prisma.account.findFirst({
            where: {
                username: username
            }
        });
        return accountData;
    }
    async getAccountById(id) {
        if (id == '') {
            return MessageUtils_1.REQUIRED_ID;
        }
        else {
            const accountData = await this.prisma.account.findFirst({
                where: {
                    accountId: id
                }
            });
            return (0, response_1.responseApi)(accountData, MessageUtils_1.DATA_GET_COMPLETE);
        }
    }
    checkInputAccountData(registerData) {
        const { passwords, username, roleId } = registerData;
        if (passwords === '' || username === '' || roleId === '') {
            return MessageUtils_1.REQUIRED_DATA;
        }
        if (this.getUserFromHeader('') == null || this.checkJwtToken('') == false) {
            return MessageUtils_1.TOKEN_INVALID;
        }
        return '';
    }
    async login(loginData) {
        if (loginData.username == '') {
            return MessageUtils_1.REQUIRED_DATA;
        }
        else {
            if (this.getDataByUsername(loginData.username) != null && loginData.passwords != '') {
                const currentAccount = await this.getDataByUsername(loginData.username);
                let tokenData = await this.jwtService.signAsync({ accountId: currentAccount.accountId, username: loginData.username });
                if (bcrypt.compareSync(loginData.passwords, currentAccount.passwords) && currentAccount != null) {
                    try {
                        await this.prisma.account.update({
                            where: {
                                accountId: currentAccount.accountId
                            },
                            data: {
                                refreshToken: tokenData
                            }
                        });
                        return { userToken: tokenData };
                    }
                    catch (error) {
                        return MessageUtils_1.CANNOT_LOGIN;
                    }
                }
            }
            else {
                return (0, response_1.responseApi)([], MessageUtils_1.LOGIN_FAIL);
            }
        }
    }
    async register(registerData) {
        const roleSelector = await this.prisma.role.findFirst({
            where: {
                roleName: 'User'
            }
        });
        if (await this.getDataByUsername(registerData.username) != null) {
            return MessageUtils_1.ACCOUNT_EXIST;
        }
        else {
            try {
                await this.prisma.account.create({
                    data: {
                        accountId: (0, RandomId_1.getRandomId)(10),
                        username: registerData.username,
                        passwords: bcrypt.hashSync(registerData.passwords, 10),
                        roleId: roleSelector.roleId,
                        refreshToken: ''
                    }
                });
                return MessageUtils_1.DATA_CREATED;
            }
            catch (error) {
                return MessageUtils_1.DATA_FAIL_TO_CREATE;
            }
        }
    }
    async resetPassword(resetPasswordData, id, res) {
        if (!resetPasswordData.password.includes(resetPasswordData.confirmPassword) || this.getAccountById(id) == null) {
            return MessageUtils_1.PASSWORD_NOT_MATCH;
        }
        else {
            try {
                await this.prisma.account.update({
                    where: {
                        accountId: id
                    },
                    data: {
                        passwords: resetPasswordData.password
                    }
                });
                return MessageUtils_1.DATA_UPDATED;
            }
            catch (error) {
                return MessageUtils_1.DATA_FAIL_TO_UPDATE;
            }
        }
    }
    resetLoginToken(token) {
    }
};
exports.AccountService = AccountService;
exports.AccountService = AccountService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [PrismaService_1.PrismaService, jwt_1.JwtService])
], AccountService);
//# sourceMappingURL=AccountService.js.map