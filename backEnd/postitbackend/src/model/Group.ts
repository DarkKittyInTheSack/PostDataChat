import { IsNotEmpty } from "class-validator";

/* eslint-disable prettier/prettier */
export class Group{
    @IsNotEmpty()
    groupId:string;

    @IsNotEmpty()
    groupName: string;

    @IsNotEmpty()
    groupDescription:string;
    
    constructor(groupId: string = '', groupName: string = ''){
        this.groupId = groupId;
        this.groupName = groupName
    }

    getGroupId(): string{
        return this.groupId;
    }

    getGroupName(): string{
        return this.groupName;
    }

    setGroupId(groupId: string): void{
        this.groupId = groupId;
    }

    setGroupName(groupName: string): void{
        this.groupName = groupName;
    }
}