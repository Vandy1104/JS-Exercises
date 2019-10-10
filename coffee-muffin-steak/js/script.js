console.log('Hello js!');

// To find the bigger number

var firstNum = 20;
var secondNum = 27;

// if (firstNum > secondNum) {
//   document.getElementById('result').innerHTML = firstNum +' ' + "is the biggest<br>";
// } else {
//   document.getElementById('result').innerHTML = secondNum +' ' + "is the biggest<br>";
// }
//
// var age1 = 74;
// var age2 = 99;
// var age3 = 67;
//
// if ((age1 > age2) && (age1 > age3)) {
//   document.getElementById('result').innerHTML = age1 +' ' + "is the eldest<br>";
// } else if (age2 > age3) {
//   document.getElementById('result').innerHTML = age2 +' ' + "is the eldest<br>";
// } else {
//   document.getElementById('result').innerHTML = age3 +' ' + "is the eldest<br>";
// }


//calculate coffee price consider discount.. condition 5 Coffee

// var coffeePrice = 3.45;
//
// var quantity = prompt("how many coffee(s)?");
//
// var cost = coffeePrice * quantity;
//
// var discountCost = coffeePrice * (50/100) * quantity;
//
//
//
// if (quantity >= 5) {
//   document.getElementById('result').innerHTML = "<br>The bill is$" + discountCost;
// } else {
//   document.getElementById('result').innerHTML = "<br>The bill is$" + cost;
// }
//
// var coffeeType = prompt ('What coffee - Mocha or Flatwhite?');
//
// if (coffeeType=== "mocha") {
//   document.getElementById('coffeeImage').innerHTML = '<img src="images/mocha.jpeg">';
// } else if (coffeeType === "flatwhite") {
//   document.getElementById('coffeeImage').innerHTML = '<img src="images/flat-white.jpeg">';
// }

// Exercise 2 Muffin (MyStyle)

// var muffinPrice = 2.35;
//
// var Mquantity = prompt("how many Muffin(s)?");
//
// var Mcost = muffinPrice * Mquantity;
//
// var discountCost1 = 2.10 * Mquantity;
//
// var discountCost2 = 1.90 * Mquantity;
//
// if (Mquantity < 10) {
//   document.getElementById('result').innerHTML = "<br>The bill is$" + Mcost;
// } else if (Mquantity < 25) {
//   document.getElementById('result').innerHTML = "<br>The bill is$" + discountCost1;
// } else {
//   document.getElementById('result').innerHTML = "<br>The bill is$" + discountCost2;
// }


//OR

//Beula Style

// var muffinQuantity = prompt ("How many muffins?");
//
// if(muffinQuantity < 9) {
//   var muffinPrice = 2.35;
// } else if (muffinQuantity < 25) {
//   var muffinPrice = 2.10;
// } else {
//   muffinPrice = 1.90;
// }
//
// var muffinCost = muffinPrice * muffinQuantity;
// document.getElementById('result').innerHTML = "<br>The bill is$" + muffinCost;


var steakQuantity = parseInt(prompt("How many Steaks?"));
var sauceQuantity = 0;

// var sauceQuantity = prompt ("How many Sauces?");

if(steakQuantity >= 2 ) {
  document.getElementById('result').innerHTML = "You will get a free steak."
  var sauce = prompt("Do you want sauce?");
  if(sauce=== "yes") {
    var sauceQuantity = parseInt(prompt("How many sauces?"));

  }
}

var steakCost = steakQuantity * 25.60 + sauceQuantity * 2;

document.getElementById('result').innerHTML+= " steakCost = " + steakCost;
