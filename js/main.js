// 0 is by county, 1 is by state
var state = 0;

var inputData = [];

var county_count1_in = ["c06071", 100];
var county_count2_in = ["c48043", 20];
var county_count3_in = ["c48479", 50];
var county_count4_in = ["c51630", 10];

var county_count1_out = ["c06071", 2];
var county_count2_out = ["c48043", 50];
var county_count3_out = ["c48479", 50];
var county_count4_out = ["c51630", 7];


var incoming1 = [county_count2_in, county_count3_in, county_count4_in];
var incoming2 = [county_count1_in, county_count3_in, county_count4_in];

var outgoing1 = [county_count2_out, county_count3_out, county_count4_out];
var outgoing2 = [county_count1_out, county_count3_out, county_count4_out];

var fips1 = [incoming1, outgoing1];
var fips2 = [incoming2, outgoing2];



inputData["c06071"] = fips1;
inputData["c48043"] = fips2;


var yellow_states={};
var codetoname={};


$(document).ready(function() {


	$('.results').hide();

	console.log(inputData);

	setup();

	// TO DO
	// color counties with Hertz yellow to start
	coloryellow();

	$('.counties path').mouseover(function() {

		var county_name = $(this).attr("id");
		var fips = $(this).attr("class");
		var top1_i;
		var top2_i;
		var top3_i;
		var top1_o;
		var top2_o;
		var top3_o;

		if (typeof inputData[fips] != 'undefined') {
			top1_i = inputData[fips][0][0];
			top2_i = inputData[fips][0][1];
			top3_i = inputData[fips][0][2];

			top1_o = inputData[fips][1][0];
			top2_o = inputData[fips][1][1];
			top3_o = inputData[fips][1][2];
		}

		// $("." + top1_i[0]).css("fill", "black");

		if (state == 0) {
			$(this).css("fill", "#9A009E");

			if (typeof inputData[fips] != 'undefined') {
				$("." + top1_i[0]).css("fill", "green");
				$("." + top2_i[0]).css("fill", "green");
				$("." + top3_i[0]).css("fill", "green");

				if (top1_o[0] == top1_i[0]) {
					if (top1_o[1] - top1_i[1] > 0) {
						$("." + top1_o[0]).css("fill", "red");
					}
					else if (top1_o[1] - top1_i[1] < 0) {
						$("." + top1_o[0]).css("fill", "green");
					}
					else {
						$("." + top1_o[0]).css("fill", "orange");
					}
				}
				else if (top1_o[0] == top2_i[0]) {
					if (top1_o[1] - top2_i[1] > 0) {
						$("." + top1_o[0]).css("fill", "red");
					}
					else if (top1_o[1] - top2_i[1] < 0) {
						$("." + top1_o[0]).css("fill", "green");
					}
					else {
						$("." + top1_o[0]).css("fill", "orange");
					}
				}
				else if (top1_o[0] == top3_i[0]) {
					if (top1_o[1] - top3_i[1] > 0) {
						$("." + top1_o[0]).css("fill", "red");
					}
					else if (top1_o[1] - top3_i[1] < 0) {
						$("." + top1_o[0]).css("fill", "green");
					}
					else {
						$("." + top1_o[0]).css("fill", "orange");
					}
				}
				else {
					$("." + top1_o[0]).css("fill", "red");
				}

				if (top2_o[0] == top1_i[0]) {
					if (top2_o[1] - top1_i[1] > 0) {
						$("." + top2_o[0]).css("fill", "red");
					}
					else if (top2_o[1] - top1_i[1] < 0) {
						$("." + top2_o[0]).css("fill", "green");
					}
					else {
						$("." + top2_o[0]).css("fill", "orange");
					}
				}
				else if (top2_o[0] == top2_i[0]) {
					if (top2_o[1] - top2_i[1] > 0) {
						$("." + top2_o[0]).css("fill", "red");
					}
					else if (top2_o[1] - top2_i[1] < 0) {
						$("." + top2_o[0]).css("fill", "green");
					}
					else {
						$("." + top2_o[0]).css("fill", "orange");
					}
				}
				else if (top2_o[0] == top3_i[0]) {
					if (top2_o[1] - top3_i[1] > 0) {
						$("." + top2_o[0]).css("fill", "red");
					}
					else if (top2_o[1] - top3_i[1] < 0) {
						$("." + top2_o[0]).css("fill", "green");
					}
					else {
						$("." + top2_o[0]).css("fill", "orange");
					}
				}
				else {
					$("." + top2_o[0]).css("fill", "red");
				}

				if (top3_o[0] == top1_i[0]) {
					if (top3_o[1] - top1_i[1] > 0) {
						$("." + top3_o[0]).css("fill", "red");
					}
					else if (top3_o[1] - top1_i[1] < 0) {
						$("." + top3_o[0]).css("fill", "green");
					}
					else {
						$("." + top3_o[0]).css("fill", "orange");
					}
				}
				else if (top3_o[0] == top2_i[0]) {
					if (top3_o[1] - top2_i[1] > 0) {
						$("." + top3_o[0]).css("fill", "red");
					}
					else if (top3_o[1] - top2_i[1] < 0) {
						$("." + top3_o[0]).css("fill", "green");
					}
					else {
						$("." + top3_o[0]).css("fill", "orange");
					}
				}
				else if (top3_o[0] == top3_i[0]) {
					if (top3_o[1] - top3_i[1] > 0) {
						$("." + top3_o[0]).css("fill", "red");
					}
					else if (top3_o[1] - top3_i[1] < 0) {
						$("." + top3_o[0]).css("fill", "green");
					}
					else {
						$("." + top3_o[0]).css("fill", "orange");
					}
				}
				else {
					$("." + top3_o[0]).css("fill", "red");
				}


			}
		}

		else {
			var state_code = $(this).attr("id").split(",")[1].trim();
			$('.counties').children().each(function () {
				if ($(this).attr("id").indexOf(state_code) > -1) {
					$(this).css("fill", "#9A009E");
				}

			});
		}

		if (typeof inputData[$(this).attr("class")] != 'undefined') {
			populateResults($(this));
			$('.results').show();
		}
	});

	$('.counties path').mouseleave(function() {

		var county_name = $(this).attr("id");
		var fips = $(this).attr("class");
		var top1_i;
		var top2_i;
		var top3_i;
		var top1_o;
		var top2_o;
		var top3_o;

		if (typeof inputData[fips] != 'undefined') {
			top1_i = inputData[fips][0][0];
			top2_i = inputData[fips][0][1];
			top3_i = inputData[fips][0][2];

			top1_o = inputData[fips][1][0];
			top2_o = inputData[fips][1][1];
			top3_o = inputData[fips][1][2];
		}

		if (state == 0) {
			$(this).css("fill", "white");
			if (typeof inputData[fips] != 'undefined') {
				if($("." + top1_i[0]).data("isYellow") == 1) {
					$("." + top1_i[0]).css("fill", "#FFF600");
				}
				else {
					$("." + top1_i[0]).css("fill", "#FFF");
				}
			}
			if (typeof inputData[fips] != 'undefined') {
				if($("." + top2_i[0]).data("isYellow") == 1) {
					$("." + top2_i[0]).css("fill", "#FFF600");
				}
				else {
					$("." + top2_i[0]).css("fill", "#FFF");
				}
			}
			if (typeof inputData[fips] != 'undefined') {
				if($("." + top3_i[0]).data("isYellow") == 1) {
					$("." + top3_i[0]).css("fill", "#FFF600");
				}
				else {
					$("." + top3_i[0]).css("fill", "#FFF");
				}
			}

			if (typeof inputData[fips] != 'undefined') {
				if($("." + top1_o[0]).data("isYellow") == 1) {
					$("." + top1_o[0]).css("fill", "#FFF600");
				}
				else {
					$("." + top1_o[0]).css("fill", "#FFF");
				}
			}
			if (typeof inputData[fips] != 'undefined') {
				if($("." + top2_o[0]).data("isYellow") == 1) {
					$("." + top2_o[0]).css("fill", "#FFF600");
				}
				else {
					$("." + top2_o[0]).css("fill", "#FFF");
				}
			}
			if (typeof inputData[fips] != 'undefined') {
				if($("." + top3_o[0]).data("isYellow") == 1) {
					$("." + top3_o[0]).css("fill", "#FFF600");
				}
				else {
					$("." + top3_o[0]).css("fill", "#FFF");
				}
			}
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
	var fips = county.attr("class");

	if (typeof inputData[fips] != 'undefined') {
		var top1 = inputData[fips][1][0];
		var top2 = inputData[fips][1][1];
		var top3 = inputData[fips][1][2];
		console.log("." + top1[0]);


		$('#leaving')
		.append(
			$('<div>').attr("class", "info")
			.append(
				$('<div>').attr("class", "hd").html("Outgoing")
				)
			.append(
				$('<div>').attr("class", "data").html(codetoname[top1[0]] + " : " + top1[1])
				)
			.append(
				$('<div>').attr("class", "data").html(codetoname[top2[0]] + " : " + top2[1])
				)
			.append(
				$('<div>').attr("class", "data").html(codetoname[top3[0]] + " : " + top3[1])
				)
			);
	}


	
}

function arriving(county) {
	$('#arriving').empty();

	var county_name = county.attr("id");
	var fips = county.attr("class");

	if (typeof inputData[fips] != 'undefined') {
		var top1 = inputData[fips][0][0];
		var top2 = inputData[fips][0][1];
		var top3 = inputData[fips][0][2];

		$('#arriving')
		.append(
			$('<div>').attr("class", "info")
			.append(
				$('<div>').attr("class", "hd").html("Incoming")
				)
			.append(
				$('<div>').attr("class", "data").html(codetoname[top1[0]] + " : " + top1[1])
				)
			.append(
				$('<div>').attr("class", "data").html(codetoname[top2[0]] + " : " + top2[1])
				)
			.append(
				$('<div>').attr("class", "data").html(codetoname[top3[0]] + " : " + top3[1])
				)
			);
	}

	
}

function setup() {
	$('.counties').children().each(function () {
		codetoname[$(this).attr("class")] = $(this).attr("id");
	});

}


// TO DO SUGGESTIONS
