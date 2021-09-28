import { Body, Controller, Get,Param,Post, Put } from "@nestjs/common";
import { BankService } from "./bank.service";

@Controller('bank')
export class BankController{
    constructor (private readonly bankservice: BankService){}

    @Get()
    sendHello(): any{
        return {"message" : "Bank API is working!"};
    }
    
    @Post('adduser')
    addUser(@Body('name') name: string): any{
        const newUserId = this.bankservice.addUser(name);
        return {id : newUserId};
    }
    
    @Get('getuser')
    getUser(): any{
        return this.bankservice.getUser();
    }

    @Put('addmoney')
    addMoney(
        @Body('id') id: string,
        @Body('amount') amount: number
        ): any{
        return this.bankservice.depositMoney(id,amount);
    }

    @Put('withdrawmoney')
    withdrawMoney(
        @Body('id') id: string,
        @Body('amount') amount: number
        ): any{
        return this.bankservice.withdrawMoney(id,amount);
    }

    @Get('/getuser/:userid')
    getSingleUser(@Param('userid') id: string): any{
        console.log("id in find getSingleUser controller :",id);
        return this.bankservice.getSingleUser(id);
    }
}

