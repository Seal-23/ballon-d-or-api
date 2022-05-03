import mongoose, { Document } from 'mongoose';

export interface Player extends Document {
  readonly name: string;
  readonly dateOfBirth: Date;
  readonly photo: string;
}

export interface BallonDor extends Document {
  readonly year: number;
  readonly winner: mongoose.Schema.Types.ObjectId;
}
