
/*
 * GET /colors
 */

exports.index = function(req, res){
  var colors = ['blue', 'green', 'orange', 'teal', 'yellow', 'pink'];
  res.render('colors/index', {title: 'Colors', colors: colors});
};
