/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { NestFactory } from "@nestjs/core";
import * as express from 'express';
import { TypeModule } from "src/module/TypeModule";

export async function TypeRouter(){
    const typeRouterNest = await NestFactory.create(TypeModule);
    typeRouterNest.use(express.static('.'))
}