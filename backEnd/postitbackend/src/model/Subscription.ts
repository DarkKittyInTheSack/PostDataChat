import { IsNotEmpty } from "class-validator";

/* eslint-disable prettier/prettier */
export class Subscription{
    @IsNotEmpty()
    subscriptionId: string;

    @IsNotEmpty()
    subscriptionDate: string;

    constructor(subscriptionId: string = '', subscriptionDate: string = ''){
        this.subscriptionId = subscriptionId;
        this.subscriptionDate = subscriptionDate;
    }

    getSubscriptionId(): string{
        return this.subscriptionId;
    }

    getSubscriptionDate(): string{
        return this.subscriptionDate;
    }

    setSubscriptionId(subscriptionId: string): void{
        this.subscriptionId = subscriptionId;
    }

    setSubscriptionDate(subscriptionDate: string): void{
        this.subscriptionDate = subscriptionDate;
    }
}