import {Test,TestingModule} from '@nestjs/testing';
import exp from 'constants';
import { appendFile } from 'fs';
import { AppController } from 'src/app.controller';
import {BankController} from './bank.controller';
import { BankService } from './bank.service';

describe('BankController', ()=> {
    let bankController: BankController;
    let spyService: BankService;

    beforeEach(async () => {
        const BankServiceProvider = {
            provide: BankService,
            useFactory: () => ({
            }),
        };
        const app: TestingModule = await Test.createTestingModule({
            controllers:[BankController],
            providers:[BankService],
        }).compile();

        bankController = app.get<BankController>(BankController);
        spyService = app.get<BankService>(BankService);
    });

    describe('root', ()=>{
        it('should return {"message" : "Bank API is working!"}',()=>{
            expect(bankController.sendHello()).toEqual({"message" : "Bank API is working!"});
        });
    });

    describe('adduser', ()=>{
        it('should return {id :1234567890}',()=>{
            const name = 'Deepesh Rathod';
            expect(bankController.addUser(name)).toEqual({id : "1234567890"});
        });
    });

    describe('getUser', ()=>{
        it('should return []',()=>{
            expect(bankController.getUser()).toEqual([]);
        });
    });

    describe('addMoney',()=>{
        it('should return Not Found Exception',()=>{
            const id = String(1234567890);
            const amount = 500;
            expect(bankController.addMoney(id,amount)).toThrowError();
        });
    });
})