'use strict';
$(document).ready(initialize);

function initialize(){
  $('#add').click(addRow);
  $('table').on('click', '.rsvp', rsvp);
  $('table').on('click', '.nuke', nuke);
  $('table').on('click', '.up', up);
  $('table').on('click', '.down', down);
}

function up(){
  var $upButton = $(this);
  var $tr = $upButton.parent().parent();
  $tr.prev().before($tr);

}

function down(){
  var $downButton = $(this);
  var $tr = $downButton.parent().parent();
  $tr.next().after($tr);

}

function nuke(){
  var $nukeButton = $(this);
  $nukeButton.parent().parent().remove();
}

function rsvp(){
  var $button = $(this);
  var $textbox = $button.prev();
  var text = $textbox.val();
  var items = text.split(', ');
  var name = items[0];
  var food = items[1];

  $button.parent().siblings('.name').text(name);
  $button.parent().siblings('.food').text(food);
}

function addRow(){
  var $tr = $('<tr>');
  var $name = $('<td>');
  $name.addClass('name');

  var $food = $('<td>');
  $food.addClass('food');

  var $ctrl = $('<td>');
  $ctrl.addClass('ctrl');

  var $nuke = $('<td>');
  $nuke.addClass('nuke');

  var $up = $('<td>');
  $up.addClass('up');

  var $down = $('<td>');
  $down.addClass('down');

  var $input = $('<input>');
  $input.attr('type', 'text');

  var $button = $('<input>');
  $button.attr('type', 'button');
  $button.val('RSVP');
  $button.addClass('rsvp');

  var $nukeButton = $('<input>');
  $nukeButton.attr('type', 'button');
  $nukeButton.val('Destroy Entry');
  $nukeButton.addClass('nuke');

  $up = $('<img>');
  var $upButton = $up;
  $upButton.attr('src', 'images/up.jpg').addClass('up');

  $down = $('<img>');
  var $downButton = $down;
  $downButton.attr('src', 'images/down.png').addClass('down');


  $ctrl.append($input, $button);
  $nuke.append($nukeButton);
  $up.append($upButton);
  $down.append($downButton);
  $tr.append($name, $food, $ctrl, $nuke, $up, $down);
  $('table').append($tr);

  $input.focus();
}






