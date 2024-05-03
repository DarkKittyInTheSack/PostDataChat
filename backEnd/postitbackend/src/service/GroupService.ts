/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { GroupDao } from "src/dao/GroupDao";
import { PrismaService } from "./PrismaService";
import { Group } from "src/model/Group";

import { DATA_CREATED, DATA_DELETED, DATA_FAIL_TO_CREATE, DATA_FAIL_TO_DELETE, DATA_FAIL_TO_UPDATE, DATA_NOT_EXIST, DATA_UPDATED, REQUIRED_DATA, TOKEN_INVALID } from "src/utils/MessageUtils";
import { getRandomId } from "src/utils/RandomId";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class GroupService implements GroupDao{
    constructor(private prisma: PrismaService, private jwtService:JwtService){}
    async addNewUserGroup(groupId: string, userId: string, auth: string): Promise<any> {
        if(!this.checkJwtToken(auth)){
            return TOKEN_INVALID;
        }

        const getUserData = this.prisma.user.findFirst({
            where:{
                userId: userId
            }
        })

        if(getUserData === null && await this.getGroupById(groupId) === null){
            return DATA_NOT_EXIST
        }

        try {
            const addData = await this.prisma.user_group.create({
                data:{
                    userGroupId: getRandomId(10),
                    userId: userId,
                    groupId: groupId
                }
            })
            return DATA_CREATED;
        } catch (error) {
            return DATA_FAIL_TO_CREATE;
        }
    }
    async deleteUserGroup(id: string, auth: string): Promise<any> {
        if(!this.checkJwtToken(auth)){
            return TOKEN_INVALID;
        }

        try {
            await this.prisma.user_group.delete({
                where:{
                    userGroupId: id
                }
            })
            return DATA_DELETED
        } catch (error) {
            return DATA_FAIL_TO_DELETE
        }
    }

    checkJwtToken(jwtToken:string){
        const checkToken = this.jwtService.verify(jwtToken);
        let isVerify = false;
        checkToken === null ? isVerify = true : isVerify = false
        return isVerify;
    }

    getUserFromHeader(jwtToken:string){
        return (this.jwtService.decode(jwtToken))
    }
    checkInputGroupData(groupData: Group,auth:string): string {
        const {groupName,groupDescription} = groupData

        if(groupName === '' || groupDescription === ''){
            return REQUIRED_DATA
        }
        if(this.getUserFromHeader(auth) == null || this.checkJwtToken(auth) == false){
            return TOKEN_INVALID;
        }
        return '';
    }
    async getGroupById(id: string): Promise<any> {
        const userGroup = await this.prisma.chat_group.findFirst({
            where:{
                groupId: id
            }
        })
        return userGroup
    }
    async addNewGroup(groupData:Group,auth:string): Promise<any> {
        if(this.checkInputGroupData(groupData,auth) != ''){
            return this.checkInputGroupData(groupData,auth)
        }
        const groupId = getRandomId(10);

        try {
            const addData = await this.prisma.chat_group.create({
                data:{
                    groupId: groupId,
                    groupName: groupData.groupName,
                    groupDescription: groupData.groupDescription
                }
            })
            return DATA_CREATED;
        } catch (error) {
            return DATA_FAIL_TO_CREATE;
        }

    }
    async editCurrentGroup(groupData:Group, id: string,auth:string): Promise<any> {
        if(this.checkInputGroupData(groupData,auth) != ''){
            return this.checkInputGroupData(groupData,auth)
        }
        if(await this.getGroupById(id) == null){
            return DATA_NOT_EXIST;
        }else{
            try {
                const updateData = await this.prisma.chat_group.update({
                    where:{
                        groupId: id
                    },
                    data:{
                        groupName: groupData.groupName,
                        groupDescription: groupData.groupDescription
                    }
                })
                return DATA_UPDATED;
            } catch (error) {
                return DATA_FAIL_TO_UPDATE;
            }
            
        }

        
    }
    async deleteGroup(id: string,auth:string): Promise<any> {
        if(!this.checkJwtToken(auth)){
            return TOKEN_INVALID;
        }

        try {
            await this.prisma.chat_group.delete({
                where:{
                    groupId: id
                }
            })
            return DATA_DELETED
        } catch (error) {
            return DATA_FAIL_TO_DELETE
        }
        
    }

}