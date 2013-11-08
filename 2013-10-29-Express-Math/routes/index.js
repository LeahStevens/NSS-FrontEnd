
/*
 * GET home page.
 */

var math = require('../modules/math');

exports.index = function(req, res){

  res.render('index', { title: 'Express', x: 3, sqaure: math.square(3), area: math.area(3,4), volume: math.vol(3,3,3) });
};