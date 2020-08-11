$(document).ready(function () {
	$('#home-slider').slick({
		dots: true,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 5000,
		speed: 500
  	});
  	$('.sale-product').slick({
		infinite: true,
		slidesToShow: 4,
  		slidesToScroll: 1,
  		draggable: false,
		speed: 310
  	});
});