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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const PrismaService_1 = require("./PrismaService");
const MessageUtils_1 = require("../utils/MessageUtils");
const RandomId_1 = require("../utils/RandomId");
const cloudinary_1 = require("../middleware/cloudinary");
const jwt_1 = require("@nestjs/jwt");
let UserService = class UserService {
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
    checkInputUserData(userData, auth) {
        const { age, description, email, fullname } = userData;
        if (age == 0 || description == '' || email == '' || fullname == '') {
            return MessageUtils_1.REQUIRED_DATA;
        }
        if (this.getUserFromHeader(auth) == null || this.checkJwtToken(auth) == false) {
            return MessageUtils_1.TOKEN_INVALID;
        }
        return '';
    }
    async uploadAvatar(file) {
        const uploadImage = await (0, cloudinary_1.uploadFile)(file);
        return uploadImage.url;
    }
    async getUserById(id) {
        const userData = await this.prisma.user.findFirst({
            where: {
                userId: id
            }
        });
        return userData;
    }
    async getAllUser() {
        return await this.prisma.user.findMany();
    }
    async getUserBySubscriptionId(subscriptionId) {
        const user = await this.prisma.user_subscription.findFirst({
            where: {
                subscriptionId: subscriptionId
            }
        });
        return user;
    }
    async getUserbyAddressId(addressId) {
        const user = await this.prisma.user_address.findFirst({
            where: {
                addressId: addressId
            }
        });
        return user;
    }
    async addNewUser(userData, avatarUrl, auth) {
        if (this.checkInputUserData(userData, auth) != '') {
            return this.checkInputUserData(userData, auth);
        }
        const userId = (0, RandomId_1.getRandomId)(10);
        const currentAccount = await this.prisma.account.findFirst({
            where: {
                accountId: userData.accountId
            }
        });
        if (currentAccount == null) {
            return MessageUtils_1.DATA_NOT_EXIST;
        }
        else {
            try {
                const addData = await this.prisma.user.create({
                    data: {
                        userId: userId,
                        fullname: userData.fullname,
                        age: userData.age,
                        email: userData.email,
                        accountId: currentAccount.accountId,
                        images: avatarUrl == null ? MessageUtils_1.URL_NOT_FOUND : avatarUrl,
                        descriptions: userData.description,
                    }
                });
                return MessageUtils_1.DATA_CREATED;
            }
            catch (error) {
                console.log(error);
                return MessageUtils_1.DATA_FAIL_TO_CREATE;
            }
        }
    }
    async updateCurrentUser(userData, id, avatarUrl, auth) {
        if (this.checkInputUserData(userData, auth) != '') {
            return this.checkInputUserData(userData, auth);
        }
        if (await this.getUserById(id) == null) {
            return MessageUtils_1.DATA_NOT_EXIST;
        }
        else {
            try {
                const addData = await this.prisma.user.update({
                    where: {
                        userId: id
                    },
                    data: {
                        fullname: userData.fullname,
                        age: userData.age,
                        email: userData.email,
                        accountId: userData.accountId,
                        images: avatarUrl == null ? MessageUtils_1.URL_NOT_FOUND : avatarUrl,
                        descriptions: userData.description,
                    }
                });
                return MessageUtils_1.DATA_UPDATED;
            }
            catch (error) {
                return MessageUtils_1.DATA_FAIL_TO_UPDATE;
            }
        }
    }
    async deleteUser(id, auth) {
        if (!this.checkJwtToken(auth)) {
            return MessageUtils_1.TOKEN_INVALID;
        }
        try {
            await this.prisma.user.delete({
                where: {
                    userId: id
                }
            });
            return MessageUtils_1.DATA_DELETED;
        }
        catch (error) {
            return MessageUtils_1.DATA_FAIL_TO_DELETE;
        }
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [PrismaService_1.PrismaService, jwt_1.JwtService])
], UserService);
//# sourceMappingURL=UserService.js.map