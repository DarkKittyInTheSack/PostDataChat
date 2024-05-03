/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { NestFactory } from "@nestjs/core";
import * as express from 'express';
import { NotificationModule } from "src/module/NotificationModule";

export async function NotificationRouter(){
    const notificationRouterNest = await NestFactory.create(NotificationModule);
    notificationRouterNest.use(express.static('.'))
}