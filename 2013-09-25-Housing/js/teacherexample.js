var house = {};
house.num_of_rooms = parseInt(prompt('Number of rooms?'));
house.number_of_windows = 0;
house.area = 0;
house.rooms = [];


function area(l , w)
{
  return l * w;
}
const PRICE_PER_SQFT = 200;
const PRICE_PER_WINDOW = 250;


for(var i = 0; i < house.num_of_rooms; i++)
{
  var room = {};
  room.name = prompt('Name?');
  room.windows = prompt('Number of windows?');
  house.number_of_windows += room.windows;
  room.width = parseInt(prompt('Width of room?'));
  room.windows = parseInt(prompt('Number of windows'));
  room.area = area (room.length, room.width);
  house.area += room.area;
  house.rooms.push(room);
}

house.area_cost = house.area *  PRICE_PER_SQFT;
house.window_cost = house.number_of_windows * PRICE_PER_WINDOW;
house.total_cost = house.area_cost + house.window_cost;













