'use strict';
$(document).ready(initialize);

var accountBalance = 0;

function initialize()
{
  $('#img_button').click(addImage);
  $('#set_initial_balance').click(setInitialBalance);
  $('#deposit').click(depositAmount);
  $('#withdraw').click(withdrawAmount);
}

function addImage(){
  var imgUrl = $('#img_url').val();
  $('#logo').attr('src', imgUrl);
}

function setInitialBalance(){
  var balance = $('#start_balance').val();
  balance = parseInt(balance, 10);
  accountBalance = balance;
  $('#balance').text(accountBalance);
}

function depositAmount(){
  var amount = $('#amount').val();
  amount = parseInt(amount, 10);
  accountBalance = accountBalance + amount;
  updatedisplay();

  var $li = $('<li>');
  $li.text(amount);
  $('#deposit_items').prepend($li);
}

function withdrawAmount(){
  var amount = $('#amount').val();
  var wAmount = parseInt(amount, 10);
  accountBalance -= wAmount;
  updatedisplay();

  var $li = $('<li>');
  $li.text(amount);
  $('#withdraw_items').prepend($li);
}

function updatedisplay()
{
  $('#balance').text(accountBalance);
}

