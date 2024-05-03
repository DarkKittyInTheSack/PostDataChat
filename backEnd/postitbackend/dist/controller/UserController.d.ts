import { User } from "src/model/User";
import { UserService } from "src/service/UserService";
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    getUserById(id: string): Promise<void>;
    getUserAll(): Promise<string>;
    getUserBySubscriptionId(id: string): Promise<string>;
    getUserByAddressId(id: string): Promise<string>;
    uploadAvatar(file: any): Promise<string>;
    addUserInformation(userData: User, auth: string): Promise<string>;
    updateCurrentUser(id: string, userData: User, auth: string): Promise<string>;
    deleteCurrentUser(id: string, auth: string): Promise<string>;
}
