$(function  () {
  var data = {tutorials:[
  	{
  		"header":"WEEK 1 - INTRODUCTION",
  		"lessons": [ 
			{
	  			"name":"Welcome to M101",
	  			"lecture":"D_OtQYRyPvE",
	  			"quiz": "",
	  			"answer": "d7_B3jx3V_o"
  			},
  			{
	  			"name":"What is MongoDB?",
	  			"lecture":"Lfl8hdQOi6Y",
	  			"quiz": "",
	  			"answer": "h80NwJJZM-g"
  			},
  		]
  	},
  	{
  		"header":"WEEK 2 - CRUD",
  		"lessons": [ 
			{
	  			"name":"Welcome to M101",
	  			"lecture":"D_OtQYRyPvE",
	  			"quiz": "",
	  			"answer": "d7_B3jx3V_o"
  			},
  			{
	  			"name":"What is MongoDB?",
	  			"lecture":"D_OtQYRyPvE",
	  			"quiz": "",
	  			"answer": "d7_B3jx3V_o"
  			},
  		]
  	},
  	{
  		"header":"WEEK 5 - Aggregation",
  		"lessons": [ 
			{
	  			"name":"Introduction to Aggregation",
	  			"lecture":"EaEIHm3CMQM",
	  			"quiz": "",
	  			"answer": ""
  			},
  			{
	  			"name":"Simple Aggregation Example",
	  			"lecture":"T2BX-LZOYsY",
	  			"quiz": "",
	  			"answer": "Nt0cQI86G40"
  			},
  			{
	  			"name":"The Aggregation Pipeline",
	  			"lecture":"WazN2DS8s8c",
	  			"quiz": "",
	  			"answer": "mcnGfI69rRc"
  			},
  			{
	  			"name":"Simple Example Expanded",
	  			"lecture":"3lEpnMcfpCs",
	  			"quiz": "",
	  			"answer": "nr1E1qTyIHU"
  			},
  			{
	  			"name":"Compound Grouping",
	  			"lecture":"LPFVRrag2Zg",
	  			"quiz": "",
	  			"answer": "bIlwnlYBRA0"
  			},
  			{
	  			"name":"Using a document for _id",
	  			"lecture":"zoN4cj_XQzY",
	  			"quiz": "",
	  			"answer": ""
  			},
  			{
	  			"name":"Aggregation Expressions",
	  			"lecture":"L4G14MTfTgQ",
	  			"quiz": "",
	  			"answer": "kJ0k2na4ukU"
  			},
  			{
	  			"name":"Using $sum",
	  			"lecture":"oAV9tC0R8xk",
	  			"quiz": "",
	  			"answer": "ATO_s_Ah08o"
  			},
  			{
	  			"name":"Using $avg",
	  			"lecture":"7UWOK8rWf1w",
	  			"quiz": "",
	  			"answer": "tT6Jx8s9dTc"
  			},
  			{
	  			"name":"Using $addToSet",
	  			"lecture":"y2FD4R3in5U",
	  			"quiz": "",
	  			"answer": "zGcTxUQuLGE"
  			},
  			{
	  			"name":"Using $push",
	  			"lecture":"gjIVUFufx3A",
	  			"quiz": "",
	  			"answer": "hFqDvVXtm6E"
  			},
  			{
	  			"name":"Using $max and $min",
	  			"lecture":"BYoNX4trjOQ",
	  			"quiz": "",
	  			"answer": "sHCdOiCispA"
  			},
  			{
	  			"name":"Double $group stages",
	  			"lecture":"ET4ubwQTTos",
	  			"quiz": "",
	  			"answer": "J-asAAEHJ0Q"
  			},
  			{
	  			"name":"$project",
	  			"lecture":"yi-ySSNO8Ao",
	  			"quiz": "",
	  			"answer": "IGN0lXg-kJ0"
  			},
  			{
	  			"name":"$match",
	  			"lecture":"qohLRL8k0So",
	  			"quiz": "",
	  			"answer": "CHGiumXE-pU"
  			},
  			{
	  			"name":"$sort",
	  			"lecture":"TW1KByIuns4",
	  			"quiz": "",
	  			"answer": "-cghyd6AHHA"
  			},
  			{
	  			"name":"$limit and $skip",
	  			"lecture":"AdxoEzVqdtc",
	  			"quiz": "",
	  			"answer": "joRw-fqCIWA"
  			},
  			{
	  			"name":"Revisiting $first and $last",
	  			"lecture":"O1zeqAxdUgk",
	  			"quiz": "",
	  			"answer": "WBWb0ssDVeY"
  			},
  			{
	  			"name":"$unwind",
	  			"lecture":"E4aYOQPeQvI",
	  			"quiz": "",
	  			"answer": "Xfl3m7wz8ts"
  			},
  			{
	  			"name":"$unwind example",
	  			"lecture":"XiWCJr4Lqag",
	  			"quiz": "",
	  			"answer": "jAWL-BJD0tI"
  			},
  			{
	  			"name":"Double $unwind",
	  			"lecture":"sgnidsHyFeU",
	  			"quiz": "",
	  			"answer": "pziFq1oVRI4"
  			},
  			{
	  			"name":"Mapping between SQL and Aggregation",
	  			"lecture":"auL2R0XKlyM",
	  			"quiz": "",
	  			"answer": ""
  			},
  			{
	  			"name":"Some common sql examples",
	  			"lecture":"ep2gLSR6C0U",
	  			"quiz": "",
	  			"answer": ""
  			},
  			{
	  			"name":"Limitation of the Aggregation framework",
	  			"lecture":"8BQzKXI-_wE",
	  			"quiz": "",
	  			"answer": ""
  			},

  			
  			
  			
  		]
  	},
  	
  ]};
  
  var source   = $("#tutorials-template").html();
  var template = Handlebars.compile(source);
  $(".nav-list").append(template(data));


  $(".nav-list li a").click(function(){ 		
	$("#my-tab-content").empty();
	var lecture = $(this).attr("lesson-video");
	var answer = $(this).attr("answer-video");

	var tutorial_source   = $("#lesson-template").html();
	var template = Handlebars.compile(tutorial_source);
	$("#my-tab-content").append(template({"lesson-video":lecture,"answer-video":answer}));

  });
});

