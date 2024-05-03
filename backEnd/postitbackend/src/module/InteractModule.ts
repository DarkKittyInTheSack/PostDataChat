/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { InteractController } from "src/controller/InteractController";
import { InteractService } from "src/service/InteractService";
import { PrismaModule } from "./PrismaModule";
import { JwtModule } from "@nestjs/jwt";

@Module({
    providers: [InteractService],
    controllers: [InteractController],
    imports: [PrismaModule,JwtModule.register({
        global: true,
        secret: 'SECRET_KEY',
        signOptions: {expiresIn: '7d'}
    })]
})
export class InteractModule{}