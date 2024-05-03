/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { NestFactory } from "@nestjs/core";
import * as express from 'express';
import { InteractModule } from "src/module/InteractModule";

export async function InteractRouter(){
    const interactRouterNest = await NestFactory.create(InteractModule);
    interactRouterNest.use(express.static('.'))
}