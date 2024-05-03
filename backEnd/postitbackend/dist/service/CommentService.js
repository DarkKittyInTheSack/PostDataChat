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
exports.CommentService = void 0;
const common_1 = require("@nestjs/common");
const PrismaService_1 = require("./PrismaService");
const RandomId_1 = require("../utils/RandomId");
const MessageUtils_1 = require("../utils/MessageUtils");
const jwt_1 = require("@nestjs/jwt");
let CommentService = class CommentService {
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
    checkInputCommentData(commentData, auth) {
        const { commentDescription } = commentData;
        if (commentDescription == '') {
            return MessageUtils_1.REQUIRED_DATA;
        }
        if (this.getUserFromHeader(auth) == null || this.checkJwtToken(auth) == false) {
            return MessageUtils_1.TOKEN_INVALID;
        }
        return '';
    }
    async getCommentByUserId(userId) {
        const userComment = await this.prisma.user_comment.findMany({
            where: {
                userId: userId
            }
        });
        return userComment;
    }
    async getCommentByPostId(postId) {
        const postComment = await this.prisma.post_comment.findMany({
            where: {
                postId: postId
            }
        });
        return postComment;
    }
    async getCommentById(id) {
        const comment = await this.prisma.comment.findMany({
            where: {
                commentId: id
            }
        });
        return comment;
    }
    async addNewComment(commentData, auth) {
        if (this.checkInputCommentData(commentData, auth) != '') {
            return this.checkInputCommentData(commentData, auth);
        }
        const commentId = (0, RandomId_1.getRandomId)(10);
        const commentDate = new Date();
        try {
            const comment = await this.prisma.comment.create({
                data: {
                    commentId: commentId,
                    commentDescription: commentData.commentDescription,
                    commentDate: commentDate
                }
            });
            return MessageUtils_1.DATA_CREATED;
        }
        catch (error) {
            return MessageUtils_1.DATA_FAIL_TO_CREATE;
        }
    }
    async editComment(commentData, id, auth) {
        if (this.checkInputCommentData(commentData, auth) != '') {
            return this.checkInputCommentData(commentData, auth);
        }
        if (await this.getCommentById(id) == null) {
            return MessageUtils_1.DATA_NOT_EXIST;
        }
        else {
            const commentDate = new Date();
            try {
                const commentUpdate = await this.prisma.comment.update({
                    where: {
                        commentId: id
                    },
                    data: {
                        commentDescription: commentData.commentDescription,
                        commentDate: commentDate
                    }
                });
                return MessageUtils_1.DATA_UPDATED;
            }
            catch (error) {
                return MessageUtils_1.DATA_FAIL_TO_UPDATE;
            }
        }
    }
    async deleteComment(id, auth) {
        if (!this.checkJwtToken(auth)) {
            return MessageUtils_1.TOKEN_INVALID;
        }
        try {
            await this.prisma.comment.delete({
                where: {
                    commentId: id
                }
            });
            return MessageUtils_1.DATA_DELETED;
        }
        catch (error) {
            return MessageUtils_1.DATA_FAIL_TO_DELETE;
        }
    }
};
exports.CommentService = CommentService;
exports.CommentService = CommentService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [PrismaService_1.PrismaService, jwt_1.JwtService])
], CommentService);
//# sourceMappingURL=CommentService.js.map