/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { AttachmentController } from "src/controller/AttachmentController";
import { AttachmentService } from "src/service/AttachmentService";
import { PrismaModule } from "./PrismaModule";
import { JwtModule } from "@nestjs/jwt";

@Module({
    providers:[AttachmentService],
    controllers: [AttachmentController],
    imports: [PrismaModule,JwtModule.register({
        global: true,
        secret: 'SECRET_KEY',
        signOptions: {expiresIn: '7d'}
    })]
})
export class AttachmentModule{}