/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { NestFactory } from "@nestjs/core";
import * as express from 'express';
import { AlertModule } from "src/module/AlertModule";

export async function AlertRouter(){
    const alertRouterNest = await NestFactory.create(AlertModule);
    alertRouterNest.use(express.static('.'))
}