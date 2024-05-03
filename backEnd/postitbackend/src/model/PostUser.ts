import { IsNotEmpty } from "class-validator";

/* eslint-disable prettier/prettier */
export class PostUser{
    @IsNotEmpty()
    postId:string;

    @IsNotEmpty()
    postTitle:string;

    @IsNotEmpty()
    postDescription: string;

    @IsNotEmpty()
    postUpdateDate: string;

    constructor(postId: string = '',postTitle: string = '', postDescription: string = '', postUpdateDate: string = ''){
        this.postId = postId;
        this.postTitle = postTitle;
        this.postDescription = postDescription;
        this.postUpdateDate = postUpdateDate;
    }

    getPostId(): string{
        return this.postId;
    }

    getPostTitle(): string{
        return this.postTitle;
    }

    getPostDescription(): string{
        return this.postDescription;
    }

    getPostUpdateDate(): string{
        return this.postUpdateDate;
    }

    setPostId(postId: string): void{
        this.postId = postId;
    }

    setPostTitle(postTitle: string): void{
        this.postTitle = postTitle;
    }

    setPostDescription(postDescription: string): void{
        this.postDescription = postDescription;
    }

    setPostUpdate(postUpdateDate: string): void{
        this.postUpdateDate = postUpdateDate;
    }
}