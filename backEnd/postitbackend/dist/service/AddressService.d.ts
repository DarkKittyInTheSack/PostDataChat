import { AddressDao } from "src/dao/AddressDao";
import { PrismaService } from "./PrismaService";
import { Address } from "src/model/Address";
import { JwtService } from "@nestjs/jwt";
export declare class AddressService implements AddressDao {
    private prisma;
    private jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    checkJwtToken(jwtToken: string): boolean;
    getUserFromHeader(jwtToken: string): any;
    checkInputAddressData(addressData: Address, auth: string): string;
    getAddressById(id: string): Promise<any>;
    getAddressByUser(userId: string): Promise<any>;
    addAddress(addressData: Address, auth: string): Promise<any>;
    updateAddress(addressData: Address, id: string, auth: string): Promise<any>;
    deleteAddress(id: string, auth: string): Promise<any>;
}
