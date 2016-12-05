console.log("hello");


var maria = {
  name: "maria  Hayes Ramo",
  age: 36,
  hometown: "NYC",
  sayName: function(){
    console.log(`Oh hello, my name is ${this.name}`);
  }
}
function Student(maria, 36, NYC) {
  this.Name = maria;
  this.age = 36;
  this.hometown = NYC;
  this.sayName = function() {
    console.log(`Oh hello, my name is ${this.name}`);
  }
}







// Exercise: Create an object literal stored in a variable called car. This object has several properties, including carType, numWheels, and a method called honk that, when called, logs "beep". Obviously give each property a value.

//
// var car = {
//   cartype: "audy";
//   numWhels:4,
//   color: "silver"
// year:2016,
// honk: function() {
// console.log("beep.");
// }
// }
//
// var num =0;
// funtion Car (carType,numWhels) {
//   this.cartype
// }


//
// function Student(name, age, hometown, siblingsArr, college, className) {
//   this.name = name;
//   this.age = age;
//   this.hometown = hometown;
//   this.sayName = function() {
//     console.log(`Oh hello, my name is ${this.name}`);
//   };
//   this.siblingsArr = siblingsArr;
//   this.tellMeSiblings = function() {
//     console.log("I have a lot of siblings, their names are: ");
//     for (var i = 0; i < this.siblingsArr.length; i++) {
//       console.log( this.siblingsArr[i] );
//     }
//   }
//   this.brushHair = function() {
//     console.log("Orlando, what shampoo do you use for those curls?");
//   };
//   this.college = college;
//   this.className = className;
// }
//
// // instances
// var liza = new Student("Liza Hayes Ramo", 36, "Asheville, NC", ["Alana", "Olivia"], "UNC-CH", "WDI");
//


//
// Reminder, here is our object literal:

// js prototypes



// We have our constructor function:

function Student(maria,eyecolor,) {
  this.name = name;
  this.eyecolor = eyecolor;

Person.prototype.hairColor = function(color) {
  this.hairColor = color;
  }
}
// add to the Car prototype:
Person.prototype.sayName = function (){
  console.log (`hellom my name is ${this.name}.`)
}
var dan = new person("blue","Daniel Francia")
