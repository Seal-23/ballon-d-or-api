import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WinnersModule } from './winners/winners.module';

@Module({
  imports: [WinnersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
