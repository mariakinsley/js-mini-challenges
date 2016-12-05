console.log("hello");
// Create a function that accepts two parameters that will be numbers.
function age(boys,girls) {
console.log(boys)
}

age("maria","abdul")



var maria= 11
var abdul= 12

function add(number1,number2){
  console.log(number1,number2);
  var number=(number1+number2)
  console.log(number);
}
add(09,89)
add(23,98)
add(maria,abdul)
// Create a function that accepts two parameters that will be strings. The function, when called, will concatenate those two strings together and log the value.
function add(vanilla,chocolate){
var icecream=(vanilla+chocolate)
console.log(icecream)

}
add("cones","cups")
// Create a two dimensional array related to a subject that interests you. Output two items (elements) from the second-level arrays to the console.

var icreamcream=[
  ["straberry","vanilla","chocolate"],
  ["maria","monica","liza"]

  ]
  console.log (icreamcream[1][2])
  console.log( icreamcream[1][0])
  // Write a script that prompts the user for a number, then check if that number is less than 100. If it is, alert the user that their variable is less than 100. If it is not alert the user of what the value was and that it was greater than 100.
  // var a = 100;
  var b = prompt("enter a number between 0 & 100")
  if (b < 100) {
   alert(b + " is less than 100")
 } else if ( b > 100){
   alert(b + " is more than 100")
  }else {
   alert("What????")
  }
  // Write a similar script to check if a string input by a user using prompt is the same as a string that you have stored in a variable. If so, alert the user that the strings are the same.

  var b = prompt("enter a number between 0 & 100")
  if (b < 100) {
   alert(b + " is less than 100")
  } else if ( b > 100){
   alert(b + " is more than 100")
  }else {
   alert("What????")
 }//
var y = "maria"
var z = prompt("enter the secret number")
if (z == y) {
  alert("you have won");
} else  {
  alert("you are wrong")

}
// Declare a function that prompts a user to choose a door (door 1, 2, or 3). Depending on which 'door' was entered, tell the user they've received a different 'prize' in an alert. First, write the function using if/else statements. Then use a switch statement.

/ if function that prompt the user//
var door = [1, 2, 3]
var g = prompt("choose a door number between 0 to 3");
if (g == door[0]) {
 alert("you have win Prize 1")

} else if (g == door[1]){
 alert("you have win Prize 2")

}else if(g== door[2]){
 alert("you have won Prize 3")
} else {
 alert("what??????")
}
    var a = [1, 2, 3]
    var k = prompt(" Please choose a door Number between 0 to 3")
    switch (parseInt(k)) {
     case (a[0]):
       alert("you have win Prize Rest");
       break;
     case (a[1]):
       alert("you have won Prize Sweet");
       break;
     case (a[2]):
       alert("you have won Prize Tresor")
       break;
     default:
       alert("what?");
    }
