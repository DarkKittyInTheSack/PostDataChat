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
exports.TypeService = void 0;
const common_1 = require("@nestjs/common");
const PrismaService_1 = require("./PrismaService");
const MessageUtils_1 = require("../utils/MessageUtils");
const RandomId_1 = require("../utils/RandomId");
const jwt_1 = require("@nestjs/jwt");
let TypeService = class TypeService {
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
    checkInputTypeData(typeData, auth) {
        const { typeName } = typeData;
        if (typeName == '') {
            return MessageUtils_1.REQUIRED_DATA;
        }
        if (this.getUserFromHeader(auth) == null || this.checkJwtToken(auth) == false) {
            return MessageUtils_1.TOKEN_INVALID;
        }
        return '';
    }
    async getAllType() {
        return await this.prisma.type.findMany();
    }
    async getTypeById(id) {
        const type = await this.prisma.type.findFirst({
            where: {
                typeId: id
            }
        });
        return type;
    }
    async addNewType(typeData, auth) {
        if (this.checkInputTypeData(typeData, auth) != '') {
            return this.checkInputTypeData(typeData, auth);
        }
        const typeId = (0, RandomId_1.getRandomId)(10);
        try {
            const addNewType = await this.prisma.type.create({
                data: {
                    typeId: typeId,
                    typeName: typeData.typeName
                }
            });
            return MessageUtils_1.DATA_CREATED;
        }
        catch (error) {
            return MessageUtils_1.DATA_FAIL_TO_CREATE;
        }
    }
    async updateCurrentType(typeData, id, auth) {
        if (this.checkInputTypeData(typeData, auth) != '') {
            return this.checkInputTypeData(typeData, auth);
        }
        if (this.getTypeById(id) == null) {
            return MessageUtils_1.DATA_NOT_EXIST;
        }
        else {
            try {
                const addNewType = await this.prisma.type.update({
                    where: {
                        typeId: id
                    },
                    data: {
                        typeName: typeData.typeName
                    }
                });
                return MessageUtils_1.DATA_UPDATED;
            }
            catch (error) {
                return MessageUtils_1.DATA_FAIL_TO_UPDATE;
            }
        }
    }
    async deleteType(id, auth) {
        if (!this.checkJwtToken(auth)) {
            return MessageUtils_1.TOKEN_INVALID;
        }
        try {
            await this.prisma.type.delete({
                where: {
                    typeId: id
                }
            });
            return MessageUtils_1.DATA_DELETED;
        }
        catch (error) {
            return MessageUtils_1.DATA_FAIL_TO_DELETE;
        }
    }
};
exports.TypeService = TypeService;
exports.TypeService = TypeService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [PrismaService_1.PrismaService, jwt_1.JwtService])
], TypeService);
//# sourceMappingURL=TypeService.js.map