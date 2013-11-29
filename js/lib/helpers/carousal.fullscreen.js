Carousal.fullscreenHandler = function(id){
	$('#'+id).on("click", function(e) {
		e.preventDefault();
    var
          el = document.documentElement
        , rfs =
               el.requestFullScreen
            || el.webkitRequestFullScreen
            || el.mozRequestFullScreen
    ;
    rfs.call(el);
	});
}