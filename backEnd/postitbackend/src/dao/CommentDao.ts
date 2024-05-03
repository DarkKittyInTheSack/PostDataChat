/* eslint-disable prettier/prettier */

import { Comment } from "src/model/Comment";

export interface CommentDao{
    checkInputCommentData(commentData:Comment,auth:string):string;
    getCommentByUserId(userId: string):Promise<any>;
    getCommentByPostId(postId: string):Promise<any>;
    getCommentById(id: string):Promise<any>;
    addNewComment(commentData:Comment,auth:string):Promise<any>;
    addNewUserComment(commentId:string,userId:string,auth:string):Promise<any>;
    addNewPostComment(commentId:string,postId:string,auth:string):Promise<any>;
    editComment(commentData:Comment,id: string,auth:string):Promise<any>;
    deleteComment(id: string,auth:string):Promise<any>;
    deleteUserComment(id: string,auth:string):Promise<any>;
    deletePostComment(id: string,auth:string):Promise<any>;
}