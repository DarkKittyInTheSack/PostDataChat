import { Type } from "src/model/Type";
import { TypeService } from "src/service/TypeService";
export declare class TypeController {
    private typeService;
    constructor(typeService: TypeService);
    getAllType(): Promise<string>;
    getTypeById(id: string): Promise<string>;
    addNewType(typeData: Type, auth: string): Promise<string>;
    updateType(id: string, typeData: Type, auth: string): Promise<string>;
    deleteType(id: string, auth: string): Promise<string>;
}
