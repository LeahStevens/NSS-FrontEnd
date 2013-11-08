var mongoose = require('mongoose');
var Song = mongoose.model('Song');
var Artist = mongoose.model('Artist');

/*
 * GET /artists
 */

exports.index = function(req, res){
  Artist.find().populate('songs').exec(function(err,artists){
    res.render('artists/index', {title: 'Artists', artists: artists});
  });
};


/*
 * GET /songs/new
 */

exports.new = function(req, res){
  Song.find(function(err, songs){
    res.render('artists/new', {title: 'Artists', songs: songs});
  });
};

/*
 * POST /songs
 */

exports.create = function(req, res){
  new Artist(req.body).save(function(err, artist, count){
  res.redirect('/artists');
  });
};
