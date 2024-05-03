/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { PrismaService } from "src/service/PrismaService";

@Module({
    providers: [PrismaService],
    exports: [PrismaService],
})
export class PrismaModule {}