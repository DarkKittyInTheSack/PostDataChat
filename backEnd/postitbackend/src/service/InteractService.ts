/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { InteractDao } from "src/dao/InteractDao";
import { PrismaService } from "./PrismaService";
import { Interact } from "src/model/Interact";

import { DATA_CREATED, DATA_DELETED, DATA_FAIL_TO_CREATE, DATA_FAIL_TO_DELETE, DATA_FAIL_TO_UPDATE, DATA_NOT_EXIST, DATA_UPDATED, TOKEN_INVALID } from "src/utils/MessageUtils";
import { getRandomId } from "src/utils/RandomId";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class InteractService implements InteractDao{
    constructor(private prisma: PrismaService, private jwtService:JwtService){}
    async addNewUserInteract(interactId: string, userId: string, auth: string): Promise<any> {
        if(!this.checkJwtToken(auth)){
            return TOKEN_INVALID;
        }

        const getUserData = this.prisma.user.findFirst({
            where:{
                userId: userId
            }
        })

        if(getUserData === null && await this.getInteract(interactId) === null){
            return DATA_NOT_EXIST
        }

        try {
            const comment = await this.prisma.user_interact.create({
                data:{
                    id:getRandomId(10),
                    userId: userId,
                    interactId: interactId
                }
            })
            return DATA_CREATED
        } catch (error) {
            return DATA_FAIL_TO_CREATE
        }
    }
    async addNewPostInteract(interactId: string, postId: string, auth: string): Promise<any> {
        if(!this.checkJwtToken(auth)){
            return TOKEN_INVALID;
        }

        const getPostData = this.prisma.post.findFirst({
            where:{
                postId: postId
            }
        })

        if(getPostData === null && await this.getInteract(interactId) === null){
            return DATA_NOT_EXIST
        }

        try {
            const comment = await this.prisma.post_interact.create({
                data:{
                    id:getRandomId(10),
                    postId: postId,
                    interactId: interactId
                }
            })
            return DATA_CREATED
        } catch (error) {
            return DATA_FAIL_TO_CREATE
        }
    }
    async deleteUserInteract(id: string, auth: string): Promise<any> {
        if(!this.checkJwtToken(auth)){
            return TOKEN_INVALID;
        }

        try {
            await this.prisma.user_interact.delete({
                where:{
                    id: id
                }
            })
            return DATA_DELETED
        } catch (error) {
            return DATA_FAIL_TO_DELETE
        }
    }
    async deletePostInteract(id: string, auth: string): Promise<any> {
        if(!this.checkJwtToken(auth)){
            return TOKEN_INVALID;
        }

        try {
            await this.prisma.post_interact.delete({
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
    async getInteract(id: string): Promise<any> {
        const interact = await this.prisma.interact.findFirst({
            where:{
                interactId: id
            }
        })

        return interact
    }
    async addNewInteract(interactData:Interact,auth:string): Promise<any> {
        if(!this.checkJwtToken(auth)){
            return TOKEN_INVALID;
        }
        const interactId = getRandomId(10);

        try {
            const interact = await this.prisma.interact.create({
                data:{
                    interactId: interactId,
                    isLike: interactData.isLike,
                    isDislike: interactData.isDislike
                }
            })
            return DATA_CREATED;
        } catch (error) {
            return DATA_FAIL_TO_CREATE;
        }

    }
    async updateCurrentInteract(interactData:Interact, id: string,auth:string): Promise<any> {
        if(!this.checkJwtToken(auth)){
            return TOKEN_INVALID;
        }
        if(await this.getInteract(id) == null){
            return DATA_NOT_EXIST;
        }else{
            try {
                const interactUpdate = await this.prisma.interact.update({
                    where:{
                        interactId: id
                    },
                    data:{
                        isLike: interactData.isLike,
                        isDislike: interactData.isDislike
                    }
                })
                return DATA_UPDATED;
            } catch (error) {
                return DATA_FAIL_TO_UPDATE;
            }
        }
    }
    async deleteInteract(id: string,auth:string): Promise<any> {
        if(!this.checkJwtToken(auth)){
            return TOKEN_INVALID;
        }

        try {
            await this.prisma.interact.delete({
                where:{
                    interactId: id
                }
            })
            return DATA_DELETED
        } catch (error) {
            return DATA_FAIL_TO_DELETE
        }
    }
    
    
}