/* eslint-disable prettier/prettier */

import { Subscription } from "src/model/Subscription";

export interface SubscriptionDao{
    getSubscriptionById(id: string):Promise<any>;
    addNewSubscription(subscriptionData:Subscription,auth:string):Promise<any>;
    addNewSubscriptionUser(subscriptionId:string,userId:string,auth:string):Promise<any>;
    updateCurrentSubscription(subscriptionData:Subscription,id: string,auth:string):Promise<any>;
    deleteSubscription(id: string,auth:string):Promise<any>;
    deleteSubscriptionUser(id: string,auth:string):Promise<any>;
}