/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { AttachmentDao } from "src/dao/AttachmentDao";
import { PrismaService } from "./PrismaService";
import { Attachment } from "src/model/Attachment";

import { DATA_CREATED, DATA_DELETED, DATA_FAIL_TO_CREATE, DATA_FAIL_TO_DELETE, DATA_FAIL_TO_UPDATE, DATA_NOT_EXIST, DATA_UPDATED, TOKEN_INVALID } from "src/utils/MessageUtils";
import { getRandomId } from "src/utils/RandomId";
import { uploadFile } from "src/middleware/cloudinary";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AttachmentService implements AttachmentDao{
    constructor(private prisma: PrismaService, private jwtService:JwtService){}
    checkJwtToken(jwtToken:string){
        const checkToken = this.jwtService.verify(jwtToken);
        let isVerify = false;
        checkToken === null ? isVerify = true : isVerify = false
        return isVerify;
    }

    getUserFromHeader(jwtToken:string){
        return (this.jwtService.decode(jwtToken))
    }

    async uploadImageAttachment(file:any): Promise<any>{
        const uploadImage = await uploadFile(file);
        return uploadImage.url;
    }

    async getAttachmentById(id: string): Promise<any> {
        const attachment = await this.prisma.attachment.findFirst({
            where:{
                attachmentId: id
            }
        })
        return attachment;
    }
    async addNewAttachment(attachmentUrl:string,auth:string): Promise<any> {
        if(!this.checkJwtToken(auth)){
            return TOKEN_INVALID;
        }
        try {
            const attachmentId = getRandomId(10);
            const isSaved = true;

            await this.prisma.attachment.create({
                data:{
                    attachmentId: attachmentId,
                    attachmentUrl: attachmentUrl,
                    isSaved: isSaved
                }
            })
            return DATA_CREATED;
        } catch (error) {
            return DATA_FAIL_TO_CREATE;
        }
    }
    async editCurrentAttachment( id: string,attachmentUrl:string,auth:string): Promise<any> {
        if(!this.checkJwtToken(auth)){
            return TOKEN_INVALID;
        }
        if(await this.getAttachmentById(id) == null){
            return DATA_NOT_EXIST
        }else{
            try {
                const isSaved = true;

                const addAttachment = await this.prisma.attachment.update({
                    where:{
                        attachmentId: id
                    },
                    data:{
                        attachmentUrl: attachmentUrl,
                        isSaved: isSaved
                    }
                })
                return DATA_UPDATED
            } catch (error) {
                return DATA_FAIL_TO_UPDATE
            }
        }
        
    }
    async deleteAttachment(id: string,auth:string): Promise<any> {
        if(!this.checkJwtToken(auth)){
            return TOKEN_INVALID;
        }
        try {

            await this.prisma.attachment.delete({
                where:{
                    attachmentId: id
                }
            })

            return DATA_DELETED;
        } catch (error) {
            return DATA_FAIL_TO_DELETE;
        }
        
    }
   
    async addUserAttachment(attachmentId: string, userId: string, auth: string): Promise<any> {
        if(!this.checkJwtToken(auth)){
            return TOKEN_INVALID;
        }

        const getUserId = await this.prisma.user.findFirst({
            where:{
                userId: userId,
            }
        })

        if(getUserId === null || await this.getAttachmentById(attachmentId) === null){
            return DATA_NOT_EXIST;
        }

        try {

            await this.prisma.user_attachment.create({
                data:{
                    id: getRandomId(10),
                    attachmentId: attachmentId,
                    userId: userId
                }
            })
            return DATA_CREATED;
        } catch (error) {
            return DATA_FAIL_TO_CREATE;
        }
    }
    async addPostAttachment(attachmentId: string, postId: string, auth: string): Promise<any> {
        if(!this.checkJwtToken(auth)){
            return TOKEN_INVALID;
        }

        const getPostId = await this.prisma.post.findFirst({
            where:{
                postId: postId,
            }
        })

        if(getPostId === null || await this.getAttachmentById(attachmentId) === null){
            return DATA_NOT_EXIST;
        }

        try {

            await this.prisma.post_attachment.create({
                data:{
                    id: getRandomId(10),
                    attachmentId: attachmentId,
                    postId: postId
                }
            })
            return DATA_CREATED;
        } catch (error) {
            return DATA_FAIL_TO_CREATE;
        }
    }
    async deleteUserAttachment(id: string, auth: string): Promise<any> {
        if(!this.checkJwtToken(auth)){
            return TOKEN_INVALID;
        }

        try {

            await this.prisma.user_attachment.delete({
                where:{
                    id: id
                }
            })

            return DATA_DELETED;
        } catch (error) {
            return DATA_FAIL_TO_DELETE;
        }
    }
    async deletePostAttachment(id: string, auth: string): Promise<any> {
        if(!this.checkJwtToken(auth)){
            return TOKEN_INVALID;
        }

        try {

            await this.prisma.post_attachment.delete({
                where:{
                    id: id
                }
            })

            return DATA_DELETED;
        } catch (error) {
            return DATA_FAIL_TO_DELETE;
        }
    }
}