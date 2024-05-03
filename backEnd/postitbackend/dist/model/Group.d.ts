export declare class Group {
    groupId: string;
    groupName: string;
    groupDescription: string;
    constructor(groupId?: string, groupName?: string);
    getGroupId(): string;
    getGroupName(): string;
    setGroupId(groupId: string): void;
    setGroupName(groupName: string): void;
}
