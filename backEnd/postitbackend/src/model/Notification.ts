import { IsNotEmpty } from "class-validator";

/* eslint-disable prettier/prettier */
export class Notification{
    @IsNotEmpty()
    notificationId: string;

    @IsNotEmpty()
    notificationTitle: string;

    @IsNotEmpty()
    notificationContent: string;

    @IsNotEmpty()
    notificationDate: string;

    constructor(notificationId: string = '', notificationTitle: string = '', notificationContent: string = '', notificationDate: string = ''){
        this.notificationId = notificationId;
        this.notificationTitle = notificationTitle;
        this.notificationContent = notificationContent;
        this.notificationDate = notificationDate;
    }

    getNotificationId():string{
        return this.notificationId;
    }

    getNotificationTitle():string{
        return this.notificationTitle;
    }

    getnotificationContent():string{
        return this.notificationContent;
    }

    getNotificationDate():string{
        return this.notificationDate;
    }

    setNotificationId(notificationId: string):void{
        this.notificationId = notificationId;
    }

    setNotificationTitle(notificationTitle: string):void{
        this.notificationTitle = notificationTitle;
    }

    getNotificationContent(notificationContent: string):void{
        this.notificationContent = notificationContent;
    }

    setNotificationDate(notificationDate: string):void{
        this.notificationDate = notificationDate;
    }
}