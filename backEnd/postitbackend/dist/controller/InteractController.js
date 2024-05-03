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
exports.InteractController = void 0;
const common_1 = require("@nestjs/common");
const response_1 = require("../config/response");
const Interact_1 = require("../model/Interact");
const InteractService_1 = require("../service/InteractService");
const MessageUtils_1 = require("../utils/MessageUtils");
let InteractController = class InteractController {
    constructor(interactService) {
        this.interactService = interactService;
    }
    async getInteractById(id) {
        return (0, response_1.responseApi)(await this.interactService.getInteract(id), MessageUtils_1.DATA_GET_COMPLETE);
    }
    async addNewInteract(interactData, auth) {
        return (0, response_1.responseApi)([], await this.interactService.addNewInteract(interactData, auth));
    }
    async updateInteract(id, interactData, auth) {
        return (0, response_1.responseApi)([], await this.interactService.updateCurrentInteract(interactData, id, auth));
    }
    async deleteInteract(req, id, auth) {
        return (0, response_1.responseApi)([], await this.interactService.deleteInteract(id, auth));
    }
};
exports.InteractController = InteractController;
__decorate([
    (0, common_1.Get)('/get-interact/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], InteractController.prototype, "getInteractById", null);
__decorate([
    (0, common_1.Post)('/add-interact'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Headers)('Authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Interact_1.Interact, String]),
    __metadata("design:returntype", Promise)
], InteractController.prototype, "addNewInteract", null);
__decorate([
    (0, common_1.Put)('/update-interact/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Headers)('Authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Interact_1.Interact, String]),
    __metadata("design:returntype", Promise)
], InteractController.prototype, "updateInteract", null);
__decorate([
    (0, common_1.Delete)('/delete-interact/:id'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Headers)('Authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request, String, String]),
    __metadata("design:returntype", Promise)
], InteractController.prototype, "deleteInteract", null);
exports.InteractController = InteractController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [InteractService_1.InteractService])
], InteractController);
//# sourceMappingURL=InteractController.js.map