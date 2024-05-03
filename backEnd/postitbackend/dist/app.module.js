"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const AccountModule_1 = require("./module/AccountModule");
const AddressModule_1 = require("./module/AddressModule");
const AlertModule_1 = require("./module/AlertModule");
const AttachmentModule_1 = require("./module/AttachmentModule");
const AwardModule_1 = require("./module/AwardModule");
const BanModule_1 = require("./module/BanModule");
const CommentModule_1 = require("./module/CommentModule");
const GroupModule_1 = require("./module/GroupModule");
const InteractModule_1 = require("./module/InteractModule");
const NotificationModule_1 = require("./module/NotificationModule");
const PostModule_1 = require("./module/PostModule");
const RoleModule_1 = require("./module/RoleModule");
const SaveAttachmentModule_1 = require("./module/SaveAttachmentModule");
const SavePostModule_1 = require("./module/SavePostModule");
const SubscriptionModule_1 = require("./module/SubscriptionModule");
const TypeModule_1 = require("./module/TypeModule");
const UserModule_1 = require("./module/UserModule");
const core_1 = require("@nestjs/core");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            AccountModule_1.AccountModule, RoleModule_1.RoleModule, TypeModule_1.TypeModule, AlertModule_1.AlertModule, AttachmentModule_1.AttachmentModule, AwardModule_1.AwardModule, BanModule_1.BanModule, AddressModule_1.AddressModule, CommentModule_1.CommentModule, GroupModule_1.GroupModule, InteractModule_1.InteractModule, NotificationModule_1.NotificationModule, PostModule_1.PostModule, SaveAttachmentModule_1.SaveAttachmentModule, SavePostModule_1.SavePostModule, SubscriptionModule_1.SubscriptionModule, UserModule_1.UserModule, core_1.RouterModule.register([{
                    path: 'account',
                    module: AccountModule_1.AccountModule
                }, {
                    path: 'role',
                    module: RoleModule_1.RoleModule
                }, {
                    path: 'type',
                    module: TypeModule_1.TypeModule
                }, {
                    path: 'alert',
                    module: AlertModule_1.AlertModule
                }, {
                    path: 'attachment',
                    module: AttachmentModule_1.AttachmentModule
                }, {
                    path: 'award',
                    module: AwardModule_1.AwardModule
                }, {
                    path: 'ban',
                    module: BanModule_1.BanModule
                }, {
                    path: 'address',
                    module: AddressModule_1.AddressModule
                }, {
                    path: 'comment',
                    module: CommentModule_1.CommentModule
                }, {
                    path: 'group',
                    module: GroupModule_1.GroupModule
                }, {
                    path: 'interact',
                    module: InteractModule_1.InteractModule
                }, {
                    path: 'notification',
                    module: NotificationModule_1.NotificationModule
                }, {
                    path: 'post',
                    module: PostModule_1.PostModule
                }, {
                    path: 'save-attachment',
                    module: SaveAttachmentModule_1.SaveAttachmentModule
                }, {
                    path: 'save-post',
                    module: SavePostModule_1.SavePostModule
                }, {
                    path: 'subscription',
                    module: SubscriptionModule_1.SubscriptionModule
                }, {
                    path: 'user',
                    module: UserModule_1.UserModule
                }])
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map