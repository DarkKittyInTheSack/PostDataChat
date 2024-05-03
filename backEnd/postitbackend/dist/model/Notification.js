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
exports.Notification = void 0;
const class_validator_1 = require("class-validator");
class Notification {
    constructor(notificationId = '', notificationTitle = '', notificationContent = '', notificationDate = '') {
        this.notificationId = notificationId;
        this.notificationTitle = notificationTitle;
        this.notificationContent = notificationContent;
        this.notificationDate = notificationDate;
    }
    getNotificationId() {
        return this.notificationId;
    }
    getNotificationTitle() {
        return this.notificationTitle;
    }
    getnotificationContent() {
        return this.notificationContent;
    }
    getNotificationDate() {
        return this.notificationDate;
    }
    setNotificationId(notificationId) {
        this.notificationId = notificationId;
    }
    setNotificationTitle(notificationTitle) {
        this.notificationTitle = notificationTitle;
    }
    getNotificationContent(notificationContent) {
        this.notificationContent = notificationContent;
    }
    setNotificationDate(notificationDate) {
        this.notificationDate = notificationDate;
    }
}
exports.Notification = Notification;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], Notification.prototype, "notificationId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], Notification.prototype, "notificationTitle", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], Notification.prototype, "notificationContent", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], Notification.prototype, "notificationDate", void 0);
//# sourceMappingURL=Notification.js.map