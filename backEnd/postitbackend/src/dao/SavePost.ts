/* eslint-disable prettier/prettier */

import { SavePost } from "src/model/SavePost";

export interface SavePostDao{
    getSavePostById(id: string):Promise<any>;
    addNewSavePost(savePostData:SavePost,auth:string):Promise<any>;
    addNewSavePostPost(savePost:string,postId:string,auth:string):Promise<any>;
    addNewSavePostUser(savePost:string,userId:string,auth:string):Promise<any>;
    updateCurrentSavePost(savePostData:SavePost,id: string,auth:string):Promise<any>;
    deleteSavePost(id: string,auth:string):Promise<any>;
    deleteSavePostPost(id: string,auth:string):Promise<any>;
    deleteSavePostUser(id: string,auth:string):Promise<any>;
}