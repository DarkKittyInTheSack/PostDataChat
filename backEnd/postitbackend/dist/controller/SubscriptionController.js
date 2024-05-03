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
exports.SubscriptionController = void 0;
const common_1 = require("@nestjs/common");
const response_1 = require("../config/response");
const Subscription_1 = require("../model/Subscription");
const SubscriptionService_1 = require("../service/SubscriptionService");
const MessageUtils_1 = require("../utils/MessageUtils");
let SubscriptionController = class SubscriptionController {
    constructor(subscriptionService) {
        this.subscriptionService = subscriptionService;
    }
    async getSubscriptionById(id) {
        return (0, response_1.responseApi)(await this.subscriptionService.getSubscriptionById(id), MessageUtils_1.DATA_GET_COMPLETE);
    }
    async addNewSubscription(subscriptionData, auth) {
        return (0, response_1.responseApi)([], await this.subscriptionService.addNewSubscription(subscriptionData, auth));
    }
    async updateSubscription(id, subscriptionData, auth) {
        return (0, response_1.responseApi)([], await this.subscriptionService.updateCurrentSubscription(subscriptionData, id, auth));
    }
    async deleteSubscription(id, auth) {
        return (0, response_1.responseApi)([], await this.subscriptionService.deleteSubscription(id, auth));
    }
};
exports.SubscriptionController = SubscriptionController;
__decorate([
    (0, common_1.Get)('/get-subscription/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SubscriptionController.prototype, "getSubscriptionById", null);
__decorate([
    (0, common_1.Post)('/add-subscription'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Headers)('Authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Subscription_1.Subscription, String]),
    __metadata("design:returntype", Promise)
], SubscriptionController.prototype, "addNewSubscription", null);
__decorate([
    (0, common_1.Put)('/update-subscription/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Headers)('Authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Subscription_1.Subscription, String]),
    __metadata("design:returntype", Promise)
], SubscriptionController.prototype, "updateSubscription", null);
__decorate([
    (0, common_1.Delete)('/delete-subscription/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Headers)('Authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], SubscriptionController.prototype, "deleteSubscription", null);
exports.SubscriptionController = SubscriptionController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [SubscriptionService_1.SubscriptionService])
], SubscriptionController);
//# sourceMappingURL=SubscriptionController.js.map