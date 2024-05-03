/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Headers, Param, Post, Put, Req } from "@nestjs/common";
import { responseApi } from "src/config/response";
import { Alert } from "src/model/Alert";
import { AlertService } from "src/service/AlertService";
import { DATA_GET_COMPLETE } from "src/utils/MessageUtils";

@Controller()
export class AlertController{
    constructor(private alertService:AlertService){}

    @Get('/get-alert/:id')
    async getAlertById(@Param('id') id: string){
        return responseApi(await this.alertService.getAlertById(id),DATA_GET_COMPLETE);
        
    }

    @Get('/get-alert-user/:id')
    async getAlertByUserId(@Param('id') id: string){
        return responseApi(await this.alertService.getAlertByUserId(id),DATA_GET_COMPLETE);
        
    }

    @Get('/get-alert-post/:id')
    async getAlertByPostId(@Param('id') id: string){
        return responseApi(await this.alertService.getAlertByPostId(id),DATA_GET_COMPLETE);
        
    }

    @Post('/add-alert')
    async addNewAlert(@Body() alertData: Alert,@Headers('Authorization') auth:string){
        return responseApi([],await this.alertService.addNewAlert(alertData,auth));
        
    }
    @Post('/add-alert-user/:alertId')
    async addNewAlertUser(@Body('userId') userId: string,@Param('alertId') alertId: string,@Headers('Authorization') auth:string){
        return responseApi([],await this.alertService.addNewAlertUser(alertId,userId,auth));
        
    }
    @Post('/add-alert-post/:alertId')
    async addNewAlertPost(@Body('postId') postId: string,@Param('alertId') alertId: string,@Headers('Authorization') auth:string){
        return responseApi([],await this.alertService.addNewAlertPost(alertId,postId,auth));
        
    }

    @Put('/update-alert/:id')
    async updateCurrentAlert(@Param('id') id: string,@Body() alertData: Alert,@Headers('Authorization') auth:string){
        return responseApi([],await this.alertService.updateAlert(alertData,id,auth));
        
    }

    @Delete('/delete-alert/:id')
    async deleteAlert(@Param('id') id: string,@Headers('Authorization') auth:string){
        return responseApi([],await this.alertService.removeAlert(id,auth))
        
    }

    @Delete('/delete-alert-user/:id')
    async deleteAlertUser(@Param('id') id: string,@Headers('Authorization') auth:string){
        return responseApi([],await this.alertService.removeAlertUser(id,auth))
        
    }

    @Delete('/delete-alert-post/:id')
    async deleteAlertPost(@Param('id') id: string,@Headers('Authorization') auth:string){
        return responseApi([],await this.alertService.removeAlertPost(id,auth))
        
    }
}