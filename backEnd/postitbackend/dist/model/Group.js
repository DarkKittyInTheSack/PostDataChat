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
exports.Group = void 0;
const class_validator_1 = require("class-validator");
class Group {
    constructor(groupId = '', groupName = '') {
        this.groupId = groupId;
        this.groupName = groupName;
    }
    getGroupId() {
        return this.groupId;
    }
    getGroupName() {
        return this.groupName;
    }
    setGroupId(groupId) {
        this.groupId = groupId;
    }
    setGroupName(groupName) {
        this.groupName = groupName;
    }
}
exports.Group = Group;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], Group.prototype, "groupId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], Group.prototype, "groupName", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], Group.prototype, "groupDescription", void 0);
//# sourceMappingURL=Group.js.map