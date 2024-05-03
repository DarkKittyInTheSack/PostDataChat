/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { NestFactory } from "@nestjs/core";
import * as express from 'express';
import { AwardModule } from "src/module/AwardModule";

export async function AwardRouter(){
    const awardRouterNest = await NestFactory.create(AwardModule);
    awardRouterNest.use(express.static('.'))
}