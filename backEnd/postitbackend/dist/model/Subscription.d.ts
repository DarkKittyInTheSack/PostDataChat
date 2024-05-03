export declare class Subscription {
    subscriptionId: string;
    subscriptionDate: string;
    constructor(subscriptionId?: string, subscriptionDate?: string);
    getSubscriptionId(): string;
    getSubscriptionDate(): string;
    setSubscriptionId(subscriptionId: string): void;
    setSubscriptionDate(subscriptionDate: string): void;
}
