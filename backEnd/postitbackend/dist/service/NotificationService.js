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
exports.NotificationService = void 0;
const common_1 = require("@nestjs/common");
const PrismaService_1 = require("./PrismaService");
const MessageUtils_1 = require("../utils/MessageUtils");
const RandomId_1 = require("../utils/RandomId");
const jwt_1 = require("@nestjs/jwt");
let NotificationService = class NotificationService {
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
    checkInputNotificationData(notificationData, auth) {
        const { notificationTitle, notificationContent } = notificationData;
        if (notificationTitle == '' || notificationContent == '') {
            return MessageUtils_1.REQUIRED_DATA;
        }
        if (this.getUserFromHeader(auth) == null || this.checkJwtToken(auth) == false) {
            return MessageUtils_1.TOKEN_INVALID;
        }
        return '';
    }
    async getNotificationByUserId(userId) {
        const notificationUser = await this.prisma.user_notification.findMany({
            where: {
                userId: userId
            }
        });
        return notificationUser;
    }
    async getNotification(id) {
        const notificationUser = await this.prisma.notification.findFirst({
            where: {
                notificationId: id
            }
        });
        return notificationUser;
    }
    async addnewNotification(notificationData, auth) {
        if (this.checkInputNotificationData(notificationData, auth) != '') {
            return this.checkInputNotificationData(notificationData, auth);
        }
        const notificationId = (0, RandomId_1.getRandomId)(10);
        const notificationDate = new Date();
        try {
            const addNewNotification = await this.prisma.notification.create({
                data: {
                    notificationId: notificationId,
                    notificationTitle: notificationData.notificationTitle,
                    notificationContent: notificationData.notificationContent,
                    notificationDate: notificationDate
                }
            });
            return MessageUtils_1.DATA_CREATED;
        }
        catch (error) {
            return MessageUtils_1.DATA_FAIL_TO_CREATE;
        }
    }
    async updateCurrentNotification(notificationData, id, auth) {
        if (this.checkInputNotificationData(notificationData, auth) != '') {
            return this.checkInputNotificationData(notificationData, auth);
        }
        if (await this.getNotification(id) == null) {
            return MessageUtils_1.DATA_NOT_EXIST;
        }
        else {
            try {
                const notificationDate = new Date();
                const updateNotification = await this.prisma.notification.update({
                    where: {
                        notificationId: id
                    },
                    data: {
                        notificationTitle: notificationData.notificationTitle,
                        notificationContent: notificationData.notificationContent,
                        notificationDate: notificationDate
                    }
                });
                return MessageUtils_1.DATA_UPDATED;
            }
            catch (error) {
                return MessageUtils_1.DATA_FAIL_TO_UPDATE;
            }
        }
    }
    async deleteNotification(id, auth) {
        if (!this.checkJwtToken(auth)) {
            return MessageUtils_1.TOKEN_INVALID;
        }
        try {
            await this.prisma.notification.delete({
                where: {
                    notificationId: id
                }
            });
            return MessageUtils_1.DATA_DELETED;
        }
        catch (error) {
            return MessageUtils_1.DATA_FAIL_TO_DELETE;
        }
    }
};
exports.NotificationService = NotificationService;
exports.NotificationService = NotificationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [PrismaService_1.PrismaService, jwt_1.JwtService])
], NotificationService);
//# sourceMappingURL=NotificationService.js.map