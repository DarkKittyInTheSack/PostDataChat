/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { NotificationController } from "src/controller/NotificationController";
import { NotificationService } from "src/service/NotificationService";
import { PrismaModule } from "./PrismaModule";
import { JwtModule } from "@nestjs/jwt";

@Module({
    providers: [NotificationService],
    controllers: [NotificationController],
    imports: [PrismaModule,JwtModule.register({
        global: true,
        secret: 'SECRET_KEY',
        signOptions: {expiresIn: '7d'}
    })]
})
export class NotificationModule{}