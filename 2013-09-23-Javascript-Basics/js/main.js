/* this is a multi-line
    javascript
    file
*/

var first_name = prompt('I am watching you.');
var last_name = prompt('Are too!');
var gender = prompt('gender?');
var age = prompt('age?');
age = parseInt(age);
var bday_month = prompt('what month were you born in?');
var current_month = prompt("what month is it right now?");
var full_name = first_name + " " + last_name;


//debugger;

var test1 = prompt("score for the test 1?");
test1 = parseFloat(test1);

var test2 = prompt("score for the test 2?");
test1 = parseFloat(test2);

var test3 = prompt("score for the test 3?");
test1 = parseFloat(test3);

var sum = 0;
sum += test1;
sum += test2;
sum += test3;

var average = sum / 3;

if(average < 70)
  console.log('failed');
else if((average >= 70) || (average < 80))
  console.log('you made a c');
else if((average >=80) && (average <90))
  console.log('you made a b');
else
  console.log('you made an a');

console.log("Your full name is : " + full_name);
console.log("The average of your test scores is : " + average);

var null_variable = null, undefined_variable;

if((first_name == 'Leah')&& (last_name == 'Stevens'))
  console.log('I recognize you.');

if((gender == 'female') && (age >= 21))
console.log('free drinks, ladies night!');
else if((gender == 'male') && (age >= 21))
  console.log('looks like you are buying');
else
  console.log('not old enough to drink');

var can_have_cake =(current_month == bdaymonth);
var cake = (current_month == bdaymonth) ? "chocolate":"vanilla";
console.log('Marie Antoinette says that you eating ' + cake);

switch(bday_month)
{
  case 'january':
    console.log('you are a aquarius');
    break;
  case 'feburary':
    console.log('you are a piecies');
    break;
  default:
    console.log('you are not of this world, god speed!');
  }
