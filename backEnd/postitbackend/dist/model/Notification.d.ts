export declare class Notification {
    notificationId: string;
    notificationTitle: string;
    notificationContent: string;
    notificationDate: string;
    constructor(notificationId?: string, notificationTitle?: string, notificationContent?: string, notificationDate?: string);
    getNotificationId(): string;
    getNotificationTitle(): string;
    getnotificationContent(): string;
    getNotificationDate(): string;
    setNotificationId(notificationId: string): void;
    setNotificationTitle(notificationTitle: string): void;
    getNotificationContent(notificationContent: string): void;
    setNotificationDate(notificationDate: string): void;
}
