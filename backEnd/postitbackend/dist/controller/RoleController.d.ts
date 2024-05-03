import { Role } from "src/model/Role";
import { RoleService } from "src/service/RoleService";
export declare class RoleController {
    private roleService;
    constructor(roleService: RoleService);
    getAllRole(): Promise<string>;
    getRoleById(id: string): Promise<string>;
    addNewRole(roleData: Role, auth: string): Promise<string>;
    updateRole(id: string, roleData: Role, auth: string): Promise<string>;
    deleteRole(id: string, auth: string): Promise<string>;
}
