import { SubscriptionDao } from "src/dao/SubscriptionDao";
import { PrismaService } from "./PrismaService";
import { Subscription } from "src/model/Subscription";
import { JwtService } from "@nestjs/jwt";
export declare class SubscriptionService implements SubscriptionDao {
    private prisma;
    private jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    checkJwtToken(jwtToken: string): boolean;
    getUserFromHeader(jwtToken: string): any;
    getSubscriptionById(id: string): Promise<any>;
    addNewSubscription(subscriptionData: Subscription, auth: string): Promise<any>;
    updateCurrentSubscription(subscriptionData: Subscription, id: string, auth: string): Promise<any>;
    deleteSubscription(id: string, auth: string): Promise<any>;
}
