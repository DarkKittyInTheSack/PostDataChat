/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { AccountService } from 'src/service/AccountService';
import { Body, Controller, Delete, Get, Param, Post, Put, Req, Res } from "@nestjs/common";
import { Login } from 'src/model/Login';
import { Account } from 'src/model/Account';
import { ResetPassword } from 'src/model/ResetPassword';
import { responseApi } from 'src/config/response';
import { message } from 'antd';
import { DATA_GET_COMPLETE } from 'src/utils/MessageUtils';

@Controller()
export class AccountController {

    constructor(private readonly accountService: AccountService) {}
    
    @Get('/get-account/:id')
    getAccount(@Param('id') id: string){
        this.accountService.getAccountById(id);
    }

    @Get('/get-account-all')
    async getAccountAll(){
        return responseApi(await this.accountService.getAllData(),DATA_GET_COMPLETE)
    }

    @Post('/login')
    async loginAccount(@Body() loginData: Login){
        return responseApi(await this.accountService.login(loginData), DATA_GET_COMPLETE)
        
    }

    @Post('/register')
    async registerAccount(
        @Body() registerData:Account
    ){
        return responseApi([], await this.accountService.register(registerData))
    }

    @Put('/change-password/:id')
    updateNewPassword(@Req() req: Request,@Body() resetPasswordData: ResetPassword,@Param('id') id: string,@Res() res: Response){
        this.accountService.resetPassword(resetPasswordData,id,res)
    }

    @Delete('/delete-account/:id')
    deleteAccount(@Param('id') id:string){
        
    }
}