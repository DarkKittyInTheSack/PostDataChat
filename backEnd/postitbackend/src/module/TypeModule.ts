/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { TypeController } from "src/controller/TypeController";
import { TypeService } from "src/service/TypeService";
import { PrismaModule } from "./PrismaModule";
import { JwtModule } from "@nestjs/jwt";

@Module({
    providers: [TypeService],
    controllers: [TypeController],
    imports: [PrismaModule,JwtModule.register({
        global: true,
        secret: 'SECRET_KEY',
        signOptions: {expiresIn: '7d'}
    })]
})
export class TypeModule{}