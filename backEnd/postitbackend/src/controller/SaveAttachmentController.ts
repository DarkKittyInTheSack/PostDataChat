/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Headers, Param, Post, Put, Req } from "@nestjs/common";
import { responseApi } from "src/config/response";
import { SaveAttachment } from "src/model/SaveAttachment";
import { SaveAttachmentService } from "src/service/SaveAttachmentService";
import { DATA_GET_COMPLETE } from "src/utils/MessageUtils";

@Controller()
export class SaveAttachmentController{
    constructor(private saveAttachmentService:SaveAttachmentService){}

    @Get('/get-save-attachment/:id')
    async getSaveAttachmentId( @Param('id') id: string){
        return responseApi(await this.saveAttachmentService.getSaveAttachmentById(id),DATA_GET_COMPLETE)
        
    }

    @Post('/add-save-attachment')
    async addNewSaveAttachment(@Body() saveAttachmentData:SaveAttachment,@Headers('Authorization') auth:string){
        return responseApi([],await this.saveAttachmentService.addNewSaveAttachment(saveAttachmentData,auth))
        
    }

    @Post('/add-save-attachment-user/:id')
    async addNewSaveAttachmentUser(@Param('id') id: string,@Body('userId') userId:string,@Headers('Authorization') auth:string){
        return responseApi([],await this.saveAttachmentService.addNewSaveAttachmentUser(id,userId,auth))
        
    }

    @Put('/update-save-attachment/:id')
    async updateSaveAttachment( @Param('id') id: string,@Body() saveAttachmentData:SaveAttachment,@Headers('Authorization') auth:string){
        return responseApi([],await this.saveAttachmentService.updateCurrentSaveAttachment(saveAttachmentData,id,auth))
        
    }

    @Delete('/delete-save-attachment/:id')
    async deleteSaveAttachment(@Param('id') id: string,@Headers('Authorization') auth:string){
        return responseApi([],await this.saveAttachmentService.deleteSaveAttachment(id,auth))
        
    }

    @Delete('/delete-save-attachment-user/:id')
    async deleteSaveAttachmentUser(@Param('id') id: string,@Headers('Authorization') auth:string){
        return responseApi([],await this.saveAttachmentService.deleteSaveAttachment(id,auth))
        
    }
}