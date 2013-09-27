var points = [];

for(var i = 0; i < 2; i++ )
{
  var point = {};
  point.x = parseInt(prompt('Enter for x:'));
  point.y = parseInt(prompt('Enter for y:'));
  points.push(point);
}

var dy = points[0].y - points[1].y;
var dx = points[0].x - points[1].x;

var distance = Math.sqrt(dy*dy + dx*dx);







