$(document).ready(initialize);

function initialize(){
  $('#button').click(change_green);
  $('#name_btn').click(count_characters);
}

function change_green(){
 $('#green').css({'background-color': 'green', 'color': 'yellow'});
// $('#green').css('background-color', 'green').css('color', 'yellow');
}

function count_characters(){
  var letter_count = $('#name_txt').val();
  var length = letter_count.length;
  $('#name_div').text(length);
}