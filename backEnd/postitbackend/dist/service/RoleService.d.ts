import { RoleDao } from "src/dao/RoleDao";
import { PrismaService } from "./PrismaService";
import { Role } from "src/model/Role";
import { JwtService } from "@nestjs/jwt";
export declare class RoleService implements RoleDao {
    private prisma;
    private jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    checkJwtToken(jwtToken: string): boolean;
    getUserFromHeader(jwtToken: string): any;
    getAllRole(): Promise<{
        roleId: string;
        roleName: string;
    }[]>;
    getRoleById(id: string): Promise<any>;
    addNewRole(roleData: Role, auth: string): Promise<any>;
    updateCurrentRole(roleData: Role, id: string, auth: string): Promise<any>;
    deleteRole(id: string, auth: string): Promise<any>;
}
