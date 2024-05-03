/* eslint-disable prettier/prettier */
import { IsNotEmpty } from "class-validator";

/* eslint-disable prettier/prettier */
export class Login{
    @IsNotEmpty()
    username: string;
    
    @IsNotEmpty()
    passwords:string;
}