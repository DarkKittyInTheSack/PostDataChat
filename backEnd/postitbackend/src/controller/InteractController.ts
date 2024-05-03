/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Headers, Param, Post, Put, Req } from "@nestjs/common";
import { responseApi } from "src/config/response";
import { Interact } from "src/model/Interact";
import { InteractService } from "src/service/InteractService";
import { DATA_GET_COMPLETE } from "src/utils/MessageUtils";

@Controller()
export class InteractController{
    constructor(private interactService:InteractService){}

    @Get('/get-interact/:id')
    async getInteractById( @Param('id') id: string){
        return responseApi(await this.interactService.getInteract(id),DATA_GET_COMPLETE)
        
    }

    @Post('/add-interact')
    async addNewInteract(@Body() interactData:Interact,@Headers('Authorization') auth:string){
        return responseApi([],await this.interactService.addNewInteract(interactData,auth))
        
    }

    @Post('/add-interact-user/:interactId')
    async addNewInteractUser(@Body('userId') userId:string,@Param('interactId') interactId: string,@Headers('Authorization') auth:string){
        return responseApi([],await this.interactService.addNewUserInteract(interactId,userId,auth))
        
    }

    @Post('/add-interact-post/:interactId')
    async addNewInteractPost(@Body('postId') postId:string,@Param('interactId') interactId: string,@Headers('Authorization') auth:string){
        return responseApi([],await this.interactService.addNewPostInteract(interactId,postId,auth))
        
    }

    @Put('/update-interact/:id')
    async updateInteract( @Param('id') id: string,@Body() interactData:Interact,@Headers('Authorization') auth:string){
        return responseApi([],await this.interactService.updateCurrentInteract(interactData,id,auth))
        
    }

    @Delete('/delete-interact/:id')
    async deleteInteract(@Req() req:Request, @Param('id') id: string,@Headers('Authorization') auth:string){
        return responseApi([],await this.interactService.deleteInteract(id,auth))
    }

    @Delete('/delete-interact/:id')
    async deleteUserInteract(@Req() req:Request, @Param('id') id: string,@Headers('Authorization') auth:string){
        return responseApi([],await this.interactService.deleteUserInteract(id,auth))
    }

    @Delete('/delete-interact/:id')
    async deletePostInteract(@Req() req:Request, @Param('id') id: string,@Headers('Authorization') auth:string){
        return responseApi([],await this.interactService.deletePostInteract(id,auth))
    }
}