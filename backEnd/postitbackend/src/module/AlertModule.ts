/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { AlertController } from "src/controller/AlertController";
import { AlertService } from "src/service/AlertService";
import { PrismaModule } from "./PrismaModule";
import { JwtModule } from "@nestjs/jwt";

@Module({
    providers: [AlertService],
    controllers: [AlertController],
    imports: [PrismaModule,JwtModule.register({
        global: true,
        secret: 'SECRET_KEY',
        signOptions: {expiresIn: '7d'}
    })]
})
export class AlertModule{}