"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountController = void 0;
const AccountService_1 = require("../service/AccountService");
const common_1 = require("@nestjs/common");
const Login_1 = require("../model/Login");
const Account_1 = require("../model/Account");
const ResetPassword_1 = require("../model/ResetPassword");
const response_1 = require("../config/response");
const MessageUtils_1 = require("../utils/MessageUtils");
let AccountController = class AccountController {
    constructor(accountService) {
        this.accountService = accountService;
    }
    getAccount(id) {
        this.accountService.getAccountById(id);
    }
    async getAccountAll() {
        return (0, response_1.responseApi)(await this.accountService.getAllData(), MessageUtils_1.DATA_GET_COMPLETE);
    }
    async loginAccount(loginData) {
        return (0, response_1.responseApi)(await this.accountService.login(loginData), MessageUtils_1.DATA_GET_COMPLETE);
    }
    async registerAccount(registerData) {
        return (0, response_1.responseApi)([], await this.accountService.register(registerData));
    }
    updateNewPassword(req, resetPasswordData, id, res) {
        this.accountService.resetPassword(resetPasswordData, id, res);
    }
    deleteAccount(id) {
    }
};
exports.AccountController = AccountController;
__decorate([
    (0, common_1.Get)('/get-account/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AccountController.prototype, "getAccount", null);
__decorate([
    (0, common_1.Get)('/get-account-all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AccountController.prototype, "getAccountAll", null);
__decorate([
    (0, common_1.Post)('/login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Login_1.Login]),
    __metadata("design:returntype", Promise)
], AccountController.prototype, "loginAccount", null);
__decorate([
    (0, common_1.Post)('/register'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Account_1.Account]),
    __metadata("design:returntype", Promise)
], AccountController.prototype, "registerAccount", null);
__decorate([
    (0, common_1.Put)('/change-password/:id'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Param)('id')),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request, ResetPassword_1.ResetPassword, String, Response]),
    __metadata("design:returntype", void 0)
], AccountController.prototype, "updateNewPassword", null);
__decorate([
    (0, common_1.Delete)('/delete-account/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AccountController.prototype, "deleteAccount", null);
exports.AccountController = AccountController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [AccountService_1.AccountService])
], AccountController);
//# sourceMappingURL=AccountController.js.map