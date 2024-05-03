import { IsNotEmpty } from "class-validator";

/* eslint-disable prettier/prettier */
export class Role{
    @IsNotEmpty()
    roleId: string;

    @IsNotEmpty()
    roleName: string;

    constructor(roleId: string = '',roleName: string = ''){
        this.roleId = roleId;
        this.roleName = roleName;
    }

    getRoleId(): string{
        return this.roleId
    }

    getRoleName(): string{
        return this.roleName
    }

    setRoleId(roleId: string): void{
        this.roleId = roleId
    }

    setRoleName(roleName: string): void{
        this.roleName = roleName
    }
}