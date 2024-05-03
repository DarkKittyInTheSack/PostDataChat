/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
export interface AttachmentDao{
    getAttachmentById(id: string):Promise<any>;
    addNewAttachment(attachmentUrl:string,auth:string):Promise<any>;
    addUserAttachment(attachmentId:string,userId:string,auth:string):Promise<any>;
    addPostAttachment(attachmentId:string,postId:string,auth:string):Promise<any>;
    editCurrentAttachment(id: string, attachmentUrl:string,auth:string):Promise<any>;
    deleteAttachment(id: string,auth:string):Promise<any>;
    deleteUserAttachment(id: string,auth:string):Promise<any>;
    deletePostAttachment(id: string,auth:string):Promise<any>;
}