import { UserDao } from "src/dao/UserDao";
import { PrismaService } from "./PrismaService";
import { User } from "src/model/User";
import { JwtService } from "@nestjs/jwt";
export declare class UserService implements UserDao {
    private prisma;
    private jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    checkJwtToken(jwtToken: string): boolean;
    getUserFromHeader(jwtToken: string): any;
    checkInputUserData(userData: User, auth: string): string;
    uploadAvatar(file: any): Promise<any>;
    getUserById(id: string): Promise<any>;
    getAllUser(): Promise<any>;
    getUserBySubscriptionId(subscriptionId: string): Promise<any>;
    getUserbyAddressId(addressId: string): Promise<any>;
    addNewUser(userData: User, avatarUrl: string, auth: string): Promise<any>;
    updateCurrentUser(userData: User, id: string, avatarUrl: string, auth: string): Promise<any>;
    deleteUser(id: string, auth: string): Promise<any>;
}
