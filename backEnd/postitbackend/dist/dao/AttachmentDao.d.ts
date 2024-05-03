export interface AttachmentDao {
    getAttachmentById(id: string): Promise<any>;
    addNewAttachment(attachmentUrl: string, auth: string): Promise<any>;
    editCurrentAttachment(id: string, attachmentUrl: string, auth: string): Promise<any>;
    deleteAttachment(id: string, auth: string): Promise<any>;
}
