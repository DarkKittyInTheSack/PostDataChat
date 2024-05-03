/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Headers, Param, Post, Put, Req } from "@nestjs/common";
import { responseApi } from "src/config/response";
import { SavePost } from "src/model/SavePost";
import { SavePostService } from "src/service/SavePostService";
import { DATA_GET_COMPLETE } from "src/utils/MessageUtils";

@Controller()
export class SavePostController{
    constructor(private savePostService:SavePostService){}

    @Get('/get-save-post/:id')
    async getSavePostById( @Param('id') id: string){
        return responseApi(await this.savePostService.getSavePostById(id),DATA_GET_COMPLETE)
        
    }

    @Post('/add-save-post')
    async addNewSavePost(@Body() savePostData: SavePost,@Headers('Authorization') auth:string){
        return responseApi([],await this.savePostService.addNewSavePost(savePostData,auth))
        
    }

    @Post('/add-save-post-user/:id')
    async addNewSavePostUser(@Param('id') id: string,@Body('userId') userId: string,@Headers('Authorization') auth:string){
        return responseApi([],await this.savePostService.addNewSavePostUser(id,userId,auth))
        
    }

    @Post('/add-save-post-post/:id')
    async addNewSavePostPost(@Param('id') id: string,@Body('postId') postId: string,@Headers('Authorization') auth:string){
        return responseApi([],await this.savePostService.addNewSavePostPost(id,postId,auth))
        
    }

    @Put('/update-save-post/:id')
    async updateSavePost( @Param('id') id: string,@Body() savePostData: SavePost,@Headers('Authorization') auth:string){
        return responseApi([],await this.savePostService.updateCurrentSavePost(savePostData,id,auth))
        
    }

    @Delete('/delete-save-post/:id')
    async deleteSavePost( @Param('id') id: string,@Headers('Authorization') auth:string){
        return responseApi([],await this.savePostService.deleteSavePost(id,auth))
        
    }

    @Delete('/delete-save-post-user/:id')
    async deleteSavePostUser( @Param('id') id: string,@Headers('Authorization') auth:string){
        return responseApi([],await this.savePostService.deleteSavePost(id,auth))
        
    }

    @Delete('/delete-save-post-post/:id')
    async deleteSavePostPost( @Param('id') id: string,@Headers('Authorization') auth:string){
        return responseApi([],await this.savePostService.deleteSavePost(id,auth))
        
    }
}