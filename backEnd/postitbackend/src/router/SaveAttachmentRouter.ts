/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { NestFactory } from "@nestjs/core";
import * as express from 'express';
import { SaveAttachmentModule } from "src/module/SaveAttachmentModule";

export async function SaveAttachmentRouter(){
    const saveAttachmentRouterNest = await NestFactory.create(SaveAttachmentModule);
    saveAttachmentRouterNest.use(express.static('.'))
}