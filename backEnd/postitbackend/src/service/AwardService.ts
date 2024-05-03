/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { AwardDao } from "src/dao/AwardDao";
import { PrismaService } from "./PrismaService";
import { Award } from "src/model/Award";

import { DATA_CREATED, DATA_DELETED, DATA_FAIL_TO_CREATE, DATA_FAIL_TO_DELETE, DATA_FAIL_TO_UPDATE, DATA_NOT_EXIST, DATA_UPDATED, REQUIRED_DATA, TOKEN_INVALID } from "src/utils/MessageUtils";
import { getRandomId } from "src/utils/RandomId";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AwardService implements AwardDao{
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
    
    checkInputAwardData(awardData: Award,auth:string): string {
        const {awardName} = awardData

        if(awardName == ''){
            return REQUIRED_DATA;
        }
        if(this.getUserFromHeader(auth) == null || this.checkJwtToken(auth) == false){
            return TOKEN_INVALID;
        }
        return ''
    }
    async getAwardByUserId(userId: string): Promise<any> {
        const awardUser = await this.prisma.user_award.findMany({
            where:{
                userId: userId
            }
        })
        return awardUser;
    }
    async getAwardByPostId(postId: string): Promise<any> {
        const awardPost = await this.prisma.post_award.findMany({
            where:{
                postId: postId
            }
        })

        return awardPost;
    }
    async getAwardById(id: string): Promise<any> {
        const awardData = await this.prisma.award.findFirst({
            where:{
                awardId: id
            }
        })

        return awardData;
    }
    async addNewAward(awardData:Award,auth:string): Promise<any> {
        if(this.checkInputAwardData(awardData,auth) != ''){
            return this.checkInputAwardData(awardData,auth)
        }
        const awardId = getRandomId(10);
        try {
            const awardAdd = await this.prisma.award.create({
                data:{
                    awardId: awardId,
                    awardName: awardData.awardName
                }
            })
            return DATA_CREATED
        } catch (error) {
            return DATA_FAIL_TO_CREATE;
        }

        
    }
    async updateAward(awardData:Award, id: string,auth:string): Promise<any> {
        if(this.checkInputAwardData(awardData,auth) != ''){
            return this.checkInputAwardData(awardData,auth)
        }
        if(this.getAwardById(id) == null){
            return DATA_NOT_EXIST;
        }else{
            try {
                await this.prisma.award.update({
                    where:{
                        awardId: id
                    },
                    data:{
                        awardName: awardData.awardName
                    }
                })
                return DATA_UPDATED
            } catch (error) {
                return DATA_FAIL_TO_UPDATE;
            }
        }
    }

    async deleteAward(id: string,auth:string): Promise<any> {
        if(!this.checkJwtToken(auth)){
            return TOKEN_INVALID
        }
        try {
            await this.prisma.award.delete({
                where:{
                    awardId: id
                }
            })
            return DATA_DELETED
        } catch (error) {
            return DATA_FAIL_TO_DELETE
        }
    }

    async addUserAward(awardId: string, userId: string, auth: string): Promise<any> {
        if(!this.checkJwtToken(auth)){
            return TOKEN_INVALID
        }

        const getUserId = await this.prisma.user.findFirst({
            where:{
                userId: userId,
            }
        })

        if(getUserId === null || await this.getAwardById(awardId) === null){
            return DATA_NOT_EXIST;
        }

        try {
            await this.prisma.user_award.create({
                data:{
                    id: awardId,
                    awardId: awardId,
                    userId:userId
                }
            })
            return DATA_CREATED
        } catch (error) {
            return DATA_FAIL_TO_CREATE;
        }
    }
    async addPostAward(awardId: string, postId: string, auth: string): Promise<any> {
        if(!this.checkJwtToken(auth)){
            return TOKEN_INVALID
        }

        const getPostId = await this.prisma.post.findFirst({
            where:{
                postId: postId,
            }
        })

        if(getPostId === null || await this.getAwardById(awardId) === null){
            return DATA_NOT_EXIST;
        }

        try {
            await this.prisma.post_award.create({
                data:{
                    id: awardId,
                    awardId: awardId,
                    postId:postId
                }
            })
            return DATA_CREATED
        } catch (error) {
            return DATA_FAIL_TO_CREATE;
        }
    }
    async deleteUserAward(id: string, auth: string): Promise<any> {
        if(!this.checkJwtToken(auth)){
            return TOKEN_INVALID
        }
        try {
            await this.prisma.user_award.delete({
                where:{
                    id: id
                }
            })
            return DATA_DELETED
        } catch (error) {
            return DATA_FAIL_TO_DELETE
        }
    }
    async deletePostAward(id: string, auth: string): Promise<any> {
        if(!this.checkJwtToken(auth)){
            return TOKEN_INVALID
        }
        try {
            await this.prisma.post_award.delete({
                where:{
                    id: id
                }
            })
            return DATA_DELETED
        } catch (error) {
            return DATA_FAIL_TO_DELETE
        }
    }
    
}