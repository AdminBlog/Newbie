;(function($, window, document, undefined) {

	$.fn.animatedBG = function(options){
		var defaults = {
				colorSet: ['#f96e5b', '#00bcc3', '#5fb26a', '#fc7331', '#1abc9c', '#c0392b', '#f39c12'],
				speed: 3000
			},
			settings = $.extend({}, defaults, options);

		return this.each(function(){
			var $this = $(this);

			$this.each(function(){
				var $el = $(this),
					colors = settings.colorSet;
				
				function shiftColor() {
					var color = colors.shift();
					colors.push(color);
					return color;
				}

				// initial color
				var initColor = shiftColor();
				$el.css('backgroundColor', initColor);
				setInterval(function(){
					var color = shiftColor();
					$el.animate({backgroundColor: color}, 3000);
				}, settings.speed);
			});
		});
	};

	// Initialize
	$(function(){
		$('.animated-bg').animatedBG();
	});

}(jQuery, window, document));
