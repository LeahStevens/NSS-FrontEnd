$(document).ready(initialize);

function change_div_text()
{
  var name = $('#name').val();
  var color = $('#color').val();

  var selector = prompt('Which div?');
  $(selector).text(name).css('background-color', color);
}

function age_verification(){
  var age = $('#age').val();
  age = parseInt(age);

  //var divtext = $('#age_div').text();

  if(age > 21)
  $('#age_div').text("You can drink" ).css('background-color', 'green');
  else
  $('#age_div').text("You can not drink").css('background-color', 'red');
}


function initialize(){
$('#clicker').click(change_div_text);
$('#age_check').click(age_verification);



















 // $('#clicker').click(function(){alert('hello');})


 // $('div').css('background-color', 'blue');
 // $('div').css('font-size', '25px');
 // $('div').css('color', 'yellow');

 // var color = prompt('what color do you want?');
 // $('div').css('background-color', color);
 // var size = prompt('What size text?');
 // $('div').css('font-size', size);

 // var selector = prompt('Which div?');
 // var cls = prompt('Class to add?');
 // var new_text = prompt('What would you like to say?');
 // $(selector).addClass(cls);
 // $(selector).text(new_text);

 // var selector_to_hide = prompt('which node do you want to hide?');
 // $(selector_to_hide).hide();

}