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
exports.BanController = void 0;
const common_1 = require("@nestjs/common");
const response_1 = require("../config/response");
const Ban_1 = require("../model/Ban");
const BanService_1 = require("../service/BanService");
const MessageUtils_1 = require("../utils/MessageUtils");
let BanController = class BanController {
    constructor(banService) {
        this.banService = banService;
    }
    async getBanById(id) {
        return (0, response_1.responseApi)(await this.banService.getBanById(id), MessageUtils_1.DATA_GET_COMPLETE);
    }
    async getBanByUserId(id) {
        return (0, response_1.responseApi)(await this.banService.getBanByUserId(id), MessageUtils_1.DATA_GET_COMPLETE);
    }
    async getBanByPostId(id) {
        return (0, response_1.responseApi)(await this.banService.getBanByPostId(id), MessageUtils_1.DATA_GET_COMPLETE);
    }
    async addNewBan(banData, auth) {
        return (0, response_1.responseApi)([], await this.banService.addNewBan(banData, auth));
    }
    async updateCurrentBan(id, banData, auth) {
        return (0, response_1.responseApi)([], await this.banService.updateBan(banData, id, auth));
    }
    async deleteBan(id, auth) {
        return (0, response_1.responseApi)([], await this.banService.deleteBan(id, auth));
    }
};
exports.BanController = BanController;
__decorate([
    (0, common_1.Get)('/get-ban/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BanController.prototype, "getBanById", null);
__decorate([
    (0, common_1.Get)('/get-ban-user/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BanController.prototype, "getBanByUserId", null);
__decorate([
    (0, common_1.Get)('/get-ban-post/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BanController.prototype, "getBanByPostId", null);
__decorate([
    (0, common_1.Post)('/add-ban'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Headers)('Authorizations')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Ban_1.Ban, String]),
    __metadata("design:returntype", Promise)
], BanController.prototype, "addNewBan", null);
__decorate([
    (0, common_1.Put)('/update-ban/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Headers)('Authorizations')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Ban_1.Ban, String]),
    __metadata("design:returntype", Promise)
], BanController.prototype, "updateCurrentBan", null);
__decorate([
    (0, common_1.Delete)('/delete-ban/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Headers)('Authorizations')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], BanController.prototype, "deleteBan", null);
exports.BanController = BanController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [BanService_1.BanService])
], BanController);
//# sourceMappingURL=BanController.js.map