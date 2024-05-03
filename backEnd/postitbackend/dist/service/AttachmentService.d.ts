import { AttachmentDao } from "src/dao/AttachmentDao";
import { PrismaService } from "./PrismaService";
import { JwtService } from "@nestjs/jwt";
export declare class AttachmentService implements AttachmentDao {
    private prisma;
    private jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    checkJwtToken(jwtToken: string): boolean;
    getUserFromHeader(jwtToken: string): any;
    uploadImageAttachment(file: any): Promise<any>;
    getAttachmentById(id: string): Promise<any>;
    addNewAttachment(attachmentUrl: string, auth: string): Promise<any>;
    editCurrentAttachment(id: string, attachmentUrl: string, auth: string): Promise<any>;
    deleteAttachment(id: string, auth: string): Promise<any>;
}
