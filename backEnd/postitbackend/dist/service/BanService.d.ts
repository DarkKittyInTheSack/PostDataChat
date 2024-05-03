import { BanDao } from "src/dao/BanDao";
import { PrismaService } from "./PrismaService";
import { Ban } from "src/model/Ban";
import { JwtService } from "@nestjs/jwt";
export declare class BanService implements BanDao {
    private prisma;
    private jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    checkJwtToken(jwtToken: string): boolean;
    getUserFromHeader(jwtToken: string): any;
    checkInputBanData(banData: Ban, auth: string): string;
    getBanByUserId(userId: string): Promise<any>;
    getBanByPostId(postId: string): Promise<any>;
    getBanById(id: string): Promise<any>;
    addNewBan(banData: Ban, auth: string): Promise<any>;
    updateBan(banData: Ban, id: string, auth: string): Promise<any>;
    deleteBan(id: string, auth: string): Promise<any>;
}
