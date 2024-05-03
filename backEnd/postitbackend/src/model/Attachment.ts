/* eslint-disable prettier/prettier */
import { IsNotEmpty } from "class-validator";

/* eslint-disable prettier/prettier */
export class Attachment{
    @IsNotEmpty()
    attachmentId:string;

    @IsNotEmpty()
    attachmentUrl:string;

    @IsNotEmpty()
    isSave:boolean;
}