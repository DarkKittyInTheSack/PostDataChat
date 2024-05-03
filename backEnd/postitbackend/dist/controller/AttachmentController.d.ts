import { AttachmentService } from "src/service/AttachmentService";
export declare class AttachmentController {
    private attachmentService;
    constructor(attachmentService: AttachmentService);
    getAttachmentById(id: string): Promise<string>;
    addAttachment(file: any, auth: string): Promise<string>;
    updateCurrentAtachment(id: string, file: any, auth: string): Promise<string>;
    deleteAttachment(id: string, auth: string): Promise<string>;
}
