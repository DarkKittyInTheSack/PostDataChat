/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { SavePostController } from "src/controller/SavePostController";
import { SavePostService } from "src/service/SavePostService";
import { PrismaModule } from "./PrismaModule";
import { JwtModule } from "@nestjs/jwt";

@Module({
    providers: [SavePostService],
    controllers: [SavePostController],
    imports: [PrismaModule,JwtModule.register({
        global: true,
        secret: 'SECRET_KEY',
        signOptions: {expiresIn: '7d'}
    })]
})
export class SavePostModule{}