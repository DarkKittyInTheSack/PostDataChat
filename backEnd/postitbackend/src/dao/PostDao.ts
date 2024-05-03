import { User } from './../model/User';
/* eslint-disable prettier/prettier */

import { PostUser } from "src/model/PostUser";

export interface PostDao{
    checkInputPostData(postData:PostUser,auth:string):string;
    getPostByUserId(userId: string):Promise<any>;
    getPostByType(typeId: string):Promise<any>;
    getPostById(id: string):Promise<any>;
    addNewPost(postData:PostUser,auth:string):Promise<any>;
    addNewPostUser(postId:string,userId:string,auth:string):Promise<any>;
    addNewPostType(postId:string,typeId:string,auth:string):Promise<any>;
    updateCurrentPost(postData:PostUser,id: string,auth:string):Promise<any>;
    deletePost(id: string,auth:string):Promise<any>;
    deletePostUser(id: string,auth:string):Promise<any>;
    deletePostType(id: string,auth:string):Promise<any>;
}