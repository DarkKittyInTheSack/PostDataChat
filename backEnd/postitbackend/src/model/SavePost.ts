import { IsNotEmpty } from "class-validator";

/* eslint-disable prettier/prettier */
export class SavePost{
    @IsNotEmpty()
    savePostId: string;

    @IsNotEmpty()
    savePostDate: string;

    constructor(savePostId: string = '', savePostDate: string = ''){
        this.savePostId = savePostId;
        this.savePostDate = savePostDate;
    }

    getSavePostId(): string{
        return this.savePostId;
    }

    getSavePostDate(): string{
        return this.savePostDate;
    }

    setSavePostId(savePostId: string): void{
        this.savePostId = savePostId;
    }

    setSavePostDate(savePostDate: string): void{
        this.savePostDate = savePostDate;
    }
}