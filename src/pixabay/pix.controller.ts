import { Body, Controller, Get,Post } from "@nestjs/common";
import { PixService } from './pix.service';

@Controller('pixabay')
export class PixController {
    constructor(private readonly pixService : PixService){}

    @Get()
    getStart(): any {
        const res = this.pixService.getStart();
        console.log("Type of res : ", typeof(res));
        return this.pixService.getStart();
    }

    @Post()
    getApi(@Body('search') searchQuery : String): any{
        console.log("search query is : ",searchQuery)
        return this.pixService.pixSearchRes(searchQuery);
    }
}
