// this function should both change the bg color and the greeting within the same call
var hourNow = prompt("What time is it? (military time)");
var greeting;
var color;

// build something here to ensure they put in number

if (hourNow > 12) {
    color = 'lightblue';
    greeting = 'Your friendly neighborhood dinner and late-nite bite destination!';
} else if (hourNow > 0) {
    color = 'lightred';
    greeting = 'Your friendly neighborhood breakfast and lunch destination!';
} else {
    color = 'lightgreen';
    greeting = 'Your friendly neighborhood institution!';
}

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