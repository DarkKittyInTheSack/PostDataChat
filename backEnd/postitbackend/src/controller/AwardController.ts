/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Headers, Param, Post, Put, Req } from "@nestjs/common";
import { auth } from "googleapis/build/src/apis/abusiveexperiencereport";
import { responseApi } from "src/config/response";
import { Award } from "src/model/Award";
import { AwardService } from "src/service/AwardService";
import { DATA_GET_COMPLETE } from "src/utils/MessageUtils";

@Controller()
export class AwardController{
    constructor(private awardService:AwardService){}

    @Get('/get-award/:id')
    async getAwardById(@Param('id') id:string){
        return responseApi(await this.awardService.getAwardById(id),DATA_GET_COMPLETE)
        
    }

    @Get('/get-award-user/:id')
    async getAwardByUserId(@Param('id') id:string){
        return responseApi(await this.awardService.getAwardByUserId(id),DATA_GET_COMPLETE)
        
    }

    @Get('/get-award-post/:id')
    async getAwardByPostId(@Param('id') id:string){
        return responseApi(await this.awardService.getAwardByPostId(id),DATA_GET_COMPLETE)
        
    }

    @Post('/add-award')
    async addAward(@Body() awardData:Award,@Headers('Authorization') auth:string){
        return responseApi([],await this.awardService.addNewAward(awardData,auth))
        
    }

    @Post('/add-award-user/:awardId')
    async addAwardUser(@Body('userId') userId:string,@Param('awardId') awardId:string,@Headers('Authorization') auth:string){
        return responseApi([],await this.awardService.addUserAward(awardId,userId,auth))
        
    }

    @Post('/add-award-post/:awardId')
    async addAwardPost(@Body('postId') postId:string,@Param('awardId') awardId:string,@Headers('Authorization') auth:string){
        return responseApi([],await this.awardService.addPostAward(awardId,postId,auth))
        
    }

    @Put('/update-award/:id')
    async updateAward(@Param('id') id:string, @Body() awardData:Award,@Headers('Authorization') auth:string){
        return responseApi([],await this.awardService.updateAward(awardData,id,auth))
        
    }

    @Delete('/delete-award/:id')
    async deleteAward(@Param('id') id:string,@Headers('Authorization') auth:string){
        return responseApi([],await this.awardService.deleteAward(id,auth))
        
    }

    @Delete('/delete-award-user/:id')
    async deleteUserAward(@Param('id') id:string,@Headers('Authorization') auth:string){
        return responseApi([],await this.awardService.deleteUserAward(id,auth))
        
    }

    @Delete('/delete-award-post/:id')
    async deletePostAward(@Param('id') id:string,@Headers('Authorization') auth:string){
        return responseApi([],await this.awardService.deletePostAward(id,auth))
        
    }
}