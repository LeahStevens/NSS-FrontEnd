test( "add_balance", function() {
  deepEqual(add_balance(1000) ,(1250), "deposit 250" );
});

test( "sub_balance", function() {
  deepEqual(sub_balance(1000) ,(750), "withdraw 250" );
});