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
exports.AddressService = void 0;
const common_1 = require("@nestjs/common");
const PrismaService_1 = require("./PrismaService");
const MessageUtils_1 = require("../utils/MessageUtils");
const RandomId_1 = require("../utils/RandomId");
const jwt_1 = require("@nestjs/jwt");
let AddressService = class AddressService {
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
    checkInputAddressData(addressData, auth) {
        const { area, postCode, state, street } = addressData;
        if (area == '' || postCode == 0 || state == '' || street == '') {
            return MessageUtils_1.REQUIRED_DATA;
        }
        if (this.getUserFromHeader(auth) == null || this.checkJwtToken(auth) == false) {
            return MessageUtils_1.TOKEN_INVALID;
        }
        return '';
    }
    async getAddressById(id) {
        const address = await this.prisma.address.findFirst({
            where: {
                addressId: id
            }
        });
        return address;
    }
    async getAddressByUser(userId) {
        const userAddress = await this.prisma.user_address.findMany({
            where: {
                userId: userId
            }
        });
        return userAddress;
    }
    async addAddress(addressData, auth) {
        const addressId = (0, RandomId_1.getRandomId)(10);
        if (this.checkInputAddressData(addressData, auth) != '') {
            return this.checkInputAddressData(addressData, auth);
        }
        try {
            await this.prisma.address.create({
                data: {
                    addressId: addressId,
                    street: addressData.street,
                    area: addressData.area,
                    states: addressData.state,
                    postCode: addressData.postCode
                }
            });
            return MessageUtils_1.DATA_CREATED;
        }
        catch (error) {
            return MessageUtils_1.DATA_FAIL_TO_CREATE;
        }
    }
    async updateAddress(addressData, id, auth) {
        if (this.checkInputAddressData(addressData, auth) != '') {
            return this.checkInputAddressData(addressData, auth);
        }
        const currentAddress = await this.getAddressById(id);
        if (currentAddress == null) {
            return MessageUtils_1.DATA_NOT_EXIST;
        }
        else {
            try {
                await this.prisma.address.update({
                    where: {
                        addressId: id
                    },
                    data: {
                        street: addressData.street,
                        area: addressData.area,
                        states: addressData.state,
                        postCode: addressData.postCode
                    }
                });
                return MessageUtils_1.DATA_UPDATED;
            }
            catch (error) {
                return MessageUtils_1.DATA_FAIL_TO_UPDATE;
            }
        }
    }
    async deleteAddress(id, auth) {
        if (!this.checkJwtToken(auth)) {
            return MessageUtils_1.TOKEN_INVALID;
        }
        try {
            await this.prisma.address.delete({
                where: {
                    addressId: id
                },
            });
            return MessageUtils_1.DATA_DELETED;
        }
        catch (error) {
            return MessageUtils_1.DATA_FAIL_TO_DELETE;
        }
    }
};
exports.AddressService = AddressService;
exports.AddressService = AddressService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [PrismaService_1.PrismaService, jwt_1.JwtService])
], AddressService);
//# sourceMappingURL=AddressService.js.map