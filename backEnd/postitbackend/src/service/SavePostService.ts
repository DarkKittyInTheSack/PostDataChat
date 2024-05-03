/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { SavePostDao } from "src/dao/SavePost";
import { PrismaService } from "./PrismaService";
import { SavePost } from "src/model/SavePost";

import { DATA_CREATED, DATA_DELETED, DATA_FAIL_TO_CREATE, DATA_FAIL_TO_DELETE, DATA_FAIL_TO_UPDATE, DATA_NOT_EXIST, DATA_UPDATED, TOKEN_INVALID } from "src/utils/MessageUtils";
import { getRandomId } from "src/utils/RandomId";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class SavePostService implements SavePostDao{
    constructor(private prisma: PrismaService, private jwtService:JwtService){}
    async addNewSavePostPost(savePost: string, postId: string, auth: string): Promise<any> {
        if(!this.checkJwtToken(auth)){
            return TOKEN_INVALID;
        }

        const getPostData = this.prisma.post.findFirst({
            where:{
                postId: postId
            }
        })

        if(getPostData === null && await this.getSavePostById(savePost) === null){
            return DATA_NOT_EXIST
        }

        try {
            const comment = await this.prisma.post_save_post.create({
                data:{
                    id:getRandomId(10),
                    postId: postId,
                    savePostId: savePost
                }
            })
            return DATA_CREATED
        } catch (error) {
            return DATA_FAIL_TO_CREATE
        }
    }
    async addNewSavePostUser(savePost: string, userId: string, auth: string): Promise<any> {
        if(!this.checkJwtToken(auth)){
            return TOKEN_INVALID;
        }

        const getUserData = this.prisma.user.findFirst({
            where:{
                userId: userId
            }
        })

        if(getUserData === null && await this.getSavePostById(savePost) === null){
            return DATA_NOT_EXIST
        }

        try {
            const comment = await this.prisma.user_save_post.create({
                data:{
                    id:getRandomId(10),
                    userId: userId,
                    savePostId: savePost
                }
            })
            return DATA_CREATED
        } catch (error) {
            return DATA_FAIL_TO_CREATE
        }
    }
    async deleteSavePostPost(id: string, auth: string): Promise<any> {
        if(!this.checkJwtToken(auth)){
            return TOKEN_INVALID;
        }

        try {
            await this.prisma.post_save_post.delete({
                where:{
                    id: id
                }
            })
            return DATA_DELETED
        } catch (error) {
            return DATA_FAIL_TO_DELETE
        }
    }
    async deleteSavePostUser(id: string, auth: string): Promise<any> {
        if(!this.checkJwtToken(auth)){
            return TOKEN_INVALID;
        }

        try {
            await this.prisma.user_save_post.delete({
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
    async getSavePostById(id: string): Promise<any> {
        const savePost = await this.prisma.save_post.findFirst({
            where:{
                savePostId: id
            }
        })
        return savePost;
    }
    async addNewSavePost(savePostData:SavePost,auth:string): Promise<any> {
        if(!this.checkJwtToken(auth)){
            return TOKEN_INVALID;
        }
        const savePostId = getRandomId(10)
        const savePostDate = new Date();

        try {
            const newData = await this.prisma.save_post.create({
                data:{
                    savePostId: savePostId,
                    savePostDate: savePostDate,
                }
            })
            return DATA_CREATED
        } catch (error) {
            return DATA_FAIL_TO_CREATE
        }


    }
    async updateCurrentSavePost(savePostData:SavePost, id: string,auth:string): Promise<any> {
        if(!this.checkJwtToken(auth)){
            return TOKEN_INVALID;
        }
        if(await this.getSavePostById(id) == null){
            return DATA_NOT_EXIST
        }else{
            try {
                const savePostDate = new Date();

                const newData = await this.prisma.save_post.update({
                    where:{
                        savePostId: id
                    },
                    data:{
                        savePostDate: savePostDate,
                    }
                })
                return DATA_UPDATED
            } catch (error) {
                return DATA_FAIL_TO_UPDATE;
            }
        }
        
    }
    async deleteSavePost(id: string,auth:string): Promise<any> {
        if(!this.checkJwtToken(auth)){
            return TOKEN_INVALID;
        }

        try {
            await this.prisma.save_post.delete({
                where:{
                    savePostId: id
                }
            })
            return DATA_DELETED
        } catch (error) {
            return DATA_FAIL_TO_DELETE
        }
    }
    
}