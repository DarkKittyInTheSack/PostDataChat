import { Alert } from "src/model/Alert";
import { AlertService } from "src/service/AlertService";
export declare class AlertController {
    private alertService;
    constructor(alertService: AlertService);
    getAlertById(id: string): Promise<string>;
    getAlertByUserId(id: string): Promise<string>;
    getAlertByPostId(id: string): Promise<string>;
    addNewAlert(alertData: Alert, auth: string): Promise<string>;
    updateCurrentAlert(id: string, alertData: Alert, auth: string): Promise<string>;
    deleteAlert(id: string, auth: string): Promise<string>;
}
