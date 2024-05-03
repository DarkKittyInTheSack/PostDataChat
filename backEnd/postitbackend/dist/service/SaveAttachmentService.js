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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveAttachmentService = void 0;
const common_1 = require("@nestjs/common");
const PrismaService_1 = require("./PrismaService");
const MessageUtils_1 = require("../utils/MessageUtils");
const RandomId_1 = require("../utils/RandomId");
const jwt_1 = require("@nestjs/jwt");
let SaveAttachmentService = class SaveAttachmentService {
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
    async getSaveAttachmentById(id) {
        const saveAttachment = await this.prisma.save_attachment.findFirst({
            where: {
                saveAttachmentId: id
            }
        });
        return saveAttachment;
    }
    async addNewSaveAttachment(saveAttachmentData, auth) {
        if (!this.checkJwtToken(auth)) {
            return MessageUtils_1.TOKEN_INVALID;
        }
        const saveAttachmentId = (0, RandomId_1.getRandomId)(10);
        const saveAtachmentDate = new Date();
        try {
            const addData = await this.prisma.save_attachment.create({
                data: {
                    saveAttachmentId: saveAttachmentId,
                    saveAttachmentDate: saveAtachmentDate,
                    attachmentId: saveAttachmentData.attachmentId
                }
            });
            return MessageUtils_1.DATA_CREATED;
        }
        catch (error) {
            return MessageUtils_1.DATA_FAIL_TO_CREATE;
        }
    }
    async updateCurrentSaveAttachment(saveAttachmentData, id, auth) {
        if (!this.checkJwtToken(auth)) {
            return MessageUtils_1.TOKEN_INVALID;
        }
        if (await this.getSaveAttachmentById(id) == null) {
            return MessageUtils_1.DATA_NOT_EXIST;
        }
        else {
            try {
                const saveAtachmentDate = new Date();
                const addData = await this.prisma.save_attachment.update({
                    where: {
                        saveAttachmentId: id
                    },
                    data: {
                        saveAttachmentDate: saveAtachmentDate,
                        attachmentId: saveAttachmentData.attachmentId
                    }
                });
                return MessageUtils_1.DATA_UPDATED;
            }
            catch (error) {
                return MessageUtils_1.DATA_FAIL_TO_UPDATE;
            }
        }
    }
    async deleteSaveAttachment(id, auth) {
        if (!this.checkJwtToken(auth)) {
            return MessageUtils_1.TOKEN_INVALID;
        }
        try {
            await this.prisma.save_attachment.delete({
                where: {
                    saveAttachmentId: id
                }
            });
            return MessageUtils_1.DATA_DELETED;
        }
        catch (error) {
            return MessageUtils_1.DATA_FAIL_TO_DELETE;
        }
    }
};
exports.SaveAttachmentService = SaveAttachmentService;
exports.SaveAttachmentService = SaveAttachmentService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [PrismaService_1.PrismaService, jwt_1.JwtService])
], SaveAttachmentService);
//# sourceMappingURL=SaveAttachmentService.js.map