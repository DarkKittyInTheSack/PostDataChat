import { IsNotEmpty } from "class-validator";

/* eslint-disable prettier/prettier */
export class Ban{
    @IsNotEmpty()
    banId: string;

    @IsNotEmpty()
    banTitle: string;

    @IsNotEmpty()
    banDescription: string;

    @IsNotEmpty()
    banDate: string;

    constructor(banId: string = '', banTitle:string = '', banDescription: string = '', banDate: string = ''){
        this.banId = banId;
        this.banTitle = banTitle;
        this.banDescription = banDescription;
        this.banDate = banDate;
    }

    getBanId(): string{
        return this.banId
    }

    getBanTitle(): string{
        return this.banTitle
    }

    getBanDescription(): string{
        return this.banDescription
    }

    getBanDate(): string{
        return this.banDate
    }

    setBanId(banId: string): void{
        this.banId = banId
    }

    setBanTitle(banTitle: string): void{
        this.banTitle = banTitle
    }

    setBanDescription(banDescription: string): void{
        this.banDescription = banDescription
    }

    setBanDate(banDate: string): void{
        this.banDate = banDate
    }
}