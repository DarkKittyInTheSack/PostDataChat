import { SaveAttachment } from "src/model/SaveAttachment";
import { SaveAttachmentService } from "src/service/SaveAttachmentService";
export declare class SaveAttachmentController {
    private saveAttachmentService;
    constructor(saveAttachmentService: SaveAttachmentService);
    getSaveAttachmentId(id: string): Promise<string>;
    addNewSaveAttachment(saveAttachmentData: SaveAttachment, auth: string): Promise<string>;
    updateSaveAttachment(id: string, saveAttachmentData: SaveAttachment, auth: string): Promise<string>;
    deleteSaveAttachment(id: string, auth: string): Promise<string>;
}
