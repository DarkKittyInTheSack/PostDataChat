/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from "@nestjs/common";
import { NotificationDao } from "src/dao/NotificationDao";
import { PrismaService } from "./PrismaService";
import { Notification } from "src/model/Notification";

import { DATA_CREATED, DATA_DELETED, DATA_FAIL_TO_CREATE, DATA_FAIL_TO_DELETE, DATA_FAIL_TO_UPDATE, DATA_NOT_EXIST, DATA_UPDATED, REQUIRED_DATA, TOKEN_INVALID } from "src/utils/MessageUtils";
import { getRandomId } from "src/utils/RandomId";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class NotificationService implements NotificationDao{
    constructor(private prisma: PrismaService, private jwtService:JwtService){}
    async addNewUserNotification(notificationId: string, userId: string, auth: string): Promise<any> {
        if(!this.checkJwtToken(auth)){
            return TOKEN_INVALID;
        }

        const getUserData = this.prisma.user.findFirst({
            where:{
                userId: userId
            }
        })

        if(getUserData === null && await this.getNotification(notificationId) === null){
            return DATA_NOT_EXIST
        }

        try {
            const comment = await this.prisma.user_notification.create({
                data:{
                    id:getRandomId(10),
                    userId: userId,
                    notificationId: notificationId
                }
            })
            return DATA_CREATED
        } catch (error) {
            return DATA_FAIL_TO_CREATE
        }
    }
    async deleteUserNotification(id: string, auth: string): Promise<any> {
        if(!this.checkJwtToken(auth)){
            return TOKEN_INVALID;
        }

        try {
            await this.prisma.user_notification.delete({
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
    checkInputNotificationData(notificationData: Notification,auth:string): string {
        const {notificationTitle,notificationContent} = notificationData;

        if(notificationTitle == '' || notificationContent == ''){
            return REQUIRED_DATA;
        }
        if(this.getUserFromHeader(auth) == null || this.checkJwtToken(auth) == false){
            return TOKEN_INVALID;
        }
        return ''
    }
    async getNotificationByUserId(userId: string): Promise<any>{
        const notificationUser = await this.prisma.user_notification.findMany({
            where:{
                userId:userId
            }
        })
        return notificationUser;
    }
    async getNotification(id: string): Promise<any> {
        const notificationUser = await this.prisma.notification.findFirst({
            where:{
                notificationId:id
            }
        })

        return notificationUser;
    }
    async addnewNotification(notificationData:Notification,auth:string): Promise<any> {
        if(this.checkInputNotificationData(notificationData,auth) != ''){
            return this.checkInputNotificationData(notificationData,auth)
        }
        const notificationId = getRandomId(10);
        const notificationDate = new Date();

        try {
            const addNewNotification = await this.prisma.notification.create({
                data:{
                    notificationId: notificationId,
                    notificationTitle: notificationData.notificationTitle,
                    notificationContent: notificationData.notificationContent,
                    notificationDate: notificationDate
                }
            })
            return DATA_CREATED;
        } catch (error) {
            return DATA_FAIL_TO_CREATE;
        }

    }
    async updateCurrentNotification(notificationData:Notification, id: string,auth:string): Promise<any> {
        if(this.checkInputNotificationData(notificationData,auth) != ''){
            return this.checkInputNotificationData(notificationData,auth)
        }
        if(await this.getNotification(id) == null){
            return DATA_NOT_EXIST
        }else{
            try {
                const notificationDate = new Date();

                const updateNotification = await this.prisma.notification.update({
                    where:{
                        notificationId: id
                    },
                    data:{
                        notificationTitle: notificationData.notificationTitle,
                        notificationContent: notificationData.notificationContent,
                        notificationDate: notificationDate
                    }
                })
                return DATA_UPDATED
            } catch (error) {
                return DATA_FAIL_TO_UPDATE
            }
        }
        
    }
    async deleteNotification(id: string,auth:string): Promise<any> {
        if(!this.checkJwtToken(auth)){
            return TOKEN_INVALID;
        }

        try {
            await this.prisma.notification.delete({
                where:{
                    notificationId: id
                }
            })
            return DATA_DELETED
        } catch (error) {
            return DATA_FAIL_TO_DELETE
        }
    }
    
}