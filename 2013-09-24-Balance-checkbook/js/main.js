var name= prompt('What is your name?');
var balance= prompt('What is your balance?');
  balance= parseInt(balance)



var deposit1= prompt('How much do you want to deposit?');
  deposit1 = parseInt(deposit1);
var deposit2 = prompt('How much do you want to deposit again?');
  deposit2 = parseInt(deposit2);
var deposit3 = prompt('Last deposit, how much?');
  deposit3 = parseInt(deposit3);
var withdraw1= prompt('How much do you want to withdraw?');
  withdraw1 = parseInt(withdraw1);
var withdraw2= prompt('You want to withdraw some more?');
  withdraw2 = parseInt(withdraw2);
var withdraw3= prompt('Seriously last withdrawal.')
  withdraw3 = parseInt(withdraw3);

var deposit = (deposit1) + (deposit2) + (deposit3);
var withdraw = (withdraw1) + (withdraw2) + (withdraw3);
var sum_of_balance = (balance) + (deposit) - (withdraw);

sum_of_balance -= (sum_of_balance < 0) ? 50:0;


console.log('Welcome' + name);
console.log('Your balance is' + '' +sum_of_balance);







