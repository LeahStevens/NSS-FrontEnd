'use strict';

$(document).ready(initialize);

var timer = 0;



function initialize(){
  $(document).foundation();
  $('#start').click(start);
  $('#stop').click(stop);
}

function start(){
  var dimensions = $('#dimensions').val();
  var split = dimensions.split(', ');

  var height = split[0];
  height = parseInt(height, 10);

  var width = split[1];
  width = parseInt(width, 10);

  var $delay = $('#delay').val();
  $delay = parseInt($delay, 10);
  var $seconds = $delay * 1000;
  timer = setInterval( createBoxes, $seconds);



  function createBoxes(){
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    var rgb = 'rgb('+ red+ ', '+green+', '+blue+')';

    var $box = $('<div>');
    $box.addClass('boxes');
    $box.css('background-color', rgb).css('width', width).css('height', height);
    $('#colors').prepend($box);
  }
}


function stop(){
  clearInterval(timer);
}
