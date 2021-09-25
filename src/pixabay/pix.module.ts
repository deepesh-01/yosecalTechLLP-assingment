import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import {PixController} from './pix.controller';
import {PixService} from './pix.service';

@Module({
    imports:[HttpModule],
    controllers: [PixController],
    providers: [PixService],
})

export class PixModule {}