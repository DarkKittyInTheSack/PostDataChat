/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { SaveAttachmentController } from "src/controller/SaveAttachmentController";
import { SaveAttachmentService } from "src/service/SaveAttachmentService";
import { PrismaModule } from "./PrismaModule";
import { JwtModule } from "@nestjs/jwt";

@Module({
    providers: [SaveAttachmentService],
    controllers: [SaveAttachmentController],
    imports: [PrismaModule,JwtModule.register({
        global: true,
        secret: 'SECRET_KEY',
        signOptions: {expiresIn: '7d'}
    })]
})
export class SaveAttachmentModule{}