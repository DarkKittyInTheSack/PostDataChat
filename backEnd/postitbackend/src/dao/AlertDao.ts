/* eslint-disable prettier/prettier */

import { Alert } from "src/model/Alert";

export interface AlertDao{
    checkInputAlertData(alertData:Alert,auth:string):string;
    getAlertByUserId(userId: string):Promise<any>;
    getAlertByPostId(postId: string):Promise<any>;
    getAlertById(id: string):Promise<any>;
    addNewAlert(alertData:Alert,auth:string):Promise<any>;
    addNewAlertUser(alertId:string,userId:string,auth:string):Promise<any>;
    addNewAlertPost(alertId:string,postId:string,auth:string):Promise<any>;
    updateAlert(alertData:Alert,id: string,auth:string):Promise<any>;
    removeAlert(id: string,auth:string):Promise<any>;
    removeAlertUser(id: string,auth:string):Promise<any>;
    removeAlertPost(id: string,auth:string):Promise<any>;
}