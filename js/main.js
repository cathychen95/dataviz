$(document).ready(function() {

	$('.results').hide();

	// TO DO
	// color counties with Hertz yellow to start
	coloryellow();

	$('.counties path').mouseover(function() {
		$(this).css("fill", "#9A009E");

		// TO DO
		// dummy conditional - should be IF THERE IS HERTZ STATION IN COUNTY
		if ($(this).attr("id").indexOf('AK') > -1 || 
			$(this).attr("id").indexOf('TX') > -1 || 
			$(this).attr("id").indexOf('CA') > -1 || 
			$(this).attr("id").indexOf('PA') > -1) {
			populateResults($(this));
			$('.results').show();
		}
	});

	$('.counties path').mouseleave(function() {
		$(this).css("fill", "white");
		$('.results').hide();
	});

	$('a#toggle').click(function(){
        $(this).toggleClass("down");
    });

});


// svg set up - color counties with Hertz yellow
function coloryellow() {
	// TO DO
}


function populateResults(county) {
	leaving(county);
	arriving(county);
}

// TO DO
// 1. calculate top 3 drain/feeder counties
// 2. color relevant counties red/green
// 3. generate result circles (append)
function leaving(county) {
	$('#leaving').empty();

	var county_name = county.attr("id");
	console.log(county_name);

	$('#leaving')
	.append(
		$('<div>').attr("class", "info")
		.append(
			$('<div>').attr("class", "hd").html("Leaving")
			)
		.append(
			$('<div>').attr("class", "data").html(county_name)
			)
		);
}

function arriving(county) {
	$('#arriving').empty();

	var county_name = county.attr("id");
	console.log(county_name);

	$('#arriving')
	.append(
		$('<div>').attr("class", "info")
		.append(
			$('<div>').attr("class", "hd").html("Arriving")
			)
		.append(
			$('<div>').attr("class", "data").html(county_name)
			)
		);
}

