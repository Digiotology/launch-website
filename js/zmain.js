$("#process li > *").matchHeight();

$("#navbar").scrollToFixed();

$('a[href^="#"]').on('click',function (e) {
	e.preventDefault();

	var target = this.hash;
	var $target = $(target);

	$('html, body').stop().animate({
		'scrollTop': $target.offset().top - 82
		}, 500, 'swing', function () {
		window.location.hash = target;
	});
});

$("#why nav li").click(function() {
	var clickedItemId = $(this).attr("id");

	$("#why nav li").removeClass("active");
	$(this).addClass("active");

	$("#why .content li").removeClass("active");
	$("#why .content li").filter("#" + clickedItemId)
						 .attr("class", "active");
});