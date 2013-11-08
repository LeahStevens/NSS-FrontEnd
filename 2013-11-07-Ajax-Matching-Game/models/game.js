var mongoose = require('mongoose');
var _ = require('lodash');

var Game = mongoose.Schema({
  number: Number,
  guess: Number,
  didWin: {type: Boolean, default: false},
  player: String,
  cards: Array,
  timer:  Number,
  createdAt: {type: Date, default: Date.now}
});

mongoose.model('Game', Game);