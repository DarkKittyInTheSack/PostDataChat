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
exports.UserController = void 0;
const cache_manager_1 = require("@nestjs/cache-manager");
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const response_1 = require("../config/response");
const User_1 = require("../model/User");
const UserService_1 = require("../service/UserService");
const MessageUtils_1 = require("../utils/MessageUtils");
let imageUrl = '';
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    async getUserById(id) {
        await this.userService.getUserById(id);
    }
    async getUserAll() {
        return (0, response_1.responseApi)(await this.userService.getAllUser(), MessageUtils_1.DATA_GET_COMPLETE);
    }
    async getUserBySubscriptionId(id) {
        return (0, response_1.responseApi)(await this.userService.getUserBySubscriptionId(id), MessageUtils_1.DATA_GET_COMPLETE);
    }
    async getUserByAddressId(id) {
        return (0, response_1.responseApi)(await this.userService.getUserbyAddressId(id), MessageUtils_1.DATA_GET_COMPLETE);
    }
    async uploadAvatar(file) {
        imageUrl = await this.userService.uploadAvatar(file);
        return (0, response_1.responseApi)(imageUrl, MessageUtils_1.DATA_GET_COMPLETE);
    }
    async addUserInformation(userData, auth) {
        return (0, response_1.responseApi)([], await this.userService.addNewUser(userData, imageUrl, auth));
    }
    async updateCurrentUser(id, userData, auth) {
        return (0, response_1.responseApi)([], await this.userService.updateCurrentUser(userData, id, imageUrl, auth));
    }
    async deleteCurrentUser(id, auth) {
        return (0, response_1.responseApi)([], await this.userService.deleteUser(id, auth));
    }
};
exports.UserController = UserController;
__decorate([
    (0, common_1.Get)('/get-user/:id'),
    (0, cache_manager_1.CacheKey)('user_information'),
    (0, cache_manager_1.CacheTTL)(100),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUserById", null);
__decorate([
    (0, common_1.Get)('/get-user-all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUserAll", null);
__decorate([
    (0, common_1.Get)('/get-user-subscription/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUserBySubscriptionId", null);
__decorate([
    (0, common_1.Get)('/get-user-address/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUserByAddressId", null);
__decorate([
    (0, common_1.Post)('/upload-avatar'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "uploadAvatar", null);
__decorate([
    (0, common_1.Post)('/add-user'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Headers)('Authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [User_1.User, String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "addUserInformation", null);
__decorate([
    (0, common_1.Put)('/update-user/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Headers)('Authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, User_1.User, String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateCurrentUser", null);
__decorate([
    (0, common_1.Delete)('/delete-user/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Headers)('Authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "deleteCurrentUser", null);
exports.UserController = UserController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [UserService_1.UserService])
], UserController);
//# sourceMappingURL=UserController.js.map