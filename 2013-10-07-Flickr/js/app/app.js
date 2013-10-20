'use strict';

$(document).ready(initialize);


function initialize(){
  $(document).foundation();
  $('#search').click(searchFlickr);
  $('#clear').click(clearPhotos);
  $('#save').click(save);
  $('#deleteSelected').click(deleteSelected);
  $('#photos').on('dblclick', '.photo', removePhoto);
  $('#photos').on('click', '.photo', selectedPhoto);
}
function save(){
  var $save = $('.selectedPhoto');
  $save.removeClass('selectedPhoto');
  $('#saved-photos').append($save);
}


function deleteSelected(){
  $('.selectedPhoto').remove();
}

function removePhoto(){
  $(this).remove();
}

function selectedPhoto(){
  $(this).toggleClass('selectedPhoto');
}

function searchFlickr(){
  var API_KEY = '75eff3a76492115dc172da00e82c4136';
  var PER_PAGE = '50';
  var page = 1;

  var query = $('#query').val();
  var url = 'http://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=' + API_KEY + '&text=' + query + '&per_page=' + PER_PAGE + '&page=' + page + '&format=json&jsoncallback=?';
  $.getJSON(url, results);
}

function results(){
  alert('Thanks for calling.');
}

function results(data){
  for(var i = 0; i < data.photos.photo.length; i++){
    createImage(data.photos.photo[i]);
  }
}
function createImage(photo){
  var url = 'url(http://farm' + photo.farm + '.static.flickr.com/' + photo.server + '/' + photo.id +'_'+ photo.secret + '_m.jpg)' ;
  var $div = $('<div>');
  $div.addClass('photo');
  $div.css('background-image', url);
  $('#photos').prepend($div);
}

function clearPhotos(){
  var $photos = $('#photos');
  $photos.remove();
}