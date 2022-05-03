import { Test, TestingModule } from '@nestjs/testing';
import { WinnersController } from './winners.controller';
import { WinnersService } from './winners.service';

describe('WinnersService', () => {
  let service: WinnersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WinnersController],
      providers: [WinnersService, {
        provide: WinnersService,
        useValue: []
      }],
    }).compile();

    service = module.get<WinnersService>(WinnersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
