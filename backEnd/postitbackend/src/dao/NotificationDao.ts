/* eslint-disable prettier/prettier */

import { Notification } from "src/model/Notification";

export interface NotificationDao{
    checkInputNotificationData(notificationData:Notification,auth:string):string;
    getNotificationByUserId(userId: string):Promise<any>;
    getNotification(id: string):Promise<any>;
    addnewNotification(notificationData:Notification,auth:string):Promise<any>;
    addNewUserNotification(notificationId:string,userId:string,auth:string):Promise<any>;
    updateCurrentNotification(notificationData:Notification,id: string,auth:string):Promise<any>;
    deleteNotification(id: string,auth:string):Promise<any>;
    deleteUserNotification(id: string,auth:string):Promise<any>;
}