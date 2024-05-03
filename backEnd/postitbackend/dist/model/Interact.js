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
exports.Interact = void 0;
const class_validator_1 = require("class-validator");
class Interact {
    constructor(interactId = '', isLike = false, isDislike = false) {
        this.interactId = interactId;
        this.isLike = isLike;
        this.isDislike = isDislike;
    }
    getInteractId() {
        return this.interactId;
    }
    getLike() {
        return this.isLike;
    }
    getDislike() {
        return this.isDislike;
    }
    setInteractId(interactId) {
        this.interactId = interactId;
    }
    setLike(isLike) {
        this.isLike = isLike;
    }
    setDislike(isDislike) {
        this.isDislike = isDislike;
    }
}
exports.Interact = Interact;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], Interact.prototype, "interactId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Boolean)
], Interact.prototype, "isLike", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Boolean)
], Interact.prototype, "isDislike", void 0);
//# sourceMappingURL=Interact.js.map