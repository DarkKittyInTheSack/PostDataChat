/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { SaveAttachmentDao } from "../dao/SaveAttachmentDao";
import { PrismaService } from "./PrismaService";
import { SaveAttachment } from "src/model/SaveAttachment";

import { DATA_CREATED, DATA_DELETED, DATA_FAIL_TO_CREATE, DATA_FAIL_TO_DELETE, DATA_FAIL_TO_UPDATE, DATA_NOT_EXIST, DATA_UPDATED, TOKEN_INVALID } from "src/utils/MessageUtils";
import { getRandomId } from "src/utils/RandomId";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class SaveAttachmentService implements SaveAttachmentDao{
    constructor(private prisma: PrismaService, private jwtService:JwtService){}
    async addNewSaveAttachmentUser(saveAttachmentId: string, userId: string, auth: string): Promise<any> {
        if(!this.checkJwtToken(auth)){
            return TOKEN_INVALID;
        }

        const getUserData = this.prisma.user.findFirst({
            where:{
                userId: userId
            }
        })

        if(getUserData === null && await this.getSaveAttachmentById(saveAttachmentId) === null){
            return DATA_NOT_EXIST
        }

        try {
            const comment = await this.prisma.user_save_attachment.create({
                data:{
                    id:getRandomId(10),
                    userId: userId,
                    saveAttachmentId: saveAttachmentId
                }
            })
            return DATA_CREATED
        } catch (error) {
            return DATA_FAIL_TO_CREATE
        }
    }
    async deleteSaveAttachmentUser(id: string, auth: string): Promise<any> {
        if(!this.checkJwtToken(auth)){
            return TOKEN_INVALID;
        }

        try {
            await this.prisma.user_save_attachment.delete({
                where:{
                    id: id
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
    async getSaveAttachmentById(id: string): Promise<any>{
        const saveAttachment = await this.prisma.save_attachment.findFirst({
            where:{
                saveAttachmentId: id
            }
        })
        return saveAttachment;
    }
    async addNewSaveAttachment(saveAttachmentData:SaveAttachment,auth:string): Promise<any> {
        if(!this.checkJwtToken(auth)){
            return TOKEN_INVALID;
        }
        const saveAttachmentId = getRandomId(10);
        const saveAtachmentDate = new Date();

        try {
            const addData = await this.prisma.save_attachment.create({
                data:{
                    saveAttachmentId: saveAttachmentId,
                    saveAttachmentDate: saveAtachmentDate,
                    attachmentId: saveAttachmentData.attachmentId
                }
            })
            return DATA_CREATED;
        } catch (error) {
            return DATA_FAIL_TO_CREATE;
        }

    }
    async updateCurrentSaveAttachment(saveAttachmentData:SaveAttachment, id: string,auth:string): Promise<any> {
        if(!this.checkJwtToken(auth)){
            return TOKEN_INVALID;
        }
        if(await this.getSaveAttachmentById(id) == null){
            return DATA_NOT_EXIST;
        }else{
            try {
                const saveAtachmentDate = new Date();

                const addData = await this.prisma.save_attachment.update({
                    where:{
                        saveAttachmentId: id
                    },
                    data:{
                        saveAttachmentDate: saveAtachmentDate,
                        attachmentId: saveAttachmentData.attachmentId
                    }
                })
                return DATA_UPDATED;
            } catch (error) {
                return DATA_FAIL_TO_UPDATE;
            }
        }
        
    }
    async deleteSaveAttachment(id: string,auth:string): Promise<any> {
        if(!this.checkJwtToken(auth)){
            return TOKEN_INVALID;
        }

        try {
            await this.prisma.save_attachment.delete({
                where:{
                    saveAttachmentId: id
                }
            })
            return DATA_DELETED
        } catch (error) {
            return DATA_FAIL_TO_DELETE
        }
    }
    
}