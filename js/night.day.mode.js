// this function should both change the bg color and the greeting within the same call
var hourNow = prompt("What time is it? (military time)");
var greeting;
var color;
while( isNaN(hourNow) )
    hourNow = prompt("Please enter a number between 0 and 24");

// the stuff above should ensure that only numbers are entered for the time prompt


if (hourNow > 12) {
    setLateNightMode();
} else if (hourNow > 0) {
    setDayMode();
} else {
    setDefault();
}

function setLateNightMode() {
    color = 'lightgrey';
    greeting = 'Your friendly neighborhood dinner and late-nite bite destination!';
    console.log(color + greeting);
}

function setDayMode() {
    color = 'lightblue';
    greeting = 'Your friendly neighborhood breakfast and lunch destination';
    console.log(color + greeting);
}

function setDefault() {
    color = 'purple';
    greeting = 'Your friendly neighborhood institution!';
    console.log(color + greeting);
}

document.body.style.backgroundColor = color;
document.write('<h3>'+ greeting +'</h3>');

// should create a pop-up that creates boolean response to Hungry y/n?
var hungry = confirm("Are you ready for a dope meal?");
if (hungry == true) {
alert("Welcome to food time!");
} else {
  alert("OKAY FINE!")
}