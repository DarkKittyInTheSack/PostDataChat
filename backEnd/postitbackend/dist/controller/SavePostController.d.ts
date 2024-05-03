import { SavePost } from "src/model/SavePost";
import { SavePostService } from "src/service/SavePostService";
export declare class SavePostController {
    private savePostService;
    constructor(savePostService: SavePostService);
    getSavePostById(id: string): Promise<string>;
    addNewSavePost(savePostData: SavePost, auth: string): Promise<string>;
    updateSavePost(id: string, savePostData: SavePost, auth: string): Promise<string>;
    deleteSavePost(id: string, auth: string): Promise<string>;
}
