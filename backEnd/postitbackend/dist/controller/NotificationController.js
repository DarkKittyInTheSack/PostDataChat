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
exports.NotificationController = void 0;
const common_1 = require("@nestjs/common");
const response_1 = require("../config/response");
const Notification_1 = require("../model/Notification");
const NotificationService_1 = require("../service/NotificationService");
const MessageUtils_1 = require("../utils/MessageUtils");
let NotificationController = class NotificationController {
    constructor(notificationService) {
        this.notificationService = notificationService;
    }
    async getNotificationById(id) {
        return (0, response_1.responseApi)(await this.notificationService.getNotification(id), MessageUtils_1.DATA_GET_COMPLETE);
    }
    async getNotificationByUserId(id) {
        return (0, response_1.responseApi)(await this.notificationService.getNotificationByUserId(id), MessageUtils_1.DATA_GET_COMPLETE);
    }
    async addNewInteract(notificationData, auth) {
        return (0, response_1.responseApi)([], await this.notificationService.addnewNotification(notificationData, auth));
    }
    async updateInteract(id, notificationData, auth) {
        return (0, response_1.responseApi)([], await this.notificationService.updateCurrentNotification(notificationData, id, auth));
    }
    async deleteInteract(id, auth) {
        return (0, response_1.responseApi)([], await this.notificationService.deleteNotification(id, auth));
    }
};
exports.NotificationController = NotificationController;
__decorate([
    (0, common_1.Get)('/get-notification/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NotificationController.prototype, "getNotificationById", null);
__decorate([
    (0, common_1.Get)('/get-notification-user/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NotificationController.prototype, "getNotificationByUserId", null);
__decorate([
    (0, common_1.Post)('/add-notification'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Headers)('Authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Notification_1.Notification, String]),
    __metadata("design:returntype", Promise)
], NotificationController.prototype, "addNewInteract", null);
__decorate([
    (0, common_1.Put)('/update-notification/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Headers)('Authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Notification_1.Notification, String]),
    __metadata("design:returntype", Promise)
], NotificationController.prototype, "updateInteract", null);
__decorate([
    (0, common_1.Delete)('/delete-notification/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Headers)('Authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], NotificationController.prototype, "deleteInteract", null);
exports.NotificationController = NotificationController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [NotificationService_1.NotificationService])
], NotificationController);
//# sourceMappingURL=NotificationController.js.map