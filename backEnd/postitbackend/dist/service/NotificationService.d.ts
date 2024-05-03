import { NotificationDao } from "src/dao/NotificationDao";
import { PrismaService } from "./PrismaService";
import { Notification } from "src/model/Notification";
import { JwtService } from "@nestjs/jwt";
export declare class NotificationService implements NotificationDao {
    private prisma;
    private jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    checkJwtToken(jwtToken: string): boolean;
    getUserFromHeader(jwtToken: string): any;
    checkInputNotificationData(notificationData: Notification, auth: string): string;
    getNotificationByUserId(userId: string): Promise<any>;
    getNotification(id: string): Promise<any>;
    addnewNotification(notificationData: Notification, auth: string): Promise<any>;
    updateCurrentNotification(notificationData: Notification, id: string, auth: string): Promise<any>;
    deleteNotification(id: string, auth: string): Promise<any>;
}
