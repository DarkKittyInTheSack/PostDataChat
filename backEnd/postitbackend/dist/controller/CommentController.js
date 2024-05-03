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
exports.CommentController = void 0;
const common_1 = require("@nestjs/common");
const response_1 = require("../config/response");
const Comment_1 = require("../model/Comment");
const CommentService_1 = require("../service/CommentService");
const MessageUtils_1 = require("../utils/MessageUtils");
let CommentController = class CommentController {
    constructor(commentService) {
        this.commentService = commentService;
    }
    async getCommentById(id) {
        return (0, response_1.responseApi)(await this.commentService.getCommentById(id), MessageUtils_1.DATA_GET_COMPLETE);
    }
    async getCommentByUserId(id) {
        return (0, response_1.responseApi)(await this.commentService.getCommentById(id), MessageUtils_1.DATA_GET_COMPLETE);
        this.commentService.getCommentByUserId(id);
    }
    async getCommentByPostId(id) {
        return (0, response_1.responseApi)(await this.commentService.getCommentByPostId(id), MessageUtils_1.DATA_GET_COMPLETE);
    }
    async addNewComment(commentData, auth) {
        return (0, response_1.responseApi)([], await this.commentService.addNewComment(commentData, auth));
    }
    async updateCurrentComment(id, commentData, auth) {
        return (0, response_1.responseApi)([], await this.commentService.editComment(commentData, id, auth));
    }
    async deleteComment(id, auth) {
        return (0, response_1.responseApi)([], await this.commentService.deleteComment(id, auth));
    }
};
exports.CommentController = CommentController;
__decorate([
    (0, common_1.Get)('/get-comment/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CommentController.prototype, "getCommentById", null);
__decorate([
    (0, common_1.Get)('/get-comment-user/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CommentController.prototype, "getCommentByUserId", null);
__decorate([
    (0, common_1.Get)('/get-comment-post/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CommentController.prototype, "getCommentByPostId", null);
__decorate([
    (0, common_1.Post)('/add-comment'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Headers)('Authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Comment_1.Comment, String]),
    __metadata("design:returntype", Promise)
], CommentController.prototype, "addNewComment", null);
__decorate([
    (0, common_1.Put)('/update-comment/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Headers)('Authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Comment_1.Comment, String]),
    __metadata("design:returntype", Promise)
], CommentController.prototype, "updateCurrentComment", null);
__decorate([
    (0, common_1.Delete)('/delete-comment/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Headers)('Authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], CommentController.prototype, "deleteComment", null);
exports.CommentController = CommentController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [CommentService_1.CommentService])
], CommentController);
//# sourceMappingURL=CommentController.js.map