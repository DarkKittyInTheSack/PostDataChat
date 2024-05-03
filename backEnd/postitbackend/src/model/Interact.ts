import { IsNotEmpty } from "class-validator";

/* eslint-disable prettier/prettier */
export class Interact{
    @IsNotEmpty()
    interactId: string;

    @IsNotEmpty()
    isLike: boolean;

    @IsNotEmpty()
    isDislike: boolean;

    constructor(interactId: string = '', isLike: boolean = false, isDislike: boolean = false){
        this.interactId = interactId;
        this.isLike = isLike;
        this.isDislike = isDislike;
    }

    getInteractId(): string{
        return this.interactId;
    }

    getLike(): boolean{
        return this.isLike;
    }

    getDislike(): boolean{
        return this.isDislike;
    }

    setInteractId(interactId: string): void{
        this.interactId = interactId;
    }

    setLike(isLike: boolean): void{
        this.isLike = isLike;
    }

    setDislike(isDislike: boolean): void{
        this.isDislike = isDislike;
    }
}