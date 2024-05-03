/* eslint-disable prettier/prettier */
import { NestFactory } from "@nestjs/core";
import { AccountModule } from "src/module/AccountModule";
import * as express from 'express';

/* eslint-disable @typescript-eslint/no-unused-vars */
export async function AccountRouter(){
    const accountModuleNest = await NestFactory.create(AccountModule);
    accountModuleNest.use(express.static('.'))
}