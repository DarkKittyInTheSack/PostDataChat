"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SavePostModule = void 0;
const common_1 = require("@nestjs/common");
const SavePostController_1 = require("../controller/SavePostController");
const SavePostService_1 = require("../service/SavePostService");
const PrismaModule_1 = require("./PrismaModule");
const jwt_1 = require("@nestjs/jwt");
let SavePostModule = class SavePostModule {
};
exports.SavePostModule = SavePostModule;
exports.SavePostModule = SavePostModule = __decorate([
    (0, common_1.Module)({
        providers: [SavePostService_1.SavePostService],
        controllers: [SavePostController_1.SavePostController],
        imports: [PrismaModule_1.PrismaModule, jwt_1.JwtModule.register({
                global: true,
                secret: 'SECRET_KEY',
                signOptions: { expiresIn: '7d' }
            })]
    })
], SavePostModule);
//# sourceMappingURL=SavePostModule.js.map