import { Connection } from 'mongoose';
import { Player, BallonDor } from './schemas/winners.schema';

export const winnersProviders = [
  {
    provide: 'PLAYER_MODEL',
    useFactory: (connection: Connection) => connection.model('Player', Player),
    inject: ['DATABASE_CONNECTION'],
  },
  {
    provide: 'BALLON_D_OR_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('Ballon_d_or', BallonDor),
    inject: ['DATABASE_CONNECTION'],
  },
];
