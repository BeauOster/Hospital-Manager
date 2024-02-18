// TODO: Try to mess around and use REACT JS for this code instead.

// This is a variable in JS
var clicks = 0;

// This gets the button on the html page by ID.
const clickElement = document.getElementById("myButton");

// Simple event listener that waits until the above button is clicked.
// You can view if it's working or not by opening up the webpage (test.html) and checking the console.
clickElement.addEventListener('click', function() {
   clicks += 1;
   console.log("Button 1 clicked. Total clicks: " + clicks);
   console.log("Button 2 clicked. Total clicks: " + clicks);
});