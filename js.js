

var items = 0;

$(document).ready(function(){
	$('#btn').click(function(){
	  var add = $('#input').val();
	  var today = new Date();
	  var dd = today.getDate();
	  var mm = today.getMonth()+1;
	  var yyyy = today.getFullYear();
		if(dd<10) {
		   dd='0'+dd
		} 

		if(mm<10) {
		    mm='0'+mm
		} 
		today = mm+'/'+dd+'/'+yyyy;
		items = items + 1;
	  	$("#todoList").append('<div class="row">'
	  							 + '<div class="col-md-4"><h3>'+items + ". " + add+'</h3></div>'
	  							 + '<div class="col-md-4"><button class="glyphicon glyphicon-trash"></button></div>'
	  							 + '<div class="col-md-4"><h4>'+today+'</h4></div>'
	  						 +'</div>');

    				
	});

	$('#clearButton').click(function() {
 		$("#input").val("");
 	});

});



//HOW DO I REMOVE THE ONE BUTTON BEFORE ANY LI'S AND DELETE BUTTONS SINGULARLY???
//HOW DO I MAKE IT RESPONSIVE????
//ASK AFTER BEING CHECKED IF SURE WANT IT DELETED WITH MODAL
