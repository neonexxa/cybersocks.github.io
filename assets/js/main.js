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
