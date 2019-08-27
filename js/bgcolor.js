// this should change the color of the background based on time of day 
var today = new Date();                 // Create a new date object
var hourNow = today.getHours();         // Find the current hour
var color;

if (hourNow > 12) {
    color = '#blue';
} else if (hourNow > 0) {
    color = '#white';
} else {
   color = '#black';
}

document.style('background-color: #'color;);