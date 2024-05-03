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
exports.Address = void 0;
const class_validator_1 = require("class-validator");
class Address {
    constructor(addressId = '', street = '', area = '', state = '', postCode = 0) {
        this.addressId = addressId;
        this.street = street;
        this.area = area;
        this.state = state;
        this.postCode = postCode;
    }
    getAddressId() {
        return this.addressId;
    }
    getStreet() {
        return this.street;
    }
    getArea() {
        return this.area;
    }
    getState() {
        return this.state;
    }
    getPostCode() {
        return this.postCode;
    }
    setAddressId(addressId) {
        this.addressId = addressId;
    }
    setStreet(street) {
        this.street = street;
    }
    setArea(area) {
        this.area = area;
    }
    setState(state) {
        this.state = state;
    }
    setPostCode(postCode) {
        this.postCode = postCode;
    }
}
exports.Address = Address;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], Address.prototype, "addressId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], Address.prototype, "street", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], Address.prototype, "area", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], Address.prototype, "state", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], Address.prototype, "postCode", void 0);
//# sourceMappingURL=Address.js.map