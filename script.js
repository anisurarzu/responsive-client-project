$(".slider-nav").slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	asNavFor: ".slider-for",
	dots: true,
	focusOnSelect: true,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
			},
		},
		{
			breakpoint: 1008,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			},
		},
		{
			breakpoint: 736,
			slidesToShow: 1,
			slidesToScroll: 1,
			asNavFor: ".slider-for",
			dots: true,
		},
		{
			breakpoint: 688,
			slidesToShow: 1,
			slidesToScroll: 1,
			asNavFor: ".slider-for",
			dots: true,
		},
	],
});
