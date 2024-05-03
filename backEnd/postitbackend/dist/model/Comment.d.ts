export declare class Comment {
    commentId: string;
    commentDescription: string;
    commentDate: string;
    constructor(commentId?: string, commentDescription?: string, commentDate?: string);
    getCommentId(): string;
    getCommentDescription(): string;
    getCommentDate(): string;
    setCommentId(commentId: string): void;
    setCommentDescription(commentDescription: string): void;
    setCommentDate(commentDate: string): void;
}
