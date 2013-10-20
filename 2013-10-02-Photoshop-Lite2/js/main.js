'use strict';
$(document).ready(initialize);

function initialize()
{
  $('#add_color').click(addColorBox);
  //$('.box').click(boxClicked);
 // $('parent_selector').on('Name of event', "child_selector", 'name of function')
  $('#colors').on('click', '.box', boxClicked);
  $('#add_box').click(addSmallBoxes);
  $('#boxes').on('mouseover', '.boxes', paintCanvas);
}

function paintCanvas(){
  var $canvas = $(this);
  var brushColor = $('#brush').css('background-color');
  $canvas.css('background-color', brushColor);
}

function addSmallBoxes()
{
  var amount = $('#amount').val();
  amount = parseInt(amount, 10);
  for(var i = 0; i < amount; i++)
  {
    var $canvas = $('<div>');
    $canvas.addClass('boxes');
    $('#boxes').append($canvas);
  }
}

function boxClicked()
{
  var $box = $(this);
  var color = $box.css('background-color');
  alert('the box was clicked ' + color);
  $('#brush').css('background-color', color);
}

function addColorBox()
{
  var color = $('#color').val();
  var $div = $('<div>');
  $div.addClass('box');
  $div.css('background-color', color);
  $('#colors').append($div);
  clearInputAndFocus();
}

function clearInputAndFocus()
{
  $('#color').val('');
  $('#color').focus();
}