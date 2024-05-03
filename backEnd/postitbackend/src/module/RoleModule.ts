/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { RoleController } from "src/controller/RoleController";
import { RoleService } from "src/service/RoleService";
import { PrismaModule } from "./PrismaModule";
import { JwtModule } from "@nestjs/jwt";

@Module({
    providers: [RoleService],
    controllers: [RoleController],
    imports: [PrismaModule,JwtModule.register({
        global: true,
        secret: 'SECRET_KEY',
        signOptions: {expiresIn: '7d'}
    })]
})
export class RoleModule{}