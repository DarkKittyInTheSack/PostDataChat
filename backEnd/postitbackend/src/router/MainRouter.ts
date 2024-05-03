/* eslint-disable prettier/prettier */
import { AccountRouter } from "./AccountRouter";
import { AddressRouter } from "./AddressRouter";
import { AlertRouter } from "./AlertRouter";
import { AttachmentRouter } from "./AttachmentRouter";
import { AwardRouter } from "./AwardRouter";
import { BanRouter } from "./BanRouter";
import { CommentRouter } from "./CommentRouter";
import { GroupRouter } from "./GroupRouter";
import { InteractRouter } from "./InteractRouter";
import { NotificationRouter } from "./NotificationRouter";
import { PostRouter } from "./PostRouter";
import { RoleRouter } from "./RoleRouter";
import { SaveAttachmentRouter } from "./SaveAttachmentRouter";
import { SavePostRouter } from "./SavePostRouter";
import { SubscriptionRouter } from "./SubscriptionRouter";
import { TypeRouter } from "./TypeRouter";
import { UserRouter } from "./UserRouter";

/* eslint-disable prettier/prettier */
export async function MainRouter(){
    // AccountRouter();
    AddressRouter();
    AlertRouter();
    AttachmentRouter();
    AwardRouter();
    BanRouter();
    CommentRouter();
    GroupRouter();
    InteractRouter();
    NotificationRouter();
    PostRouter();
    RoleRouter();
    SaveAttachmentRouter();
    SavePostRouter();
    SubscriptionRouter();
    TypeRouter();
    UserRouter();
}