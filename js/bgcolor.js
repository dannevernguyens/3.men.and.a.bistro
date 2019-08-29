// this should change the color of the background based on time of day 
var today = new Date();                 // Create a new date object
var hourNow = today.getHours();         // Find the current hour
var color;

if (hourNow > 12) {
    color = 'lightblue';
} else if (hourNow > 0) {
    color = 'lightred';
} else {
   color = 'lightgreen';
}

// document.write('<h2> Your favorite color is: ' + color + '</h2>');
document.body.style.backgroundColor = color;