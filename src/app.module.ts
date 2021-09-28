import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {PixModule} from './pixabay/pix.module';
import { BankModule } from './bank/bank.module';

@Module({
  imports: [PixModule,BankModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
