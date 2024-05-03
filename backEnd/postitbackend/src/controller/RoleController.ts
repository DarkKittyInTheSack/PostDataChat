/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Headers, Param, Post, Put, Req } from "@nestjs/common";
import { responseApi } from "src/config/response";
import { Role } from "src/model/Role";
import { RoleService } from "src/service/RoleService";
import { DATA_GET_COMPLETE } from "src/utils/MessageUtils";

@Controller()
export class RoleController{
    constructor(private roleService:RoleService){}

    @Get('/get-role-all')
    async getAllRole(){
        return responseApi(await this.roleService.getAllRole(), DATA_GET_COMPLETE);
    }

    @Get('/get-role/:id')
    async getRoleById(@Param('id') id: string){
        return responseApi(await this.roleService.getRoleById(id), DATA_GET_COMPLETE);
    }

    @Post('/add-role')
    async addNewRole(@Body() roleData:Role,@Headers('Authorization') auth:string){
        return responseApi([],await this.roleService.addNewRole(roleData,auth));
    }

    @Put('/update-role/:id')
    async updateRole(@Param('id') id: string,@Body() roleData:Role,@Headers('Authorization') auth:string){
        return responseApi([], await this.roleService.updateCurrentRole(roleData,id,auth));
    }

    @Delete('/delete-role/:id')
    async deleteRole(@Param('id') id: string,@Headers('Authorization') auth:string){
        return responseApi([],await this.roleService.deleteRole(id,auth));
        
    }
}