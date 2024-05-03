import { InteractDao } from "src/dao/InteractDao";
import { PrismaService } from "./PrismaService";
import { Interact } from "src/model/Interact";
import { JwtService } from "@nestjs/jwt";
export declare class InteractService implements InteractDao {
    private prisma;
    private jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    checkJwtToken(jwtToken: string): boolean;
    getUserFromHeader(jwtToken: string): any;
    getInteract(id: string): Promise<any>;
    addNewInteract(interactData: Interact, auth: string): Promise<any>;
    updateCurrentInteract(interactData: Interact, id: string, auth: string): Promise<any>;
    deleteInteract(id: string, auth: string): Promise<any>;
}
