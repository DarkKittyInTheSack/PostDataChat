import { Account } from "src/model/Account";
import { Login } from "src/model/Login";
import { ResetPassword } from "src/model/ResetPassword";
export interface AccountDao {
    checkInputAccountData(registerData: Account): string;
    getAccountById(id: string): Promise<any>;
    login(loginData: Login): Promise<any>;
    register(registerData: Account): Promise<any>;
    resetPassword(resetpasswordData: ResetPassword, id: string, res: Response): Promise<any>;
    resetLoginToken(token: string): void;
}
