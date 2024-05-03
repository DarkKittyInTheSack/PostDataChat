import { AwardDao } from "src/dao/AwardDao";
import { PrismaService } from "./PrismaService";
import { Award } from "src/model/Award";
import { JwtService } from "@nestjs/jwt";
export declare class AwardService implements AwardDao {
    private prisma;
    private jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    checkJwtToken(jwtToken: string): boolean;
    getUserFromHeader(jwtToken: string): any;
    checkInputAwardData(awardData: Award, auth: string): string;
    getAwardByUserId(userId: string): Promise<any>;
    getAwardByPostId(postId: string): Promise<any>;
    getAwardById(id: string): Promise<any>;
    addNewAward(awardData: Award, auth: string): Promise<any>;
    updateAward(awardData: Award, id: string, auth: string): Promise<any>;
    deleteAward(id: string, auth: string): Promise<any>;
}
