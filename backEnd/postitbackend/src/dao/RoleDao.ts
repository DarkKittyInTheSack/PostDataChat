/* eslint-disable prettier/prettier */

import { Role } from "src/model/Role";

export interface RoleDao{
    getRoleById(id: string):Promise<any>;
    addNewRole(roleData:Role,auth:string):Promise<any>;
    updateCurrentRole(roleData:Role,id: string,auth:string):Promise<any>;
    deleteRole(id: string,auth:string):Promise<any>;
}