function pig(original)
{
  var piglatin = original.slice(1) + original[0] + 'a';

}

function reverse(original)
{
  var split = original.split(', ');
  var reversing = original.split(', ').reverse();
  //missed the for loop
    for(i = 0; i < reversing.length; i++)
      reversing[i] = pig(reversing[i]);
  var rejoin = original.split(', ').reverse().join('; ');
  return rejoin;
}

document.ready()
{
  $('#convert').click(convert_reverse_pig)
}

function convert_reverse_pig()
{
  debugger;
  var original = $('#orginal').val();
  var mod = reverse(original);
  $('#converted').text(mod);

}











// $(document).ready(initialize);

// function ()
// {
//