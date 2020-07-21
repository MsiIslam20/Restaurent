$(document).ready(function(){

	$('select').niceSelect();

	"use strict"
	
	var $projects = $(".item_main");
	
	$projects.isotope({
		itemSelector: ".item",
		layoutMode: "fitRows"
		
	});
	
	$("ul.filter_inner li").click(function(e){
		e.preventDefault();
		
		var filter = $(this).attr("data-filter");
		
		$("ul.filter_inner li" ).removeClass("active");
		$(this).addClass("active");
		
		$projects.isotope({filter : filter});
		
	});

	$(".navbar-toggler").click(function(){
		$(".nav-sidebar").toggleClass("active_nav")
	});
	$(".navbar-toggler").click(function(){
		$(".navbar-toggler i").toggleClass("active-color")
	});
	$(".nav-item2").click(function(){
		$(".navbar-toggler i").removeClass("active-color")
	});
	$(".nav-item2").click(function(){
		$(".nav-sidebar").removeClass("active_nav")
	});
	$(window).scroll(function(){
		
	  if ($(document).scrollTop()) {
		  $("header").addClass("shrink");
		  
	  }
	  else{
		  $("header").removeClass("shrink");
	  }
		
	});	

   $("#datepicker").datepicker({
		format: 'mm.dd.yyyy',
		startDate: '-3d'
	 });

});
	