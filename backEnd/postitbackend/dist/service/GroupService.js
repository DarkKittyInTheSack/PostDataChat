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
exports.GroupService = void 0;
const common_1 = require("@nestjs/common");
const PrismaService_1 = require("./PrismaService");
const MessageUtils_1 = require("../utils/MessageUtils");
const RandomId_1 = require("../utils/RandomId");
const jwt_1 = require("@nestjs/jwt");
let GroupService = class GroupService {
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
    checkInputGroupData(groupData, auth) {
        const { groupName, groupDescription } = groupData;
        if (groupName === '' || groupDescription === '') {
            return MessageUtils_1.REQUIRED_DATA;
        }
        if (this.getUserFromHeader(auth) == null || this.checkJwtToken(auth) == false) {
            return MessageUtils_1.TOKEN_INVALID;
        }
        return '';
    }
    async getGroupById(id) {
        const userGroup = await this.prisma.chat_group.findFirst({
            where: {
                groupId: id
            }
        });
        return userGroup;
    }
    async addNewGroup(groupData, auth) {
        if (this.checkInputGroupData(groupData, auth) != '') {
            return this.checkInputGroupData(groupData, auth);
        }
        const groupId = (0, RandomId_1.getRandomId)(10);
        try {
            const addData = await this.prisma.chat_group.create({
                data: {
                    groupId: groupId,
                    groupName: groupData.groupName,
                    groupDescription: groupData.groupDescription
                }
            });
            return MessageUtils_1.DATA_CREATED;
        }
        catch (error) {
            return MessageUtils_1.DATA_FAIL_TO_CREATE;
        }
    }
    async editCurrentGroup(groupData, id, auth) {
        if (this.checkInputGroupData(groupData, auth) != '') {
            return this.checkInputGroupData(groupData, auth);
        }
        if (await this.getGroupById(id) == null) {
            return MessageUtils_1.DATA_NOT_EXIST;
        }
        else {
            try {
                const updateData = await this.prisma.chat_group.update({
                    where: {
                        groupId: id
                    },
                    data: {
                        groupName: groupData.groupName,
                        groupDescription: groupData.groupDescription
                    }
                });
                return MessageUtils_1.DATA_UPDATED;
            }
            catch (error) {
                return MessageUtils_1.DATA_FAIL_TO_UPDATE;
            }
        }
    }
    async deleteGroup(id, auth) {
        if (!this.checkJwtToken(auth)) {
            return MessageUtils_1.TOKEN_INVALID;
        }
        try {
            await this.prisma.chat_group.delete({
                where: {
                    groupId: id
                }
            });
            return MessageUtils_1.DATA_DELETED;
        }
        catch (error) {
            return MessageUtils_1.DATA_FAIL_TO_DELETE;
        }
    }
};
exports.GroupService = GroupService;
exports.GroupService = GroupService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [PrismaService_1.PrismaService, jwt_1.JwtService])
], GroupService);
//# sourceMappingURL=GroupService.js.map