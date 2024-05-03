import { SaveAttachmentDao } from "../dao/SaveAttachmentDao";
import { PrismaService } from "./PrismaService";
import { SaveAttachment } from "src/model/SaveAttachment";
import { JwtService } from "@nestjs/jwt";
export declare class SaveAttachmentService implements SaveAttachmentDao {
    private prisma;
    private jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    checkJwtToken(jwtToken: string): boolean;
    getUserFromHeader(jwtToken: string): any;
    getSaveAttachmentById(id: string): Promise<any>;
    addNewSaveAttachment(saveAttachmentData: SaveAttachment, auth: string): Promise<any>;
    updateCurrentSaveAttachment(saveAttachmentData: SaveAttachment, id: string, auth: string): Promise<any>;
    deleteSaveAttachment(id: string, auth: string): Promise<any>;
}
