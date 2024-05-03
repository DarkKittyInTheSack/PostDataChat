/* eslint-disable prettier/prettier */

import { SaveAttachment } from "src/model/SaveAttachment";

export interface SaveAttachmentDao{
    getSaveAttachmentById(id: string):Promise<any>;
    addNewSaveAttachment(saveAttachmentData:SaveAttachment,auth:string):Promise<any>;
    addNewSaveAttachmentUser(saveAttachmentId:string,userId:string,auth:string):Promise<any>;
    updateCurrentSaveAttachment(saveAttachmentData:SaveAttachment,id: string,auth:string):Promise<any>;
    deleteSaveAttachment(id: string,auth:string):Promise<any>;
    deleteSaveAttachmentUser(id: string,auth:string):Promise<any>;
}