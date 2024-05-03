export declare class Alert {
    alertId: string;
    alertTitle: string;
    alertDescription: string;
    alertDate: string;
    constructor(alertId?: string, alertTitle?: string, alertDescription?: string, alertDate?: string);
    getAlertId(): string;
    getAlertTitle(): string;
    getAlertDescription(): string;
    getAlertDate(): string;
    setAlertId(alertId: string): void;
    setAlertTitle(alertTitle: string): void;
    setAlertDescription(alertDescription: string): void;
    setAlertDate(alertDate: string): void;
}
