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
exports.SavePostController = void 0;
const common_1 = require("@nestjs/common");
const response_1 = require("../config/response");
const SavePost_1 = require("../model/SavePost");
const SavePostService_1 = require("../service/SavePostService");
const MessageUtils_1 = require("../utils/MessageUtils");
let SavePostController = class SavePostController {
    constructor(savePostService) {
        this.savePostService = savePostService;
    }
    async getSavePostById(id) {
        return (0, response_1.responseApi)(await this.savePostService.getSavePostById(id), MessageUtils_1.DATA_GET_COMPLETE);
    }
    async addNewSavePost(savePostData, auth) {
        return (0, response_1.responseApi)([], await this.savePostService.addNewSavePost(savePostData, auth));
    }
    async updateSavePost(id, savePostData, auth) {
        return (0, response_1.responseApi)([], await this.savePostService.updateCurrentSavePost(savePostData, id, auth));
    }
    async deleteSavePost(id, auth) {
        return (0, response_1.responseApi)([], await this.savePostService.deleteSavePost(id, auth));
    }
};
exports.SavePostController = SavePostController;
__decorate([
    (0, common_1.Get)('/get-save-post/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SavePostController.prototype, "getSavePostById", null);
__decorate([
    (0, common_1.Post)('/add-save-post'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Headers)('Authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [SavePost_1.SavePost, String]),
    __metadata("design:returntype", Promise)
], SavePostController.prototype, "addNewSavePost", null);
__decorate([
    (0, common_1.Put)('/update-save-post/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Headers)('Authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, SavePost_1.SavePost, String]),
    __metadata("design:returntype", Promise)
], SavePostController.prototype, "updateSavePost", null);
__decorate([
    (0, common_1.Delete)('/delete-save-post/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Headers)('Authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], SavePostController.prototype, "deleteSavePost", null);
exports.SavePostController = SavePostController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [SavePostService_1.SavePostService])
], SavePostController);
//# sourceMappingURL=SavePostController.js.map