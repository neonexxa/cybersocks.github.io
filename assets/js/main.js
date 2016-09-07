$(document).ready(function() {
	console.log( "Welcome to the Cybersocks Regional Competition 2016!" );
});

$('#typing').typeIt({
	cursor: false
});

$('.button-collapse').sideNav({
	menuWidth: 300,
	edge: 'right',
	closeOnClick: true
});

$('.dropdown-button').dropdown({
	inDuration: 300,
	outDuration: 325,
	constrain_width: false,
	hover: true,
	gutter: 0,
	belowOrigin: true,
	alignment: 'left'
});

$('.modal-trigger').leanModal();

function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

// What year are we in now?
var now = new Date();
var current_year = now.getFullYear();
var next_year = current_year + 1;

// Set the date we're counting down to.
var target_date = new Date("Oct 22, 2016 10:00:00 GMT+0800").getTime();

// Variables for time units.
var days, hours, minutes, seconds;

// Get the elements that will hold the numbers.
var $days = document.getElementById("d");
var $hours = document.getElementById("h");
var $minutes = document.getElementById("m");
var $seconds = document.getElementById("s");

// Calculate the countdown clock and set the HTML.
function update() {
    // Find the amount of "seconds" between now and target.
    var current_date = new Date().getTime();
    var seconds_left = (target_date - current_date) / 1000;

    // Do some time calculations.
    days = parseInt(seconds_left / 86400);
    seconds_left = seconds_left % 86400;

    hours = parseInt(seconds_left / 3600);
    seconds_left = seconds_left % 3600;

    minutes = parseInt(seconds_left / 60);
    seconds = parseInt(seconds_left % 60);

    // Format the number strings and put them in the elements.
    $days.innerHTML = pad(days, 2);
    $hours.innerHTML = pad(hours, 2);
    $minutes.innerHTML = pad(minutes, 2);
    $seconds.innerHTML = pad(seconds, 2);
}

// Immediately update the HTML.
// The white boxes are blank otherwise.
update();

// Now update our number elements every 1 second.
setInterval(update, 1000); // 1000 milliseconds = 1 second

// This looks much better with leading zeros, don't you agree?
// If num has less than size digits, add enough 0s to the front.
function pad(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}
