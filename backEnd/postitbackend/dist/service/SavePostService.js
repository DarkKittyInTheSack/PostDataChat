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
exports.SavePostService = void 0;
const common_1 = require("@nestjs/common");
const PrismaService_1 = require("./PrismaService");
const MessageUtils_1 = require("../utils/MessageUtils");
const RandomId_1 = require("../utils/RandomId");
const jwt_1 = require("@nestjs/jwt");
let SavePostService = class SavePostService {
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
    async getSavePostById(id) {
        const savePost = await this.prisma.save_post.findFirst({
            where: {
                savePostId: id
            }
        });
        return savePost;
    }
    async addNewSavePost(savePostData, auth) {
        if (!this.checkJwtToken(auth)) {
            return MessageUtils_1.TOKEN_INVALID;
        }
        const savePostId = (0, RandomId_1.getRandomId)(10);
        const savePostDate = new Date();
        try {
            const newData = await this.prisma.save_post.create({
                data: {
                    savePostId: savePostId,
                    savePostDate: savePostDate,
                }
            });
            return MessageUtils_1.DATA_CREATED;
        }
        catch (error) {
            return MessageUtils_1.DATA_FAIL_TO_CREATE;
        }
    }
    async updateCurrentSavePost(savePostData, id, auth) {
        if (!this.checkJwtToken(auth)) {
            return MessageUtils_1.TOKEN_INVALID;
        }
        if (await this.getSavePostById(id) == null) {
            return MessageUtils_1.DATA_NOT_EXIST;
        }
        else {
            try {
                const savePostDate = new Date();
                const newData = await this.prisma.save_post.update({
                    where: {
                        savePostId: id
                    },
                    data: {
                        savePostDate: savePostDate,
                    }
                });
                return MessageUtils_1.DATA_UPDATED;
            }
            catch (error) {
                return MessageUtils_1.DATA_FAIL_TO_UPDATE;
            }
        }
    }
    async deleteSavePost(id, auth) {
        if (!this.checkJwtToken(auth)) {
            return MessageUtils_1.TOKEN_INVALID;
        }
        try {
            await this.prisma.save_post.delete({
                where: {
                    savePostId: id
                }
            });
            return MessageUtils_1.DATA_DELETED;
        }
        catch (error) {
            return MessageUtils_1.DATA_FAIL_TO_DELETE;
        }
    }
};
exports.SavePostService = SavePostService;
exports.SavePostService = SavePostService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [PrismaService_1.PrismaService, jwt_1.JwtService])
], SavePostService);
//# sourceMappingURL=SavePostService.js.map