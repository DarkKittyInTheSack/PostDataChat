/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { AddressController } from "src/controller/AddressController";
import { AddressService } from "src/service/AddressService";
import { PrismaModule } from "./PrismaModule";
import { JwtModule } from "@nestjs/jwt";

@Module({
    providers: [AddressService],
    controllers: [AddressController],
    imports: [PrismaModule,JwtModule.register({
        global: true,
        secret: 'SECRET_KEY',
        signOptions: {expiresIn: '7d'}
    })]
})
export class AddressModule {}