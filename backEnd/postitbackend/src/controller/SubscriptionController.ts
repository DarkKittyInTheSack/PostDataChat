/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Headers, Param, Post, Put, Req } from "@nestjs/common";
import { responseApi } from "src/config/response";
import { Subscription } from "src/model/Subscription";
import { SubscriptionService } from "src/service/SubscriptionService";
import { DATA_GET_COMPLETE } from "src/utils/MessageUtils";

@Controller()
export class SubscriptionController{
    constructor(private subscriptionService:SubscriptionService){}

    @Get('/get-subscription/:id')
    async getSubscriptionById( @Param('id') id: string){
        return responseApi(await this.subscriptionService.getSubscriptionById(id),DATA_GET_COMPLETE)
        
    }

    @Post('/add-subscription')
    async addNewSubscription(@Body() subscriptionData: Subscription,@Headers('Authorization') auth:string){
        return responseApi([],await this.subscriptionService.addNewSubscription(subscriptionData,auth))
        
    }

    @Post('/add-subscription-user/:id')
    async addNewSubscriptionUser(@Param('id') id: string,@Body() subscriptionId: string,@Headers('Authorization') auth:string){
        return responseApi([],await this.subscriptionService.addNewSubscriptionUser(id,subscriptionId,auth))
        
    }

    @Put('/update-subscription/:id')
    async updateSubscription( @Param('id') id: string,@Body() subscriptionData: Subscription,@Headers('Authorization') auth:string){
        return responseApi([],await this.subscriptionService.updateCurrentSubscription(subscriptionData,id,auth))
        
    }

    @Delete('/delete-subscription/:id')
    async deleteSubscription(@Param('id') id: string,@Headers('Authorization') auth:string){
        return responseApi([],await this.subscriptionService.deleteSubscription(id,auth))
        
    }

    @Delete('/delete-subscription-user/:id')
    async deleteSubscriptionUser(@Param('id') id: string,@Headers('Authorization') auth:string){
        return responseApi([],await this.subscriptionService.deleteSubscriptionUser(id,auth))
        
    }
}