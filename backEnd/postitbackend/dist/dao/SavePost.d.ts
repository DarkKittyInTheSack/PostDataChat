import { SavePost } from "src/model/SavePost";
export interface SavePostDao {
    getSavePostById(id: string): Promise<any>;
    addNewSavePost(savePostData: SavePost, auth: string): Promise<any>;
    updateCurrentSavePost(savePostData: SavePost, id: string, auth: string): Promise<any>;
    deleteSavePost(id: string, auth: string): Promise<any>;
}
