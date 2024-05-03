import { TypeDao } from "src/dao/TypeDao";
import { PrismaService } from "./PrismaService";
import { Type } from "src/model/Type";
import { JwtService } from "@nestjs/jwt";
export declare class TypeService implements TypeDao {
    private prisma;
    private jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    checkJwtToken(jwtToken: string): boolean;
    getUserFromHeader(jwtToken: string): any;
    checkInputTypeData(typeData: Type, auth: string): string;
    getAllType(): Promise<{
        typeId: string;
        typeName: string;
    }[]>;
    getTypeById(id: string): Promise<any>;
    addNewType(typeData: Type, auth: string): Promise<any>;
    updateCurrentType(typeData: Type, id: string, auth: string): Promise<any>;
    deleteType(id: string, auth: string): Promise<any>;
}
