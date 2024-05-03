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
exports.AwardService = void 0;
const common_1 = require("@nestjs/common");
const PrismaService_1 = require("./PrismaService");
const MessageUtils_1 = require("../utils/MessageUtils");
const RandomId_1 = require("../utils/RandomId");
const jwt_1 = require("@nestjs/jwt");
let AwardService = class AwardService {
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
    checkInputAwardData(awardData, auth) {
        const { awardName } = awardData;
        if (awardName == '') {
            return MessageUtils_1.REQUIRED_DATA;
        }
        if (this.getUserFromHeader(auth) == null || this.checkJwtToken(auth) == false) {
            return MessageUtils_1.TOKEN_INVALID;
        }
        return '';
    }
    async getAwardByUserId(userId) {
        const awardUser = await this.prisma.user_award.findMany({
            where: {
                userId: userId
            }
        });
        return awardUser;
    }
    async getAwardByPostId(postId) {
        const awardPost = await this.prisma.post_award.findMany({
            where: {
                postId: postId
            }
        });
        return awardPost;
    }
    async getAwardById(id) {
        const awardData = await this.prisma.award.findFirst({
            where: {
                awardId: id
            }
        });
        return awardData;
    }
    async addNewAward(awardData, auth) {
        if (this.checkInputAwardData(awardData, auth) != '') {
            return this.checkInputAwardData(awardData, auth);
        }
        const awardId = (0, RandomId_1.getRandomId)(10);
        try {
            const awardAdd = await this.prisma.award.create({
                data: {
                    awardId: awardId,
                    awardName: awardData.awardName
                }
            });
            return MessageUtils_1.DATA_CREATED;
        }
        catch (error) {
            return MessageUtils_1.DATA_FAIL_TO_CREATE;
        }
    }
    async updateAward(awardData, id, auth) {
        if (this.checkInputAwardData(awardData, auth) != '') {
            return this.checkInputAwardData(awardData, auth);
        }
        if (this.getAwardById(id) == null) {
            return MessageUtils_1.DATA_NOT_EXIST;
        }
        else {
            try {
                await this.prisma.award.update({
                    where: {
                        awardId: id
                    },
                    data: {
                        awardName: awardData.awardName
                    }
                });
                return MessageUtils_1.DATA_UPDATED;
            }
            catch (error) {
                return MessageUtils_1.DATA_FAIL_TO_UPDATE;
            }
        }
    }
    async deleteAward(id, auth) {
        if (!this.checkJwtToken(auth)) {
            return MessageUtils_1.TOKEN_INVALID;
        }
        try {
            await this.prisma.award.delete({
                where: {
                    awardId: id
                }
            });
            return MessageUtils_1.DATA_DELETED;
        }
        catch (error) {
            return MessageUtils_1.DATA_FAIL_TO_DELETE;
        }
    }
};
exports.AwardService = AwardService;
exports.AwardService = AwardService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [PrismaService_1.PrismaService, jwt_1.JwtService])
], AwardService);
//# sourceMappingURL=AwardService.js.map