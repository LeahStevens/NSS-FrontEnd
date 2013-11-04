var mongoose = require('mongoose');
var Song = mongoose.model('Song');
var Genre = mongoose.model('Genre');
/*
 * GET /songs
 */

exports.index = function(req, res){
  Song.find(function(err,songs){
  res.render('songs/index', {title: 'Songs', songs: songs});
  });
};



/*
 * GET /songs/new
 */

exports.new = function(req, res){
  Genre.find(function(err, genres){
    res.render('songs/new', {title: 'New Song', genres: genres});
  });
};



/*
 * GET /songs/show
 */
exports.show = function(req, res){
  Song.findById(req.params.id, function(err,song){
  res.render('songs/show', {title: 'Songs', song: song});
  });
}
/*
 * Delete /songs/:id
 */
exports.delete = function(req, res){
  Song.findByIdAndRemove(req.params.id, function(err,songs){
  res.redirect('/songs');
  });
}


/*
 * POST /songs
 */

exports.create = function(req, res){
  console.log('---before---');
  console.log(req.body);
  // req.body.genres = req.body.genres.split(', ');
  new Song(req.body).save(function(err, song, count){
    console.log('---after---');
    console.log(song);
    res.redirect('/songs');
  });
};