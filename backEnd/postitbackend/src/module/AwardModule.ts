/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { AwardController } from "src/controller/AwardController";
import { AwardService } from "src/service/AwardService";
import { PrismaModule } from "./PrismaModule";
import { JwtModule } from "@nestjs/jwt";

@Module({
    providers: [AwardService],
    controllers: [AwardController],
    imports: [PrismaModule,JwtModule.register({
        global: true,
        secret: 'SECRET_KEY',
        signOptions: {expiresIn: '7d'}
    })]
})
export class AwardModule{}