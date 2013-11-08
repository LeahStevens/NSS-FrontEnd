var database = require('../modules/database');
/*
 * GET list page.
 */

exports.index = function(req, res){
  var list = database.read(__dirname + '/../db/list.json');
  res.render('list', { title: 'List Page: To-Do' });
};


/*
 * GET list new page.
 */
exports.new = function(req, res){
  res.render('list/new', { title: 'New: To-Do' });
};


/*
 * get list page.
 */
exports.create = function(req, res){
  var item = req.body.item;
  var data = req.body.date;
  var color = req.body.color;

  var list = database.read(__dirname + '/../db/list.json' );
  var item = {item:item, date:date, color:color};
  list.push(item);
  database.write(__dirname + '/../db/list.json', list);

  res.redirect('/list');
};