"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveAttachmentModule = void 0;
const common_1 = require("@nestjs/common");
const SaveAttachmentController_1 = require("../controller/SaveAttachmentController");
const SaveAttachmentService_1 = require("../service/SaveAttachmentService");
const PrismaModule_1 = require("./PrismaModule");
const jwt_1 = require("@nestjs/jwt");
let SaveAttachmentModule = class SaveAttachmentModule {
};
exports.SaveAttachmentModule = SaveAttachmentModule;
exports.SaveAttachmentModule = SaveAttachmentModule = __decorate([
    (0, common_1.Module)({
        providers: [SaveAttachmentService_1.SaveAttachmentService],
        controllers: [SaveAttachmentController_1.SaveAttachmentController],
        imports: [PrismaModule_1.PrismaModule, jwt_1.JwtModule.register({
                global: true,
                secret: 'SECRET_KEY',
                signOptions: { expiresIn: '7d' }
            })]
    })
], SaveAttachmentModule);
//# sourceMappingURL=SaveAttachmentModule.js.map