import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Player, BallonDor } from './interfaces/winners.interface';
import { CreatePlayerDto } from './dto/winners.dto';

@Injectable()
export class WinnersService {

  hola:number = 3;
  
  constructor(
    @Inject('PLAYER_MODEL')
    private playerModel: Model<Player>,
    @Inject('BALLON_D_OR_MODEL')
    private ballonDorModel: Model<BallonDor>,
  ) {}

  async createPlayer(createPlayerDto: CreatePlayerDto): Promise<Player> {
    const createdPlayer = new this.playerModel(createPlayerDto);
    return createdPlayer.save();
  }

  async findAllPlayers(): Promise<Player[]> {
    return this.playerModel.find().exec();
  }

  async createBallonDor(
    createBallonDorDto: CreatePlayerDto,
  ): Promise<BallonDor> {
    const createdBallonDor = new this.ballonDorModel(createBallonDorDto);
    return createdBallonDor.save();
  }

  async findAllBallonDors(): Promise<BallonDor[]> {
    return this.ballonDorModel.find().exec();
  }
}
