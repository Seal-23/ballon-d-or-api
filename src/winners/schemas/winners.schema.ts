import * as mongoose from 'mongoose';

export const Player = new mongoose.Schema({
  name: String,
  dateOfBirth: Date,
  photo: String,
});

export const BallonDor = new mongoose.Schema({
  year: Number,
  winner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Player',
  },
});
