/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { BanController } from "src/controller/BanController";
import { BanService } from "src/service/BanService";
import { PrismaModule } from "./PrismaModule";
import { JwtModule } from "@nestjs/jwt";

@Module({
    providers: [BanService],
    controllers: [BanController],
    imports: [PrismaModule,JwtModule.register({
        global: true,
        secret: 'SECRET_KEY',
        signOptions: {expiresIn: '7d'}
    })]
})
export class BanModule{}