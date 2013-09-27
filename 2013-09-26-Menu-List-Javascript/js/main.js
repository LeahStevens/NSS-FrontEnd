var menu = [];


var item = prompt('Would you like to add an item to the menu? Yes, or no.');

while(item !== 'no')
{
  var item = {};
  item.name = prompt('What is the item?')
  item.type = prompt('Is this an appetizer, dinner, or lunch?');
  item.price = parseInt(prompt('What is the price?'));
  item.calories = parseInt(prompt('What is the calories contained?'));
  item.ingredients = prompt('What are the ingredients?');
  menu.push(item);
  var item = prompt('Would you like to add another item? Yes, or');

}

var calories = 0;
for (var i = 0; i < menu.length ; i++)
{
  var calories = calories + menu[i].calories;
}
var average_calories = calories / menu.length;

var price = 0;
for ( var i = 0; i < menu.length; i++)
{
  var price = price + menu[i].price;
}
var average_price = price / menu.length;

// Only two things missing
// 1. console output by menu type
// 2. console output of number of menu types

console.log('You have ' + menu.length + ' items in your menu.');
//console.log('You have ' +  + ' types of items');
console.log('You have ' + calories + ' total.');
console.log('Your average calories is ' + average_calories);
console.log('Your total price is ' + price);
console.log('Your average price is ' + average_price);