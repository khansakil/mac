$(document).ready(function(){
	$(".menubar").click(function(){
		$(".menu").toggle(1000);
	});
	$(".menubar .fa-bars").click(function(){
		$(".fa-bars").hide(1000);
		$(".fa-close").show(1000);
	});
	$(".menubar .fa-close").click(function(){
		$(".fa-close").hide(1000);
		$(".fa-bars").show(1000);
	});
});