// Greetings
$(document).ready(function() {
	console.log( "Welcome to the Cybersocks Regional Competition 2016!" );
});

// Initiates typeit
$('#typing').typeIt({
	cursor: false // Say no to blinking cursor
});

// mobile-friendly side-navigation
$('.button-collapse').sideNav({
	menuWidth: 300, // Default is 240
	edge: 'right', // Choose the horizontal origin
	closeOnClick: true // Closes side-nav on clicks
});

// dropdown config
$('.dropdown-button').dropdown({
	inDuration: 300,
	outDuration: 325,
	constrain_width: false, // Does not change width of dropdown to that of the activator
	hover: true, // Activate on hover
	gutter: 0, // Spacing from edge
	belowOrigin: true, // Displays dropdown below the button
	alignment: 'left' // Displays dropdown with edge aligned to the left of button
});
