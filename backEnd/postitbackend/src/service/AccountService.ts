/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */

import { Injectable } from "@nestjs/common";
import { PrismaService } from "./PrismaService";

import * as bcrypt from 'bcrypt';
import { Login } from 'src/model/Login';
import { Account } from 'src/model/Account';
import { ResetPassword } from 'src/model/ResetPassword';
import { AccountDao } from 'src/dao/AccountDao';
import { ACCOUNT_EXIST, CANNOT_LOGIN, DATA_CREATED, DATA_FAIL_TO_CREATE, DATA_FAIL_TO_UPDATE, DATA_GET_COMPLETE, DATA_UPDATED, LOGIN_COMPLETE, LOGIN_FAIL, PASSWORD_NOT_MATCH, REQUIRED_DATA, REQUIRED_ID, TOKEN_INVALID } from "src/utils/MessageUtils";
import { getRandomId } from "src/utils/RandomId";
import { responseApi } from "src/config/response";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AccountService implements AccountDao{
    constructor(private prisma: PrismaService, private jwtService:JwtService) {}

    checkJwtToken(jwtToken:string){
        const checkToken = this.jwtService.verify(jwtToken);
        let isVerify = false;
        checkToken === null ? isVerify = true : isVerify = false
        return isVerify;
    }

    getUserFromHeader(jwtToken:string){
        return (this.jwtService.decode(jwtToken))
    }

    

    async getAllData():Promise<any>{
        const data = await this.prisma.account.findMany()
        return data
    }

    async getDataByUsername(username:string){
        const accountData = await this.prisma.account.findFirst({
            where:{
                username: username
            }
        })

        return accountData;
    }
    async getAccountById(id: string): Promise<any>{
        if(id == ''){
            return REQUIRED_ID;
        }else{
            const accountData = await this.prisma.account.findFirst({
                where:{
                    accountId: id
                }
            })
            return responseApi(accountData,DATA_GET_COMPLETE)
        }
    }

    checkInputAccountData(registerData: Account): string {
        const {passwords,username,roleId} = registerData
        if(passwords === '' || username === '' || roleId === '' ){
            return REQUIRED_DATA;
        }
        if(this.getUserFromHeader('') == null || this.checkJwtToken('') == false){
            return TOKEN_INVALID;
        }
        return ''
    }

    async login(loginData: Login): Promise<any> {
        if(loginData.username == ''){
            return REQUIRED_DATA;
        }else{
            if(this.getDataByUsername(loginData.username) != null && loginData.passwords != ''){
                const currentAccount = await this.getDataByUsername(loginData.username)
                let tokenData = await this.jwtService.signAsync({accountId: currentAccount.accountId,username: loginData.username})
                if(bcrypt.compareSync(loginData.passwords,currentAccount.passwords) && currentAccount != null){
                    try {
                        await this.prisma.account.update({
                            where:{
                                accountId: currentAccount.accountId
                            },
                            data:{
                                refreshToken: tokenData
                            }
                        })
                        return {userToken: tokenData};
                    } catch (error) {
                        return CANNOT_LOGIN;
                    }
                    
                }
            }else{
                return responseApi([],LOGIN_FAIL);
            }
        }

    }
    async register(registerData:Account): Promise<any>{
        const roleSelector = await this.prisma.role.findFirst({
            where:{
                roleName: 'User'
            }
        })

        if(await this.getDataByUsername(registerData.username) != null){
            return ACCOUNT_EXIST
        }else{
            try {
                await this.prisma.account.create({
                    data:{
                        accountId: getRandomId(10),
                        username: registerData.username,
                        passwords: bcrypt.hashSync(registerData.passwords,10),
                        roleId: roleSelector.roleId,
                        refreshToken: ''
                    }
                })

                return DATA_CREATED
            } catch (error) {
                return DATA_FAIL_TO_CREATE
            }
        }
    }

    async resetPassword(resetPasswordData: ResetPassword, id:string,res:Response): Promise<any> {

        if(!resetPasswordData.password.includes(resetPasswordData.confirmPassword) || this.getAccountById(id) == null){
            return PASSWORD_NOT_MATCH;
        }else{
            try {
                await this.prisma.account.update({
                    where:{
                        accountId: id
                    },
                    data:{
                        passwords: resetPasswordData.password
                    }
                })
                return DATA_UPDATED;
            } catch (error) {
                return DATA_FAIL_TO_UPDATE;
            }
            
        }
    }
    
    resetLoginToken(token: string): void {
        
    }
}
