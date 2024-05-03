import { Subscription } from "src/model/Subscription";
import { SubscriptionService } from "src/service/SubscriptionService";
export declare class SubscriptionController {
    private subscriptionService;
    constructor(subscriptionService: SubscriptionService);
    getSubscriptionById(id: string): Promise<string>;
    addNewSubscription(subscriptionData: Subscription, auth: string): Promise<string>;
    updateSubscription(id: string, subscriptionData: Subscription, auth: string): Promise<string>;
    deleteSubscription(id: string, auth: string): Promise<string>;
}
