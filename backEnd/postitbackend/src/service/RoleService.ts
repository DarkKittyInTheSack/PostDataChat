/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { RoleDao } from "src/dao/RoleDao";
import { PrismaService } from "./PrismaService";
import { Role } from "src/model/Role";

import { DATA_CREATED, DATA_DELETED, DATA_FAIL_TO_CREATE, DATA_FAIL_TO_DELETE, DATA_FAIL_TO_UPDATE, DATA_NOT_EXIST, DATA_UPDATED, TOKEN_INVALID } from "src/utils/MessageUtils";
import { getRandomId } from "src/utils/RandomId";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class RoleService implements RoleDao{
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

    async getAllRole(){
        return await this.prisma.role.findMany()
    }

    async getRoleById(id: string): Promise<any> {
        const role = await this.prisma.role.findFirst({
            where:{
                roleId: id
            }
        })

        return role;
    }
    async addNewRole(roleData:Role,auth:string): Promise<any>{
        if(!this.checkJwtToken(auth)){
            return TOKEN_INVALID;
        }
        const roleId = getRandomId(10);

        try {
            const roleAdd = await this.prisma.role.create({
                data:{
                    roleId: roleId,
                    roleName: roleData.roleName
                }
            })
            return DATA_CREATED;
        } catch (error) {
            return DATA_FAIL_TO_CREATE;
        }
    }
    async updateCurrentRole(roleData:Role, id: string,auth:string): Promise<any> {
        if(!this.checkJwtToken(auth)){
            return TOKEN_INVALID;
        }
        if(this.getRoleById(id) == null){
            return DATA_NOT_EXIST;
        }else{
            try {
                const roleAdd = await this.prisma.role.update({
                    where:{
                        roleId: id
                    },
                    data:{
                        roleName: roleData.roleName
                    }
                })
                return DATA_UPDATED;
            } catch (error) {
                return DATA_FAIL_TO_UPDATE;
            }
        }
    }
    async deleteRole(id: string,auth:string): Promise<any> {
        if(!this.checkJwtToken(auth)){
            return TOKEN_INVALID;
        }

        try {
            await this.prisma.role.delete({
                where:{
                    roleId: id
                }
            })
            return DATA_DELETED
        } catch (error) {
            return DATA_FAIL_TO_DELETE
        }
    }

    
}