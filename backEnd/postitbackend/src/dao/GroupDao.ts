/* eslint-disable prettier/prettier */

import { Group } from "src/model/Group";

export interface GroupDao{
    checkInputGroupData(groupData:Group,auth:string):string;
    getGroupById(id: string):Promise<any>;
    addNewGroup(groupData:Group,auth:string):Promise<any>;
    addNewUserGroup(groupId:string,userId:string,auth:string):Promise<any>;
    editCurrentGroup(groupData:Group,id: string,auth:string):Promise<any>;
    deleteGroup(id: string,auth:string):Promise<any>;
    deleteUserGroup(id: string,auth:string):Promise<any>;
}