/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { SubscriptionController } from "src/controller/SubscriptionController";
import { SubscriptionService } from "src/service/SubscriptionService";
import { PrismaModule } from "./PrismaModule";
import { JwtModule } from "@nestjs/jwt";

@Module({
    providers: [SubscriptionService],
    controllers: [SubscriptionController],
    imports: [PrismaModule,JwtModule.register({
        global: true,
        secret: 'SECRET_KEY',
        signOptions: {expiresIn: '7d'}
    })]
})
export class SubscriptionModule{}