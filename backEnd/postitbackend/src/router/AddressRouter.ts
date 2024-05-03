/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { NestFactory } from "@nestjs/core";
import { AddressModule } from "src/module/AddressModule";
import * as express from 'express';

export async function AddressRouter(){
    const addressModuleNest = await NestFactory.create(AddressModule);
    addressModuleNest.use(express.static('.'))
}