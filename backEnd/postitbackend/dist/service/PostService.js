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
exports.PostService = void 0;
const common_1 = require("@nestjs/common");
const PrismaService_1 = require("./PrismaService");
const MessageUtils_1 = require("../utils/MessageUtils");
const RandomId_1 = require("../utils/RandomId");
const jwt_1 = require("@nestjs/jwt");
let PostService = class PostService {
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
    checkInputPostData(postData, auth) {
        const { postTitle, postDescription } = postData;
        if (postTitle == '' || postDescription == '') {
            return MessageUtils_1.REQUIRED_DATA;
        }
        if (this.getUserFromHeader(auth) == null || this.checkJwtToken(auth) == false) {
            return MessageUtils_1.TOKEN_INVALID;
        }
        return '';
    }
    async getPostByUserId(userId) {
        const userPost = await this.prisma.user_post.findMany({
            where: {
                userId: userId
            }
        });
        return userPost;
    }
    async getPostByType(typeId) {
        const postType = await this.prisma.post_type.findMany({
            where: {
                typeId: typeId
            }
        });
        return postType;
    }
    async getPostById(id) {
        const post = await this.prisma.post.findFirst({
            where: {
                postId: id
            }
        });
        return post;
    }
    async addNewPost(postData, auth) {
        if (this.checkInputPostData(postData, auth) != '') {
            return this.checkInputPostData(postData, auth);
        }
        const postId = (0, RandomId_1.getRandomId)(10);
        const postUpdateDate = new Date();
        try {
            const addData = await this.prisma.post.create({
                data: {
                    postId: postId,
                    postTitle: postData.postTitle,
                    postDescription: postData.postDescription,
                    postUpdateDate: postUpdateDate
                }
            });
            return MessageUtils_1.DATA_CREATED;
        }
        catch (error) {
            return MessageUtils_1.DATA_FAIL_TO_CREATE;
        }
    }
    async updateCurrentPost(postData, id, auth) {
        if (this.checkInputPostData(postData, auth) != '') {
            return this.checkInputPostData(postData, auth);
        }
        if (await this.getPostById(id) == null) {
            return MessageUtils_1.DATA_NOT_EXIST;
        }
        else {
            try {
                const postUpdateDate = new Date();
                const updateData = await this.prisma.post.update({
                    where: {
                        postId: id
                    },
                    data: {
                        postTitle: postData.postTitle,
                        postDescription: postData.postDescription,
                        postUpdateDate: postUpdateDate
                    }
                });
                return MessageUtils_1.DATA_UPDATED;
            }
            catch (error) {
                return MessageUtils_1.DATA_FAIL_TO_UPDATE;
            }
        }
    }
    async deletePost(id, auth) {
        if (!this.checkJwtToken(auth)) {
            return MessageUtils_1.TOKEN_INVALID;
        }
        try {
            await this.prisma.post.delete({
                where: {
                    postId: id
                }
            });
            return MessageUtils_1.DATA_DELETED;
        }
        catch (error) {
            return MessageUtils_1.DATA_FAIL_TO_DELETE;
        }
    }
};
exports.PostService = PostService;
exports.PostService = PostService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [PrismaService_1.PrismaService, jwt_1.JwtService])
], PostService);
//# sourceMappingURL=PostService.js.map