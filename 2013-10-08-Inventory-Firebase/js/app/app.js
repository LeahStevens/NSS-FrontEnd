
'use strict';
// Database Schema <- Pushed to cloud
var Δdb;
var Δitems;
var Δperson;

// Local Schema <- Not pushed to the database
var db = {};
db.person = {};
db.items = [];
db.statistics = {};
db.statistics.grandTotal = 0;

$(document).ready(initialize);

function initialize(){
  $(document).foundation();
  $('#add').click(add);
  $('#save').click(save);

  Δdb = new Firebase('https://inventory-l-s.firebaseio.com/');
  Δitems = Δdb.child('items');
  Δperson = Δdb.child('person');
  Δperson.on('value', personChanged);
  Δitems.on('child_added', itemAdded);

}

var sum = 0;

function itemAdded(snapshot){

  console.log(snapshot.val());
  var item = snapshot.val();
  createRow(item);
  sum += parseInt(item.value, 10) * parseInt(item.count, 10);
  console.log(sum);
  db.statistics.grandTotal = sum;
  $('#total').text('$ ' + db.statistics.grandTotal);
  db.items.push(item);

}

function personChanged(snapshot){
  var person = snapshot.val();
  try{
    $('#person').val(person.fullName);
    $('#address').val(person.address);
    db.person = person;
  }catch(error){
    console.log('there was an error ' + error);
  }




//looping through object, have to know how to do this

  // for(var property in inventory.items){
  //   console.log(inventory.items[property]);
  //   var item = inventory.items[property];
  //   items.push(item);
  // }


  // var $header = $('#items tr:first-child').detach();
  // $('#items').empty().append($header);
  // for(var i = 0; i < items.length; i++){
  //   createRow(items[i]);
  // }
}

function save(){
  var fullName = $('#person').val();
  var address = $('#address').val();
  var person = {};
  person.fullName = fullName;
  person.address = address;

  Δperson.set(person);
}

function add(){
  var name = $('#name').val();
  var count = $('#count').val();
  var value = $('#value').val();
  var room = $('#room').val();
  var condition = $('#condition').val();
  var date = $('#date').val();

  var item = {};
  item.name = name;
  item.count = count;
  item.value = value;
  item.room = room;
  item.condition = condition;
  item.date = date;


  Δitems.push(item);
}

function createRow(item){
  var row = '<tr><td class="name"></td><td class="count"></td><td class="value"></td><td class="room"></td><td class="condition"></td><td class="date"></td></tr>';
  var $row = $(row);

  $row.children('.name').text(item.name);
  $row.children('.count').text(item.count);
  $row.children('.value').text(item.value);
  $row.children('.room').text(item.room);
  $row.children('.condition').text(item.condition);
  $row.children('.date').text(item.date);

  $('#items').append($row);
}

