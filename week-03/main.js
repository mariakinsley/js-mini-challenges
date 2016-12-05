console.log("hello");
// first grab the element:
// var theButton = document.querySelector('button');
//
// // then attach the event listener:
// theButton.addEventListener('click', function() {
//   console.log("You've clicked the button!");
//
//   // document.body.style.backgroundColor = "pink";
// });
// var the div = documment.querySelector('.font-changer');
// theDiv.addEventListener('click),function'(){
// console.log('div was clicked');
//
//
// // }
// var theDiv = document.querySelector('div');
//
// function divHasBeenHovered(event){
//   this.style.color = 'red';
// }
//
// function divHasBeenUnHovered() {
//   this.style.color = 'green';
// }
// //
// // theDiv.addEventListener('mouseenter', divHasBeenHovered);
// // theDiv.addEventListener('mouseleave', divHasBeenUnHovered);
// var theButton = document.querySelector('button);
// var theBody = document.query ('body');
// var theDiv = document.qury ('div');
// ')
//
//
//
// document.add ("keydown"function)(event{
// console.log(eventwhich:,event);
// })



// code from abdul
console.log("Ready")
document.addEventListener("DOMContentLoaded", function(event) {
  console.log("DOM fully loaded and parsed");
// first grab the element:
var theButton = document.querySelector('button');

// then attach the event listener:
theButton.addEventListener('click', function() {
 console.log(" clicked Detected!");

});

var theDiv = document.querySelector('.font-changer');
theDiv.addEventListener('click', function() {
 console.log(" the div is click");
 theDiv.style.backgroundColor = 'green';

})
// // exerice 2
// var h1Click = document.querySelector('h1');
// var h1Text = h1Click.innerText
// h1Click.addEventListener('click', function(){
//  alert(h1Text);
//
// })
//
//
// //hover mouse over div//
// var theDiv = document.querySelector('div');
// function divHasBeenHovered(event){
//  this.style.color = 'blue';
// }
//
// function divHasBeenUnHovered() {
//  this.style.color = 'pink';
// }
//
// theDiv.addEventListener('mouseenter', divHasBeenHovered);
// theDiv.addEventListener('mouseleave', divHasBeenUnHovered);});
//
// document.addEventListener("keydown", function(event){
//  console.log(event.which);
// //scroll//
// window.addEventListener('scroll', function(event) {
//  console.log("scrolling!");
// })
// });
// //keydown//
// document.addEventListener("keydown", function(event) {
//  console.log(event.which);
// });

// get the elements //
  var theButton = document.querySelector('button');
  var theBody = document.querySelector('body');
  var theDiv = document.querySelector('.font-changer');

  var currentBgColor = 'white';

  function toggleBodyColor(event) {
    if (currentBgColor == 'white' || currentBgColor == 'green') {
      theBody.style.backgroundColor = "blue";
      currentBgColor = "blue";
    } else {
      theBody.style.backgroundColor = "green";
      currentBgColor = "green";
    }
  }

  theButton.addEventListener('click', toggleBodyColor);


  scroll event
    window.addEventListener('scroll', function(ev) {
      console.log("scrolling!");
    });
