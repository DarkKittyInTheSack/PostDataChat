import { AccountService } from 'src/service/AccountService';
import { Login } from 'src/model/Login';
import { Account } from 'src/model/Account';
import { ResetPassword } from 'src/model/ResetPassword';
export declare class AccountController {
    private readonly accountService;
    constructor(accountService: AccountService);
    getAccount(id: string): void;
    getAccountAll(): Promise<string>;
    loginAccount(loginData: Login): Promise<string>;
    registerAccount(registerData: Account): Promise<string>;
    updateNewPassword(req: Request, resetPasswordData: ResetPassword, id: string, res: Response): void;
    deleteAccount(id: string): void;
}
