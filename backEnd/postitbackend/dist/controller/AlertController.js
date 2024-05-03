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
exports.AlertController = void 0;
const common_1 = require("@nestjs/common");
const response_1 = require("../config/response");
const Alert_1 = require("../model/Alert");
const AlertService_1 = require("../service/AlertService");
const MessageUtils_1 = require("../utils/MessageUtils");
let AlertController = class AlertController {
    constructor(alertService) {
        this.alertService = alertService;
    }
    async getAlertById(id) {
        return (0, response_1.responseApi)(await this.alertService.getAlertById(id), MessageUtils_1.DATA_GET_COMPLETE);
    }
    async getAlertByUserId(id) {
        return (0, response_1.responseApi)(await this.alertService.getAlertByUserId(id), MessageUtils_1.DATA_GET_COMPLETE);
    }
    async getAlertByPostId(id) {
        return (0, response_1.responseApi)(await this.alertService.getAlertByPostId(id), MessageUtils_1.DATA_GET_COMPLETE);
    }
    async addNewAlert(alertData, auth) {
        return (0, response_1.responseApi)([], await this.alertService.addNewAlert(alertData, auth));
    }
    async updateCurrentAlert(id, alertData, auth) {
        return (0, response_1.responseApi)([], await this.alertService.updateAlert(alertData, id, auth));
    }
    async deleteAlert(id, auth) {
        return (0, response_1.responseApi)([], await this.alertService.removeAlert(id, auth));
    }
};
exports.AlertController = AlertController;
__decorate([
    (0, common_1.Get)('/get-alert/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AlertController.prototype, "getAlertById", null);
__decorate([
    (0, common_1.Get)('/get-alert-user/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AlertController.prototype, "getAlertByUserId", null);
__decorate([
    (0, common_1.Get)('/get-alert-post/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AlertController.prototype, "getAlertByPostId", null);
__decorate([
    (0, common_1.Post)('/add-alert'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Headers)('Authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Alert_1.Alert, String]),
    __metadata("design:returntype", Promise)
], AlertController.prototype, "addNewAlert", null);
__decorate([
    (0, common_1.Put)('/update-alert/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Headers)('Authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Alert_1.Alert, String]),
    __metadata("design:returntype", Promise)
], AlertController.prototype, "updateCurrentAlert", null);
__decorate([
    (0, common_1.Get)('/delete-alert/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Headers)('Authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], AlertController.prototype, "deleteAlert", null);
exports.AlertController = AlertController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [AlertService_1.AlertService])
], AlertController);
//# sourceMappingURL=AlertController.js.map