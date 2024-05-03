import { Group } from "src/model/Group";
import { GroupService } from "src/service/GroupService";
export declare class GroupController {
    private groupService;
    constructor(groupService: GroupService);
    getGroupById(id: string): Promise<string>;
    addNewGroup(groupData: Group, auth: string): Promise<string>;
    updateCurrentGroup(id: string, groupData: Group, auth: string): Promise<string>;
    deleteGroup(req: Request, id: string, auth: string): Promise<string>;
}
