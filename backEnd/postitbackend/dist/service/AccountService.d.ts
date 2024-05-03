import { PrismaService } from "./PrismaService";
import { Login } from 'src/model/Login';
import { Account } from 'src/model/Account';
import { ResetPassword } from 'src/model/ResetPassword';
import { AccountDao } from 'src/dao/AccountDao';
import { JwtService } from "@nestjs/jwt";
export declare class AccountService implements AccountDao {
    private prisma;
    private jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    checkJwtToken(jwtToken: string): boolean;
    getUserFromHeader(jwtToken: string): any;
    getAllData(): Promise<any>;
    getDataByUsername(username: string): Promise<{
        accountId: string;
        username: string;
        passwords: string;
        roleId: string;
        refreshToken: string;
    }>;
    getAccountById(id: string): Promise<any>;
    checkInputAccountData(registerData: Account): string;
    login(loginData: Login): Promise<any>;
    register(registerData: Account): Promise<any>;
    resetPassword(resetPasswordData: ResetPassword, id: string, res: Response): Promise<any>;
    resetLoginToken(token: string): void;
}
