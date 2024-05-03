/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { NestFactory } from "@nestjs/core";
import * as express from 'express';
import { SavePostModule } from "src/module/SavePostModule";

export async function SavePostRouter(){
    const savePostRouterNest = await NestFactory.create(SavePostModule);
    savePostRouterNest.use(express.static('.'))
}