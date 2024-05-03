/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { CacheInterceptor, CacheKey, CacheTTL } from "@nestjs/cache-manager";
import { Body, Controller, Delete, Get, Headers, Param, Post, Put, Req, UploadedFile, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { responseApi } from "src/config/response";
import { User } from "src/model/User";
import { UserService } from "src/service/UserService";
import { DATA_GET_COMPLETE } from "src/utils/MessageUtils";

let imageUrl = ''

@Controller()
export class UserController {
    constructor(private userService: UserService){}
    @Get('/get-user/:id')
    @CacheKey('user_information')
    @CacheTTL(100)
    
    async getUserById( @Param('id') id: string){
       await this.userService.getUserById(id)
    }

    @Get('/get-user-all')
    async getUserAll(){
        return responseApi(await this.userService.getAllUser(),DATA_GET_COMPLETE)
        
    }

    @Get('/get-user-subscription/:id')
    async getUserBySubscriptionId( @Param('id') id: string){
        return responseApi(await this.userService.getUserBySubscriptionId(id),DATA_GET_COMPLETE)
        
    }

    @Get('/get-user-address/:id')
    async getUserByAddressId( @Param('id') id: string){
        return responseApi(await this.userService.getUserbyAddressId(id),DATA_GET_COMPLETE)
        
    }

    @Post('/upload-avatar')
    @UseInterceptors(FileInterceptor('file'))
    async uploadAvatar(@UploadedFile() file:any){
        imageUrl = await this.userService.uploadAvatar(file)
        return responseApi(imageUrl,DATA_GET_COMPLETE)
    }

    @Post('/add-user')
    async addUserInformation(@Body() userData:User,@Headers('Authorization') auth:string){
        return responseApi([],await this.userService.addNewUser(userData,imageUrl,auth))        
    }

    @Put('/update-user/:id')
    async updateCurrentUser( @Param('id') id:string,@Body() userData:User,@Headers('Authorization') auth:string){
        return responseApi([],await this.userService.updateCurrentUser(userData,id,imageUrl,auth))
        
    }

    @Delete('/delete-user/:id')
    async deleteCurrentUser(@Param('id') id: string,@Headers('Authorization') auth:string){
        return responseApi([],await this.userService.deleteUser(id,auth))
        
    }
}