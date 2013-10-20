'use strict';
$(document).ready(initialize);

function initialize(){
  $('#button').click(transferTasks);
  //$('table').on('click', '.done', done);
  $('table').on('click', '.remove', remove);
  $('table').on('click', '.up', up);
  $('table').on('click', '.down', down);
}

function transferTasks(){
  var $tr = $('<tr>');

  var $dueDate = $('<td>');
  $dueDate.addClass('dueDate');

  var $task = $('<td>');
  $task.addClass('task');

  var $color = $('<td>');
  var colors = $('#color').val();
  var $colorbox = $('<div>');
  $colorbox.addClass('box');
  $colorbox.css('background-color', colors);


  var $done = $('<td>');
  $done.addClass('done');
  var $checkbox = $('<input>');
  $checkbox.attr('type', 'checkbox');
  $checkbox.addClass('checkbox');

  var $remove = $('<td>');
  $remove.addClass('remove');
  var $removeEntry = $('<input>');
  $removeEntry.attr('type', 'button');
  $removeEntry.val('Remove');
  $removeEntry.addClass('removeEntry');

  var $up = $('<td>');
  $up = $('<img>');
  var $upButton = $up;
  $upButton.attr('src', 'images/up.png').addClass('up');

  var $down = $('<td>');
  $down = $('<img>');
  var $downButton = $down;
  $downButton.attr('src', 'images/down.png').addClass('down');

  $('#color').append(colors);
  $done.append($checkbox);
  $remove.append($removeEntry);
  $up.append($upButton);
  $down.append($downButton);
  $tr.append($dueDate, $task, $color, $done, $remove, $up, $down);
  $('table').append($tr);



}



function remove(){
  var $removeEntry = $(this);
  $removeEntry.parent().remove();
}

function up(){
  var $upButton = $(this);
  var $tr = $upButton.parent();
  $tr.prev().before($tr);

}

function down(){
  var $downButton = $(this);
  var $tr = $downButton.parent();
  $tr.next().after($tr);

}