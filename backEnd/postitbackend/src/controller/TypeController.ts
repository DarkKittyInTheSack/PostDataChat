/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Headers, Param, Post, Put, Req } from "@nestjs/common";
import { responseApi } from "src/config/response";
import { Type } from "src/model/Type";
import { TypeService } from "src/service/TypeService";
import { DATA_GET_COMPLETE } from "src/utils/MessageUtils";

@Controller()
export class TypeController{
    constructor(private typeService:TypeService){}

    @Get('/get-type-all')
    async getAllType(){
        return responseApi(await this.typeService.getAllType(), DATA_GET_COMPLETE)
        
    }

    @Get('/get-type/:id')
    async getTypeById(@Param('id') id: string){
        return responseApi(await this.typeService.getTypeById(id), DATA_GET_COMPLETE)
        
    }

    @Post('/add-type')
    async addNewType(@Body() typeData:Type,@Headers('Authorization') auth:string){
        return responseApi([],await this.typeService.addNewType(typeData,auth))
        
    }

    @Put('/update-type/:id')
    async updateType( @Param('id') id: string,@Body() typeData:Type,@Headers('Authorization') auth:string){
        return responseApi([],await this.typeService.updateCurrentType(typeData,id,auth))
        
    }

    @Delete('/delete-type/:id')
    async deleteType( @Param('id') id: string,@Headers('Authorization') auth:string){
        return responseApi([],await this.typeService.deleteType(id,auth))
        
    }
}