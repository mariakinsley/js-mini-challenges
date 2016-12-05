console.log("hello");



// same thing as dom content loaded fxn
window.onload = function() {

  // make sure our JS file is hooked up
  console.log('Everything is awesome.');
  console.log(" Everything is awesome.");

  // event listener on submit button:
  document.getElementById('submit-button').addEventListener('click', function(event) {
    // Default  of a submit btn is to reload pg. We don't want that.
    event.preventDefault();


    // ----------------------------------------------


    // get val of INPUT BOX:
    var usernameInputBox = document.querySelector('#username-box').value;
    console.log("Input box value:", usernameInputBox);

    //* YOU DO: get val of email INPUT BOX: *//


    // ----------------------------------------------


    // get val of fave color CHECKBOXES:
    var colorCheckedValue = document.querySelectorAll('.fave-color:checked');
    console.log("colorCheckedValue:", colorCheckedValue);

    var vals = [];
    for (var i = 0; i < colorCheckedValue.length; i++) {
      vals.push(colorCheckedValue[i].value);
    }
    console.log("Checkbox values:", vals);


    //* YOU DO: get val of fave fruit CHECKBOXES: *//
