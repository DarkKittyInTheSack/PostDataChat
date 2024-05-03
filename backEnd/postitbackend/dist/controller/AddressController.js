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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressController = void 0;
const common_1 = require("@nestjs/common");
const response_1 = require("../config/response");
const Address_1 = require("../model/Address");
const AddressService_1 = require("../service/AddressService");
const MessageUtils_1 = require("../utils/MessageUtils");
let AddressController = class AddressController {
    constructor(addressService) {
        this.addressService = addressService;
    }
    async getAddressById(id) {
        return (0, response_1.responseApi)(await this.addressService.getAddressById(id), MessageUtils_1.DATA_GET_COMPLETE);
    }
    async getAddressByUserId(id) {
        return (0, response_1.responseApi)(await this.addressService.getAddressByUser(id), MessageUtils_1.DATA_GET_COMPLETE);
    }
    async addNewAddress(addressData, auth) {
        return (0, response_1.responseApi)([], await this.addressService.addAddress(addressData, auth));
    }
    async updateCurrentAddress(addressData, id, auth) {
        return (0, response_1.responseApi)([], await this.addressService.updateAddress(addressData, id, auth));
    }
    async deleteAddress(id, auth) {
        return (0, response_1.responseApi)([], await this.addressService.deleteAddress(id, auth));
    }
};
exports.AddressController = AddressController;
__decorate([
    (0, common_1.Get)('/get-address/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AddressController.prototype, "getAddressById", null);
__decorate([
    (0, common_1.Get)('/get-address-user/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AddressController.prototype, "getAddressByUserId", null);
__decorate([
    (0, common_1.Post)('/add-address'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Headers)('Authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Address_1.Address, String]),
    __metadata("design:returntype", Promise)
], AddressController.prototype, "addNewAddress", null);
__decorate([
    (0, common_1.Put)('/update-address/:id'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Headers)('Authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Address_1.Address, String, String]),
    __metadata("design:returntype", Promise)
], AddressController.prototype, "updateCurrentAddress", null);
__decorate([
    (0, common_1.Delete)('/delete-address/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Headers)('Authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], AddressController.prototype, "deleteAddress", null);
exports.AddressController = AddressController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [AddressService_1.AddressService])
], AddressController);
//# sourceMappingURL=AddressController.js.map