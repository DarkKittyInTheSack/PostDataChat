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
exports.SaveAttachmentController = void 0;
const common_1 = require("@nestjs/common");
const response_1 = require("../config/response");
const SaveAttachment_1 = require("../model/SaveAttachment");
const SaveAttachmentService_1 = require("../service/SaveAttachmentService");
const MessageUtils_1 = require("../utils/MessageUtils");
let SaveAttachmentController = class SaveAttachmentController {
    constructor(saveAttachmentService) {
        this.saveAttachmentService = saveAttachmentService;
    }
    async getSaveAttachmentId(id) {
        return (0, response_1.responseApi)(await this.saveAttachmentService.getSaveAttachmentById(id), MessageUtils_1.DATA_GET_COMPLETE);
    }
    async addNewSaveAttachment(saveAttachmentData, auth) {
        return (0, response_1.responseApi)([], await this.saveAttachmentService.addNewSaveAttachment(saveAttachmentData, auth));
    }
    async updateSaveAttachment(id, saveAttachmentData, auth) {
        return (0, response_1.responseApi)([], await this.saveAttachmentService.updateCurrentSaveAttachment(saveAttachmentData, id, auth));
    }
    async deleteSaveAttachment(id, auth) {
        return (0, response_1.responseApi)([], await this.saveAttachmentService.deleteSaveAttachment(id, auth));
    }
};
exports.SaveAttachmentController = SaveAttachmentController;
__decorate([
    (0, common_1.Get)('/get-save-attachment/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SaveAttachmentController.prototype, "getSaveAttachmentId", null);
__decorate([
    (0, common_1.Post)('/add-save-attachment'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Headers)('Authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [SaveAttachment_1.SaveAttachment, String]),
    __metadata("design:returntype", Promise)
], SaveAttachmentController.prototype, "addNewSaveAttachment", null);
__decorate([
    (0, common_1.Put)('/update-save-attachment/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Headers)('Authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, SaveAttachment_1.SaveAttachment, String]),
    __metadata("design:returntype", Promise)
], SaveAttachmentController.prototype, "updateSaveAttachment", null);
__decorate([
    (0, common_1.Delete)('/delete-save-attachment/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Headers)('Authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], SaveAttachmentController.prototype, "deleteSaveAttachment", null);
exports.SaveAttachmentController = SaveAttachmentController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [SaveAttachmentService_1.SaveAttachmentService])
], SaveAttachmentController);
//# sourceMappingURL=SaveAttachmentController.js.map