import { SavePostDao } from "src/dao/SavePost";
import { PrismaService } from "./PrismaService";
import { SavePost } from "src/model/SavePost";
import { JwtService } from "@nestjs/jwt";
export declare class SavePostService implements SavePostDao {
    private prisma;
    private jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    checkJwtToken(jwtToken: string): boolean;
    getUserFromHeader(jwtToken: string): any;
    getSavePostById(id: string): Promise<any>;
    addNewSavePost(savePostData: SavePost, auth: string): Promise<any>;
    updateCurrentSavePost(savePostData: SavePost, id: string, auth: string): Promise<any>;
    deleteSavePost(id: string, auth: string): Promise<any>;
}
