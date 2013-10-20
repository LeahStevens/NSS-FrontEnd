$(document).ready(initialize);

function initialize()
{
  $('#make_boxes').click(makingBoxes);
  $('#clear_boxes').click(clearBoxes);
}

function makingBoxes()
{
  var numberOfBoxes = $('#amount').val();
  numberOfBoxes = parseInt(numberOfBoxes);

  for(var i = 0; i < numberOfBoxes; i++)
  {
    var $div = $('<div>');
    $div.addClass('box');
    $div.text(numberOfBoxes[i]);
     $('#boxes').append($div);

  }
}

  function clearBoxes()
{
 $('#boxes').empty();
}