

test( "pig", function() {
  deepEqual(pig('hello'),'elloha', " pig" );
});


test( "reverse", function() {
  var original = ("hello, nashville, code")
  var expected = ("odeca; ashvillena; elloha")
  deepEqual(reverse(original),expected, "reversed " );
});