/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Injectable, Req } from "@nestjs/common";
import { AlertDao } from "src/dao/AlertDao";
import { PrismaService } from "./PrismaService";
import { Alert } from "src/model/Alert";

import { DATA_CREATED, DATA_DELETED, DATA_FAIL_TO_CREATE, DATA_FAIL_TO_DELETE, DATA_FAIL_TO_UPDATE, DATA_NOT_EXIST, DATA_UPDATED, REQUIRED_DATA, TOKEN_INVALID } from "src/utils/MessageUtils";
import { getRandomId } from "src/utils/RandomId";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AlertService implements AlertDao{
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

    checkInputAlertData(alertData: Alert,auth:string): string {
        const {alertDescription,alertTitle} = alertData
        if(alertDescription == '' || alertTitle == ''){
            return REQUIRED_DATA;
        }
        if(this.getUserFromHeader(auth) == null || this.checkJwtToken(auth) == false){
            return TOKEN_INVALID;
        }
        return '';
    }
    async getAlertByUserId(userId: string): Promise<any> {
        const alertUser = await this.prisma.user_alert.findMany({
            where:{
                userId: userId,
            },
            include:{
                user:true,
                alert:true
            }
        })
        return alertUser;
    }
    async getAlertByPostId(postId: string): Promise<any> {
        const alertPost = await this.prisma.post_alert.findMany({
            where:{
                postId: postId,
            },
            include:{
                post:true,
                alert:true
            }
        })

        return alertPost;
    }
    async getAlertById(id: string): Promise<any> {
        const alert = await this.prisma.alert.findFirst({
            where:{
                alertId: id,
            }
        })

        return alert;
    }
    async addNewAlert(alertData:Alert,auth:string): Promise<any> {
        if(this.checkInputAlertData(alertData,auth) != ''){
            return this.checkInputAlertData(alertData,auth)
        }
        const alertId = getRandomId(10);      
        const alertDate = new Date();
        
        try {
            await this.prisma.alert.create({
                data:{
                    alertId: alertId,
                    alertTitle: alertData.alertTitle,
                    alertDescription: alertData.alertDescription,
                    alertDate: alertDate
                }
            })
            return DATA_CREATED;
        } catch (error) {
            return DATA_FAIL_TO_CREATE;
        }
        
    }
    async updateAlert(alertData:Alert,id: string,auth:string): Promise<any> {
        if(this.checkInputAlertData(alertData,auth) != ''){
            return this.checkInputAlertData(alertData,auth)
        }  
        if(await this.getAlertById(id) == null){
            return DATA_NOT_EXIST
        }else{
            const alertDate = new Date();
            try {
                await this.prisma.alert.update({
                    where:{
                        alertId: id
                    },
                    data:{
                        alertTitle: alertData.alertTitle,
                        alertDescription: alertData.alertDescription,
                        alertDate: alertDate
                    }
                })
                return DATA_UPDATED;
            } catch (error) {
                return DATA_FAIL_TO_UPDATE;
            }
        }
        
    }
    async removeAlert(id: string,auth:string): Promise<any> {
        if(!this.checkJwtToken(auth)){
            return TOKEN_INVALID;
        }
        
        try {
            await this.prisma.alert.delete({
                where:{
                    alertId: id
                }
            })
            return DATA_DELETED;
        } catch (error) {
            return DATA_FAIL_TO_DELETE;
        }
        
    }

    async addNewAlertUser(alertId: string, userId: string, auth: string): Promise<any> {
        if(!this.checkJwtToken(auth)){
            return TOKEN_INVALID;
        }
        const getAlertId = await this.getAlertById(alertId);
        const getUserData = await this.prisma.user.findFirst({
            where:{
                userId: userId
            }
        })

        if(getAlertId == null && getUserData == null){
            return DATA_NOT_EXIST;
        }

        try {
            await this.prisma.user_alert.create({
                data:{
                    id: getRandomId(10),
                    userId:userId,
                    alertId:alertId
                },
                include:{
                    user:true,
                    alert:true
                }
            })
            return DATA_CREATED;
        } catch (error) {
            return DATA_FAIL_TO_CREATE;
        }
    }
    async addNewAlertPost(alertId: string, postId: string, auth: string): Promise<any> {
        if(!this.checkJwtToken(auth)){
            return TOKEN_INVALID;
        }
        const getAlertId = await this.getAlertById(alertId);
        const getPostData = await this.prisma.post.findFirst({
            where:{
                postId: postId
            }
        })

        if(getAlertId == null && getPostData == null){
            return DATA_NOT_EXIST;
        }

        try {
            await this.prisma.post_alert.create({
                data:{
                    id: getRandomId(10),
                    postId:postId,
                    alertId:alertId
                },
                include:{
                    post:true,
                    alert:true
                }
            })
            return DATA_CREATED;
        } catch (error) {
            return DATA_FAIL_TO_CREATE;
        }
    }

    async removeAlertUser(id: string, auth: string): Promise<any> {
        if(!this.checkJwtToken(auth)){
            return TOKEN_INVALID;
        }
        
        try {
            await this.prisma.user_alert.delete({
                where:{
                    id: id
                }
            })
            return DATA_DELETED;
        } catch (error) {
            return DATA_FAIL_TO_DELETE;
        }
    }
    async removeAlertPost(id: string, auth: string): Promise<any> {
        if(!this.checkJwtToken(auth)){
            return TOKEN_INVALID;
        }
        
        try {
            await this.prisma.post_alert.delete({
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