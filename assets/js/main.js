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

var urlmal = 'https://content-sheets.googleapis.com/v4/spreadsheets/1AczEQxn_ATfnfEtAbJMqVigLNse4XIyRtvQ7JG53G74/values/Z3?key=AIzaSyDOxT5BRuC3_JurGwubSc7buJe25nf3itg';

$.get(urlmal,null,function(data){
	var my = new CountUp("Malaysia", 0, parseInt(data.values[0]), 0, 5, options);
	my.start();
});

var urlvn = 'https://content-sheets.googleapis.com/v4/spreadsheets/19ez3FZTNNGgNESSnTqpPobNyfbdWg8Gz5d8Q6J8XbQ4/values/Z3?key=AIzaSyDOxT5BRuC3_JurGwubSc7buJe25nf3itg';

$.get(urlvn,null,function(data){
	var vn = new CountUp("Vietnam", 0, parseInt(data.values[0]), 0, 5, options);
	vn.start();
});


var options = {
  useEasing : true,
  useGrouping : true,
  separator : ',',
  decimal : '.',
  prefix : '',
  suffix : ''
};
var tl = new CountUp("Thailand", 0, 0, 0, 5, options);

tl.start();
