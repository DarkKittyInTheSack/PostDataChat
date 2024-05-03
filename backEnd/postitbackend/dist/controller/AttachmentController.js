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
exports.AttachmentController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const response_1 = require("../config/response");
const AttachmentService_1 = require("../service/AttachmentService");
const MessageUtils_1 = require("../utils/MessageUtils");
let imageUrl = '';
let AttachmentController = class AttachmentController {
    constructor(attachmentService) {
        this.attachmentService = attachmentService;
    }
    async getAttachmentById(id) {
        return (0, response_1.responseApi)(await this.attachmentService.getAttachmentById(id), MessageUtils_1.DATA_GET_COMPLETE);
    }
    async addAttachment(file, auth) {
        imageUrl = await this.attachmentService.uploadImageAttachment(file);
        return (0, response_1.responseApi)([], await this.attachmentService.addNewAttachment(imageUrl, auth));
    }
    async updateCurrentAtachment(id, file, auth) {
        imageUrl = await this.attachmentService.uploadImageAttachment(file);
        return (0, response_1.responseApi)([], await this.attachmentService.editCurrentAttachment(id, imageUrl, auth));
    }
    async deleteAttachment(id, auth) {
        return (0, response_1.responseApi)([], await this.attachmentService.deleteAttachment(id, auth));
    }
};
exports.AttachmentController = AttachmentController;
__decorate([
    (0, common_1.Get)('/get-attachment/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AttachmentController.prototype, "getAttachmentById", null);
__decorate([
    (0, common_1.Post)('/add-attachment'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Headers)('Authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], AttachmentController.prototype, "addAttachment", null);
__decorate([
    (0, common_1.Put)('/update-attachment/:id'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.UploadedFile)()),
    __param(2, (0, common_1.Headers)('Authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, String]),
    __metadata("design:returntype", Promise)
], AttachmentController.prototype, "updateCurrentAtachment", null);
__decorate([
    (0, common_1.Delete)('/delete-attachment/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Headers)('Authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], AttachmentController.prototype, "deleteAttachment", null);
exports.AttachmentController = AttachmentController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [AttachmentService_1.AttachmentService])
], AttachmentController);
//# sourceMappingURL=AttachmentController.js.map