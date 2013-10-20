'use strict';
//Firebase Schema
var Δdb;
var Δfunds = 0;
var Δstocks;

//Local Schema
var db = {};


$(document).ready(initialize);

function initialize(){
  $(document).foundation();
  Δdb = new Firebase('https://stock-market-ls.firebaseio.com/');
  getStockQuote();

  $('#buy').click(buyStock);
  $('#addFunds').click(addFunds);
  $('#setTimer').click(setTimer);
}



function addFunds(){
  var funds = $('#funds').val();
  funds = parseInt(funds, 10);

  $('#account').text('Account Balance: $ ' + funds + '.00');
  //$(Δfunds).push(funds);
}

function setTimer(){
  console.log('Here you can set your timer');
}

function buyStock(){
  var symbol = $('#symbol').val();
  var quantity = $('#quantity').val();
  quantity = parseInt(quantity, 10);

  requestQuote(symbol, function(data, textStatus, jqXHR){
    var quote = data.Data;
debugger;
    if(quote.LastPrice * quantity <= db.balance.cash){
      db.balance.cash -= quote.LastPrice * quantity;
      db.balance.stock += quote.LastPrice * quantity;
      db.balance.total = db.balance.cash + db.balance.stock;
      Δfunds.set(db.balance);

      var stock = {};
      stock.symbol = symbol;
      stock.purchasePrice = quote.LastPrice;
      stock.quantity = quantity;
      Δstocks.push(stock);
    }

    $('#symbol').val('');
    $('#quantity').val('');
  });
}


function getStockQuote(symbol, fn){
  var data = {symbol: symbol};
  $.getJSON('http://dev.markitondemand.com/Api/Quote/jsonp?callback=?', data , fn);
}

function requestQuote(data, textStatus, jqXHR){
  console.log(data);
  console.log(textStatus);
  console.log(jqXHR);
}


//Now that I have the rows I need to populate them with data.
function createRow(){
  var row = '<tr><td class="name"></td><td class="symbol"></td><td class="quote"></td><td class="purchased"></td><td class="currentPrice"></td></tr>';
  var $row = $(row);

  $row.children('.name').text('placeholder');
  $row.children('.symbol').text('placeholder');
  $row.children('.quote').text('placeholder');
  $row.children('.purchased').text('placeholder');
  $row.children('.currentPrice').text('placeholder');

  $('#table').append($row);
}