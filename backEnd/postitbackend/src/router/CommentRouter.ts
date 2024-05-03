/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { NestFactory } from "@nestjs/core";
import * as express from 'express';
import { CommentModule } from "src/module/CommentModule";

export async function CommentRouter(){
    const commentRouterNest = await NestFactory.create(CommentModule);
    commentRouterNest.use(express.static('.'))
}