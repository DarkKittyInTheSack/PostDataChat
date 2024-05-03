/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountModule } from './module/AccountModule';
import { AddressModule } from './module/AddressModule';
import { AlertModule } from './module/AlertModule';
import { AttachmentModule } from './module/AttachmentModule';
import { AwardModule } from './module/AwardModule';
import { BanModule } from './module/BanModule';
import { CommentModule } from './module/CommentModule';
import { GroupModule } from './module/GroupModule';
import { InteractModule } from './module/InteractModule';
import { NotificationModule } from './module/NotificationModule';
import { PostModule } from './module/PostModule';
import { RoleModule } from './module/RoleModule';
import { SaveAttachmentModule } from './module/SaveAttachmentModule';
import { SavePostModule } from './module/SavePostModule';
import { SubscriptionModule } from './module/SubscriptionModule';
import { TypeModule } from './module/TypeModule';
import { UserModule } from './module/UserModule';
import { RouterModule } from '@nestjs/core';

@Module({
  imports: [
    AccountModule,RoleModule,TypeModule,AlertModule,AttachmentModule,AwardModule,BanModule,AddressModule,CommentModule,GroupModule,InteractModule,NotificationModule,PostModule,SaveAttachmentModule,SavePostModule,SubscriptionModule,UserModule, RouterModule.register([{
      path: 'account',
      module: AccountModule
    },{
      path:'role',
      module: RoleModule
    },{
      path:'type',
      module: TypeModule
    },{
      path:'alert',
      module: AlertModule
    },{
      path:'attachment',
      module: AttachmentModule
    },{
      path:'award',
      module: AwardModule
    },{
      path:'ban',
      module: BanModule
    },{
      path:'address',
      module: AddressModule
    },{
      path:'comment',
      module: CommentModule
    },{
      path:'group',
      module: GroupModule
    },{
      path:'interact',
      module: InteractModule
    },{
      path:'notification',
      module: NotificationModule
    },{
      path:'post',
      module: PostModule
    },{
      path:'save-attachment',
      module: SaveAttachmentModule
    },{
      path:'save-post',
      module: SavePostModule
    },{
      path:'subscription',
      module: SubscriptionModule
    },{
      path:'user',
      module: UserModule
    }])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
