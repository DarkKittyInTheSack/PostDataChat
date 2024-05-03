/* eslint-disable prettier/prettier */

import { Interact } from "src/model/Interact";

export interface InteractDao{
    getInteract(id: string):Promise<any>;
    addNewInteract(interactData:Interact,auth:string):Promise<any>;
    addNewUserInteract(interactId:string,userId:string,auth:string):Promise<any>;
    addNewPostInteract(interactId:string,postId:string,auth:string):Promise<any>;
    updateCurrentInteract(interactData:Interact,id: string,auth:string):Promise<any>;
    deleteInteract(id: string,auth:string):Promise<any>;
    deleteUserInteract(id: string,auth:string):Promise<any>;
    deletePostInteract(id: string,auth:string):Promise<any>;
}