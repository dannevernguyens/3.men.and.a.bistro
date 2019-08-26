// this will change the h3 depending on time of day
var hourNow = prompt("What time is it? (military time)");
var greeting;

if (hourNow > 12) {
    greeting = 'Your friendly neighborhood dinner and late-nite bite destination!';
} else if (hourNow > 0) {
    greeting = 'Your friendly neighborhood breakfast and lunch destination!';
} else {
    greeting = 'Your friendly neighborhood institution!';
}

document.write('<h3>'+ greeting +'</h3>');


