var mongoose = require('mongoose');
var _ = require('lodash');

var Card = mongoose.Schema({
  number: Number,
  guess: Number,
  createdAt: {type: Date, default: Date.now}
});

mongoose.model('Card', Card);