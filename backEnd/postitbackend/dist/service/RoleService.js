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
exports.RoleService = void 0;
const common_1 = require("@nestjs/common");
const PrismaService_1 = require("./PrismaService");
const MessageUtils_1 = require("../utils/MessageUtils");
const RandomId_1 = require("../utils/RandomId");
const jwt_1 = require("@nestjs/jwt");
let RoleService = class RoleService {
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
    async getAllRole() {
        return await this.prisma.role.findMany();
    }
    async getRoleById(id) {
        const role = await this.prisma.role.findFirst({
            where: {
                roleId: id
            }
        });
        return role;
    }
    async addNewRole(roleData, auth) {
        if (!this.checkJwtToken(auth)) {
            return MessageUtils_1.TOKEN_INVALID;
        }
        const roleId = (0, RandomId_1.getRandomId)(10);
        try {
            const roleAdd = await this.prisma.role.create({
                data: {
                    roleId: roleId,
                    roleName: roleData.roleName
                }
            });
            return MessageUtils_1.DATA_CREATED;
        }
        catch (error) {
            return MessageUtils_1.DATA_FAIL_TO_CREATE;
        }
    }
    async updateCurrentRole(roleData, id, auth) {
        if (!this.checkJwtToken(auth)) {
            return MessageUtils_1.TOKEN_INVALID;
        }
        if (this.getRoleById(id) == null) {
            return MessageUtils_1.DATA_NOT_EXIST;
        }
        else {
            try {
                const roleAdd = await this.prisma.role.update({
                    where: {
                        roleId: id
                    },
                    data: {
                        roleName: roleData.roleName
                    }
                });
                return MessageUtils_1.DATA_UPDATED;
            }
            catch (error) {
                return MessageUtils_1.DATA_FAIL_TO_UPDATE;
            }
        }
    }
    async deleteRole(id, auth) {
        if (!this.checkJwtToken(auth)) {
            return MessageUtils_1.TOKEN_INVALID;
        }
        try {
            await this.prisma.role.delete({
                where: {
                    roleId: id
                }
            });
            return MessageUtils_1.DATA_DELETED;
        }
        catch (error) {
            return MessageUtils_1.DATA_FAIL_TO_DELETE;
        }
    }
};
exports.RoleService = RoleService;
exports.RoleService = RoleService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [PrismaService_1.PrismaService, jwt_1.JwtService])
], RoleService);
//# sourceMappingURL=RoleService.js.map