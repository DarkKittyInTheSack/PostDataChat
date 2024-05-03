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
exports.BanService = void 0;
const common_1 = require("@nestjs/common");
const PrismaService_1 = require("./PrismaService");
const MessageUtils_1 = require("../utils/MessageUtils");
const RandomId_1 = require("../utils/RandomId");
const jwt_1 = require("@nestjs/jwt");
let BanService = class BanService {
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
    checkInputBanData(banData, auth) {
        const { banTitle, banDescription } = banData;
        if (banTitle == '' || banDescription == '') {
            return MessageUtils_1.REQUIRED_DATA;
        }
        if (this.getUserFromHeader(auth) == null || this.checkJwtToken(auth) == false) {
            return MessageUtils_1.TOKEN_INVALID;
        }
        return '';
    }
    async getBanByUserId(userId) {
        const userBanData = await this.prisma.user_ban.findFirst({
            where: {
                userId: userId
            }
        });
        return userBanData;
    }
    async getBanByPostId(postId) {
        const postBanData = await this.prisma.post_ban.findFirst({
            where: {
                postId: postId
            }
        });
        return postBanData;
    }
    async getBanById(id) {
        const banData = await this.prisma.ban.findFirst({
            where: {
                banId: id
            }
        });
        return banData;
    }
    async addNewBan(banData, auth) {
        if (this.checkInputBanData(banData, auth) != '') {
            return this.checkInputBanData(banData, auth);
        }
        const banId = (0, RandomId_1.getRandomId)(10);
        const banDate = new Date();
        try {
            const addData = await this.prisma.ban.create({
                data: {
                    banId: banId,
                    banTitle: banData.banTitle,
                    banDescription: banData.banDescription,
                    banDate: banDate,
                }
            });
            return MessageUtils_1.DATA_CREATED;
        }
        catch (error) {
            return MessageUtils_1.DATA_FAIL_TO_CREATE;
        }
    }
    async updateBan(banData, id, auth) {
        if (this.checkInputBanData(banData, auth) != '') {
            return this.checkInputBanData(banData, auth);
        }
        if (await this.getBanById(id) == null) {
            return MessageUtils_1.DATA_NOT_EXIST;
        }
        else {
            const banDate = new Date();
            const updateData = await this.prisma.ban.update({
                where: {
                    banId: id
                },
                data: {
                    banTitle: banData.banTitle,
                    banDescription: banData.banDescription,
                    banDate: banDate,
                }
            });
            try {
                return MessageUtils_1.DATA_UPDATED;
            }
            catch (error) {
                return MessageUtils_1.DATA_FAIL_TO_UPDATE;
            }
        }
    }
    async deleteBan(id, auth) {
        if (!this.checkJwtToken(auth)) {
            return MessageUtils_1.TOKEN_INVALID;
        }
        try {
            await this.prisma.ban.delete({
                where: {
                    banId: id
                }
            });
            return MessageUtils_1.DATA_DELETED;
        }
        catch (error) {
            return MessageUtils_1.DATA_FAIL_TO_DELETE;
        }
    }
};
exports.BanService = BanService;
exports.BanService = BanService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [PrismaService_1.PrismaService, jwt_1.JwtService])
], BanService);
//# sourceMappingURL=BanService.js.map