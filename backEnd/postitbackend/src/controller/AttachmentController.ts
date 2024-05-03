/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Headers, Param, Post, Put, Req, UploadedFile, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { responseApi } from "src/config/response";
import { Attachment } from "src/model/Attachment";
import { AttachmentService } from "src/service/AttachmentService";
import { DATA_GET_COMPLETE } from "src/utils/MessageUtils";

let imageUrl = ''

@Controller()
export class AttachmentController{
    constructor(private attachmentService:AttachmentService){}

    @Get('/get-attachment/:id')
    async getAttachmentById( @Param('id') id:string){
        return responseApi(await this.attachmentService.getAttachmentById(id),DATA_GET_COMPLETE)
        
    }

    @Post('/add-attachment')
    @UseInterceptors(FileInterceptor('file'))
    async addAttachment(@UploadedFile() file:any,@Headers('Authorization') auth:string){
        imageUrl = await this.attachmentService.uploadImageAttachment(file)
        return responseApi([],await this.attachmentService.addNewAttachment(imageUrl,auth))
        
    }

    @Post('/add-attachment-user/:attachmentId')
    async addUserAttachment(@Body('userId') userId:string,@Headers('Authorization') auth:string,@Param('attachmentId') attachmentId:string,){
        return responseApi([],await this.attachmentService.addUserAttachment(attachmentId,userId,auth))
        
    }

    @Post('/add-attachment-post/:attachmentId')
    async addPostAttachment(@Body('postId') postId:string,@Headers('Authorization') auth:string,@Param('attachmentId') attachmentId:string,){
        return responseApi([],await this.attachmentService.addPostAttachment(attachmentId,postId,auth))
        
    }

    @Put('/update-attachment/:id')
    @UseInterceptors(FileInterceptor('file'))
    async updateCurrentAtachment( @Param('id') id:string,@UploadedFile() file:any,@Headers('Authorization') auth:string){
        imageUrl = await this.attachmentService.uploadImageAttachment(file)
        return responseApi([],await this.attachmentService.editCurrentAttachment(id,imageUrl,auth))
        
    }

    @Delete('/delete-attachment/:id')
    async deleteAttachment( @Param('id') id:string,@Headers('Authorization') auth:string){
        return responseApi([],await this.attachmentService.deleteAttachment(id,auth))
    }

    @Delete('/delete-attachment-user/:id')
    async deleteAttachmentUser( @Param('id') id:string,@Headers('Authorization') auth:string){
        return responseApi([],await this.attachmentService.deleteUserAttachment(id,auth))
    }

    @Delete('/delete-attachment-post/:id')
    async deleteAttachmentPost( @Param('id') id:string,@Headers('Authorization') auth:string){
        return responseApi([],await this.attachmentService.deletePostAttachment(id,auth))
    }
}