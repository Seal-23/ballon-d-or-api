import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { CreatePlayerDto } from './dto/winners.dto';
import { WinnersService } from './winners.service';

@Controller('winners')
export class WinnersController {
  constructor(private winnerService: WinnersService) {}

  @Post('/player')
  async cratePlayer(
    @Res() playerResponse,
    @Body() createPlayerDto: CreatePlayerDto,
  ) {
    try {
      const createdPlayer = await this.winnerService.createPlayer(
        createPlayerDto,
      );
      playerResponse.status(HttpStatus.OK).json(createdPlayer);
    } catch (error) {
      playerResponse.status(HttpStatus.BAD_REQUEST).json(error);
    }
    return playerResponse;
  }

  @Get('/player')
  async getPlayers(@Res() playerResponse) {
    try {
      const players = await this.winnerService.findAllPlayers();
      playerResponse.status(HttpStatus.OK).json(players);
    } catch (error) {
      playerResponse.status(HttpStatus.BAD_REQUEST).json(error);
    }
    return playerResponse;
  }

  @Post('/ballons-d-or')
  async crateBallonsDor(
    @Res() ballonDorResponse,
    @Body() createBallonDorDto: CreatePlayerDto,
  ) {
    try {
      const createdPlayer = await this.winnerService.createBallonDor(
        createBallonDorDto,
      );
      ballonDorResponse.status(HttpStatus.OK).json(createdPlayer);
    } catch (error) {
      ballonDorResponse.status(HttpStatus.BAD_REQUEST).json(error);
    }
    return ballonDorResponse;
  }

  @Get('/ballons-d-or')
  async getBallonsDor(@Res() ballonDorResponse) {
    try {
      const ballonsDors = await this.winnerService.findAllBallonDors();
      ballonDorResponse.status(HttpStatus.OK).json(ballonsDors);
    } catch (error) {
      ballonDorResponse.status(HttpStatus.BAD_REQUEST).json(error);
    }
    return ballonDorResponse;
  }
}
