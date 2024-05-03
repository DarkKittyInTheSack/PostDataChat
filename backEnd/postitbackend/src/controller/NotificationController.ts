/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Headers, Param, Post, Put, Req } from "@nestjs/common";
import { responseApi } from "src/config/response";
import { Notification } from "src/model/Notification";
import { NotificationService } from "src/service/NotificationService";
import { DATA_GET_COMPLETE } from "src/utils/MessageUtils";

@Controller()
export class NotificationController{
    constructor(private notificationService:NotificationService){}

    @Get('/get-notification/:id')
    async getNotificationById( @Param('id') id: string){
        return responseApi(await this.notificationService.getNotification(id),DATA_GET_COMPLETE)
        
    }

    @Get('/get-notification-user/:id')
    async getNotificationByUserId( @Param('id') id: string){
        return responseApi(await this.notificationService.getNotificationByUserId(id),DATA_GET_COMPLETE)
        
    }

    @Post('/add-notification')
    async addNewNotification(@Body() notificationData:Notification,@Headers('Authorization') auth:string){
        return responseApi([],await this.notificationService.addnewNotification(notificationData,auth))
        
    }

    @Post('/add-notification-user/:id')
    async addNewUserNotification(@Body('userId') userId:string,@Headers('Authorization') auth:string,@Param('id') id: string){
        return responseApi([],await this.notificationService.addNewUserNotification(id,userId,auth))
        
    }

    @Put('/update-notification/:id')
    async updateNotification( @Param('id') id: string,@Body() notificationData:Notification,@Headers('Authorization') auth:string){
        return responseApi([],await this.notificationService.updateCurrentNotification(notificationData,id,auth))
        
    }

    @Delete('/delete-notification/:id')
    async deleteNotification(@Param('id') id: string,@Headers('Authorization') auth:string){
        return responseApi([],await this.notificationService.deleteNotification(id,auth))
        
    }

    @Delete('/delete-notification-user/:id')
    async deleteUserNotification(@Param('id') id: string,@Headers('Authorization') auth:string){
        return responseApi([],await this.notificationService.deleteUserNotification(id,auth))
        
    }
}