/* eslint-disable prettier/prettier */

import { User } from "src/model/User";

export interface UserDao{
    checkInputUserData(userData:User,auth:string):string;
    getUserById(id: string):Promise<any>;
    getUserBySubscriptionId(subscriptionId: string):Promise<any>;
    getUserbyAddressId(addressId: string):Promise<any>;
    addNewUser(userData:User,avataUrl:string,auth:string):Promise<any>;
    updateCurrentUser(userData:User,id: string,avataUrl:string,auth:string):Promise<any>;
    deleteUser(id: string,auth:string):Promise<any>;
}