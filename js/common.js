$(function() {

	// Custom JS

	$(".scroll-to").on('click', function() {
		var link = $(this).attr('href');
		console.log(link);
    $([document.documentElement, document.body]).animate({
        scrollTop: $(link).offset().top - 150
    }, 2000);
});


// this is the id of the form
$("#form-1, #form-2").submit(function(e) {

    e.preventDefault(); // avoid to execute the actual submit of the form.

    var form = $(this);
    var url = form.attr('action');


$('#form-1').find('input').each(function() {
	
if( $(this).val() == ''  ) {
	$(this).css('border', '1px solid red');
} 

});
	
	if( $('#form-1').find('input').eq(0).val() != '' && $('#form-1').find('input').eq(1).val() != '' || $('#form-2').find('input').eq(0).val() != '' && $('#form-2').find('input').eq(1).val() != '' ) {
		
    $.ajax({
           type: "POST",
           url: url,
           data: form.serialize(), // serializes the form's elements.
           success: function(data)
           {
               if ( data != '' ) {
               	form.html('<p class="f22 text-center fw600 lh1">' + data + '</p>')
               }
           }
         });
}


});


});
