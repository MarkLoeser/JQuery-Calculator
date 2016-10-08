$(document).ready(function(){



//variable to dispaly what buttons have been clicked
var $readOut = ""

//counter variable used to make sure 2 operators aren't entered in a row, every number added resets it to zero and operator added changes counter to 1 - samsies with the decimalcounter and decimalSameCounter
var $counter = 0;
var $decimalCounter = 0;
var $decimalSameNumber = 0;
var $equalCounter = 0;
$('.number').click(function(){
  if ($readOut.length < 20) {
  $readOut += $(this).attr('id');
  $('.readoutText').html($readOut);
  $counter = 0;
  $decimalCounter = 0;}
})

//add operator and decimal to readout html but first check to make sure there aren't back-to-back operators/decimals

$('.calcbtn').click(function(){
  if ($counter === 0 && $readOut.length > 0){
  $readOut += $(this).attr('id');
  $('.readoutText').html($readOut);
  $counter = 1;
  $decimalSameNumber = 0;  
    }
})

//clear button empties the readout html
$('#clear').click(function(){
  $readOut = '';
  $('.readoutText').html($readOut);
  $decimalCounter = 0;
  $decimalSameNumber = 0;
  $counter = 0;
})

// make sure there are not 2 decimals in a row and make sure there aren't 2 decimals in the same number - reset counters when a operator is pressed to make sure not 2 in same number
$('.decimal').click(function(){
  if ($decimalCounter === 0 && $decimalSameNumber === 0 ){
  $readOut += $(this).attr('id');
  $('.readoutText').html($readOut);
  $decimalCounter = 1;
  $decimalSameNumber = 1;  
    }
})

//calculate everything when equal button is pressed
$('#equal').click(function(){
  $readOut = eval($readOut);
  $('.readoutText').html($readOut);
  $decimalCounter = 0;
  $decimalSameNumber = 0;
  $counter = 0;
  
})



}); // ends document ready 