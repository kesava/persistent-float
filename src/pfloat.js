// create closure
(function($) {
  // plugin definition
  $.fn.pfloat = function(options) {
	
	var defaults = {
	    lock_height: 0,
	    initial_position_x: 0,
		initial_posiiton_y: 0,
		width: 0,
		height: 0
	  };
	 
	// Extend our default options with those provided.
	var opts = $.extend({}, $.fn.pfloat.defaults, options);
	return this.each(function() {
		$obj = $(this);  
	   
    	ready($obj);
		scroller($obj);
	});
	
	function ready(obj) {
					
			jQuery(obj).css('top', opts.initial_position_x);
			jQuery(obj).css('margin-left', opts.initial_position_y);
			jQuery(obj).css('width', opts.width);
			jQuery(obj).css('position', "fixed");
			
	};

	function scroller(obj) {			
			
			jQuery(document).scroll(function() {
				
				var current_element_height = jQuery(window).scrollTop() + opts.initial_position_x;

				if (current_element_height >= opts.lock_height) {
					
					jQuery(obj).css('top', opts.lock_height - jQuery(window).scrollTop());
					jQuery(obj).css('position', "fixed");

				}
				else {
					
					jQuery(obj).css('top', opts.intial_position_x);

				}
		});
	};
	
 };

})(jQuery);