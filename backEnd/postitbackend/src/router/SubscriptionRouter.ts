/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { NestFactory } from "@nestjs/core";
import * as express from 'express';
import { SubscriptionModule } from "src/module/SubscriptionModule";

export async function SubscriptionRouter(){
    const subscriptionRouterNest = await NestFactory.create(SubscriptionModule);
    subscriptionRouterNest.use(express.static('.'))
}