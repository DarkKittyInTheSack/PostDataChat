/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Injectable, Req } from "@nestjs/common";
import { AddressDao } from "src/dao/AddressDao";
import { PrismaService } from "./PrismaService";
import { Address } from "src/model/Address";

import { DATA_CREATED, DATA_DELETED, DATA_FAIL_TO_CREATE, DATA_FAIL_TO_DELETE, DATA_FAIL_TO_UPDATE, DATA_NOT_EXIST, DATA_UPDATED, REQUIRED_DATA, TOKEN_INVALID } from "src/utils/MessageUtils";
import { getRandomId } from "src/utils/RandomId";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AddressService implements AddressDao{
    constructor(private prisma: PrismaService, private jwtService:JwtService){}

    checkJwtToken(jwtToken:string){
        const checkToken = this.jwtService.verify(jwtToken);
        let isVerify = false;
        checkToken === null ? isVerify = true : isVerify = false
        return isVerify;
    }

    getUserFromHeader(jwtToken:string){
        return (this.jwtService.decode(jwtToken))
    }

    checkInputAddressData(addressData: Address,auth:string): string {
        const {area,postCode,state,street} = addressData;
        if(area == '' || postCode == 0 || state == '' || street == ''){
            return REQUIRED_DATA;
        }
        if(this.getUserFromHeader(auth) == null || this.checkJwtToken(auth) == false){
            return TOKEN_INVALID;
        }
        return '';
    }
    async getAddressById(id: string): Promise<any> {
        const address = await this.prisma.address.findFirst({
            where:{
                addressId: id
            }
        })
        return address;
    }
    async getAddressByUser(userId: string): Promise<any> {
        const userAddress = await this.prisma.user_address.findMany({
            where:{
                userId: userId
            }
        })
        return userAddress
    }

    async addAddress(addressData:Address,auth:string): Promise<any> {
        const addressId = getRandomId(10);
        if(this.checkInputAddressData(addressData,auth) != ''){
            return this.checkInputAddressData(addressData,auth);
        }
        try {
            await this.prisma.address.create({
                data:{
                    addressId: addressId,
                    street: addressData.street,
                    area: addressData.area,
                    states: addressData.state,
                    postCode: addressData.postCode
                }
            })
            return DATA_CREATED;
        } catch (error) {
            return DATA_FAIL_TO_CREATE
        }
        
    }
    
    async updateAddress(addressData:Address,id: string,auth:string): Promise<any> {
        if(this.checkInputAddressData(addressData,auth) != ''){
            return this.checkInputAddressData(addressData,auth);
        }
        const currentAddress = await this.getAddressById(id);
        if(currentAddress == null){
            return DATA_NOT_EXIST
        }else{
            try {
                await this.prisma.address.update({
                    where:{
                        addressId: id
                    },
                    data:{
                        
                        street: addressData.street,
                        area: addressData.area,
                        states: addressData.state,
                        postCode: addressData.postCode
                    }
                })
                return DATA_UPDATED;
            } catch (error) {
                return DATA_FAIL_TO_UPDATE;
            }
        }

    }
    async deleteAddress(id: string, auth:string): Promise<any> {
        if(!this.checkJwtToken(auth)){
            return TOKEN_INVALID;
        }
        try {
            await this.prisma.address.delete({
                where:{
                    addressId: id
                },
            })

            return DATA_DELETED;
        } catch (error) {
            return DATA_FAIL_TO_DELETE;
        }
        
    }
    
    
}