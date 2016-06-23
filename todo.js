$(document).ready(function(){
	$('li.notDone').click(function(){ 
		$(this).fadeOut();//change class to li.done, add the check mark
	});
	
});



$(document).ready(function(){
	$('li.done').click(function(){ 
		$('li.done').fadeOut('fast');
	});
	
});