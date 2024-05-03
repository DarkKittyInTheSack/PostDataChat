/* eslint-disable prettier/prettier */

import { Ban } from "src/model/Ban";

export interface BanDao{
    checkInputBanData(banData:Ban,auth:string):string;
    getBanByUserId(userId: string):Promise<any>;
    getBanByPostId(postId: string):Promise<any>;
    getBanById(id: string):Promise<any>;
    addNewBan(banData:Ban,auth:string):Promise<any>;
    addNewUserBan(banId:string,userId:string,auth:string):Promise<any>;
    addNewPostBan(banId:string,postId:string,auth:string):Promise<any>;
    updateBan(banData:Ban,id: string,auth:string):Promise<any>;
    deleteBan(id: string,auth:string):Promise<any>;
    deleteUserBan(id: string,auth:string):Promise<any>;
    deletePostBan(id: string,auth:string):Promise<any>;
}