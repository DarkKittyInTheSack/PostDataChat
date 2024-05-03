/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { TypeDao } from "src/dao/TypeDao";

import { PrismaService } from "./PrismaService";
import { Type } from "src/model/Type";

import { DATA_CREATED, DATA_DELETED, DATA_FAIL_TO_CREATE, DATA_FAIL_TO_DELETE, DATA_FAIL_TO_UPDATE, DATA_NOT_EXIST, DATA_UPDATED, REQUIRED_DATA, TOKEN_INVALID } from "src/utils/MessageUtils";
import { getRandomId } from "src/utils/RandomId";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class TypeService implements TypeDao{
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
    checkInputTypeData(typeData: Type,auth:string): string {
        const {typeName} = typeData
        if(typeName == ''){
            return REQUIRED_DATA;
        }
        if(this.getUserFromHeader(auth) == null || this.checkJwtToken(auth) == false){
            return TOKEN_INVALID;
        }
        return ''
    }

    async getAllType(){
        return await this.prisma.type.findMany()
    }

    async getTypeById(id: string): Promise<any>{
        const type = await this.prisma.type.findFirst({
            where:{
                typeId: id
            }
        })

        return type;
    }
    async addNewType(typeData:Type,auth:string): Promise<any> {
        if(this.checkInputTypeData(typeData,auth) != ''){
            return this.checkInputTypeData(typeData,auth)
        }
        const typeId = getRandomId(10);

        try {
            const addNewType = await this.prisma.type.create({
                data:{
                    typeId: typeId,
                    typeName: typeData.typeName
                }
            })
            return DATA_CREATED;
        } catch (error) {
            return DATA_FAIL_TO_CREATE;
        }
        
    }
    async updateCurrentType(typeData:Type, id: string,auth:string): Promise<any> {
        if(this.checkInputTypeData(typeData,auth) != ''){
            return this.checkInputTypeData(typeData,auth)
        }
        if(this.getTypeById(id) == null){
            return DATA_NOT_EXIST;
        }else{
            try {
                const addNewType = await this.prisma.type.update({
                    where:{
                        typeId: id
                    },
                    data:{
                        typeName: typeData.typeName
                    }
                })
                return DATA_UPDATED
            } catch (error) {
                return DATA_FAIL_TO_UPDATE
            }
        }
    }
    async deleteType(id: string,auth:string): Promise<any> {
        if(!this.checkJwtToken(auth)){
            return TOKEN_INVALID;
        }

        try {
            await this.prisma.type.delete({
                where:{
                    typeId: id
                }
            })
            return DATA_DELETED
        } catch (error) {
            return DATA_FAIL_TO_DELETE
        }
    }
    
}