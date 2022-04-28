
$(document).ready(function(){
	
	
		$(this).find('.back').hide();
	});


$(document).ready(function(){
	$(".turn").hover(function(){
		$(this).find('.front').hide();
		$(this).find('.back').show();
	}, function(){
		$(this).find('.front').show();
		$(this).find('.back').hide();
	});
});
