/* eslint-disable prettier/prettier */

import { Address } from "src/model/Address";

export interface AddressDao{
    checkInputAddressData(addressData:Address,auth:string):string;
    getAddressById(id:string):Promise<any>;
    getAddressByUser(userId: string):Promise<any>;
    addAddress(addressData:Address,auth:string):Promise<any>;
    updateAddress(addressData:Address,id: string,auth:string):Promise<any>;
    deleteAddress(id: string,auth:string):Promise<any>;
}