import { IsNotEmpty } from "class-validator";

/* eslint-disable prettier/prettier */
export class Type{
    @IsNotEmpty()
    typeId: string;

    @IsNotEmpty()
    typeName: string;

    constructor(TypeId: string = '', TypeName: string = ''){
        this.typeId = TypeId;
        this.typeName = TypeName;
    }

    getTypeId(): string{
        return this.typeId;
    }

    getTypeName(): string{
        return this.typeName;
    }

    setTypeId(typeId: string): void{
        this.typeId = typeId;
    }

    setTypeName(typeName: string): void{
        this.typeName = typeName;
    }
}