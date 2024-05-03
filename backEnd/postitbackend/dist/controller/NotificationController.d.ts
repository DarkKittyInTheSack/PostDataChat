import { Notification } from "src/model/Notification";
import { NotificationService } from "src/service/NotificationService";
export declare class NotificationController {
    private notificationService;
    constructor(notificationService: NotificationService);
    getNotificationById(id: string): Promise<string>;
    getNotificationByUserId(id: string): Promise<string>;
    addNewInteract(notificationData: Notification, auth: string): Promise<string>;
    updateInteract(id: string, notificationData: Notification, auth: string): Promise<string>;
    deleteInteract(id: string, auth: string): Promise<string>;
}
