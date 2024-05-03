import { AlertDao } from "src/dao/AlertDao";
import { PrismaService } from "./PrismaService";
import { Alert } from "src/model/Alert";
import { JwtService } from "@nestjs/jwt";
export declare class AlertService implements AlertDao {
    private prisma;
    private jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    checkJwtToken(jwtToken: string): boolean;
    getUserFromHeader(jwtToken: string): any;
    checkInputAlertData(alertData: Alert, auth: string): string;
    getAlertByUserId(userId: string): Promise<any>;
    getAlertByPostId(postId: string): Promise<any>;
    getAlertById(id: string): Promise<any>;
    addNewAlert(alertData: Alert, auth: string): Promise<any>;
    updateAlert(alertData: Alert, id: string, auth: string): Promise<any>;
    removeAlert(id: string, auth: string): Promise<any>;
}
