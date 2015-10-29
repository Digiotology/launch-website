$("#process li > *").matchHeight();

$("#navbar").scrollToFixed();

$('a[href^="#"]').on('click',function (e) {
	e.preventDefault();

	var target = this.hash;
	var $target = $(target);

	$('html, body').stop().animate({
		'scrollTop': $target.offset().top - 140
		}, 500, 'swing', function () {
		window.location.hash = target;
	});
});

jQuery('img.svg').each(function(){
	    var $img = jQuery(this);
	    var imgID = $img.attr('id');
	    var imgClass = $img.attr('class');
	    var imgURL = $img.attr('src');

	    jQuery.get(imgURL, function(data) {
	        // Get the SVG tag, ignore the rest
	        var $svg = jQuery(data).find('svg');

	        // Add replaced image's ID to the new SVG
	        if(typeof imgID !== 'undefined') {
	            $svg = $svg.attr('id', imgID);
	        }
	        // Add replaced image's classes to the new SVG
	        if(typeof imgClass !== 'undefined') {
	            $svg = $svg.attr('class', imgClass+' replaced-svg');
	        }

	        // Remove any invalid XML tags as per http://validator.w3.org
	        $svg = $svg.removeAttr('xmlns:a');

	        // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
	        if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
	            $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
	        }

	        // Replace image with new SVG
	        $img.replaceWith($svg);

	    }, 'xml');
	});

$("#why nav li").click(function() {
	var clickedItemId = $(this).attr("id");

	$("#why nav li").removeClass("active");
	$(this).addClass("active");

	$("#why .content li").removeClass("active");
	$("#why .content li").filter("#" + clickedItemId)
						 .attr("class", "active");
});

var inViewClasses = [
	"#explore", "#plan", "#build", "#experiment", "#launch", "#learn"
];

$.each(inViewClasses, function(i, itemClass) {
	$("#process ul li" + itemClass).bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
		if (visiblePartY == 'both') {
			if (isInView) {
				$(this).addClass("active");
			}
		}
	});
});