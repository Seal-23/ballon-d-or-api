import { Test, TestingModule } from '@nestjs/testing';
import { DatabaseModule } from '../database/database.module';
import { WinnersController } from './winners.controller';
import { winnersProviders } from './winners.providers';
import { WinnersService } from './winners.service';

describe('WinnersController', () => {
  let controller: WinnersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WinnersController],
      providers: [WinnersService, {
        provide: WinnersService,
        useValue: []
      }],
    }).compile();

    controller = module.get<WinnersController>(WinnersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
