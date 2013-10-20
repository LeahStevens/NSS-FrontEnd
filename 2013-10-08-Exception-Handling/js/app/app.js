'use strict';

$(document).ready(initialize);

function initialize(){
  $(document).foundation();

  try{
    console.log(y);
  } catch(e){
    console.log('WHAT IS THIS???');
  }
  try{
    console.log(x);
  } catch(e){
    console.log('OMG SOMETHINGS WRONG!!!' );
  }
  try{
    o.doesntExist();
  } catch(e){
    console.log('Doesnt exist doesntExist' );
  }
  try{
    throw 'exception';
  } catch(e){
    console.log('Thrown exception' );
  }

  console.log('End of function');


}