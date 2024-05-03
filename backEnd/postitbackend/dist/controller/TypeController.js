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
exports.TypeController = void 0;
const common_1 = require("@nestjs/common");
const response_1 = require("../config/response");
const Type_1 = require("../model/Type");
const TypeService_1 = require("../service/TypeService");
const MessageUtils_1 = require("../utils/MessageUtils");
let TypeController = class TypeController {
    constructor(typeService) {
        this.typeService = typeService;
    }
    async getAllType() {
        return (0, response_1.responseApi)(await this.typeService.getAllType(), MessageUtils_1.DATA_GET_COMPLETE);
    }
    async getTypeById(id) {
        return (0, response_1.responseApi)(await this.typeService.getTypeById(id), MessageUtils_1.DATA_GET_COMPLETE);
    }
    async addNewType(typeData, auth) {
        return (0, response_1.responseApi)([], await this.typeService.addNewType(typeData, auth));
    }
    async updateType(id, typeData, auth) {
        return (0, response_1.responseApi)([], await this.typeService.updateCurrentType(typeData, id, auth));
    }
    async deleteType(id, auth) {
        return (0, response_1.responseApi)([], await this.typeService.deleteType(id, auth));
    }
};
exports.TypeController = TypeController;
__decorate([
    (0, common_1.Get)('/get-type-all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TypeController.prototype, "getAllType", null);
__decorate([
    (0, common_1.Get)('/get-type/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TypeController.prototype, "getTypeById", null);
__decorate([
    (0, common_1.Post)('/add-type'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Headers)('Authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Type_1.Type, String]),
    __metadata("design:returntype", Promise)
], TypeController.prototype, "addNewType", null);
__decorate([
    (0, common_1.Put)('/update-type/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Headers)('Authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Type_1.Type, String]),
    __metadata("design:returntype", Promise)
], TypeController.prototype, "updateType", null);
__decorate([
    (0, common_1.Delete)('/delete-type/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Headers)('Authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], TypeController.prototype, "deleteType", null);
exports.TypeController = TypeController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [TypeService_1.TypeService])
], TypeController);
//# sourceMappingURL=TypeController.js.map