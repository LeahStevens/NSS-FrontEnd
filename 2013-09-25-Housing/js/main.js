var house = [];


function sqft_cost(sqft, cost)
{
  return sqft (house[0].length + house[1].length + house[2].length + house[0].width + house[1].width + house[2].width) * 200;
}




function total (sqft_cost, total_windows)
{
  return sqft_cost(sqft, cost) + cost_window (house[0].windows + house[1].windows + house[2].windows) * 250;
}


var name =prompt('Enter a room name or blank to quit:')

while(name)
{
  var room = {};
  room.name = name;
  room.length = parseInt(prompt('Length of room?'));
  room.width = parseInt(prompt('Width of room?'));
  room.windows = parseInt(prompt('Number of windows'));
  house.push(room);
  name = prompt ('Enter a room name or blank to quit:')

}

var total_rooms = house.length
var cost_window = (house[0].windows + house[1].windows + house[2].windows) * 250;
var sqft = house[0].length + house[1].length + house[2].length + house[0].width + house[1].width + house[2].width;

console.log('Your houses total number of rooms is:' + total_rooms);
console.log('Your total square feet is:' + sqft);
console.log('Your total cost of windows is:' + cost_window);
console.log('Your total cost of square feet is:' + sqft_cost);
console.log('Your total cost overall is:' + total);