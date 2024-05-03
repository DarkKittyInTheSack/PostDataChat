import { Address } from "src/model/Address";
import { AddressService } from "src/service/AddressService";
export declare class AddressController {
    private addressService;
    constructor(addressService: AddressService);
    getAddressById(id: string): Promise<string>;
    getAddressByUserId(id: string): Promise<string>;
    addNewAddress(addressData: Address, auth: string): Promise<string>;
    updateCurrentAddress(addressData: Address, id: string, auth: string): Promise<string>;
    deleteAddress(id: string, auth: string): Promise<string>;
}
