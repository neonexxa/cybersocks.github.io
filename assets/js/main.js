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

var urlmal = 'https://content-sheets.googleapis.com/v4/spreadsheets/1VpqnS5dtsEmUpg-GEsccJ8yq77m1Jv_ydKIRQGSRGiQ/values/A2?key=AIzaSyDOxT5BRuC3_JurGwubSc7buJe25nf3itg';

$.get(urlmal,null,function(data){
	var my = new CountUp("Malaysia", 0, parseInt(data.values[0]), 0, 5, options);
	my.start();
});

var urlvn = 'https://content-sheets.googleapis.com/v4/spreadsheets/1e4PUG314-Qs8fwal3vM_LHzsty8PdDXTa6A2N-KT70M/values/B2?key=AIzaSyDOxT5BRuC3_JurGwubSc7buJe25nf3itg';

$.get(urlvn,null,function(data){
	var vn = new CountUp("Vietnam", 0, parseInt(data.values[0]), 0, 5, options);
	vn.start();
});

var urltl = 'https://content-sheets.googleapis.com/v4/spreadsheets/13xJH-B9_ewTK2644QlJ5tKSiDCZHww0tvB3a7eLFVQs/values/C2?key=AIzaSyDOxT5BRuC3_JurGwubSc7buJe25nf3itg';

$.get(urltl,null,function(data){
	var tl = new CountUp("Thailand", 0, parseInt(data.values[0]), 0, 5, options);
	tl.start();
});
