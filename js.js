$(document).ready(function(){
	$('#btn').click(function(){
	  var add = $('#input').val();
		$('ol').append("<li>" + add + '</li>' + add + "<button>" + add + "<i>");
		$("delete").val()
	});
});


	//HOW TO MAKE BUTTON CLEAR??????????
	// $('#clearButton').click(function(){
	// 	$('#todoList').empty()
	// 	alert("clear")
	// });
