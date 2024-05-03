import { IsNotEmpty } from "class-validator";

/* eslint-disable prettier/prettier */
export class SaveAttachment{
    @IsNotEmpty()
    saveAttachmentId: string;

    @IsNotEmpty()
    saveAttachmentDate: string;

    @IsNotEmpty()
    attachmentId:string;

    constructor(saveAttachmentId: string = '', saveAttachmentDate: string = ''){
        this.saveAttachmentId = saveAttachmentId;
        this.saveAttachmentDate = saveAttachmentDate;
    }

    getSaveAttachmentId(): string{
        return this.saveAttachmentId;
    }

    getSaveAttachmentDate(): string{
        return this.saveAttachmentDate;
    }

    setSaveAttachmentId(saveAttachmentId: string): void{
        this.saveAttachmentId = saveAttachmentId;
    }

    setSaveAttachmentDate(saveAttachmentDate: string): void{
        this.saveAttachmentDate = saveAttachmentDate;
    }
}