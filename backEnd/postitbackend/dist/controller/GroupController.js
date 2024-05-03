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
exports.GroupController = void 0;
const common_1 = require("@nestjs/common");
const response_1 = require("../config/response");
const Group_1 = require("../model/Group");
const GroupService_1 = require("../service/GroupService");
const MessageUtils_1 = require("../utils/MessageUtils");
let GroupController = class GroupController {
    constructor(groupService) {
        this.groupService = groupService;
    }
    async getGroupById(id) {
        return (0, response_1.responseApi)(await this.groupService.getGroupById(id), MessageUtils_1.DATA_GET_COMPLETE);
    }
    async addNewGroup(groupData, auth) {
        return (0, response_1.responseApi)([], await this.groupService.addNewGroup(groupData, auth));
    }
    async updateCurrentGroup(id, groupData, auth) {
        return (0, response_1.responseApi)([], await this.groupService.editCurrentGroup(groupData, id, auth));
    }
    async deleteGroup(req, id, auth) {
        return (0, response_1.responseApi)([], await this.groupService.deleteGroup(id, auth));
    }
};
exports.GroupController = GroupController;
__decorate([
    (0, common_1.Get)('/get-group/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GroupController.prototype, "getGroupById", null);
__decorate([
    (0, common_1.Post)('/add-group'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Headers)('Authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Group_1.Group, String]),
    __metadata("design:returntype", Promise)
], GroupController.prototype, "addNewGroup", null);
__decorate([
    (0, common_1.Put)('/update-group/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Headers)('Authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Group_1.Group, String]),
    __metadata("design:returntype", Promise)
], GroupController.prototype, "updateCurrentGroup", null);
__decorate([
    (0, common_1.Delete)('/delete-group/:id'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Headers)('Authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request, String, String]),
    __metadata("design:returntype", Promise)
], GroupController.prototype, "deleteGroup", null);
exports.GroupController = GroupController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [GroupService_1.GroupService])
], GroupController);
//# sourceMappingURL=GroupController.js.map