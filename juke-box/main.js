// console.log("juke-box");working
// document.addEventListener("DOMContentLoaded", function(event) {
//   // console.log("DOM fully loaded.");
//
//
// var songs = ['Moon Glow','Pavane, Op. 50', 'Phantom of the Opera','Russian Sherele No. 1','Sing, Sing, Sing'
//
// ];
// // this reload the page and plays the first song
// var currentSong = songs[0]
//
// var theButton1 = document.querySelector('button.button1');
//
// theButton1.addEventListener('click', function() {
//  document.querySelector('#music1').play();
//  currentSong = songs[0]
// });
// // hasta aqui termina la primera cancion
// var theButton2 = document.querySelector('button.button2');
//
// theButton2.addEventListener('click', function() {
//  document.querySelector('#music2').play();
//  currentSong = songs[1]
// });
//
// var theButton3 = document.querySelector('button.button3');
//
// theButton3.addEventListener('click', function() {
//  document.querySelector('#music3').play();
//  currentSong =[2]
// });
//
// var theButton4 = document.querySelector('button.button4');
//
// theButton4.addEventListener('click', function() {
//  document.querySelector('#music4').play();
//  currentSong =[3]
// });
// // #means its an id tag from html.
// var theButton5 = document.querySelector('button.button5');
//
// theButton5.addEventListener('click', function() {
//  document.querySelector('#music5').play();
//  currentSong =[4]
// });

window.onload = function() {
 var myLi =document.querySelector('#ul').getElementsByTagName('li');
 var currentSong = document.querySelector('#music1')
 var playSongs = [];
 playSongs[0] = function() {
   document.querySelector('#music1').play();
   currentSong = document.querySelector('#music1')
 };
 playSongs[1] = function() {
   document.querySelector('#music2').play();
   currentSong = document.querySelector('#music2')
 };
 playSongs[2] = function() {
   document.querySelector('#music3').play();
   currentSong = document.querySelector('#music3')
 };
 playSongs[3] = function() {
   document.querySelector('#music4').play();
   currentSong = document.querySelector('#music4')
 };

 playSongs[4] = function() {
   document.querySelector('#music5').play();
  currentSong = document.querySelector('#music5')
 };

  for (i = 0; i < myLi.length; i++) {
     myLi[i].addEventListener('click', playSongs[i], false);
  }

  document.getElementById('play').addEventListener('click', function(){
    currentSong.play()
  }, false)
  document.getElementById('pause').addEventListener('click', function(){
    currentSong.pause()
  }, false)


document.getElementById('volume').addEventListener('click', function(){
  console.log(currentSong.volume)
currentSong.volume += 0.1
console.log(currentSong.volume)

}, false)

document.getElementById('decrese v').addEventListener('click', function(){
  console.log(currentSong.volume)
  currentSong.volume -= 0.1
  console.log(currentSong.volume)
}, false)





};
