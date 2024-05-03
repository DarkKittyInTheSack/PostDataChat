import { GroupDao } from "src/dao/GroupDao";
import { PrismaService } from "./PrismaService";
import { Group } from "src/model/Group";
import { JwtService } from "@nestjs/jwt";
export declare class GroupService implements GroupDao {
    private prisma;
    private jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    checkJwtToken(jwtToken: string): boolean;
    getUserFromHeader(jwtToken: string): any;
    checkInputGroupData(groupData: Group, auth: string): string;
    getGroupById(id: string): Promise<any>;
    addNewGroup(groupData: Group, auth: string): Promise<any>;
    editCurrentGroup(groupData: Group, id: string, auth: string): Promise<any>;
    deleteGroup(id: string, auth: string): Promise<any>;
}
