"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Alert = void 0;
const class_validator_1 = require("class-validator");
class Alert {
    constructor(alertId = '', alertTitle = '', alertDescription = '', alertDate = '') {
        this.alertId = alertId;
        this.alertTitle = alertTitle;
        this.alertDescription = alertDescription;
        this.alertDate = alertDate;
    }
    getAlertId() {
        return this.alertId;
    }
    getAlertTitle() {
        return this.alertTitle;
    }
    getAlertDescription() {
        return this.alertDescription;
    }
    getAlertDate() {
        return this.alertDate;
    }
    setAlertId(alertId) {
        this.alertId = alertId;
    }
    setAlertTitle(alertTitle) {
        this.alertTitle = alertTitle;
    }
    setAlertDescription(alertDescription) {
        this.alertDescription = alertDescription;
    }
    setAlertDate(alertDate) {
        this.alertDate = alertDate;
    }
}
exports.Alert = Alert;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], Alert.prototype, "alertId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], Alert.prototype, "alertTitle", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], Alert.prototype, "alertDescription", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], Alert.prototype, "alertDate", void 0);
//# sourceMappingURL=Alert.js.map