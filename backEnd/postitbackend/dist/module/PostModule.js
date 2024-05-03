"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostModule = void 0;
const common_1 = require("@nestjs/common");
const PostController_1 = require("../controller/PostController");
const PostService_1 = require("../service/PostService");
const PrismaModule_1 = require("./PrismaModule");
const jwt_1 = require("@nestjs/jwt");
let PostModule = class PostModule {
};
exports.PostModule = PostModule;
exports.PostModule = PostModule = __decorate([
    (0, common_1.Module)({
        providers: [PostService_1.PostService],
        controllers: [PostController_1.PostController],
        imports: [PrismaModule_1.PrismaModule, jwt_1.JwtModule.register({
                global: true,
                secret: 'SECRET_KEY',
                signOptions: { expiresIn: '7d' }
            })]
    })
], PostModule);
//# sourceMappingURL=PostModule.js.map