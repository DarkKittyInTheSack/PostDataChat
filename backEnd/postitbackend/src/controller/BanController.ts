/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Headers, Param, Post, Put, Req } from "@nestjs/common";
import { responseApi } from "src/config/response";
import { Ban } from "src/model/Ban";
import { BanService } from "src/service/BanService";
import { DATA_GET_COMPLETE } from "src/utils/MessageUtils";

@Controller()
export class BanController{
    constructor(private banService: BanService){}

    @Get('/get-ban/:id')
    async getBanById( @Param('id') id:string){
        return responseApi(await this.banService.getBanById(id),DATA_GET_COMPLETE)
        
    }

    @Get('/get-ban-user/:id')
    async getBanByUserId( @Param('id') id:string){
        return responseApi(await this.banService.getBanByUserId(id),DATA_GET_COMPLETE)
        
    }

    @Get('/get-ban-post/:id')
    async getBanByPostId( @Param('id') id:string){
        return responseApi(await this.banService.getBanByPostId(id),DATA_GET_COMPLETE)
        
    }

    @Post('/add-ban')
    async addNewBan(@Body() banData:Ban,@Headers('Authorizations') auth:string){
        return responseApi([],await this.banService.addNewBan(banData,auth))
        
    }

    @Post('/add-ban-user/:banId')
    async addNewBanUser(@Body('userId') userId:string,@Param('banId') id:string,@Headers('Authorizations') auth:string){
        return responseApi([],await this.banService.addNewUserBan(id,userId,auth))
        
    }

    @Post('/add-ban-post/:banId')
    async addNewBanPost(@Body('postId') postId:string,@Param('banId') id:string,@Headers('Authorizations') auth:string){
        return responseApi([],await this.banService.addNewPostBan(id,postId,auth))
        
    }

    @Put('/update-ban/:id')
    async updateCurrentBan( @Param('id') id:string,@Body() banData:Ban,@Headers('Authorizations') auth:string){
        return responseApi([],await this.banService.updateBan(banData,id,auth))
        
    }

    @Delete('/delete-ban/:id')
    async deleteBan( @Param('id') id:string,@Headers('Authorizations') auth:string){
        return responseApi([],await this.banService.deleteBan(id,auth))
        
    }

    @Delete('/delete-ban-user/:id')
    async deleteBanUser( @Param('id') id:string,@Headers('Authorizations') auth:string){
        return responseApi([],await this.banService.deleteUserBan(id,auth))
        
    }

    @Delete('/delete-ban-post/:id')
    async deleteBanPost( @Param('id') id:string,@Headers('Authorizations') auth:string){
        return responseApi([],await this.banService.deletePostBan(id,auth))
        
    }
}