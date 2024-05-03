/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Headers, Param, Post, Put, Req } from "@nestjs/common";
import { responseApi } from "src/config/response";
import { Group } from "src/model/Group";
import { GroupService } from "src/service/GroupService";
import { DATA_GET_COMPLETE } from "src/utils/MessageUtils";

@Controller()
export class GroupController{
    constructor(private groupService:GroupService){}

    @Get('/get-group/:id')
    async getGroupById( @Param('id') id:string){
        return responseApi(await this.groupService.getGroupById(id), DATA_GET_COMPLETE)
        
    }

    @Post('/add-group')
    async addNewGroup(@Body() groupData:Group,@Headers('Authorization') auth:string){
        return responseApi([], await this.groupService.addNewGroup(groupData,auth))
        
    }

    @Post('/add-group-user/:groupId')
    async addNewGroupUser(@Body('userId') userId:string,@Param('groupId') id:string,@Headers('Authorization') auth:string){
        return responseApi([], await this.groupService.addNewUserGroup(id,userId,auth))
        
    }

    @Put('/update-group/:id')
    async updateCurrentGroup( @Param('id') id:string,@Body() groupData:Group,@Headers('Authorization') auth:string){
        return responseApi([], await this.groupService.editCurrentGroup(groupData,id,auth))
        
    }

    @Delete('/delete-group/:id')
    async deleteGroup(@Param('id') id:string,@Headers('Authorization') auth:string){
        return responseApi([], await this.groupService.deleteGroup(id,auth))
        
    }

    @Delete('/delete-group-user/:id')
    async deleteUserGroup(@Param('id') id:string,@Headers('Authorization') auth:string){
        return responseApi([], await this.groupService.deleteUserGroup(id,auth))
        
    }
}