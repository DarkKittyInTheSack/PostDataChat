/* eslint-disable prettier/prettier */

import { Type } from "src/model/Type";

export interface TypeDao{
    checkInputTypeData(typeData:Type,auth:string):string;
    getTypeById(id: string):Promise<any>;
    addNewType(typeData:Type,auth:string):Promise<any>;
    updateCurrentType(typeData:Type,id: string,auth:string):Promise<any>;
    deleteType(id: string,auth:string):Promise<any>;
}