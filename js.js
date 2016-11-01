var items = 0;

$(document).ready(function(){
	
	$('#input').keypress(function(event){
		if (event.which ==13) {
			event.preventDefault();
				$()
		}
	});

	$('#btn').click(function(){
	  var add = $('#input').val();
	  var today = new Date();
	  var dd = today.getDate();
	  var mm = today.getMonth()+1;
	  var yyyy = today.getFullYear();

	  	//Tells you todays date
		if(dd<10) {
		   dd='0'+dd
		} 

		if(mm<10) {
		    mm='0'+mm
		} 
		today = mm+'/'+dd+'/'+yyyy;
		
		//Adds 1 to items each time
		items = items + 1;
	  	
	  	//Adds the task into the table
	  	$("#todoList").append('<div class="row">'
	  							 + '<div class="col-xs-4"><h3>'+items + ". " + add+'</h3></div>'
	  							 + '<div class="col-xs-4"><button id="trash" class="glyphicon glyphicon-trash"></button></div>'
	  							 + '<div class="col-xs-4"><h4>'+today+'</h4></div>'
	  						 +'</div>');

    				
	});

	//When you push clear button the input box empties
	$('#clearButton').click(function() {
 		$("#input").val("");
 	});

	//deletes individual tasks 
 	$(document).on('click', '#trash', function(){
 		$(this).closest("div.row").remove();
 		items = items - 1;
 		confirm("Are you sure you want to delete this task?");
 	});
});