import mongoose from 'mongoose';

export class CreatePlayerDto {
  name: string;
  dateOfBirth: Date;
  photo: string;
}

export class CreateBallonDorDto {
  year: string;
  winner: mongoose.Schema.Types.ObjectId;
}
