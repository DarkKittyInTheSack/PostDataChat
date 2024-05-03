/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Headers, Param, Post, Put, Req } from "@nestjs/common";
import { responseApi } from "src/config/response";
import { PostUser } from "src/model/PostUser";
import { PostService } from "src/service/PostService";
import { DATA_GET_COMPLETE } from "src/utils/MessageUtils";

@Controller()
export class PostController{
    constructor(private postService:PostService){}

    @Get('/get-post/:id')
    async getPostById( @Param('id') id: string){
        return responseApi(await this.postService.getPostById(id),DATA_GET_COMPLETE)
        
    }

    @Get('/get-post/:typeId')
    async getPostByType( @Param('typeId') typeId: string){
        return responseApi(await this.postService.getPostByType(typeId),DATA_GET_COMPLETE)
        
    }

    @Get('/get-post/:userId')
    async getPostByUserId( @Param('userId') userId: string){
        return responseApi(await this.postService.getPostByUserId(userId),DATA_GET_COMPLETE)
        
    }

    @Get('/get-post/:key')
    async getPostByKey( @Param('key') key: string){
        
    }

    @Post('/add-post')
    async addNewPost(@Body() postData:PostUser,@Headers('Authorization') auth:string){
        return responseApi([],await this.postService.addNewPost(postData,auth))
        
    }

    @Post('/add-post-user/:id')
    async addNewPostUser(@Param('id') id: string,@Body('userId') userId:string,@Headers('Authorization') auth:string){
        return responseApi([],await this.postService.addNewPostUser(id,userId,auth))
        
    }

    @Post('/add-post-type/:id')
    async addNewPostType(@Param('id') id: string,@Body('typeId') typeId:string,@Headers('Authorization') auth:string){
        return responseApi([],await this.postService.addNewPostType(id,typeId,auth))
        
    }

    @Put('/update-post/:id')
    async updatePost( @Param('id') id: string,@Body() postData:PostUser,@Headers('Authorization') auth:string){
        return responseApi([],await this.postService.updateCurrentPost(postData,id,auth))
        
    }

    @Delete('/delete-post/:id')
    async deletePost(@Param('id') id: string,@Headers('Authorization') auth:string){
        return responseApi([],await this.postService.deletePost(id,auth))
        
    }

    @Delete('/delete-post-user/:id')
    async deletePostUser(@Param('id') id: string,@Headers('Authorization') auth:string){
        return responseApi([],await this.postService.deletePostUser(id,auth))
        
    }

    @Delete('/delete-post-type/:id')
    async deletePostType(@Param('id') id: string,@Headers('Authorization') auth:string){
        return responseApi([],await this.postService.deletePostType(id,auth))
        
    }
}