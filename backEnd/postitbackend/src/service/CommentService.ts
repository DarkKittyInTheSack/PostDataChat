import { Comment } from './../model/Comment';
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { CommentDao } from "src/dao/CommentDao";
import { PrismaService } from "./PrismaService";
import { getRandomId} from 'src/utils/RandomId';
import { DATA_CREATED, DATA_DELETED, DATA_FAIL_TO_CREATE, DATA_FAIL_TO_DELETE, DATA_FAIL_TO_UPDATE, DATA_NOT_EXIST, DATA_UPDATED, REQUIRED_DATA, TOKEN_INVALID } from 'src/utils/MessageUtils';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class CommentService implements CommentDao{
    constructor(private prisma: PrismaService, private jwtService:JwtService){}
    async addNewUserComment(commentId: string, userId: string, auth: string): Promise<any> {
        if(!this.checkJwtToken(auth)){
            return TOKEN_INVALID;
        }

        const getUserData = this.prisma.user.findFirst({
            where:{
                userId: userId
            }
        })

        if(getUserData === null && await this.getCommentById(commentId) === null){
            return DATA_NOT_EXIST
        }

        try {
            const comment = await this.prisma.user_comment.create({
                data:{
                    id:getRandomId(10),
                    userId: userId,
                    commentId: commentId
                }
            })
            return DATA_CREATED
        } catch (error) {
            return DATA_FAIL_TO_CREATE
        }
    }
    async addNewPostComment(commentId: string, postId: string, auth: string): Promise<any> {
        if(!this.checkJwtToken(auth)){
            return TOKEN_INVALID;
        }

        const getPostById = this.prisma.post.findFirst({
            where:{
                postId: postId
            }
        })

        if(getPostById === null && await this.getCommentById(commentId) === null){
            return DATA_NOT_EXIST
        }

        try {
            const comment = await this.prisma.post_comment.create({
                data:{
                    id:getRandomId(10),
                    postId: postId,
                    commentId: commentId
                }
            })
            return DATA_CREATED
        } catch (error) {
            return DATA_FAIL_TO_CREATE
        }
    }
    async deleteUserComment(id: string, auth: string): Promise<any> {
        if(!this.checkJwtToken(auth)){
            return TOKEN_INVALID;
        }

        try {
            await this.prisma.user_comment.delete({
                where:{
                    id: id
                }
            })
            return DATA_DELETED
        } catch (error) {
            return DATA_FAIL_TO_DELETE
        }
    }
    async deletePostComment(id: string, auth: string): Promise<any> {
        if(!this.checkJwtToken(auth)){
            return TOKEN_INVALID;
        }

        try {
            await this.prisma.post_comment.delete({
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
    checkInputCommentData(commentData: Comment,auth:string): string {
        const {commentDescription} = commentData
        if(commentDescription == ''){
            return REQUIRED_DATA;
        }
        if(this.getUserFromHeader(auth) == null || this.checkJwtToken(auth) == false){
            return TOKEN_INVALID;
        }
        return ''
    }
    async getCommentByUserId(userId: string): Promise<any> {
        const userComment = await this.prisma.user_comment.findMany({
            where:{
                userId: userId
            }
        })

        return userComment;
    }
    async getCommentByPostId(postId: string): Promise<any> {
        const postComment = await this.prisma.post_comment.findMany({
            where:{
                postId: postId
            }
        })

        return postComment;
    }
    async getCommentById(id: string): Promise<any> {
        const comment = await this.prisma.comment.findMany({
            where:{
                commentId: id
            }
        })

        return comment;
    }
    async addNewComment(commentData:Comment,auth:string): Promise<any> {
        if(this.checkInputCommentData(commentData,auth) != ''){
            return this.checkInputCommentData(commentData,auth);
        }
        const commentId = getRandomId(10);
        const commentDate = new Date();

        try {
            const comment = await this.prisma.comment.create({
                data:{
                    commentId:commentId,
                    commentDescription: commentData.commentDescription,
                    commentDate: commentDate
                }
            })
            return DATA_CREATED
        } catch (error) {
            return DATA_FAIL_TO_CREATE
        }
        
    }
    async editComment(commentData:Comment, id: string,auth:string): Promise<any> {
        if(this.checkInputCommentData(commentData,auth) != ''){
            return this.checkInputCommentData(commentData,auth);
        }
        if(await this.getCommentById(id) == null){
            return DATA_NOT_EXIST
        }else{
            const commentDate = new Date();
            try {
                const commentUpdate = await this.prisma.comment.update({
                    where:{
                        commentId: id
                    },
                    data:{
                        commentDescription: commentData.commentDescription,
                        commentDate: commentDate
                    }
                })  
                return DATA_UPDATED
            } catch (error) {
                return DATA_FAIL_TO_UPDATE
            }

        }
        
    }
    async deleteComment(id: string,auth:string): Promise<any> {
        if(!this.checkJwtToken(auth)){
            return TOKEN_INVALID;
        }

        try {
            await this.prisma.comment.delete({
                where:{
                    commentId: id
                }
            })
            return DATA_DELETED
        } catch (error) {
            return DATA_FAIL_TO_DELETE
        }
        
    }
    
}