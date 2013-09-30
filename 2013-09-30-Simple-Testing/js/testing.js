//test( "deepEqual test", function() {
 // deepEqual( <actual_value>, <expected_value>,  "What is this test doing?" );
 //   deepEqual( <actual_value>, <expected_value>,  "Testing this function with different arguments." );
//});

test( "1 + 1", function() {
 deepEqual( 1 + 1, 2,  "adding 1 + 1" );
});

test( "nashville[0]", function() {
 deepEqual( "nashville"[0], 'n' ,  "Expect n from nashville" );
});

test( "add_three", function() {
  deepEqual( add_three(5), 8 ,  "Adding three to five." );
  deepEqual( add_three(7), 10 ,  "Adding three to seven." );
});

test( "square", function() {
 deepEqual( square(3), 9 ,  "Square 3" );
deepEqual( square(5), 25 ,  "Square 5" );
});

test( "area", function() {
 deepEqual( area(3, 5), 15 ,  "Area of 3 and 5" );
deepEqual( area(7, 5), 35 ,  "Area of 7 and 5" );
});

test( "volume", function() {
 deepEqual( volume(3, 5, 2), 30 ,  "volume of 3 and 5 and 2" );
deepEqual( volume(7, 5, 2), 70 ,  "volume of 7 and 5 and 2" );
});

test( "power", function() {
 deepEqual( power(2,0), 1 ,  "power 2 to 0" );
deepEqual( power(2,1),  2,  "power 2 to 1" );
deepEqual( power(2,2),  4,  "power 2 to 1" );
deepEqual( power(2,3),  8,  "power 2 to 1" );
});

test( "greeting", function() {
 deepEqual( greeting('hello', 'jim'),  "hello, jim!",  "greeting salutations" );
});

test( "pig_latin", function() {
 deepEqual( pig_latin('hello'),  "elloha",  "pig latin hello" );
});

test( "pig_greeting", function() {
 deepEqual( pig_greeting('hello', 'jim'),  "elloha, imja!",  "pig latin hello jim" );
});
/*
test( "pig_sentence", function() {
  var sentence = 'four score and seven years ago';
  var expected = 'ourfa coresa ndaa evensa earsya goaa';
deepEqual(pig_sentence(sentence),expected,  "pig sentence" );
 }); */