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

var options = {
  useEasing : true,
  useGrouping : true,
  separator : ',',
  decimal : '.',
  prefix : '',
  suffix : ''
};
var my = new CountUp("Malaysia", 0, 26, 0, 5, options);
var vn = new CountUp("Vietnam", 0, 14, 0, 5, options);
var tl = new CountUp("Thailand", 0, 0, 0, 5, options);
my.start();
vn.start();
tl.start();
