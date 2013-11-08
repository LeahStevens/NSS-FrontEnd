var colors = require('colors');

var mongoose = require('mongoose');
var Game = mongoose.model('Game');
// var Card = mongoose.model('Card');
// Colors
// bold, italic, underline, inverse, yellow, cyan,
// white, magenta, green, red, grey, blue, rainbow,
// zebra, random

/*
 * GET /games
 */

exports.index = function(req, res){
  console.log('games.index'.italic.underline.bold.rainbow);
  res.render('games/index', {title: 'Express'});
};


/*
 * POST /games/start
 */

exports.create = function(req, res){
  console.log('/games/start'.italic.underline.bold.rainbow);
  console.log(req.body);
  new Game(req.query).save(function(err, game){
    for(var i = 0; i < game.number; i++ ){
      var card = {};
      card.guess = i;
      game.cards.push(card);
      game.save(function(err, updateGame){
        res.send(game);
      });
    }
    console.log(game);
  });
};


/*
 * PUT /games/:id
 */

exports.complete = function(req, res){
  console.log('games.index'.italic.underline.bold.rainbow);
};
