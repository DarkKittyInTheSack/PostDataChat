"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainRouter = void 0;
const AddressRouter_1 = require("./AddressRouter");
const AlertRouter_1 = require("./AlertRouter");
const AttachmentRouter_1 = require("./AttachmentRouter");
const AwardRouter_1 = require("./AwardRouter");
const BanRouter_1 = require("./BanRouter");
const CommentRouter_1 = require("./CommentRouter");
const GroupRouter_1 = require("./GroupRouter");
const InteractRouter_1 = require("./InteractRouter");
const NotificationRouter_1 = require("./NotificationRouter");
const PostRouter_1 = require("./PostRouter");
const RoleRouter_1 = require("./RoleRouter");
const SaveAttachmentRouter_1 = require("./SaveAttachmentRouter");
const SavePostRouter_1 = require("./SavePostRouter");
const SubscriptionRouter_1 = require("./SubscriptionRouter");
const TypeRouter_1 = require("./TypeRouter");
const UserRouter_1 = require("./UserRouter");
async function MainRouter() {
    (0, AddressRouter_1.AddressRouter)();
    (0, AlertRouter_1.AlertRouter)();
    (0, AttachmentRouter_1.AttachmentRouter)();
    (0, AwardRouter_1.AwardRouter)();
    (0, BanRouter_1.BanRouter)();
    (0, CommentRouter_1.CommentRouter)();
    (0, GroupRouter_1.GroupRouter)();
    (0, InteractRouter_1.InteractRouter)();
    (0, NotificationRouter_1.NotificationRouter)();
    (0, PostRouter_1.PostRouter)();
    (0, RoleRouter_1.RoleRouter)();
    (0, SaveAttachmentRouter_1.SaveAttachmentRouter)();
    (0, SavePostRouter_1.SavePostRouter)();
    (0, SubscriptionRouter_1.SubscriptionRouter)();
    (0, TypeRouter_1.TypeRouter)();
    (0, UserRouter_1.UserRouter)();
}
exports.MainRouter = MainRouter;
//# sourceMappingURL=MainRouter.js.map