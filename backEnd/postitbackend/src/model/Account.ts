/* eslint-disable prettier/prettier */
import { IsNotEmpty } from "class-validator";

/* eslint-disable prettier/prettier */
export class Account{
    @IsNotEmpty()
    accountId:string;

    @IsNotEmpty()
    username:string;

    @IsNotEmpty()
    passwords:string;

    @IsNotEmpty()
    roleId:string;
}