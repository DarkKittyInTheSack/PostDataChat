/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { AccountController } from "src/controller/AccountController";
import { AccountService } from "src/service/AccountService";
import { PrismaModule } from "./PrismaModule";
import { JwtModule } from "@nestjs/jwt";

@Module({
    imports: [PrismaModule,JwtModule.register({
        global: true,
        secret: 'SECRET_KEY',
        signOptions: {expiresIn: '7d'}
    })],
    providers:[AccountService],
    controllers: [AccountController]
})
export class AccountModule {}
