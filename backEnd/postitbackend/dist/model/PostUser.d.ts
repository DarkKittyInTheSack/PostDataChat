export declare class PostUser {
    postId: string;
    postTitle: string;
    postDescription: string;
    postUpdateDate: string;
    constructor(postId?: string, postTitle?: string, postDescription?: string, postUpdateDate?: string);
    getPostId(): string;
    getPostTitle(): string;
    getPostDescription(): string;
    getPostUpdateDate(): string;
    setPostId(postId: string): void;
    setPostTitle(postTitle: string): void;
    setPostDescription(postDescription: string): void;
    setPostUpdate(postUpdateDate: string): void;
}
