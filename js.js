$(document).ready(function(){
	$('#btn').click(function(){
	  var add = $('#input').val();	  	
		$('ol').append("<li>" + add + '</li>');
		$("ol").append("<button>" + add + "</button>")
	});
});



	//HOW TO MAKE BUTTON CLEAR??????????
	// $('#clearButton').click(function(){
	// 	$('#todoList').empty()
	// 	alert("clear")
	// });
