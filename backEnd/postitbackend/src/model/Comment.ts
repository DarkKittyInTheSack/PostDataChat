/* eslint-disable prettier/prettier */
export class Comment{
    commentId: string;
    commentDescription: string;
    commentDate: string;

    constructor(commentId: string = '', commentDescription:string = '', commentDate: string = ''){
        this.commentId = commentId;
        this.commentDescription = commentDescription;
        this.commentDate = commentDate;
    }

    getCommentId(): string{
        return this.commentId;
    }

    getCommentDescription(): string{
        return this.commentDescription;
    }

    getCommentDate(): string{
        return this.commentDate;
    }

    setCommentId(commentId: string): void{
        this.commentId = commentId;
    }

    setCommentDescription(commentDescription: string): void{
        this.commentDescription = commentDescription;
    }

    setCommentDate(commentDate: string): void{
        this.commentDate = commentDate;
    }
}