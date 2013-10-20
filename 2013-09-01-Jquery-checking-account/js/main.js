function add_balance()
{
  var balance_being_change = parseInt(balance);
  var add = parseInt(amount);
  var new_balance = balance + add
  return new_balance;
}

function sub_balance()
{
  var balance_being_changed = parseInt(balance);
  var subtract = parseInt(amount);
  var new_balance = balance - subtract
  return new_balance;
}

$(document).ready(initialize);
function initialize(){
  debugger;
  $('#withdraw').click(change_balance);
  $('#deposit').click(change_balance);
}

function change_balance(){
  var amount = ('#amount').val();
  var balance = ('#balance').text(new_balance);
}
















//$(document).ready(initialize);

// function change_div_text()
// {
//   var name = $('#name').val();
//   var color = $('#color').val();

//   var selector = prompt('Which div?');
//   $(selector).text(name).css('background-color', color);
// }

// function age_verification(){
//   var age = $('#age').val();
//   age = parseInt(age);

//   //var divtext = $('#age_div').text();

//   if(age > 21)
//   $('#age_div').text("You can drink" ).css('background-color', 'green');
//   else
//   $('#age_div').text("You can not drink").css('background-color', 'red');
// }


// function initialize(){
// $('#clicker').click(change_div_text);
// $('#age_check').click(age_verification);


