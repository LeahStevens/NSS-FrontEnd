
test( "Filter Even Numbers", function() {
  var numbers = _.range(10);
  var expected = [0, 2, 4, 6, 8];
  deepEqual(filter_even(numbers), expected, "testing the filter_even function" );

});


test('Filter Odd Numbers', function() {
  var numbers = _.range(10);
  var expected = [1, 3, 5, 7, 9];
  deepEqual(filter_odd(numbers), expected, "testing odd numbers");

});

test('Filter Short Strings', function() {
  var strings = ['hello', 'there', 'a', 'the', 'cat', 'elephant', 'encycylopedia'];
  var expected = ['a', 'the', 'cat'];
  deepEqual(filter_short_strings(strings), expected, "testing short strings under 4 characters");

});


test('Find a String', function() {
  var strings = ['apple', 'hello', 'there', 'a', 'the', 'cat', 'elephant', 'encycylopedia', 'aardvark'];

  deepEqual(find_a_string(strings, 'elephant'), 'elephant', "should find elephant");
deepEqual(find_a_string(strings, 'the'), 'the',  "should find the");
deepEqual(find_a_string(strings, 'cat'), 'cat',  "should find cat");
deepEqual(find_a_string(strings, 'not here'), undefined,  "should not find the string");

});

test('Filter a Strings', function() {
 var strings = ['apple', 'hello', 'there', 'a', 'the', 'cat', 'elephant', 'encycylopedia', 'aardvark'];
  var expected = ['apple', 'a', 'aardvark'];
  deepEqual(filter_a_strings(strings), expected, "testing for a characters");

});

test('Find a String ending in s or z', function() {
  var strings = ['dog', 'cats', 'lion', 'tigers'];
deepEqual(find_string_ending_letter(strings, 's'), 'cats', "should find s");
deepEqual(find_string_ending_letter(strings, 'z'), undefined, "should find z");
});