var searchType, uploadPlaylist, vids, subs, nextPage;
var a = false;
var sending = false;
var loading = false;
var isPlaylist = false;
var month = new Array();
var index = 0;
var inFrame = false;
var gamepad = new Gamepad();
month[0] = "Jan";
month[1] = "Feb";
month[2] = "Mar";
month[3] = "Apr";
month[4] = "May";
month[5] = "Jun";
month[6] = "Jul";
month[7] = "Aug";
month[8] = "Sept";
month[9] = "Oct";
month[10] = "Nov";
month[11] = "Dec";
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'UA-112999876-1');
if(window.location.hash == "#inframe") {
	var inFrame = true;
}

var _0xd750=["\x41\x49\x7A\x61\x53\x79\x42\x31\x47\x44\x61\x47\x57\x71\x47\x50\x2D\x73\x4D\x72\x47\x71\x55\x79\x44\x53\x42\x30\x71\x64\x61\x57\x6D\x41\x53\x48\x6C\x4A\x59","\x41\x49\x7A\x61\x53\x79\x41\x4A\x47\x6D\x5F\x43\x6A\x44\x48\x77\x53\x59\x68\x36\x7A\x78\x77\x57\x46\x66\x44\x42\x6B\x48\x73\x73\x39\x6B\x51\x4B\x31\x38\x67","\x41\x49\x7A\x61\x53\x79\x44\x7A\x33\x53\x63\x55\x6B\x34\x62\x48\x6C\x4B\x70\x47\x68\x58\x71\x6E\x42\x4C\x77\x4F\x70\x32\x63\x73\x62\x52\x73\x73\x62\x58\x6F","\x41\x49\x7A\x61\x53\x79\x42\x6B\x6C\x68\x68\x4E\x68\x49\x65\x37\x47\x55\x37\x58\x6B\x64\x76\x67\x72\x4F\x4E\x5F\x6E\x36\x6D\x74\x54\x37\x59\x69\x56\x78\x67","\x41\x49\x7A\x61\x53\x79\x42\x35\x6D\x69\x42\x55\x4E\x57\x4C\x49\x64\x39\x38\x58\x4F\x63\x72\x72\x51\x32\x63\x32\x42\x71\x65\x31\x50\x41\x54\x69\x70\x75\x59","\x6C\x65\x6E\x67\x74\x68","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x77\x77\x77\x2E\x67\x6F\x6F\x67\x6C\x65\x61\x70\x69\x73\x2E\x63\x6F\x6D\x2F\x79\x6F\x75\x74\x75\x62\x65\x2F\x76\x33\x2F\x76\x69\x64\x65\x6F\x73\x3F\x69\x64\x3D\x66\x35\x75\x69\x6B\x35\x66\x67\x49\x61\x49\x26\x6B\x65\x79\x3D","\x26\x66\x69\x65\x6C\x64\x73\x3D\x69\x74\x65\x6D\x73\x28\x73\x6E\x69\x70\x70\x65\x74\x29\x26\x70\x61\x72\x74\x3D\x73\x6E\x69\x70\x70\x65\x74","\x6A\x73\x6F\x6E","\x70\x75\x62\x6C\x69\x73\x68\x65\x64\x41\x74","\x73\x6E\x69\x70\x70\x65\x74","\x69\x74\x65\x6D\x73","\x32\x30\x31\x36\x2D\x31\x30\x2D\x32\x30\x54\x31\x33\x3A\x35\x39\x3A\x35\x36\x2E\x30\x30\x30\x5A","\x61\x6A\x61\x78"];var keys=[_0xd750[0],_0xd750[1],_0xd750[2],_0xd750[3],_0xd750[4]];var key;function checkKey(_0x4d96x4){if(_0x4d96x4< keys[_0xd750[5]]){key= keys[_0x4d96x4];$[_0xd750[13]]({url:_0xd750[6]+ key+ _0xd750[7],dataType:_0xd750[8],success:function(_0x4d96x5){if(_0x4d96x5[_0xd750[11]][0][_0xd750[10]][_0xd750[9]]!== _0xd750[12]){checkKey(_0x4d96x4+ 1)}},error:function(){checkKey(_0x4d96x4+ 1)}})}}for(a= 1;a< 2;a++){checkKey(0)}

