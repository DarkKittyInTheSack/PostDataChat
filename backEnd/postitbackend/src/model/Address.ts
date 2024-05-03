/* eslint-disable prettier/prettier */
import { IsInt, IsNotEmpty } from "class-validator";

/* eslint-disable prettier/prettier */
export class Address{
    @IsNotEmpty()
    addressId:string;

    @IsNotEmpty()
    street: string;

    @IsNotEmpty()
    area: string;

    @IsNotEmpty()
    state: string;

    @IsNotEmpty()
    @IsInt()
    postCode: number;

    constructor(addressId: string ='', street: string = '', area: string ='', state: string = '', postCode: number = 0){
        this.addressId = addressId;
        this.street = street;
        this.area = area;
        this.state = state;
        this.postCode = postCode;
    }

    getAddressId(): string{
        return this.addressId;
    }

    getStreet(): string{
        return this.street;
    }

    getArea(): string{
        return this.area;
    }

    getState(): string{
        return this.state;
    }

    getPostCode(): number{
        return this.postCode;
    }

    setAddressId(addressId: string): void{
        this.addressId = addressId
    }

    setStreet(street: string): void{
        this.street = street
    }

    setArea(area: string): void{
        this.area = area
    }

    setState(state: string): void{
        this.state = state
    }

    setPostCode(postCode: number): void{
        this.postCode = postCode
    }
}