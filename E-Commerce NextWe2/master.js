$(document).ready(function () {
	$('.product').on('click', '.fav-button', function (e) {
		e.preventDefault();
		if ($(this).html() == '<img src="assets/img/h1.png" width="25px" id="fav-button">') {
			$(this).html(`<img src='assets/img/h3.png' width='25px' id='fav-button'>`);
		}else{
			$(this).html(`<img src='assets/img/h1.png' width='25px' id='fav-button'>`);
		}
	});

	$('.search-button').on('click', function () {
		var cari = $('.search-input').val();
		$('.result-text-search').removeClass('d-none');
		$('.text-search').html(cari);
		if (cari == '') {
			$('.result-text-search').addClass('d-none');
		}
	});

	$('.search-input').keyup(function (e) {
		var cari = $('.search-input').val();
		if (e.keyCode == 13 || cari != '') {
			$('.result-text-search').removeClass('d-none');
			$('.text-search').html(cari);
		}else {
			$('.result-text-search').addClass('d-none');
		}
	})

	$('.nav-item').on('click', function () {
		$('.nav-item').removeClass('active');
		$(this).addClass('active');
	});
	
});