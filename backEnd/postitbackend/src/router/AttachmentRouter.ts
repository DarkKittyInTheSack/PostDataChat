/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { NestFactory } from "@nestjs/core";
import * as express from 'express';
import { AttachmentModule } from "src/module/AttachmentModule";

export async function AttachmentRouter(){
    const attachmentRouterNest = await NestFactory.create(AttachmentModule);
    attachmentRouterNest.use(express.static('.'))
}