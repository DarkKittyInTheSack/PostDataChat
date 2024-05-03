/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Headers, Param, Post, Put } from "@nestjs/common";
import { responseApi } from "src/config/response";
import { Address } from "src/model/Address";
import { AddressService } from "src/service/AddressService";
import { DATA_GET_COMPLETE } from "src/utils/MessageUtils";

@Controller()
export class AddressController{
    constructor(private addressService:AddressService){}

    @Get('/get-address/:id')
    async getAddressById(@Param('id') id:string){
        return responseApi(await this.addressService.getAddressById(id),DATA_GET_COMPLETE)
    }

    @Get('/get-address-user/:id')
    async getAddressByUserId(@Param('id') id:string){
        return responseApi(await this.addressService.getAddressByUser(id),DATA_GET_COMPLETE)
    }

    @Post('/add-address')
    async addNewAddress(@Body() addressData:Address,@Headers('Authorization') auth:string){
        return responseApi([], await this.addressService.addAddress(addressData,auth))
    }

    @Put('/update-address/:id')
    async updateCurrentAddress(@Body() addressData: Address, @Param('id') id:string,@Headers('Authorization') auth:string){
        return responseApi([], await this.addressService.updateAddress(addressData,id,auth))
    }

    @Delete('/delete-address/:id')
    async deleteAddress(@Param('id') id:string,@Headers('Authorization') auth:string){
        return responseApi([],await this.addressService.deleteAddress(id,auth))
    }
}