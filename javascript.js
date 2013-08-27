$(document).ready(function() {

	var bread = [
		{
			type: "wheat",
			image: "url('images/wheat.png') repeat-x",
		},
				
		{
			type: "sesame",
			image: "url('images/sesame.png') repeat-x",
		}
	];

	var cheese = [
		{
			type: "swiss",
			image: "url('images/swiss.png') repeat-x",
		},
		{
			type: "cheddar",
			image: "url('images/cheddar.png') repeat-x",
		}
	];

	var meat = [
		{
			type: "turkey",
			image: "url('images/turkey.png') repeat-x",
		},
		{
			type: "ham",
			image: "url('images/ham.png') repeat-x",
		}
	];

	var condiments = [
		{
			type: "lettuce",
			image: "url('images/lettuce.png') repeat-x",
		},
		{
			type: "tomato",
			image: "url('images/tomato.png') repeat-x",
		},
		{
			type: "mustard",
			image: "url('images/mustard.png') repeat-x",
		},
		{
			type: "mayonnaise",
			image: "url('images/mayonnaise.png') repeat-x",
		}
	];

	var sandwich = [bread, cheese, meat, condiments];

	var optionsCheck = false

	$('div.options').on("click", function() {
		if (!optionsCheck) {
			sandwich.forEach(function(arrays) {
				arrays.forEach(function(objects) {
					$('div.options').append("<span class=" + objects.type + ">" + objects.type + "</span");
				});
			});
		};
		optionsCheck = true;
	});


	// had to be sneaky here. since ".wheat" was created dynamically using .append
	// i had to select it's parent div and pass ".wheat" in as an argument in the
	// .on("click") function. Crazy... have no idea whay i had to do that.
	$('div.options').on("click", ".wheat", function() {
		$(".bread-top-slice, .bread-bottom-slice").css({"background": sandwich[0][0].image});
	});

	$('div.options').on("click", ".sesame", function() {
		$(".bread-top-slice, .bread-bottom-slice").css({"background": sandwich[0][1].image});
	});

	$('div.options').on("click", ".swiss", function() {
		$("div.cheese").css({"background": sandwich[1][0].image});
	});

	$('div.options').on("click", ".cheddar", function() {
		$("div.cheese").css({"background": sandwich[1][1].image});
	});

	$('div.options').on("click", ".turkey", function() {
		$("div.meat").css({"background": sandwich[2][0].image});
	});

	$('div.options').on("click", ".ham", function() {
		$("div.meat").css({"background": sandwich[2][1].image});
	});

	$('div.options').on("click", ".lettuce", function() {
		$("div.lettuce").css({"background": sandwich[3][0].image});
	});

	$('div.options').on("click", ".tomato", function() {
		$("div.tomato").css({"background": sandwich[3][1].image});
	});

	$('div.options').on("click", ".mustard", function() {
		$("div.mustard-mayonnaise").css({"background": sandwich[3][2].image});
	});

	$('div.options').on("click", ".mayonnaise", function() {
		$("div.mustard-mayonnaise").css({"background": sandwich[2][3].image});
	});

});








