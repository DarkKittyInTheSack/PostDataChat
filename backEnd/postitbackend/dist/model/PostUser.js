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
exports.PostUser = void 0;
const class_validator_1 = require("class-validator");
class PostUser {
    constructor(postId = '', postTitle = '', postDescription = '', postUpdateDate = '') {
        this.postId = postId;
        this.postTitle = postTitle;
        this.postDescription = postDescription;
        this.postUpdateDate = postUpdateDate;
    }
    getPostId() {
        return this.postId;
    }
    getPostTitle() {
        return this.postTitle;
    }
    getPostDescription() {
        return this.postDescription;
    }
    getPostUpdateDate() {
        return this.postUpdateDate;
    }
    setPostId(postId) {
        this.postId = postId;
    }
    setPostTitle(postTitle) {
        this.postTitle = postTitle;
    }
    setPostDescription(postDescription) {
        this.postDescription = postDescription;
    }
    setPostUpdate(postUpdateDate) {
        this.postUpdateDate = postUpdateDate;
    }
}
exports.PostUser = PostUser;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], PostUser.prototype, "postId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], PostUser.prototype, "postTitle", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], PostUser.prototype, "postDescription", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], PostUser.prototype, "postUpdateDate", void 0);
//# sourceMappingURL=PostUser.js.map