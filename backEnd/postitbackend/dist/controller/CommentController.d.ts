import { Comment } from "src/model/Comment";
import { CommentService } from "src/service/CommentService";
export declare class CommentController {
    private commentService;
    constructor(commentService: CommentService);
    getCommentById(id: string): Promise<string>;
    getCommentByUserId(id: string): Promise<string>;
    getCommentByPostId(id: string): Promise<string>;
    addNewComment(commentData: Comment, auth: string): Promise<string>;
    updateCurrentComment(id: string, commentData: Comment, auth: string): Promise<string>;
    deleteComment(id: string, auth: string): Promise<string>;
}
