/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Headers, Param, Post, Put, Req } from "@nestjs/common";
import { responseApi } from "src/config/response";
import { Comment } from "src/model/Comment";
import { CommentService } from "src/service/CommentService";
import { DATA_GET_COMPLETE } from "src/utils/MessageUtils";

@Controller()
export class CommentController{
    constructor(private commentService:CommentService){}
    
    @Get('/get-comment/:id')
    async getCommentById(@Param('id') id:string){
        return responseApi(await this.commentService.getCommentById(id),DATA_GET_COMPLETE)
        
    }

    @Get('/get-comment-user/:id')
    async getCommentByUserId(@Param('id') id:string){
        return responseApi(await this.commentService.getCommentById(id),DATA_GET_COMPLETE)
        this.commentService.getCommentByUserId(id)
    }

    @Get('/get-comment-post/:id')
    async getCommentByPostId(@Param('id') id:string){
        return responseApi(await this.commentService.getCommentByPostId(id),DATA_GET_COMPLETE)
        
    }

    @Post('/add-comment')
    async addNewComment(@Body() commentData: Comment,@Headers('Authorization') auth:string){
        return responseApi([],await this.commentService.addNewComment(commentData,auth))
        
    }

    @Post('/add-comment-user/:commentId')
    async addNewCommentUser(@Body('userId') userId: string,@Param('commentId') id:string,@Headers('Authorization') auth:string){
        return responseApi([],await this.commentService.addNewUserComment(id,userId,auth))
        
    }

    @Post('/add-comment-post/:commentId')
    async addNewCommentPost(@Body('postId') postId: string,@Param('commentId') id:string,@Headers('Authorization') auth:string){
        return responseApi([],await this.commentService.addNewPostComment(id,postId,auth))
        
    }

    @Put('/update-comment/:id')
    async updateCurrentComment(@Param('id') id:string,@Body() commentData: Comment,@Headers('Authorization') auth:string){
        return responseApi([],await this.commentService.editComment(commentData,id,auth))
        
    }

    @Delete('/delete-comment/:id')
    async deleteComment( @Param('id') id:string,@Headers('Authorization') auth:string){
        return responseApi([],await this.commentService.deleteComment(id,auth))
        
    }

    @Delete('/delete-comment/:id')
    async deleteUserComment( @Param('id') id:string,@Headers('Authorization') auth:string){
        return responseApi([],await this.commentService.deleteUserComment(id,auth))
        
    }

    @Delete('/delete-comment/:id')
    async deletePostComment( @Param('id') id:string,@Headers('Authorization') auth:string){
        return responseApi([],await this.commentService.deletePostComment(id,auth))
        
    }
}