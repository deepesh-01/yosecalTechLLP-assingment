import { Injectable, NotFoundException, UploadedFile } from "@nestjs/common";
import { V4MAPPED } from "dns";
import {v4 as uuid} from 'uuid';
import { User } from "./bank.model";

@Injectable()
export class BankService {
    private users: User[] = [];

    addUser(name: string){
        const id = String(1234567890);
        const balance = 10000;
        const transaction = 0;
        const newUser = new User(id,name,balance,transaction);
        this.users.push(newUser);
        return id;
    }

    getUser(){
        return [...this.users];
    }

    getSingleUser(id: string){
        console.log("id in find getSingleUser service :",id);
        const user = this.findUser(id)[0];
        return user;
    }

    depositMoney(id: string, amount: number){ 
        const [user,userIndex] = this.findUser(id);
        const userId = Number(userIndex);
        let updatedUser = { ...user as User }
        if(amount){
            const amount1 = Number(amount);
            updatedUser.balance = updatedUser.balance + amount1;
            updatedUser.transactions++;
            return this.users[userId] = updatedUser;
        }
        throw new NotFoundException("Please specify the amount");

    }
    
    withdrawMoney(id: string, amount: number){
        const [user,userIndex] = this.findUser(id);
        const userId = Number(userIndex);
        let updatedUser = { ...user as User }
        if(amount){
            const amount1 = Number(amount);
            updatedUser.balance = updatedUser.balance - amount1; 
            updatedUser.transactions++;
            this.users[userId] = updatedUser;
            return {"balance" : updatedUser.balance} 
        }
        throw new NotFoundException("Please specify the amount");
    }

    private findUser(id: string){
        console.log("id in find user :",id);
        const userIndex = this.users.findIndex(user => user.id === id);
        const user = this.users[userIndex];
        if(!user){
            throw new NotFoundException("Could not find user");
        }
        return [user,userIndex];
    }
}