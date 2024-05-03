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
exports.PostController = void 0;
const common_1 = require("@nestjs/common");
const response_1 = require("../config/response");
const PostUser_1 = require("../model/PostUser");
const PostService_1 = require("../service/PostService");
const MessageUtils_1 = require("../utils/MessageUtils");
let PostController = class PostController {
    constructor(postService) {
        this.postService = postService;
    }
    async getPostById(id) {
        return (0, response_1.responseApi)(await this.postService.getPostById(id), MessageUtils_1.DATA_GET_COMPLETE);
    }
    async getPostByType(typeId) {
        return (0, response_1.responseApi)(await this.postService.getPostByType(typeId), MessageUtils_1.DATA_GET_COMPLETE);
    }
    async getPostByUserId(userId) {
        return (0, response_1.responseApi)(await this.postService.getPostByUserId(userId), MessageUtils_1.DATA_GET_COMPLETE);
    }
    async getPostByKey(key) {
    }
    async addNewPost(postData, auth) {
        return (0, response_1.responseApi)([], await this.postService.addNewPost(postData, auth));
    }
    async updatePost(id, postData, auth) {
        return (0, response_1.responseApi)([], await this.postService.updateCurrentPost(postData, id, auth));
    }
    async deletePost(id, auth) {
        return (0, response_1.responseApi)([], await this.postService.deletePost(id, auth));
    }
};
exports.PostController = PostController;
__decorate([
    (0, common_1.Get)('/get-post/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "getPostById", null);
__decorate([
    (0, common_1.Get)('/get-post/:typeId'),
    __param(0, (0, common_1.Param)('typeId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "getPostByType", null);
__decorate([
    (0, common_1.Get)('/get-post/:userId'),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "getPostByUserId", null);
__decorate([
    (0, common_1.Get)('/get-post/:key'),
    __param(0, (0, common_1.Param)('key')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "getPostByKey", null);
__decorate([
    (0, common_1.Post)('/add-post'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Headers)('Authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [PostUser_1.PostUser, String]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "addNewPost", null);
__decorate([
    (0, common_1.Put)('/update-post/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Headers)('Authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, PostUser_1.PostUser, String]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "updatePost", null);
__decorate([
    (0, common_1.Delete)('/delete-post/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Headers)('Authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "deletePost", null);
exports.PostController = PostController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [PostService_1.PostService])
], PostController);
//# sourceMappingURL=PostController.js.map