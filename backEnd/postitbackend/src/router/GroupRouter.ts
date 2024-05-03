/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { NestFactory } from "@nestjs/core";
import * as express from 'express';
import { GroupModule } from "src/module/GroupModule";

export async function GroupRouter(){
    const groupRouterNest = await NestFactory.create(GroupModule);
    groupRouterNest.use(express.static('.'))
}