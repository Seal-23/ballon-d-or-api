import { Module } from '@nestjs/common';
import { WinnersController } from './winners.controller';
import { WinnersService } from './winners.service';
import { winnersProviders } from './winners.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [WinnersController],
  providers: [WinnersService, ...winnersProviders],
})
export class WinnersModule {}
