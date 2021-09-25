import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {PixModule} from './pixabay/pix.module';

@Module({
  imports: [PixModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
