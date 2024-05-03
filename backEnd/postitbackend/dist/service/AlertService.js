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
exports.AlertService = void 0;
const common_1 = require("@nestjs/common");
const PrismaService_1 = require("./PrismaService");
const MessageUtils_1 = require("../utils/MessageUtils");
const RandomId_1 = require("../utils/RandomId");
const jwt_1 = require("@nestjs/jwt");
let AlertService = class AlertService {
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
    checkInputAlertData(alertData, auth) {
        const { alertDescription, alertTitle } = alertData;
        if (alertDescription == '' || alertTitle == '') {
            return MessageUtils_1.REQUIRED_DATA;
        }
        if (this.getUserFromHeader(auth) == null || this.checkJwtToken(auth) == false) {
            return MessageUtils_1.TOKEN_INVALID;
        }
        return '';
    }
    async getAlertByUserId(userId) {
        const alertUser = await this.prisma.user_alert.findMany({
            where: {
                userId: userId,
            }
        });
        return alertUser;
    }
    async getAlertByPostId(postId) {
        const alertPost = await this.prisma.post_alert.findMany({
            where: {
                postId: postId,
            }
        });
        return alertPost;
    }
    async getAlertById(id) {
        const alert = await this.prisma.alert.findFirst({
            where: {
                alertId: id,
            }
        });
        return alert;
    }
    async addNewAlert(alertData, auth) {
        if (this.checkInputAlertData(alertData, auth) != '') {
            return this.checkInputAlertData(alertData, auth);
        }
        const alertId = (0, RandomId_1.getRandomId)(10);
        const alertDate = new Date();
        try {
            await this.prisma.alert.create({
                data: {
                    alertId: alertId,
                    alertTitle: alertData.alertTitle,
                    alertDescription: alertData.alertDescription,
                    alertDate: alertDate
                }
            });
            return MessageUtils_1.DATA_CREATED;
        }
        catch (error) {
            return MessageUtils_1.DATA_FAIL_TO_CREATE;
        }
    }
    async updateAlert(alertData, id, auth) {
        if (this.checkInputAlertData(alertData, auth) != '') {
            return this.checkInputAlertData(alertData, auth);
        }
        if (await this.getAlertById(id) == null) {
            return MessageUtils_1.DATA_NOT_EXIST;
        }
        else {
            const alertDate = new Date();
            try {
                await this.prisma.alert.update({
                    where: {
                        alertId: id
                    },
                    data: {
                        alertTitle: alertData.alertTitle,
                        alertDescription: alertData.alertDescription,
                        alertDate: alertDate
                    }
                });
                return MessageUtils_1.DATA_UPDATED;
            }
            catch (error) {
                return MessageUtils_1.DATA_FAIL_TO_UPDATE;
            }
        }
    }
    async removeAlert(id, auth) {
        if (!this.checkJwtToken(auth)) {
            return MessageUtils_1.TOKEN_INVALID;
        }
        try {
            await this.prisma.alert.delete({
                where: {
                    alertId: id
                }
            });
            return MessageUtils_1.DATA_DELETED;
        }
        catch (error) {
            return MessageUtils_1.DATA_FAIL_TO_DELETE;
        }
    }
};
exports.AlertService = AlertService;
exports.AlertService = AlertService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [PrismaService_1.PrismaService, jwt_1.JwtService])
], AlertService);
//# sourceMappingURL=AlertService.js.map