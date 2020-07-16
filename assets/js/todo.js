$("ul").on('click',"li", function() {
	$(this).toggleClass("completed");
});

$("ul").on('click',"span",function(event) {
	// body...

	//agar fungsi fadeOut menyelesaikan kerjanya terlebih dahulu, baru dilakukan remove
	$(this).parent().fadeOut(300, function() {
		$(this).remove();
	});

	// agar dom span saja yang berjalan 
	event.stopPropagation();

});


$("input[type='text']").on('keypress',function(event) {	
	/* Act on the event */

	// kalo udah tekan enter. 13 = enter 
	if(event.which === 13) {
		var todoInput = $(this).val();

		//mereset input text
		$(this).val("");

		//menambahkan li baru pada ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> "+ todoInput +"</li>");
	}
});

$(".fa-plus").on('click',function() {
	/* Act on the event */
	$("input[type='text']").fadeToggle();
});