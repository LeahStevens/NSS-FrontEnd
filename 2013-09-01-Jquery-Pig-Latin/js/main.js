
function pig (string){
  return string.slice(1) + string[0] + 'a';
}

document initialize (){
  $('#pig').click(translate);
}

function translate (){
  var original = $('#original').val();
  var piglatin = pig(original);
  $('#piglatin').val(piglatin)
}












