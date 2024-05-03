/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Inject, Injectable } from "@nestjs/common";
import { UserDao } from "src/dao/UserDao";
import { PrismaService } from "./PrismaService";
import { Cache, CACHE_MANAGER } from "@nestjs/cache-manager";
import { User } from "src/model/User";

import { DATA_CREATED, DATA_DELETED, DATA_FAIL_TO_CREATE, DATA_FAIL_TO_DELETE, DATA_FAIL_TO_UPDATE, DATA_NOT_EXIST, DATA_UPDATED, REQUIRED_DATA, TOKEN_INVALID, URL_NOT_FOUND } from "src/utils/MessageUtils";
import { getRandomId } from "src/utils/RandomId";
import { uploadFile } from "src/middleware/cloudinary";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class UserService implements UserDao{
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
    checkInputUserData(userData: User,auth:string): string {
        const {age,description,email,fullname} = userData

        if(age == 0 || description == '' || email == '' || fullname == ''){
            return REQUIRED_DATA;
        }
        if(this.getUserFromHeader(auth) == null || this.checkJwtToken(auth) == false){
            return TOKEN_INVALID;
        }
        return ''
    }

    async uploadAvatar(file:any){
        const uploadImage = await uploadFile(file)
        return uploadImage.url;
    }
    
    async getUserById(id: string): Promise<any> {
        const userData = await this.prisma.user.findFirst({
            where:{
                userId: id
            }
        })

        return userData
    }

    async getAllUser(): Promise<any> {
        return await this.prisma.user.findMany()
    }

    // async cacheUserInformation(id:string){
    //     const cacheData = this.getUserById(id);
    //     try {
    //         this.cacheService.set(id.toString(), cacheData)
    //         return cacheData;
    //     } catch (error) {
    //         return error;
    //     }
    // }

    async getUserBySubscriptionId(subscriptionId: string): Promise<any> {
        const user = await this.prisma.user_subscription.findFirst({
            where:{
                subscriptionId: subscriptionId
            }
        })

        return user;
    }
    async getUserbyAddressId(addressId: string): Promise<any> {
        const user = await this.prisma.user_address.findFirst({
            where:{
                addressId: addressId
            }
        })

        return user;
    }
    async addNewUser(userData:User,avatarUrl:string,auth:string): Promise<any> {
        if(this.checkInputUserData(userData,auth) != ''){
            return this.checkInputUserData(userData,auth)
        }
        const userId = getRandomId(10);

        const currentAccount = await this.prisma.account.findFirst({
            where:{
                accountId: userData.accountId
            }
        })

        if(currentAccount == null){
            return DATA_NOT_EXIST;
        }else{
            try {

                
                const addData = await this.prisma.user.create({
                    data:{
                        userId: userId,
                        fullname: userData.fullname,
                        age: userData.age,
                        email: userData.email,
                        accountId: currentAccount.accountId,
                        images: avatarUrl==null ? URL_NOT_FOUND : avatarUrl,
                        descriptions: userData.description,
                    }
                })
    
                return DATA_CREATED;
            } catch (error) {
                console.log(error)
                return DATA_FAIL_TO_CREATE;
            }
        }

        
    }
    async updateCurrentUser(userData:User, id: string,avatarUrl:string,auth:string): Promise<any> {
        if(this.checkInputUserData(userData,auth) != ''){
            return this.checkInputUserData(userData,auth)
        }
        if(await this.getUserById(id) == null){
            return DATA_NOT_EXIST;
        }else{
            try {
                const addData = await this.prisma.user.update({
                    where:{
                        userId: id
                    },
                    data:{
                        fullname: userData.fullname,
                        age: userData.age,
                        email: userData.email,
                        accountId: userData.accountId,
                        images: avatarUrl==null ? URL_NOT_FOUND : avatarUrl,
                        descriptions: userData.description,
                    }
                })

                return DATA_UPDATED;
            } catch (error) {
                return DATA_FAIL_TO_UPDATE;
            }
        }

        
    }
    async deleteUser(id: string,auth:string): Promise<any> {
        if(!this.checkJwtToken(auth)){
            return TOKEN_INVALID;
        }

        try {
            await this.prisma.user.delete({
                where:{
                    userId: id
                }
            })
            return DATA_DELETED
        } catch (error) {
            return DATA_FAIL_TO_DELETE
        }
    }
    
    
}