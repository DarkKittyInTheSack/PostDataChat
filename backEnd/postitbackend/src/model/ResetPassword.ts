/* eslint-disable prettier/prettier */
import { IsNotEmpty } from "class-validator";

/* eslint-disable prettier/prettier */
export class ResetPassword{

    @IsNotEmpty()
    password:string;

    @IsNotEmpty()
    confirmPassword:string;
}