function getVideo(e) {
    var t = /^([a-zA-Z0-9\-\_]+){11}$/, n = e, o = n.match(t);
    if (o) {
		showVideo(o[0])
	}
	else {
		alert("Invalid YouTube Video ID");
		return false;
	}
	vidURL = o[0];
	$.ajax({
		  url: "https://www.googleapis.com/youtube/v3/videos?id="+vidURL+"&key="+key+"&part=snippet%2Cstatistics", 
		  dataType: "json",
		  success: function(data){
					document.title = data.items[0].snippet.title+" - SwitchTube";
					if($(".title").length) {
						$(".title").remove();
					}
					$("<h2 class='title'>"+data.items[0].snippet.title+"</h2>").attr("title",data.items[0].snippet.title).prependTo("#ytvideo");
					$('body,html').animate({
						scrollTop: $("#custom").offset().top
					}, 200);
					$("#search-results").empty();
					$("#results").empty();
					$(".video-description").remove();
					$(".span12 hr").remove();
					channelIcon(data.items[0].snippet.channelId);
					var timestamp = new Date(Date.parse(data.items[0].snippet.publishedAt));
					var published = "Published on "+month[timestamp.getMonth()]+" "+timestamp.getDate()+", "+timestamp.getFullYear();
					var views = parseInt(data.items[0].statistics.viewCount);
					var viewcount = numberWithCommas(views);
					$("<p class='video-description'><b>"+published+"</b></p>").insertAfter("#ytvideo");
					$("<p class='video-description views'>"+viewcount+" views</p>").insertAfter(".video-description");
					$("<hr />").insertAfter(".views");
					var description = data.items[0].snippet.description;
					description = description.replace(/\n/g, "<br>");
					description = description.replace(/((http|https|ftp):\/\/[\w?=&.\/-;#~%-]+(?![\w\s?&.\/;#~%"=-]*>))/g, '<a href="$1">$1</a>');
					$("<p class='video-description'>"+description+"</p>").insertAfter(".span12 hr");
		  },
		  error: function() {
			  alert("An error occurred");
		  }
	  });
}

function showVideo(e) {
	if(isPlaylist) {
		$("#yt-frame").attr("src", "https://www.youtube.com/embed/"+e+"/");
	}
	else {
		if($(".switch").length) {
			$(".switch").remove();
		}
		$("#custom").show();
		$("<div class='switch'></div>").appendTo("#ytvideo");
		$('<img src="img/joycon_left.jpg">').appendTo(".switch");
		$('<iframe id="yt-frame" width="640" height="360" src="" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>').attr("src", "https://www.youtube.com/embed/"+e+"/?vq=hd720").appendTo(".switch");
		$('<img src="img/joycon_right.jpg">').appendTo(".switch");
	}
}

function channelIcon(e) {
	$.ajax({
		  url: "https://content.googleapis.com/youtube/v3/channels?part=snippet&id="+e+"&key="+key, 
		  dataType: "json",
		  success: function(data) {
			  $('<p class="video-description channel-image" id="'+e+'"><a href="#"><img src="'+data.items[0].snippet.thumbnails.medium.url+'"></a><a  href="#">'+data.items[0].snippet.title+'</a></p>').insertAfter("#ytvideo");
			  $(".channel-image a").click(function() {
				 getChannel($(this).parent().attr("id"));
				 return false;
			  });
			  if(inFrame && isSwitch) {
					$(".video-description b").attr("style", "margin-left: 15px;");
			  }
		  },
	  });
}

function VID() {
	$("#videourl").val();
	var value = $("#id-type").val();
	if(value == "video") {
		isPlaylist = false;
		getVideo($("#videourl").val());
	}
	else if(value == "channel") {
		getChannel($("#videourl").val());
	}
	else if(value == "playlist") {
		getPlaylist($("#videourl").val());
	}
	return false;
}

var UAString = navigator.userAgent;
var UA = /Mozilla\/5\.0 \(Nintendo Switch; WifiWebAuthApplet\) AppleWebKit\/601\.6 \(KHTML, like Gecko\) NF\/.* NintendoBrowser\/.*/
var gUA = /Mozilla\/5\.0 \(Nintendo Switch; .*\) AppleWebKit\/601\.6 \(KHTML, like Gecko\) NF\/.* NintendoBrowser\/.*/
var isSwitch = UAString.match(gUA);
$(document).ready(function() {
	if(UAString.match(UA)) {
		alert("Sorry, SwitchTube will not properly work in this browser applet. Please open the web browser through Facebook in your Social Media Settings and navigate to this page from there.");
	}
	$.ajax({
		  type: "GET",
		  url: "https://script.google.com/macros/s/AKfycbz-XHPvv442CXLNXfiGdc3S2wb0UZD-9bTrorF9caO7GgKGNTbn/exec?responses=true", 
		  dataType: "json",
		  success: function(data) {
			  $('<p style="color: red;"><span>'+data.number+'</span> feedback messages received</p>').insertAfter(".feedback-form h3");
		  },
	  });
	  $.ajax({
		  type: "POST",
		  url: "https://script.google.com/macros/s/AKfycbz_RUzXYHSdMBRiAgfZknTHnwGUcAq008GPDUeSTVIRxzXILxkD/exec", 
		  dataType: "json"
	  });
	  $("a.trending").click(function() {
		isPlaylist = false;
		$.ajax({
			  url: "https://www.googleapis.com/youtube/v3/videos?&chart=mostPopular&regionCode=US&part=snippet&maxResults=13&key="+key, 
			  dataType: "json",
			  success: function(data) {
				  $("<div class='switch'><div class='trending'><h2>Trending <small>[<a href='#' id='hide-trending'>hide</a>]</small></h2></div></div>").prependTo("#ytvideo");
				  $("#hide-trending").click(function() {
					  $(".switch").remove();
					  $("#custom").hide();
					  return false;
				  });
				  $("#custom").show();
				  $.each(data.items, function(index, item) {
					vidTitle = "<h4>"+item.snippet.title+"</h4>";  
					vidThumburl = item.snippet.thumbnails.high.url;
					id = item.id;
					vidThumbimg = '<img id="thumb" src="'+vidThumburl+'" style="height: 300px;" alt="No image available.">';
					$('.switch .trending').append("<a onclick=\'getVideo(\""+id+"\")'>" + vidTitle + "</a><br><a href='#' onclick=\'getVideo(\""+id+"\")'>" + vidThumbimg + "</a><hr>");
				  });				
			  },
			  error: function() {
				  alert("Could not load trending videos");
			  }
		  });
		  return false;
	});
	$(".give-feedback").click(function() {
		$('.feedback-form').show();
		return false;
	});
	$("#id-type").change(function() {
		var value = this.value;
		if(value == "video") {
			$("#vidID .get-video").attr("placeholder", "Enter YouTube Video ID");
			$(".example").html('Example: <a href="#" onclick="getVideo(\'-FCYE87P5L0\')">-FCYE87P5L0</a>');
		}
		else if(value == "channel") {
			$("#vidID .get-video").attr("placeholder", "Enter YouTube Channel ID");
			$(".example").text('Example: <a href="#" onclick="getChannel(\'UCDWIvJwLJsE4LG1Atne2blQ\')">UCAKiLt--UAgXSC3aXaQzaAw</a>');
		}
		else if(value == "playlist") {
			$("#vidID .get-video").attr("placeholder", "Enter YouTube Playlist ID");
			$(".example").text("Example: PLZxWJ6CTr63bL1Vc2qB6zyG_Gad4hpB9K");
		}
	});
	$("#vidID").submit(VID);
	$("#search-yt").submit(keyWordsearch);
	$(".creator").click(function() {
		getChannel("UCAKiLt--UAgXSC3aXaQzaAw");
	});
});
function getChannel(e) {
	if(!loading) {
		loading = true;
		isPlaylist = false;
		if($("#playlist-box").length) {
			$("#playlist-box").remove();
		}
		$.ajax({
		  url: "https://content.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id="+e+"&key="+key, 
		  dataType: "json",
		  success: function(data) {
			  document.title = data.items[0].snippet.title+" - Nintendo SwitchTube";
			  if($(".title").length) {
				  $(".title").remove();
			  }
			  $("<h2 class='title'>"+data.items[0].snippet.title+"</h2>").attr("title",data.items[0].snippet.title).prependTo("#ytvideo");
			  $("<img class='title' src='"+data.items[0].snippet.thumbnails.default.url+"'>").appendTo("#ytvideo");
			  $('body, html').animate(
				{
					scrollTop: $("#custom").offset().top
				},
			  200);
			  $("#search-results").empty();
			  $("#results").empty();
			  uploadPlaylist = data.items[0].contentDetails.relatedPlaylists.uploads;
			  $(".video-description").remove();
			  var description = data.items[0].snippet.description;
			  description = description.replace(/\n/g, "<br>");
			  description = description.replace(/((http|https|ftp):\/\/[\w?=&.\/-;#~%-]+(?![\w\s?&.\/;#~%"=-]*>))/g, '<a href="$1">$1</a>');
			  $("<p class='video-description'>"+description+"</p>").appendTo("#ytvideo");
			  $("<p class='video-description' style='color: red;'>Videos: "+data.items[0].statistics.videoCount+"</p>").insertAfter(".video-description");
			  showChannel(e);
			  loading = false;
		  },
		  error: function() {
			  alert("An error occurred");
			  loading = false;
		  }
	  });
	}
}

function showChannel(e) {
	if($(".switch").length) {
		$(".switch").remove();
	}
	$("#custom").show();
	$('body,html').animate({
		scrollTop: $("#custom").offset().top
	}, 200);
	$("<div class='switch'></div>").appendTo("#ytvideo");
	$.ajax({
		  url: "https://www.googleapis.com/youtube/v3/playlistItems?playlistId="+uploadPlaylist+"&key="+key+"&part=snippet&maxResults=30", 
		  dataType: "json",
		  success: function(data) {
			  vids = 0;
			  nextPage = data.nextPageToken;
			  $('<br><table class="uploads" cellpadding="3"><tbody class="uploads">						<tr>').appendTo(".switch");
			  $.each(data.items, function(index, items) {
				  $("<td><div class='video'><a onclick='getVideo(\""+items.snippet.resourceId.videoId+"\")'><img class='channel-video-thumb' src='"+items.snippet.thumbnails.medium.url+"'></a><br><a class='channel-video-title' href='#' onclick='getVideo(\""+items.snippet.resourceId.videoId+"\")'>"+items.snippet.title+"</a></div></td>").appendTo("tbody.uploads tr:last-child"); 
				  vids++;
				  if(vids == 4) {
					  vids = 0;
					  $("<tr></tr>").insertAfter("tbody.uploads tr:last-child");
				  }
			  });
			  if(nextPage !== undefined) {
				  $('<input class="btn btn-success" id="show-more" type="submit" value="Show more">').appendTo(".switch");
				  $("#show-more").click(function() {
					  $(this).remove();
					  showMore();
				  });
			  }
		  },
		  error: function() {
			  alert("An error occurred");
		  }
	  });
}

function getPlaylist(e) {
	$("#search-results").empty();
	$("#results").empty();
	if(!isPlaylist) {
		if($(".switch").length) {
			$(".switch").remove();
		}
		$("<div class='switch'></div>").appendTo("#ytvideo");
		if(!inFrame) {
			$('<img src="img/joycon_left.jpg">').appendTo(".switch");
		}
		$('<iframe id="yt-frame" width="640" height="360" src="" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>').appendTo(".switch");
		if(!inFrame) {
			$('<img src="img/joycon_right.jpg">').appendTo(".switch");
		}
	}
	$("#custom").show();
	$(".switch").attr("style", "right: 150px;");
	$('body,html').animate({
		scrollTop: $("#custom").offset().top
	}, 200);
	$.ajax({
		  url: "https://www.googleapis.com/youtube/v3/playlistItems?playlistId="+e+"&key="+key+"&part=snippet&maxResults=50", 
		  dataType: "json",
		  success: function(data) {
			  var vid = 0;
			  var extra = "";
			  nextPage = data.nextPageToken;
			  isPlaylist = true;
			  getVideo(data.items[0].snippet.resourceId.videoId);
			  if(inFrame) {
				  extra = "class=\"inFrame\" ";
			  }
			  $('<div '+extra+'id="playlist-box"><table class="playlist" cellpadding="3"><tbody class="playlist">').appendTo(".switch");
			  $.each(data.items, function(index, items) {
				  $("<tr><td><div class='video'><a onclick='getVideo(\""+items.snippet.resourceId.videoId+"\")'><img class='channel-video-thumb' src='"+items.snippet.thumbnails.medium.url+"'></a><br><a class='channel-video-title' href='#' onclick='getVideo(\""+items.snippet.resourceId.videoId+"\")'>"+items.snippet.title+"</a></div></td></tr>").appendTo("tbody.playlist");
				  $("tbody.playlist a").click(function() {
					  $("tbody.playlist tr.selected").removeClass("selected");
					  $(this).closest("tr").addClass("selected");
				  });
				  if(vid == 0) {
					  $("tbody.playlist tr:first-of-type").addClass("selected");
				  }
				  vid++;
			  });
		  },
		  error: function() {
			  alert("An error occurred");
		  }
	  });
}

function showMore() {
	$.ajax({
		  url: "https://www.googleapis.com/youtube/v3/playlistItems?playlistId="+uploadPlaylist+"&key="+key+"&part=snippet&maxResults=30&pageToken="+nextPage, 
		  dataType: "json",
		  success: function(data) {
			  nextPage = data.nextPageToken;
			  $.each(data.items, function(index, items) {
				  $("<td><div class='video'><a href='#' onclick='getVideo(\""+items.snippet.resourceId.videoId+"\")'><img class='channel-video-thumb' src='"+items.snippet.thumbnails.medium.url+"'></a><br><a class='channel-video-title' href='#' onclick='getVideo(\""+items.snippet.resourceId.videoId+"\")'>"+items.snippet.title+"</a></div></td>").appendTo("tbody.uploads tr:last-child"); 
				  vids++;
				  if(vids == 4) {
					  vids = 0;
					  $("<tr></tr>").insertAfter("tbody.uploads tr:last-child");
				  }
			  });
			  if(nextPage !== undefined) {
				  $('<input class="btn btn-success" id="show-more" type="submit" value="Show more">').appendTo(".switch");
				  $("#show-more").click(function() {
					  $(this).remove();
					  showMore();
				  });
			  }
		  },
		  error: function() {
			  alert("You have reached the maximum number of videos.");
		  }
	  });
}

function keyWordsearch(){
	searchType = $("#search-type").val();
	gapi.client.setApiKey(key);
	gapi.client.setToken(clientToken);
	gapi.client.load('youtube', 'v3', function() {
		makeRequest();
	});
	return false;
}

function makeRequest() {
	var q = $('#query').val();
	if(q == "") {
		alert("Please enter a search query.");
		return false;
	}
	var max;
	if(searchType == "video" && searchType == "all") {
		max = 20;
	}
	else if(searchType == "all") {
		searchType == "";
		max = 18;
	}
	else {
		max = 12;
	}
	var request = gapi.client.youtube.search.list({
			q: q,
			type: searchType,
			part: 'snippet', 
			maxResults: max
	});
	request.execute(function(response)  {                                                             
			$('#results').empty()
			$("#search-results").html("Search Results");
			var srchItems = response.result.items;
			var kind;
			$.each(srchItems, function(index, item) {
				if(searchType == "all") {
					kindAPI = item.id.kind;
					kind = kindAPI.replace("youtube#", "");
				}
				else {
					kind = searchType;
				}
				if(kind == "video") {
					vidTitle = "<h4>"+item.snippet.title+"</h4>";  
					vidThumburl = item.snippet.thumbnails.high.url;
					id = item.id.videoId;
					vidThumbimg = '<img id="thumb" src="'+vidThumburl+'" alt="No image available.">';
					$('#results').append("<div class='result' id='"+id+"'><a class='get-video'>" + vidTitle + "</a><h4>Uploaded by <a href='#' onclick=\"getChannel('"+item.snippet.channelId+"')\">"+item.snippet.channelTitle+"</a></h4><br><a class='get-video' href='#'>" + vidThumbimg + "</a></div><hr>");
					$("#results .result:last-of-type .get-video").click(function() {
						isPlaylist = false;
						getVideo($(this).parent().attr("id"));
						return false;
					});
				}
				else if(kind == "channel") {
					channelName = item.snippet.title;  
					channelImage = item.snippet.thumbnails.default.url;
					id = item.id.channelId;
					channelThumb = '<img class="channel-thumb" src="'+channelImage+'" alt="'+channelName+'">';
					$('#results').append("<div class='result' id='"+id+"'><a class='get-channel' href='#'><span class='channel-title'>" + channelName + "</span><br>" + channelThumb + "</a></div><hr>");
					$("#results .result:last-of-type .get-channel").click(function() {
						getChannel($(this).parent().attr("id"));
						return false;
					});
				}
				else if(kind == "playlist") {
					playlistTitle = "<h4>Playlist: "+item.snippet.title+"</h4>";  
					PLImage = item.snippet.thumbnails.high.url;
					id = item.id.playlistId;
					PLThumb = '<img id="thumb" src="'+PLImage+'" alt="No image available.">';
					$('#results').append("<div class='result' id='"+id+"'><a class='get-playlist'>" + playlistTitle + "</a><h4>Uploaded by <a href='#' onclick=\"getChannel('"+item.snippet.channelId+"')\">"+item.snippet.channelTitle+"</a></h4><br><a class='get-playlist' href='#'>" + PLThumb + "</a></div><hr>");
					$("#results .result:last-of-type .get-playlist").click(function() {
						getPlaylist($(this).parent().attr("id"));
						return false;
					});
				}
			})  
	})  
}

function myChannel() {
	$.ajax({
		  url: "https://content.googleapis.com/youtube/v3/channels?part=snippet&mine=true&access_token="+clientToken, 
		  dataType: "json",
		  success: function(data) {
			  getChannel(data.items[0].id);
		  },
	  });
}

function loadSubscriptions(e) {
	$("#subscriptions").show();
	$.ajax({
		  url: "https://www.googleapis.com/youtube/v3/subscriptions?mine=true&access_token="+clientToken+"&part=snippet&maxResults=50", 
		  dataType: "json",
		  success: function(data) {
			  subs = 0;
			  $('<table class="subscriptions" cellpadding="3"><tbody class="subscriptions"><tr>').appendTo("#subscriptions");
			  $.each(data.items, function(index, items) {
				  $("<td><div class='sub-channel'><a onclick='getChannel(\""+items.snippet.resourceId.channelId+"\")'><img class='channel-thumb' src='"+items.snippet.thumbnails.medium.url+"'></a><br><a class='sub-label' href='#' onclick='getChannel(\""+items.snippet.resourceId.channelId+"\")'>"+items.snippet.title+"</a></div></td>").appendTo("tbody.subscriptions tr:last-child");
				  subs++;
				  if(subs == 4) {
					  subs = 0;
					  $("<tr></tr>").insertAfter("tbody.subscriptions tr:last-child");
				  }
			  });
		  },
		  error: function() {
			  alert("Could not load subscriptions");
		  }
	  });
}

function sendFeedback() {
	if(!sending) {
		sending = true;
		var name = $("#feedback-name").val();
		var message = $("#feedback-message").val();
		if(name == "") {
			alert("Please enter your name.");
		}
		else if(message == "") {
			alert("Please enter a feedback message.");
		}
		else {
			$.ajax({
				type: "POST",
				dataType: "json",
				url: "https://script.google.com/macros/s/AKfycbz-XHPvv442CXLNXfiGdc3S2wb0UZD-9bTrorF9caO7GgKGNTbn/exec", 
				data: {"name": name, "message": message},
				success: function() {
					alert("Feedback successfully sent!");
					$("#feedback-name").val("");
					$("#feedback-message").val("");
					$(".feedback-form p span").text(parseInt($(".feedback-form p span").text())+1);
					$(".feedback-form").hide();
				}
			});
		}
	}
	else {
		alert("Please wait for the feedback to send.");
		return false;
	}
	sending = false;
	return false;
}

const numberWithCommas = (x) => {
  var parts = x.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
}

var _0x9496=["\x69\x6E\x69\x74","\x44\x50\x41\x44\x5F\x55\x50","\x44\x50\x41\x44\x5F\x44\x4F\x57\x4E","\x44\x50\x41\x44\x5F\x4C\x45\x46\x54","\x44\x50\x41\x44\x5F\x52\x49\x47\x48\x54","\x45\x76\x65\x6E\x74","\x63\x6F\x6E\x74\x72\x6F\x6C","\x6C\x65\x6E\x67\x74\x68","\x62\x69\x6E\x64","\x3C\x68\x32\x20\x73\x74\x79\x6C\x65\x3D\x22\x74\x65\x78\x74\x2D\x61\x6C\x69\x67\x6E\x3A\x20\x63\x65\x6E\x74\x65\x72\x3B\x20\x66\x6F\x6E\x74\x2D\x73\x69\x7A\x65\x3A\x20\x35\x35\x70\x78\x3B\x22\x3E\x3C\x73\x70\x61\x6E\x20\x69\x64\x3D\x22\x48\x53\x22\x20\x73\x74\x79\x6C\x65\x3D\x22\x63\x6F\x6C\x6F\x72\x3A\x20\x62\x6C\x61\x63\x6B\x3B\x22\x3E\x53\x77\x69\x74\x63\x68\x3C\x2F\x73\x70\x61\x6E\x3E\x3C\x73\x70\x61\x6E\x20\x69\x64\x3D\x22\x48\x48\x22\x20\x73\x74\x79\x6C\x65\x3D\x22\x63\x6F\x6C\x6F\x72\x3A\x20\x6F\x72\x61\x6E\x67\x65\x3B\x22\x3E\x48\x75\x62\x3C\x2F\x73\x70\x61\x6E\x3E\x3C\x2F\x68\x32\x3E","\x68\x74\x6D\x6C","\x23\x6C\x6F\x67\x6F\x2D\x6C\x69\x6E\x6B","\x70\x6C\x61\x63\x65\x68\x6F\x6C\x64\x65\x72","\x45\x6E\x74\x65\x72\x20\x56\x69\x64\x65\x6F\x20\x49\x44","\x61\x74\x74\x72","\x69\x6E\x70\x75\x74\x2E\x67\x65\x74\x2D\x76\x69\x64\x65\x6F","\x56\x69\x64\x65\x6F\x20\x49\x44\x20\x66\x6F\x6C\x6C\x6F\x77\x69\x6E\x67\x20\x27\x76\x69\x65\x77\x5F\x76\x69\x64\x65\x6F\x2E\x70\x68\x70\x3F\x76\x69\x65\x77\x6B\x65\x79\x3D\x27","\x2E\x65\x78\x61\x6D\x70\x6C\x65","\x3C\x69\x6E\x70\x75\x74\x20\x63\x6C\x61\x73\x73\x3D\x22\x62\x74\x6E\x20\x62\x74\x6E\x2D\x73\x75\x63\x63\x65\x73\x73\x22\x20\x69\x64\x3D\x22\x73\x68\x2D\x73\x75\x62\x6D\x69\x74\x22\x20\x74\x79\x70\x65\x3D\x22\x73\x75\x62\x6D\x69\x74\x22\x20\x76\x61\x6C\x75\x65\x3D\x22\x4C\x6F\x61\x64\x22\x20\x2F\x3E","\x61\x66\x74\x65\x72","\x23\x75\x72\x6C\x2D\x73\x75\x62\x6D\x69\x74","\x6F\x6E\x73\x75\x62\x6D\x69\x74","\x72\x65\x74\x75\x72\x6E\x20\x53\x48\x53\x75\x62\x6D\x69\x74\x28\x29","\x23\x76\x69\x64\x49\x44","\x68\x69\x64\x65","\x3C\x69\x6E\x70\x75\x74\x20\x69\x64\x3D\x22\x71\x75\x65\x72\x79\x22\x20\x74\x79\x70\x65\x3D\x22\x74\x65\x78\x74\x22\x20\x70\x6C\x61\x63\x65\x68\x6F\x6C\x64\x65\x72\x3D\x22\x53\x65\x61\x72\x63\x68\x22\x20\x61\x75\x74\x6F\x63\x6F\x6D\x70\x6C\x65\x74\x65\x3D\x22\x6F\x66\x66\x22\x3E\x3C\x69\x6E\x70\x75\x74\x20\x63\x6C\x61\x73\x73\x3D\x22\x62\x74\x6E\x20\x62\x74\x6E\x2D\x73\x75\x63\x63\x65\x73\x73\x22\x20\x69\x64\x3D\x22\x53\x48\x53\x65\x61\x72\x63\x68\x22\x20\x74\x79\x70\x65\x3D\x22\x73\x75\x62\x6D\x69\x74\x22\x20\x76\x61\x6C\x75\x65\x3D\x22\x53\x65\x61\x72\x63\x68\x22\x3E","\x23\x6F\x72\x2D\x73\x65\x61\x72\x63\x68\x20\x6C\x61\x62\x65\x6C","\x23\x73\x65\x61\x72\x63\x68\x2D\x62\x75\x74\x74\x6F\x6E","\x65\x6D\x70\x74\x79","\x23\x73\x65\x61\x72\x63\x68\x2D\x72\x65\x73\x75\x6C\x74\x73","\x23\x72\x65\x73\x75\x6C\x74\x73","","\x76\x61\x6C","\x23\x71\x75\x65\x72\x79","\x63\x6C\x69\x63\x6B","\x23\x53\x48\x53\x65\x61\x72\x63\x68","\x2E\x74\x69\x74\x6C\x65","\x72\x65\x6D\x6F\x76\x65","\x2E\x76\x69\x64\x65\x6F\x2D\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E","\x2E\x73\x77\x69\x74\x63\x68","\x2E\x72\x65\x6D\x6F\x76\x65","\x23\x73\x65\x61\x72\x63\x68\x2D\x74\x79\x70\x65","\x23\x76\x69\x64\x65\x6F\x75\x72\x6C","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x70\x72\x6F\x78\x79\x2E\x68\x61\x63\x6B\x65\x72\x79\x6F\x75\x2E\x63\x6F\x6D\x2F\x3F\x72\x65\x71\x55\x72\x6C\x3D","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x77\x77\x77\x2E\x70\x6F\x72\x6E\x68\x75\x62\x2E\x63\x6F\x6D\x2F\x77\x65\x62\x6D\x61\x73\x74\x65\x72\x73\x2F\x73\x65\x61\x72\x63\x68\x3F\x73\x65\x61\x72\x63\x68\x3D","\x6A\x73\x6F\x6E","\x47\x45\x54","\x63\x6F\x64\x65","\x32\x30\x30\x31","\x3C\x68\x34\x3E","\x74\x69\x74\x6C\x65","\x76\x69\x64\x65\x6F\x73","\x3C\x2F\x68\x34\x3E","\x74\x68\x75\x6D\x62","\x76\x69\x64\x65\x6F\x5F\x69\x64","\x3C\x69\x6D\x67\x20\x69\x64\x3D\x22\x74\x68\x75\x6D\x62\x22\x20\x73\x72\x63\x3D\x22","\x22\x20\x61\x6C\x74\x3D\x22\x4E\x6F\x20\x20\x49\x6D\x61\x67\x65\x20\x41\x76\x61\x69\x6C\x61\x62\x6C\x65\x2E\x22\x3E","\x3C\x61\x20\x6F\x6E\x63\x6C\x69\x63\x6B\x3D\x27\x73\x68\x56\x69\x64\x65\x6F\x28\x22","\x22\x29\x27\x3E","\x3C\x2F\x61\x3E\x3C\x62\x72\x3E\x3C\x61\x20\x68\x72\x65\x66\x3D\x27\x23\x27\x20\x6F\x6E\x63\x6C\x69\x63\x6B\x3D\x27\x73\x68\x56\x69\x64\x65\x6F\x28\x22","\x3C\x2F\x61\x3E\x3C\x68\x72\x3E","\x61\x70\x70\x65\x6E\x64","\x61\x6A\x61\x78","\x74\x6F\x70","\x6F\x66\x66\x73\x65\x74","\x23\x63\x75\x73\x74\x6F\x6D","\x61\x6E\x69\x6D\x61\x74\x65","\x62\x6F\x64\x79\x2C\x68\x74\x6D\x6C","\x73\x68\x6F\x77","\x23\x79\x74\x76\x69\x64\x65\x6F","\x61\x70\x70\x65\x6E\x64\x54\x6F","\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x27\x73\x77\x69\x74\x63\x68\x27\x20\x73\x74\x79\x6C\x65\x3D\x27\x70\x6F\x73\x69\x74\x69\x6F\x6E\x3A\x20\x72\x65\x6C\x61\x74\x69\x76\x65\x3B\x20\x72\x69\x67\x68\x74\x3A\x20\x33\x70\x78\x3B\x27\x3E\x3C\x2F\x64\x69\x76\x3E","\x3C\x69\x6D\x67\x20\x73\x74\x79\x6C\x65\x3D\x22\x6C\x65\x66\x74\x3A\x20\x31\x30\x70\x78\x3B\x20\x68\x65\x69\x67\x68\x74\x3A\x20\x33\x38\x30\x70\x78\x3B\x20\x62\x6F\x74\x74\x6F\x6D\x3A\x20\x31\x30\x70\x78\x3B\x20\x70\x6F\x73\x69\x74\x69\x6F\x6E\x3A\x20\x72\x65\x6C\x61\x74\x69\x76\x65\x3B\x20\x66\x6C\x6F\x61\x74\x3A\x20\x6C\x65\x66\x74\x3B\x22\x20\x73\x72\x63\x3D\x22\x69\x6D\x67\x2F\x6A\x6F\x79\x63\x6F\x6E\x5F\x6C\x65\x66\x74\x2E\x6A\x70\x67\x22\x3E","\x73\x72\x63","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x77\x77\x77\x2E\x70\x6F\x72\x6E\x68\x75\x62\x2E\x63\x6F\x6D\x2F\x65\x6D\x62\x65\x64\x2F","\x2F","\x3C\x69\x66\x72\x61\x6D\x65\x20\x77\x69\x64\x74\x68\x3D\x22\x36\x34\x30\x22\x20\x68\x65\x69\x67\x68\x74\x3D\x22\x33\x36\x30\x22\x20\x73\x72\x63\x3D\x22\x22\x20\x66\x72\x61\x6D\x65\x62\x6F\x72\x64\x65\x72\x3D\x22\x30\x22\x20\x73\x63\x72\x6F\x6C\x6C\x69\x6E\x67\x3D\x22\x6E\x6F\x22\x20\x61\x6C\x6C\x6F\x77\x66\x75\x6C\x6C\x73\x63\x72\x65\x65\x6E\x3E\x3C\x2F\x69\x66\x72\x61\x6D\x65\x3E","\x3C\x69\x6D\x67\x20\x73\x74\x79\x6C\x65\x3D\x22\x68\x65\x69\x67\x68\x74\x3A\x20\x33\x38\x30\x70\x78\x3B\x20\x72\x69\x67\x68\x74\x3A\x20\x31\x34\x70\x78\x3B\x20\x62\x6F\x74\x74\x6F\x6D\x3A\x20\x31\x32\x70\x78\x3B\x20\x70\x6F\x73\x69\x74\x69\x6F\x6E\x3A\x20\x72\x65\x6C\x61\x74\x69\x76\x65\x3B\x20\x66\x6C\x6F\x61\x74\x3A\x20\x72\x69\x67\x68\x74\x3B\x22\x20\x73\x72\x63\x3D\x22\x69\x6D\x67\x2F\x6A\x6F\x79\x63\x6F\x6E\x5F\x72\x69\x67\x68\x74\x2E\x6A\x70\x67\x22\x3E"];var done=false;if(gamepad[_0x9496[0]]()){var konamiCode=[_0x9496[1],_0x9496[1],_0x9496[2],_0x9496[2],_0x9496[3],_0x9496[4],_0x9496[3],_0x9496[4]];var konamiCodePosition=0;gamepad[_0x9496[8]](Gamepad[_0x9496[5]].BUTTON_UP,function(_0xa8b1x4){var _0xa8b1x5=konamiCode[konamiCodePosition];if(_0xa8b1x4[_0x9496[6]]== _0xa8b1x5&&  !done){konamiCodePosition++;if(konamiCodePosition== konamiCode[_0x9496[7]]){SH();konamiCodePosition= 0}}else {konamiCodePosition= 0}})};function SH(){$(_0x9496[11])[_0x9496[10]](_0x9496[9]);$(_0x9496[15])[_0x9496[14]](_0x9496[12],_0x9496[13]);$(_0x9496[17])[_0x9496[10]](_0x9496[16]);$(_0x9496[20])[_0x9496[19]](_0x9496[18]);$(_0x9496[23])[_0x9496[14]](_0x9496[21],_0x9496[22]);$(_0x9496[20])[_0x9496[24]]();$(_0x9496[26])[_0x9496[10]](_0x9496[25]);$(_0x9496[27])[_0x9496[24]]();$(_0x9496[29])[_0x9496[28]]();$(_0x9496[30])[_0x9496[28]]();$(_0x9496[33])[_0x9496[32]](_0x9496[31]);$(_0x9496[35])[_0x9496[34]](function(){SHSearch()});if($(_0x9496[36])[_0x9496[7]]){$(_0x9496[36])[_0x9496[37]]()};$(_0x9496[38])[_0x9496[37]]();if($(_0x9496[39])[_0x9496[7]]){$(_0x9496[39])[_0x9496[37]]()};$(_0x9496[40])[_0x9496[37]]();$(_0x9496[41])[_0x9496[37]]();done= true}function SHSubmit(){$(_0x9496[42])[_0x9496[32]]();shVideo($(_0x9496[42])[_0x9496[32]]());return false}function SHSearch(){var _0xa8b1x9=$(_0x9496[33])[_0x9496[32]]();$[_0x9496[62]]({url:_0x9496[43]+ encodeURI(_0x9496[44]+ _0xa8b1x9),dataType:_0x9496[45],method:_0x9496[46],success:function(_0xa8b1xa){if(_0xa8b1xa[_0x9496[47]]!== _0x9496[48]){for(i= 0;i< 24;i++){vidTitle= _0x9496[49]+ _0xa8b1xa[_0x9496[51]][i][_0x9496[50]]+ _0x9496[52];vidThumburl= _0xa8b1xa[_0x9496[51]][i][_0x9496[53]];id= _0xa8b1xa[_0x9496[51]][i][_0x9496[54]];vidThumbimg= _0x9496[55]+ vidThumburl+ _0x9496[56];$(_0x9496[30])[_0x9496[61]](_0x9496[57]+ id+ _0x9496[58]+ vidTitle+ _0x9496[59]+ id+ _0x9496[58]+ vidThumbimg+ _0x9496[60])}}}})}function shVideo(_0xa8b1x4){$(_0x9496[67])[_0x9496[66]]({scrollTop:$(_0x9496[65])[_0x9496[64]]()[_0x9496[63]]},200);$(_0x9496[29])[_0x9496[28]]();$(_0x9496[30])[_0x9496[28]]();$(_0x9496[33])[_0x9496[32]](_0x9496[31]);if($(_0x9496[36])[_0x9496[7]]){$(_0x9496[36])[_0x9496[37]]()};$(_0x9496[38])[_0x9496[37]]();if($(_0x9496[39])[_0x9496[7]]){$(_0x9496[39])[_0x9496[37]]()};$(_0x9496[65])[_0x9496[68]]();$(_0x9496[71])[_0x9496[70]](_0x9496[69]);$(_0x9496[72])[_0x9496[70]](_0x9496[39]);$(_0x9496[76])[_0x9496[14]](_0x9496[73],_0x9496[74]+ _0xa8b1x4+ _0x9496[75])[_0x9496[70]](_0x9496[39]);$(_0x9496[77])[_0x9496[70]](_0x9496[39])}