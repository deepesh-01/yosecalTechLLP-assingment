import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { map, Observable } from "rxjs";


@Injectable()
export class PixService {

    constructor(private httpService : HttpService){}

    getStart(): String{
        return "Hello Pixabay!"
    }
    
    pixSearchRes( query ): any{
        const res = this.httpService.get(`https://pixabay.com/api/?key=23540491-efe58418642fde19d0bd5f1e8&q=${query}`).pipe(map(response => response.data));
        // console.log(res);
        return res;
    }
    
    
}