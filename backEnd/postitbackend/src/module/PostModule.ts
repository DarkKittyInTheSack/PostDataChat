/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { PostController } from "src/controller/PostController";
import { PostService } from "src/service/PostService";
import { PrismaModule } from "./PrismaModule";
import { JwtModule } from "@nestjs/jwt";

@Module({
    providers: [PostService],
    controllers: [PostController],
    imports: [PrismaModule,JwtModule.register({
        global: true,
        secret: 'SECRET_KEY',
        signOptions: {expiresIn: '7d'}
    })]
})
export class PostModule{}