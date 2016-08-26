$(document).ready(function(){
	$('#btn').click(function(){
	  var add = $('#input').val();
		$('ol').append("<li>" + add + '</li>');
	});
});

