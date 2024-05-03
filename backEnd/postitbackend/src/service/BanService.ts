import { auth } from 'googleapis/build/src/apis/abusiveexperiencereport';
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { BanDao } from "src/dao/BanDao";
import { PrismaService } from "./PrismaService";
import { Ban } from "src/model/Ban";

import { DATA_CREATED, DATA_DELETED, DATA_FAIL_TO_CREATE, DATA_FAIL_TO_DELETE, DATA_FAIL_TO_UPDATE, DATA_NOT_EXIST, DATA_UPDATED, REQUIRED_DATA, TOKEN_INVALID } from "src/utils/MessageUtils";
import { getRandomId } from "src/utils/RandomId";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class BanService implements BanDao{
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
    checkInputBanData(banData: Ban,auth:string): string {
        const {banTitle,banDescription} = banData
        if(banTitle == '' || banDescription == ''){
            return REQUIRED_DATA;
        }
        if(this.getUserFromHeader(auth) == null || this.checkJwtToken(auth) == false){
            return TOKEN_INVALID;
        }
        return '';
    }
    async getBanByUserId(userId: string): Promise<any> {
        const userBanData = await this.prisma.user_ban.findFirst({
            where:{
                userId:userId
            }
        })

        return userBanData;
    }
    async getBanByPostId(postId: string): Promise<any> {
        const postBanData = await this.prisma.post_ban.findFirst({
            where:{
                postId:postId
            }
        })

        return postBanData;
    }
    async getBanById(id: string): Promise<any> {
        const banData = await this.prisma.ban.findFirst({
            where:{
                banId:id
            }
        })

        return banData;
    }
    async addNewBan(banData:Ban,auth:string): Promise<any> {
        if(this.checkInputBanData(banData,auth) != ''){
            return this.checkInputBanData(banData,auth);
        }
        const banId = getRandomId(10);
        const banDate = new Date();

        try {
            const addData = await this.prisma.ban.create({
                data:{
                    banId: banId,
                    banTitle: banData.banTitle,
                    banDescription: banData.banDescription,
                    banDate: banDate,
                }
            })
            return DATA_CREATED;
        } catch (error) {
            return DATA_FAIL_TO_CREATE;
        }
    }
    async updateBan(banData:Ban, id: string,auth:string): Promise<any> {
        if(this.checkInputBanData(banData,auth) != ''){
            return this.checkInputBanData(banData,auth);
        }
        if(await this.getBanById(id) == null){
            return DATA_NOT_EXIST;
        }else{
            const banDate = new Date();

            const updateData = await this.prisma.ban.update({
                where:{
                    banId: id
                },
                data:{
                    banTitle: banData.banTitle,
                    banDescription: banData.banDescription,
                    banDate: banDate,
                }
            })

            try {
                return DATA_UPDATED;
            } catch (error) {
                return DATA_FAIL_TO_UPDATE;
            }
        }
        
    }
    async deleteBan(id: string,auth:string): Promise<any> {
        if(!this.checkJwtToken(auth)){
            return TOKEN_INVALID;
        }
        try {
            await this.prisma.ban.delete({
                where:{
                    banId: id
                }
            })
            return DATA_DELETED
        } catch (error) {
            return DATA_FAIL_TO_DELETE
        }
        
    }

    async addNewUserBan(banId: string, userId: string, auth: string): Promise<any> {
        if(!this.checkJwtToken(auth)){
            return TOKEN_INVALID;
        }

        const getUserData = this.prisma.user.findFirst({
            where:{
                userId: userId
            }
        })

        if(getUserData === null && await this.getBanById(banId) === null){
            return DATA_NOT_EXIST
        }

        try {
            await this.prisma.user_ban.create({
                data:{
                    id: getRandomId(10),
                    userId:userId,
                    banId:banId
                }
            })
            return DATA_CREATED;
        } catch (error) {
            return DATA_FAIL_TO_CREATE;
        }
    }
    async addNewPostBan(banId: string, postId: string, auth: string): Promise<any> {
        if(!this.checkJwtToken(auth)){
            return TOKEN_INVALID;
        }

        const getPostData = this.prisma.post.findFirst({
            where:{
                postId: postId
            }
        })

        if(getPostData === null && await this.getBanById(banId) === null){
            return DATA_NOT_EXIST
        }

        try {
            await this.prisma.post_ban.create({
                data:{
                    id: getRandomId(10),
                    postId:postId,
                    banId:banId
                }
            })
            return DATA_CREATED;
        } catch (error) {
            return DATA_FAIL_TO_CREATE;
        }
    }
    async deleteUserBan(id: string, auth: string): Promise<any> {
        if(!this.checkJwtToken(auth)){
            return TOKEN_INVALID;
        }

        try {
            await this.prisma.user_ban.delete({
                where:{
                    id: id
                }
            })
            return DATA_DELETED
        } catch (error) {
            return DATA_FAIL_TO_DELETE
        }
    }
    async deletePostBan(id: string, auth: string): Promise<any> {
        if(!this.checkJwtToken(auth)){
            return TOKEN_INVALID;
        }

        try {
            await this.prisma.post_ban.delete({
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