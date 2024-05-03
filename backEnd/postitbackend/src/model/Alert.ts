/* eslint-disable prettier/prettier */
import { IsNotEmpty } from "class-validator";

/* eslint-disable prettier/prettier */
export class Alert{
    @IsNotEmpty()
    alertId: string;

    @IsNotEmpty()
    alertTitle: string;

    @IsNotEmpty()
    alertDescription: string;

    @IsNotEmpty()
    alertDate: string;

    constructor(alertId: string = '', alertTitle: string = '', alertDescription: string = '', alertDate: string=''){
        this.alertId = alertId;
        this.alertTitle = alertTitle;
        this.alertDescription = alertDescription;
        this.alertDate = alertDate;
    }

    getAlertId(): string{
        return this.alertId;
    }

    getAlertTitle(): string{
        return this.alertTitle;
    }

    getAlertDescription(): string{
        return this.alertDescription;
    }

    getAlertDate(): string{
        return this.alertDate;
    }

    setAlertId(alertId: string): void{
        this.alertId = alertId
    }

    setAlertTitle(alertTitle: string): void{
        this.alertTitle = alertTitle
    }

    setAlertDescription(alertDescription: string): void{
        this.alertDescription = alertDescription
    }

    setAlertDate(alertDate: string): void{
        this.alertDate = alertDate
    }
}