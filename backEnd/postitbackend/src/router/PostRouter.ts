/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { NestFactory } from "@nestjs/core";
import * as express from 'express';
import { PostModule } from "src/module/PostModule";

export async function PostRouter(){
    const postRouterNest = await NestFactory.create(PostModule);
    postRouterNest.use(express.static('.'))
}