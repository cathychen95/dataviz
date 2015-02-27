// 0 is by county, 1 is by state
var state = 0;

var inputData = [];

var fips1 = [incoming1, outgoing1];
var fips2 = [incoming2, outgoing2];

var incoming1 = [county_count2_in, county_count3_in];
var incoming2 = [county_count1_in, county_count3_in];

var outgoing1 = [county_count2_out, county_count3_out];
var outgoing2 = [county_count1_out, county_count3_out];

var county_count1_in = ["c06071", 100];
var county_count2_in = ["c48043", 50];
var county_count3_in = ["c48479", 80];

var county_count1_out = ["c06071", 2];
var county_count2_out = ["c48043", 1];
var county_count3_out = ["c48479", 8];

inputData["c06071"] = fips1;
inputData["c48043"] = fips2;


var yellow_states={};



$(document).ready(function() {


	$('.results').hide();

	console.log(inputData);

	// TO DO
	// color counties with Hertz yellow to start
	coloryellow();

	$('.counties path').mouseover(function() {
		if (state == 0) {
			$(this).css("fill", "#9A009E");
		}
		else {
			var state_code = $(this).attr("id").split(",")[1].trim();
			$('.counties').children().each(function () {
				if ($(this).attr("id").indexOf(state_code) > -1) {
					$(this).css("fill", "#9A009E");
				}

			});
		}

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
		if (state == 0) {
			$(this).css("fill", "white");
		}
		else {
			var state_code = $(this).attr("id").split(",")[1].trim();
			$('.counties').children().each(function () {
				if ($(this).attr("id").indexOf(state_code) > -1) {
					if($(this).data("isYellow") == 1) {
						$(this).css("fill", "#FFF600");
					}
					else {
						$(this).css("fill", "#FFF");
					}
				}
			});
		}
		if($(this).data("isYellow") == 1) {
			$(this).css("fill", "#FFF600");
		}
		$('.results').hide();
	});

	$('#toggle').click(function(){
		$('#state').empty();
		if ($('#toggle img').attr("src") == "img/toggle_left.svg") {
			$('#toggle img').attr("src", "img/toggle_right.svg");
			$('#state').html("BY STATE");
			state = 1;
		}
		else {
			$('#toggle img').attr("src", "img/toggle_left.svg");
			$('#state').html("BY COUNTY");
			state = 0;
		}

    });
});

// svg set up - color counties with Hertz yellow
function coloryellow() {
	$('.counties').children().each(function () {
		var fipsCode = $(this).attr("class");
		if(typeof inputData[fipsCode] != 'undefined') {
			var state_code = $(this).attr("id").split(",")[1].trim();
			if (state_code in yellow_states) {
				var fips_list = yellow_states[state_code];
				fips_list.push(fipsCode);
				yellow_states[state_code] = fips_list;
			}
			else {
				yellow_states[state_code] = [fipsCode];
			}
			$(this).data("isYellow", 1);
			$(this).css("fill", "#FFF600");
		}
	});
	console.log(yellow_states);
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

	
	// var top1 = ;
	// var top2 =;
	// var top3 =;

	$('#leaving')
	.append(
		$('<div>').attr("class", "info")
		.append(
			$('<div>').attr("class", "hd").html("Outgoing")
			)
		.append(
			$('<div>').attr("class", "data").html(county_name)
			)
		.append(
			$('<div>').attr("class", "data").html(county_name)
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

	// var top1 =;
	// var top2 =;
	// var top3 =;

	$('#arriving')
	.append(
		$('<div>').attr("class", "info")
		.append(
			$('<div>').attr("class", "hd").html("Incoming")
			)
		.append(
			$('<div>').attr("class", "data").html(county_name)
			)
		.append(
			$('<div>').attr("class", "data").html(county_name)
			)
		.append(
			$('<div>').attr("class", "data").html(county_name)
			)
		);
}


// TO DO SUGGESTIONS
