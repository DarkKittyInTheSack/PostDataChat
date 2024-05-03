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
exports.RoleController = void 0;
const common_1 = require("@nestjs/common");
const response_1 = require("../config/response");
const Role_1 = require("../model/Role");
const RoleService_1 = require("../service/RoleService");
const MessageUtils_1 = require("../utils/MessageUtils");
let RoleController = class RoleController {
    constructor(roleService) {
        this.roleService = roleService;
    }
    async getAllRole() {
        return (0, response_1.responseApi)(await this.roleService.getAllRole(), MessageUtils_1.DATA_GET_COMPLETE);
    }
    async getRoleById(id) {
        return (0, response_1.responseApi)(await this.roleService.getRoleById(id), MessageUtils_1.DATA_GET_COMPLETE);
    }
    async addNewRole(roleData, auth) {
        return (0, response_1.responseApi)([], await this.roleService.addNewRole(roleData, auth));
    }
    async updateRole(id, roleData, auth) {
        return (0, response_1.responseApi)([], await this.roleService.updateCurrentRole(roleData, id, auth));
    }
    async deleteRole(id, auth) {
        return (0, response_1.responseApi)([], await this.roleService.deleteRole(id, auth));
    }
};
exports.RoleController = RoleController;
__decorate([
    (0, common_1.Get)('/get-role-all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RoleController.prototype, "getAllRole", null);
__decorate([
    (0, common_1.Get)('/get-role/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RoleController.prototype, "getRoleById", null);
__decorate([
    (0, common_1.Post)('/add-role'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Headers)('Authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Role_1.Role, String]),
    __metadata("design:returntype", Promise)
], RoleController.prototype, "addNewRole", null);
__decorate([
    (0, common_1.Put)('/update-role/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Headers)('Authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Role_1.Role, String]),
    __metadata("design:returntype", Promise)
], RoleController.prototype, "updateRole", null);
__decorate([
    (0, common_1.Delete)('/delete-role/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Headers)('Authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], RoleController.prototype, "deleteRole", null);
exports.RoleController = RoleController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [RoleService_1.RoleService])
], RoleController);
//# sourceMappingURL=RoleController.js.map