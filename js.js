$(document).ready(function(){
	$('#btn').click(function(){
	  var add = $('#input').val();	  	
		$('ol').append("<li>" + add + '</li>');
		$("ol").append("<button>" + add + "</button>")
	});
});

// HOW TO MAKE BUTTON CLEAR??????????
// 	$('.clearButton').click(function() {
// 	$("input[type='text']").empty().val();	
// };

//HOW DO I REMOVE THE ONE BUTTON BEFORE ANY LI'S AND DELETE BUTTONS SINGULARLY???
//HOW DO I MAKE IT RESPONSIVE????
//ASK AFTER BEING CHECKED IF SURE WANT IT DELETED WITH MODAL
//HOW TO MOVE BUTTON AND MAKE COLUMNS/ROWS