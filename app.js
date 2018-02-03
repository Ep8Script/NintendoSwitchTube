function getVideo(e) {
    var t = /^([a-zA-Z0-9\-\_]+){11}$/
      , n = e
      , o = n.match(t);
    o ? showVideo(o[0]) : alert("Invalid youtube link")
	vidURL = o[0];
	$.ajax({
		  url: "https://www.googleapis.com/youtube/v3/videos?id="+o[0]+"&key=AIzaSyAkEHUoEOh8NrrKvH26cT7jkXabKqb6CIg&fields=items(snippet)&part=snippet", 
		  dataType: "jsonp",
		  success: function(data){
				   document.title = data.items[0].snippet.title+" - YouTube";    
					if($(".title").length) {
						$(".title").remove();
					}
					$("<h2 class='title'>"+data.items[0].snippet.title+"</h2>").attr("title",data.items[0].snippet.title).prependTo("#ytvideo");
					$('body,html').animate({
						scrollTop: $("#custom").offset().top
					}, 200);
					$("#search-results").empty();
					$("#results").empty();
					$("#query").val("");
					$(".video-description").remove();
					var description = data.items[0].snippet.description;
					description = description.replace(/\n/g, "<br>");
					description = description.replace(/((http|https|ftp):\/\/[\w?=&.\/-;#~%-]+(?![\w\s?&.\/;#~%"=-]*>))/g, '<a href="$1">$1</a>');
					$("<p class='video-description'>"+description+"</p>").insertAfter("#ytvideo");
					document.cookie = "url="+o[0]+";path=/";
		  },
		  error: function(jqXHR, textStatus, errorThrown) {
			  alert (textStatus, + ' | ' + errorThrown);
		  }
	  });
}
function showVideo(e) {
	if($(".switch").length) {
		$(".switch").remove();
	}
	$("#custom").show();
	$("<div class='switch' style='position: relative; right: 3px;'></div>").appendTo("#ytvideo");
	$('<img style="left: 10px; height: 380px; bottom: 10px; position: relative; float: left;" src="img/joycon_left.jpg">').appendTo(".switch");
	$('<iframe width="640" height="360" src="" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>').attr("src", "https://www.youtube.com/embed/"+e+"/").appendTo(".switch");
	$('<img style="height: 380px; right: 14px; bottom: 12px; position: relative; float: right;" src="img/joycon_right.jpg">').appendTo(".switch");
}
$(document).ready(function() {
    $("#url-submit").click(function() {
        $("#videourl").val() && getVideo($("#videourl").val())
    });
	$('#query').keydown(function(event) {
		if (event.keyCode == 13) {
		  $("#search-button").click();
		  return false;
		}
	});
	$('#videourl').keydown(function(event) {
		if (event.keyCode == 13) {
			$("#url-submit").click();
			return false;
		}
	});
});
var gamepad = new Gamepad();

if (gamepad.init()) {
	var konamiCode=['DPAD_UP','DPAD_UP','DPAD_DOWN','DPAD_DOWN','DPAD_LEFT','DPAD_RIGHT','DPAD_LEFT','DPAD_RIGHT'];
	var konamiCodePosition=0;
	gamepad.bind(Gamepad.Event.BUTTON_UP, function (e) {
		var requiredKey=konamiCode[konamiCodePosition];
		if(e.control==requiredKey) {
			konamiCodePosition++;
			if(konamiCodePosition==konamiCode.length) {
				SH();
				konamiCodePosition=0;
			}
		}
		else {
			konamiCodePosition=0;
		}
	});
}

function SH() {
	$("logo-link").html('<h2 style="text-align: center; font-size: 55px;"><span id="HS" style="color: black;">Switch</span><span id="HH" style="color: orange;">Hub</span></h2>');
	$("input.get-video").attr("placeholder", "Enter Video ID");
	$("#or-search").hide();
	$(".example").html("Video ID following 'view_video.php?viewkey='");
	$("#url-submit").after('<button class="btn btn-success" id="sh-submit" type="button">Load</button>');
	$("#url-submit").hide();
	$("#url-submit").click(function() {
        $("#videourl").val() && shVideo($("#videourl").val())
    });
}

function shVideo(e) {
	$("<div class='switch' style='position: relative; right: 3px;'></div>").appendTo("#ytvideo");
	$('<img style="left: 10px; height: 380px; bottom: 10px; position: relative; float: left;" src="img/joycon_left.jpg">').appendTo(".switch");
	$('<iframe width="640" height="360" src="" frameborder="0" scrolling="no" allowfullscreen></iframe>').attr("src", "https://www.pornhub.com/embed/"+e+"/").appendTo(".switch");
	$('<img style="height: 380px; right: 14px; bottom: 12px; position: relative; float: right;" src="img/joycon_right.jpg">').appendTo(".switch");
}