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
exports.Ban = void 0;
const class_validator_1 = require("class-validator");
class Ban {
    constructor(banId = '', banTitle = '', banDescription = '', banDate = '') {
        this.banId = banId;
        this.banTitle = banTitle;
        this.banDescription = banDescription;
        this.banDate = banDate;
    }
    getBanId() {
        return this.banId;
    }
    getBanTitle() {
        return this.banTitle;
    }
    getBanDescription() {
        return this.banDescription;
    }
    getBanDate() {
        return this.banDate;
    }
    setBanId(banId) {
        this.banId = banId;
    }
    setBanTitle(banTitle) {
        this.banTitle = banTitle;
    }
    setBanDescription(banDescription) {
        this.banDescription = banDescription;
    }
    setBanDate(banDate) {
        this.banDate = banDate;
    }
}
exports.Ban = Ban;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], Ban.prototype, "banId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], Ban.prototype, "banTitle", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], Ban.prototype, "banDescription", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], Ban.prototype, "banDate", void 0);
//# sourceMappingURL=Ban.js.map