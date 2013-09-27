var points = []; // correct

var x = prompt('Enter x coord:'); // unecessary
var y = prompt('Enter y coord:'); // ditto


for(i = 0, i < points.length, i++); // var i, also i<2
{
  var point = {};  // correct
  point.x = parseInt(prompt(x)); // need to actually put a prompt in here
  point.y = parseInt(prompt(y)); //take prompt from var x and y, they are unecessary and put into this section.
  points.push(point); // correct

}

// from here on out it was basic math.
//created variables a and b, then referenced them by point[number].x or .y
// then created variable distance and computed for math.
