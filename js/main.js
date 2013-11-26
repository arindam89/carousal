(function($){
	var carousal = $('.carousal');
    var slide = 'li';
	var items = carousal.find(slide);
    var options = {
            transition: 500,
            duration: 4000
        };

    items.first().addClass('active');
    items.first().fadeIn(options.transition);

    setInterval(function(){
        var i = carousal.find(slide+'.active').index();
        items.eq(i).fadeOut(options.transition);
        items.eq(i).removeClass('active');

        i = (i+1 == items.length) ? 0 : (i+1);
        items.eq(i).addClass('active');
        items.eq(i).fadeIn(options.transition);
    }, options.transition + options.duration);


}(jQuery));
