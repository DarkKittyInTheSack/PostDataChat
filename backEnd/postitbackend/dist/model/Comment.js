"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comment = void 0;
class Comment {
    constructor(commentId = '', commentDescription = '', commentDate = '') {
        this.commentId = commentId;
        this.commentDescription = commentDescription;
        this.commentDate = commentDate;
    }
    getCommentId() {
        return this.commentId;
    }
    getCommentDescription() {
        return this.commentDescription;
    }
    getCommentDate() {
        return this.commentDate;
    }
    setCommentId(commentId) {
        this.commentId = commentId;
    }
    setCommentDescription(commentDescription) {
        this.commentDescription = commentDescription;
    }
    setCommentDate(commentDate) {
        this.commentDate = commentDate;
    }
}
exports.Comment = Comment;
//# sourceMappingURL=Comment.js.map