/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { CommentController } from "src/controller/CommentController";
import { CommentService } from "src/service/CommentService";
import { PrismaModule } from "./PrismaModule";
import { JwtModule } from "@nestjs/jwt";

@Module({
    providers: [CommentService],
    controllers: [CommentController],
    imports: [PrismaModule,JwtModule.register({
        global: true,
        secret: 'SECRET_KEY',
        signOptions: {expiresIn: '7d'}
    })]
})
export class CommentModule{}