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
exports.AwardController = void 0;
const common_1 = require("@nestjs/common");
const response_1 = require("../config/response");
const Award_1 = require("../model/Award");
const AwardService_1 = require("../service/AwardService");
const MessageUtils_1 = require("../utils/MessageUtils");
let AwardController = class AwardController {
    constructor(awardService) {
        this.awardService = awardService;
    }
    async getAwardById(id) {
        return (0, response_1.responseApi)(await this.awardService.getAwardById(id), MessageUtils_1.DATA_GET_COMPLETE);
    }
    async getAwardByUserId(id) {
        return (0, response_1.responseApi)(await this.awardService.getAwardByUserId(id), MessageUtils_1.DATA_GET_COMPLETE);
    }
    async getAwardByPostId(id) {
        return (0, response_1.responseApi)(await this.awardService.getAwardByPostId(id), MessageUtils_1.DATA_GET_COMPLETE);
    }
    async addAward(awardData, auth) {
        return (0, response_1.responseApi)([], await this.awardService.addNewAward(awardData, auth));
    }
    async updateAward(id, awardData, auth) {
        return (0, response_1.responseApi)([], await this.awardService.updateAward(awardData, id, auth));
    }
    async deleteAward(id, auth) {
        return (0, response_1.responseApi)([], await this.awardService.deleteAward(id, auth));
    }
};
exports.AwardController = AwardController;
__decorate([
    (0, common_1.Get)('/get-award/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AwardController.prototype, "getAwardById", null);
__decorate([
    (0, common_1.Get)('/get-award-user/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AwardController.prototype, "getAwardByUserId", null);
__decorate([
    (0, common_1.Get)('/get-award-post/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AwardController.prototype, "getAwardByPostId", null);
__decorate([
    (0, common_1.Post)('/add-award'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Headers)('Authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Award_1.Award, String]),
    __metadata("design:returntype", Promise)
], AwardController.prototype, "addAward", null);
__decorate([
    (0, common_1.Put)('/update-award/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Headers)('Authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Award_1.Award, String]),
    __metadata("design:returntype", Promise)
], AwardController.prototype, "updateAward", null);
__decorate([
    (0, common_1.Delete)('/delete-award/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Headers)('Authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], AwardController.prototype, "deleteAward", null);
exports.AwardController = AwardController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [AwardService_1.AwardService])
], AwardController);
//# sourceMappingURL=AwardController.js.map