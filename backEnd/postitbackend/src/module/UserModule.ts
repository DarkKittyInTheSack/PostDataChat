/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import * as cacheManager from "cache-manager";
import redisStore from 'cache-manager-redis-store';
import { Module } from "@nestjs/common";
import { UserController } from "src/controller/UserController";
import { UserService } from "src/service/UserService";
import { CacheInterceptor } from "@nestjs/cache-manager";
import { PrismaModule } from "./PrismaModule";
import { JwtModule } from "@nestjs/jwt";


@Module({
    providers: [UserService
    //     {
    //     provide:'APP_INTERCEPTOR',
    //     useClass: CacheInterceptor
    // },
],
    controllers: [UserController],
    imports: [PrismaModule,JwtModule.register({
        global: true,
        secret: 'SECRET_KEY',
        signOptions: {expiresIn: '7d'}
    })]
})
export class UserModule{}