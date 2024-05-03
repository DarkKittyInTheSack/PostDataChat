/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { PostDao } from "src/dao/PostDao";
import { PrismaService } from "./PrismaService";
import { PostUser } from "src/model/PostUser";

import { DATA_CREATED, DATA_DELETED, DATA_FAIL_TO_CREATE, DATA_FAIL_TO_DELETE, DATA_FAIL_TO_UPDATE, DATA_NOT_EXIST, DATA_UPDATED, REQUIRED_DATA, TOKEN_INVALID } from "src/utils/MessageUtils";
import { getRandomId } from "src/utils/RandomId";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class PostService implements PostDao{
    constructor(private prisma: PrismaService, private jwtService:JwtService){}
    async addNewPostUser(postId: string, userId: string, auth: string): Promise<any> {
        if(!this.checkJwtToken(auth)){
            return TOKEN_INVALID;
        }

        const getUserData = this.prisma.user.findFirst({
            where:{
                userId: userId
            }
        })

        if(getUserData === null && await this.getPostById(postId) === null){
            return DATA_NOT_EXIST
        }

        try {
            const comment = await this.prisma.user_post.create({
                data:{
                    id:getRandomId(10),
                    userId: userId,
                    postId: postId
                }
            })
            return DATA_CREATED
        } catch (error) {
            return DATA_FAIL_TO_CREATE
        }
    }
    async addNewPostType(postId: string, typeId: string, auth: string): Promise<any> {
        if(!this.checkJwtToken(auth)){
            return TOKEN_INVALID;
        }

        const getTypeData = this.prisma.type.findFirst({
            where:{
                typeId: typeId
            }
        })

        if(getTypeData === null && await this.getPostById(postId) === null){
            return DATA_NOT_EXIST
        }

        try {
            const comment = await this.prisma.post_type.create({
                data:{
                    id:getRandomId(10),
                    typeId: typeId,
                    postId: postId
                }
            })
            return DATA_CREATED
        } catch (error) {
            return DATA_FAIL_TO_CREATE
        }
    }
    async deletePostUser(id: string, auth: string): Promise<any> {
        if(!this.checkJwtToken(auth)){
            return TOKEN_INVALID;
        }

        try {
            await this.prisma.user_post.delete({
                where:{
                    id: id
                }
            })
            return DATA_DELETED
        } catch (error) {
            return DATA_FAIL_TO_DELETE
        }
    }
    async deletePostType(id: string, auth: string): Promise<any> {
        if(!this.checkJwtToken(auth)){
            return TOKEN_INVALID;
        }

        try {
            await this.prisma.post_type.delete({
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
    checkInputPostData(postData: PostUser,auth:string): string {
        const {postTitle,postDescription} = postData

        if(postTitle == '' || postDescription == ''){
            return REQUIRED_DATA;
        }
        if(this.getUserFromHeader(auth) == null || this.checkJwtToken(auth) == false){
            return TOKEN_INVALID;
        }
        return ''
    }
    async getPostByUserId(userId: string): Promise<any> {
       const userPost = await this.prisma.user_post.findMany({
            where:{
                userId: userId
            } 
       })
       return userPost;
    }
    async getPostByType(typeId: string): Promise<any> {
        const postType = await this.prisma.post_type.findMany({
            where:{
                typeId: typeId
            } 
       })

       return postType;
    }
    async getPostById(id: string): Promise<any> {
        const post = await this.prisma.post.findFirst({
            where:{
                postId: id
            } 
       })

       return post
    }
    async addNewPost(postData:PostUser,auth:string): Promise<any> {
        if(this.checkInputPostData(postData,auth) != ''){
            return this.checkInputPostData(postData,auth)
        }
       const postId = getRandomId(10);
       const postUpdateDate = new Date()

       try {
        const addData = await this.prisma.post.create({
            data:{
                postId: postId,
                postTitle: postData.postTitle,
                postDescription: postData.postDescription,
                postUpdateDate: postUpdateDate
            }
       })
        return DATA_CREATED;
       } catch (error) {
        return DATA_FAIL_TO_CREATE;
       }

       
    }
    async updateCurrentPost(postData:PostUser, id: string,auth:string): Promise<any> {
        if(this.checkInputPostData(postData,auth) != ''){
            return this.checkInputPostData(postData,auth)
        }
        if(await this.getPostById(id) == null){
            return DATA_NOT_EXIST
        }else{
            try {
                const postUpdateDate = new Date()
 
                const updateData = await this.prisma.post.update({
                    where:{
                        postId: id
                    },
                    data:{
                        postTitle: postData.postTitle,
                        postDescription: postData.postDescription,
                        postUpdateDate: postUpdateDate
                    }
                })
                return DATA_UPDATED;
            } catch (error) {
                return DATA_FAIL_TO_UPDATE;
            }
        }   
        
    }
    async deletePost(id: string,auth:string): Promise<any> {
        if(!this.checkJwtToken(auth)){
            return TOKEN_INVALID;
        }

        try {
            await this.prisma.post.delete({
                where:{
                   postId: id
                }
           })
            return DATA_DELETED
        } catch (error) {
            return DATA_FAIL_TO_DELETE
        }
    }
    
}