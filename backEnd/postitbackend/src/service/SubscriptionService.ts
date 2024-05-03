/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { SubscriptionDao } from "src/dao/SubscriptionDao";
import { PrismaService } from "./PrismaService";
import { Subscription } from "src/model/Subscription";

import { DATA_CREATED, DATA_DELETED, DATA_FAIL_TO_CREATE, DATA_FAIL_TO_DELETE, DATA_FAIL_TO_UPDATE, DATA_NOT_EXIST, DATA_UPDATED, TOKEN_INVALID } from "src/utils/MessageUtils";
import { getRandomId } from "src/utils/RandomId";
import { JwtService } from "@nestjs/jwt";


@Injectable()
export class SubscriptionService implements SubscriptionDao{
    constructor(private prisma: PrismaService, private jwtService:JwtService){}
    async addNewSubscriptionUser(subscriptionId: string, userId: string, auth: string): Promise<any> {
        if(!this.checkJwtToken(auth)){
            return TOKEN_INVALID;
        }

        const getUserData = this.prisma.user.findFirst({
            where:{
                userId: userId
            }
        })

        if(getUserData === null && await this.getSubscriptionById(subscriptionId) === null){
            return DATA_NOT_EXIST
        }

        try {
            const comment = await this.prisma.user_subscription.create({
                data:{
                    id:getRandomId(10),
                    userId: userId,
                    subscriptionId: subscriptionId,
                    isNotification:true
                }
            })
            return DATA_CREATED
        } catch (error) {
            return DATA_FAIL_TO_CREATE
        }
    }
    async deleteSubscriptionUser(id: string, auth: string): Promise<any> {
        if(!this.checkJwtToken(auth)){
            return TOKEN_INVALID;
        }

        try {
            await this.prisma.user_subscription.delete({
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
    async getSubscriptionById(id: string): Promise<any> {
        const subscription = await this.prisma.subscription.findFirst({
            where:{
                subscriptionId: id
            }
        })

        return subscription;
    }
    async addNewSubscription(subscriptionData:Subscription,auth:string): Promise<any> {
        if(!this.checkJwtToken(auth)){
            return TOKEN_INVALID;
        }
        const subscriptionId = getRandomId(10);
        const subscriptionDate = new Date();

        try {
            const addData = await this.prisma.subscription.create({
                data:{
                    subscriptionId: subscriptionId,
                    subscriptionDate: subscriptionDate
                }
            })
            return DATA_CREATED;
        } catch (error) {
            return DATA_FAIL_TO_CREATE;
        }
    }
    async updateCurrentSubscription(subscriptionData:Subscription, id: string,auth:string): Promise<any> {
        if(!this.checkJwtToken(auth)){
            return TOKEN_INVALID;
        }
        if(await this.getSubscriptionById(id) == null){
            return DATA_NOT_EXIST;
        }else{
            try {
                const subscriptionDate = new Date();

                const updateData = await this.prisma.subscription.update({
                    where:{
                        subscriptionId: id
                    },
                    data:{
                        subscriptionDate: subscriptionDate
                    }
                })
                return DATA_UPDATED
            } catch (error) {
                return DATA_FAIL_TO_UPDATE
            }
        }
        
    }
    async deleteSubscription(id: string,auth:string): Promise<any> {
        if(!this.checkJwtToken(auth)){
            return TOKEN_INVALID;
        }

        try {
            await this.prisma.subscription.delete({
                where:{
                    subscriptionId: id
                }
            })
            return DATA_DELETED
        } catch (error) {
            return DATA_FAIL_TO_DELETE
        }
    }
}