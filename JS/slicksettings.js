$('.team-carousel').slick({
	arrows: false,
	autoplay: true,
	autoplaySpeed: 700,
	mobileFirst: true,
	centerMode: true,
	centerPadding: '60px',
	slidesToShow: 1,
	slidesToScroll: 1,
	responsive: [{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
			},
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 3,
			},
		},
	],
});
