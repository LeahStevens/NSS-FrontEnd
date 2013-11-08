$(document).ready(initialize);

function initialize(){
  $(document).foundation();
  $('form#game').on('submit', submitStart);
}


function submitStart(event){
  var player = $('input[name="player"]').val();
  var number = $('input[name="number"]').val();
  var url = $(this).attr('action') + '?player=' + player + '&number=' + number;
  sendGenericAjaxRequest(url, {player:player, number:number}, 'post', null, event, function(data, status, jqXHR){
    htmlCreateGame(data);
  });
}
function htmlCreateGame(data){
  $('#player').text('Player: ' + data.player);
  $('#number').text('Number: ' + data.number);

  for(var i = 0; i < data.cards.length; i++ ){
    console.log(i);
    var $div = $('<div>').addClass('card');
    $('#cards').append($div);
  }
  console.log(data);
}




function sendGenericAjaxRequest(url, data, verb, altVerb, event, successFn){
  var options = {};
  options.url = url;
  options.type = verb;
  options.data = data;
  options.success = successFn;
  options.error = function(jqXHR, status, error){console.log(error);};

  if(altVerb) options.data._method = altVerb;
  $.ajax(options);
  if(event) event.preventDefault();
}