var fs = require('fs');


exports.index = function(req, res){
  var colors = ['blue', 'green', 'red'];
  res.render('colors/index', {title: 'Colors Page', colors: colors, y: 'awesome', x: 'y'});
};


exports.new = function(req, res){
  res.render('colors/new', {title: 'New Color'});
};

exports.create = function(req, res){
  var color= req.body.color;

  var data= fs.readFileSync('colors.json')
  var colors= JSON.parse(data);

  colors.push(color);

  fs.writeFileSync('colors.json', JSON.stringify(colors));
  res.redirect('/colors');
};