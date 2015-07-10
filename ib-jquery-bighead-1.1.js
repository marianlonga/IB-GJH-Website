$(document).ready(function(){
	var header = $('.header-ib');
	var slider = $('.slider-ib');
	var nav = $('nav');
	var content = $('.content-ib');
	var searchActive=false;
	var sliderPicNo = 0;
	var sliderPics = ["img/slider-bratmun2014-small.jpg",
					 "img/slider-secret_santa-small.jpg",
					 "img/slider-bratmun2013_1-small.jpg",
					 "img/slider-lanator-small.jpg",
					 "img/slider-bratmun2013_2-small.jpg",
					 "img/slider-zastera-small.jpg",
					 "img/slider-bratmun2013_3-small.jpg",
					 "img/slider-ochsuchscience-small.jpg",
					 "img/slider-g42014_2-small.jpg",
					 "img/slider-iva-small.jpg",
					 "img/slider-gjhzima-small.jpg",
					 "img/slider-g42014_1-small.jpg",
					 "img/slider-vyrocie-small.jpg",
					 "img/slider-gocovo2012-small.jpg",
					 "img/slider-absolventska-small.jpg"
					 ];
	var siteLanguage = "English";
	var rightHeaderLogo = $('.header-ib .header-logo-right');
	var leftHeaderLogo = $('.header-ib .header-logo-left');
	var sliderHeight = parseInt(slider.css("height"));
	var headerHeight = parseInt(header.css("height"));
	var sliderImg = $(".slider-ib img");
	var searchInputField = $("nav.ib #search-input");

	//INITIAL STUFF

	scaleHeader();

	function scaleHeader(){
		leftHeaderLogo.css("height", leftHeaderLogo.width()+"px");
		rightHeaderLogo.css("height", rightHeaderLogo.width()+"px");
	}

	function setConstants(){
		sliderHeight = parseInt(slider.css("height"));
		headerHeight = parseInt(header.css("height"));
	}

	//HANDLING WINDOW RESIZE

	$(window).resize(function(){
		scaleHeader();
		setConstants();
	});

	//SLIDER ITERATION

	var timer = setInterval(sliderNextPic, 2000);
	function sliderNextPic() {
		sliderPicNo++;
		sliderPicNo %= sliderPics.length;
		sliderImg.animate({
			transform: 'translateY(300px) rotateZ(120deg)',
		 	MozTransform: 'translateY(300px) rotateZ(120deg)',
		 	WebkitTransform: 'translateX(-1000px)',
		 	msTransform: 'translateY(300px) rotateZ(120deg)'
		},500);
		sliderImg.attr("src", sliderPics[sliderPicNo]);
	}

	//SEARCH OPERATING

	searchInputField.keypress(function(event){
		if (searchActive && event.which == 13){
			hideSearch();
		}
		if (searchActive && event.which == 27){
			hideSearch();
		}
	});

	$("nav.ib #menu-search-button").click(function() {
		if (searchActive){
			hideSearch();
		} else {
			showSearch();
		}
	});

	function hideSearch(){
		if ($("nav.ib ul #search-input").val() != ""){
			alert("You bastard! You wanna search for '" + 
			$("nav.ib ul #search-input").val() + 
			"', right?");
		}
		$("nav.ib > ul > li").css("display","inline");
		$("nav.ib ul #search-input").css("display","none");
		$("nav.ib ul #search-input").val("");
		$("nav.ib ul #search").css("width","5%");
		$("nav.ib ul #menu-search-button").css("width","100%");	
		searchActive = false;
	}

	function showSearch(){
		$("nav.ib > ul > li:not(#search)").css("display","none");
		$("nav.ib ul #menu-search-button").css("width","5%");	
		$("nav.ib ul #search").css("width","100%");
		$("nav.ib ul #search-input").css("display","inline");
		$("nav.ib ul #search-input").focus();
		searchActive = true;
		$("nav.ib ul #search-input").animate({
			width: "95%"
		},100);
	}

	//LANGUAGE SWITCHING

	$(".language-switch-button").click(function(){
		if ($(this).attr("id") == "en"){
			siteLanguage = "English";
			$("#sk img").css({
				opacity: 0.8
			});
			$("#en img").css({
				opacity: 1,
			});
		} else {
			siteLanguage = "Slovak";
			$("#en img").css({
				opacity: 0.8
			});
			$("#sk img").css({
				opacity: 1,
			});
		}
		alert("It appears that you want to set the language to " + 
			siteLanguage + "! Nice try, mate.");
	});

	//HANDLING PAGE SCROLLING (APPLIES TO NAVIGATION PANEL)

	$(window).scroll(function() {
		if ($(this).scrollTop()	> sliderHeight + headerHeight)
		{
			nav.css({
				position: "fixed",
				top: 0
			});
		} 
		else if ($(this).scrollTop() <= sliderHeight + headerHeight)
		{
			nav.css({
				position: "relative"
			});
		}
	});
});