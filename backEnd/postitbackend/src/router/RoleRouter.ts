/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { NestFactory } from "@nestjs/core";
import * as express from 'express';
import { RoleModule } from "src/module/RoleModule";

export async function RoleRouter(){
    const roleRouterNest = await NestFactory.create(RoleModule);
    roleRouterNest.use(express.static('.'))
}