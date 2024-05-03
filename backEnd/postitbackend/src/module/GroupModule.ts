/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { GroupController } from "src/controller/GroupController";
import { GroupService } from "src/service/GroupService";
import { PrismaModule } from "./PrismaModule";
import { JwtModule } from "@nestjs/jwt";

@Module({
    providers: [GroupService],
    controllers: [GroupController],
    imports: [PrismaModule,JwtModule.register({
        global: true,
        secret: 'SECRET_KEY',
        signOptions: {expiresIn: '7d'}
    })]
})
export class GroupModule{}