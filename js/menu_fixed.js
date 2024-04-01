//固定メニュー(nav/footer)
$(function() {
  var $win = $(window),
      $main = $('main'),
	  $wrap = $('#wrap'),
      $header = $('header'),
      $header_inner = $('header .inner'),
	  $nav = $('nav'),
      headerHeight = $header.outerHeight(),
      navPos = $header.offset().top + headerHeight,
      fixedClass = 'is-fixed';
    $win.on('load scroll', function() {
    var value = $(this).scrollTop();
    if ( value > navPos ) {//スクロール位置がナビより大きかったら
		//var w = $(window).width();
		//var x = 640;
		//if (w >= x) {
		//} else {
			$header.addClass(fixedClass);
            $header_inner.css({'padding':'5px 2%'});
            $nav.css({'padding':'0.5rem'});
            //$header.css({"box-shadow":"3px 3px 10px #000"});
			$wrap.css({'padding-top':headerHeight});
		//}
    } else {//スクロール位置がナビより小さかったら
		//var w = $(window).width();
		//var x = 640;
		//if (w >= x) {
		//} else {
			$header.removeClass(fixedClass);
            $header_inner.css({'padding':'25px 2%'});
            //$header.css({"box-shadow":"3px 3px 10px #000"});
			$wrap.css({'padding-top':'0'});
		//}
    }
  });
});