/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { NestFactory } from "@nestjs/core";
import * as express from 'express';
import { UserModule } from "src/module/UserModule";

export async function UserRouter(){
    const userRouterNest = await NestFactory.create(UserModule);
    userRouterNest.use(express.static('.'))
}