/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { NestFactory } from "@nestjs/core";
import * as express from 'express';
import { BanModule } from "src/module/BanModule";

export async function BanRouter(){
    const banRouterNest = await NestFactory.create(BanModule);
    banRouterNest.use(express.static('.'))
}