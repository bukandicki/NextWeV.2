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

	// $('.search-input').keyup(function (e) {
	// 	var cari = $('.search-input').val();
	// 	if (e.keyCode == 13 || cari != '') {
	// 		$('.result-text-search').removeClass('d-none');
	// 		$('.text-search').html(cari);
	// 	}else {
	// 		$('.result-text-search').addClass('d-none');
	// 	}
	// })

	$('.main-nav .nav-item').on('click', function () {
		$('.main-nav .nav-item').removeClass('active');
		$(this).addClass('active');
	});

	function progressSale(st,sl) {
		var stock = st;
		var terjual = sl;
		var hasil_persen = (stock - terjual)/stock*100;
		var wio = hasil_persen;

		widthProductSale('a2',wio);
		return hasil_persen;
	}

	function widthProductSale(klas,hasil) {
		var a = $('#' + klas);
		if (hasil == 100) {
			$(a).removeClass("progress-product-sale");
			$(a).addClass("progress-product-sale-sold");
			$("#product-id-1").find('#status-stock').html("Sold Out!");
		}
	}

	$("#a1").css("width","" + progressSale(110,40) + "%");
	$("#a2").css("width","" + progressSale(90,0) + "%");
	$("#a3").css("width","" + progressSale(50,7) + "%");
	$("#a4").css("width","" + progressSale(120,50) + "%");
	$("#a5").css("width","" + progressSale(90,4) + "%");
	// $(".progress-product-sale").css("width","" + progressSale(120,9) + "%");

	var count = 86;
	var counter = setInterval(timer, 1000);

	function timer() {
	    count = count - 1;
	    if (count == -1) {
	        clearInterval(counter);
	        return;
	    }

	    var seconds = count % 60;
	    var minutes = Math.floor(count / 60);
	    var hours = Math.floor(minutes / 60);
	    minutes %= 60;
	    hours %= 60;

	    $("#timer").html(hours + " : " + minutes + " : " + seconds);
	    
	    if (seconds == 0 && minutes == 0 && hours == 0) {
	    	$("#timer").html("Telah berakhir!");
	    	$("#timer").removeClass("text-secondary");
	    	$("#timer").addClass("text-danger small animate__animated animate__flash animate__infinite");
	    }
	}

	$('#cart').on("click", function(){
		swal({
		  title: "Hore Berhasil!",
		  text: "Produk berhasil di tambahkan ke keranjang kamu",
		  icon: "success",
		  buttons: ["Belanja Lagi", "Bayar Langsung"],
		})
		.then((isConfirm) => {
  			if (isConfirm) {
    			window.location.href = "checkout.html";
  			} else {
  			}
		});
	});
});