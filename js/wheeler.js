// JavaScript


// Hide Membership Form

$(document).ready (function() {
	$("form").hide(); 
 });


// Show Form when Join PTA Button is Clicked

$("#joinPTA").click(function (){
	$("form").show();
	});

$("#submit").click(function(){
	$("form").hide();
    alert("THANK YOU FOR SUPPORTING WHEELER ELEMENTARY PTA");
    });

// Show Form when Birthday Shout Out Button is Clicked

$("#shoutOut").click(function (){
	$("form").show();
	});

$("#submit").click(function(){
	$("form").hide();
    alert("THANK YOU FOR SUPPORTING WHEELER ELEMENTARY PTA");
    });
