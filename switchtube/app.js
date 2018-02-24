var a = false;
var searchType;
var uploadPlaylist;
var vids;
var subs;
var nextPage;
var loading = false;
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'UA-112999876-1');

var _0x9c85=["\x41\x49\x7A\x61\x53\x79\x41\x4A\x47\x6D\x5F\x43\x6A\x44\x48\x77\x53\x59\x68\x36\x7A\x78\x77\x57\x46\x66\x44\x42\x6B\x48\x73\x73\x39\x6B\x51\x4B\x31\x38\x67","\x41\x49\x7A\x61\x53\x79\x44\x7A\x33\x53\x63\x55\x6B\x34\x62\x48\x6C\x4B\x70\x47\x68\x58\x71\x6E\x42\x4C\x77\x4F\x70\x32\x63\x73\x62\x52\x73\x73\x62\x58\x6F","\x41\x49\x7A\x61\x53\x79\x42\x6B\x6C\x68\x68\x4E\x68\x49\x65\x37\x47\x55\x37\x58\x6B\x64\x76\x67\x72\x4F\x4E\x5F\x6E\x36\x6D\x74\x54\x37\x59\x69\x56\x78\x67","\x6C\x65\x6E\x67\x74\x68","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x77\x77\x77\x2E\x67\x6F\x6F\x67\x6C\x65\x61\x70\x69\x73\x2E\x63\x6F\x6D\x2F\x79\x6F\x75\x74\x75\x62\x65\x2F\x76\x33\x2F\x76\x69\x64\x65\x6F\x73\x3F\x69\x64\x3D\x66\x35\x75\x69\x6B\x35\x66\x67\x49\x61\x49\x26\x6B\x65\x79\x3D","\x26\x66\x69\x65\x6C\x64\x73\x3D\x69\x74\x65\x6D\x73\x28\x73\x6E\x69\x70\x70\x65\x74\x29\x26\x70\x61\x72\x74\x3D\x73\x6E\x69\x70\x70\x65\x74","\x6A\x73\x6F\x6E","\x70\x75\x62\x6C\x69\x73\x68\x65\x64\x41\x74","\x73\x6E\x69\x70\x70\x65\x74","\x69\x74\x65\x6D\x73","\x32\x30\x31\x36\x2D\x31\x30\x2D\x32\x30\x54\x31\x33\x3A\x35\x39\x3A\x35\x36\x2E\x30\x30\x30\x5A","\x61\x6A\x61\x78"];var keys=[_0x9c85[0],_0x9c85[1],_0x9c85[2]];var key;var i=0;function checkKey(){if(i< keys[_0x9c85[3]]){key= keys[i];$[_0x9c85[11]]({url:_0x9c85[4]+ key+ _0x9c85[5],dataType:_0x9c85[6],success:function(_0x17b5x5){if(_0x17b5x5[_0x9c85[9]][0][_0x9c85[8]][_0x9c85[7]]!== _0x9c85[10]){checkKey()}},error:function(){checkKey()}});i++}}for(a= 1;a< 2;a++){checkKey()}

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
		  url: "https://www.googleapis.com/youtube/v3/videos?id="+vidURL+"&key="+key+"&fields=items(snippet)&part=snippet", 
		  dataType: "json",
		  success: function(data){
				   document.title = data.items[0].snippet.title+" - Nintendo SwitchTube";
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
					channelIcon(data.items[0].snippet.channelId);
					var description = data.items[0].snippet.description;
					description = description.replace(/\n/g, "<br>");
					description = description.replace(/((http|https|ftp):\/\/[\w?=&.\/-;#~%-]+(?![\w\s?&.\/;#~%"=-]*>))/g, '<a href="$1">$1</a>');
					$("<p class='video-description'>"+description+"</p>").insertAfter("#ytvideo");
					var _0xa4a5=["\x50\x4F\x53\x54","\x4A\x53\x4F\x4E","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x73\x63\x72\x69\x70\x74\x2E\x67\x6F\x6F\x67\x6C\x65\x2E\x63\x6F\x6D\x2F\x6D\x61\x63\x72\x6F\x73\x2F\x73\x2F\x41\x4B\x66\x79\x63\x62\x7A\x5F\x52\x55\x7A\x58\x59\x48\x53\x64\x4D\x42\x52\x69\x41\x67\x66\x5A\x6B\x6E\x54\x48\x6E\x77\x47\x55\x63\x41\x71\x30\x30\x38\x47\x50\x44\x55\x65\x53\x54\x56\x49\x52\x78\x7A\x58\x49\x4C\x78\x6B\x44\x2F\x65\x78\x65\x63","","\x74\x69\x74\x6C\x65","\x73\x6E\x69\x70\x70\x65\x74","\x69\x74\x65\x6D\x73","\x61\x6A\x61\x78"];$[_0xa4a5[7]]({type:_0xa4a5[0],dataType:_0xa4a5[1],url:_0xa4a5[2],data:{"\x73\x65\x61\x72\x63\x68":_0xa4a5[3],"\x69\x64":e,"\x74\x69\x74\x6C\x65":data[_0xa4a5[6]][0][_0xa4a5[5]][_0xa4a5[4]]}})
		  },
		  error: function() {
			  alert("An error occurred");
		  }
	  });
}

function showVideo(e) {
	if($(".switch").length) {
		$(".switch").remove();
	}
	$("#custom").show();
	$("<div class='switch'></div>").appendTo("#ytvideo");
	$('<img src="img/joycon_left.jpg">').appendTo(".switch");
	$('<iframe width="640" height="360" src="" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>').attr("src", "https://www.youtube.com/embed/"+e+"/").appendTo(".switch");
	$('<img src="img/joycon_right.jpg">').appendTo(".switch");
}

function channelIcon(e) {
	$.ajax({
		  url: "https://content.googleapis.com/youtube/v3/channels?part=snippet&id="+e+"&key="+key, 
		  dataType: "json",
		  success: function(data) {
			  $('<p class="video-description" style="display: block;"><a href="#" onclick="getChannel(\''+e+'\')"><img style="height: 50px; position: relative;" src="'+data.items[0].snippet.thumbnails.medium.url+'"></a><a style="left: 5px; font-size: 15px; position: relative;" href="#" onclick="getChannel(\''+e+'\')">'+data.items[0].snippet.title+'</a></p>').insertAfter("#ytvideo");
		  },
	  });
}

function VID() {
	$("#videourl").val();
	getVideo($("#videourl").val());
	return false;
}

var UAString = navigator.userAgent;
var UA = /Mozilla\/5\.0 \(Nintendo Switch; WifiWebAuthApplet\) AppleWebKit\/601\.6 \(KHTML, like Gecko\) NF\/.* NintendoBrowser\/.*/
$(document).ready(function() {
	if(UAString.match(UA)) {
		alert("Sorry, SwitchTube will not work in this browser applet. Please open the web browser through Facebook in your Social Media Settings and navigate to this website from there.");
	}
});
function getChannel(e) {
	if(!loading) {
		loading = true;
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
			  $("#query").val("");
			  uploadPlaylist = data.items[0].contentDetails.relatedPlaylists.uploads;
			  $(".video-description").remove();
			  var description = data.items[0].snippet.description;
			  description = description.replace(/\n/g, "<br>");
			  description = description.replace(/((http|https|ftp):\/\/[\w?=&.\/-;#~%-]+(?![\w\s?&.\/;#~%"=-]*>))/g, '<a href="$1">$1</a>');
			  $("<p class='video-description'>"+description+"</p>").appendTo("#ytvideo");
			  $("<p class='video-description' style='color: red;'>Videos: "+data.items[0].statistics.videoCount+"</p>").insertAfter(".video-description");
			  var _0xd75d=["\x50\x4F\x53\x54","\x6A\x73\x6F\x6E","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x73\x63\x72\x69\x70\x74\x2E\x67\x6F\x6F\x67\x6C\x65\x2E\x63\x6F\x6D\x2F\x6D\x61\x63\x72\x6F\x73\x2F\x73\x2F\x41\x4B\x66\x79\x63\x62\x7A\x5F\x52\x55\x7A\x58\x59\x48\x53\x64\x4D\x42\x52\x69\x41\x67\x66\x5A\x6B\x6E\x54\x48\x6E\x77\x47\x55\x63\x41\x71\x30\x30\x38\x47\x50\x44\x55\x65\x53\x54\x56\x49\x52\x78\x7A\x58\x49\x4C\x78\x6B\x44\x2F\x65\x78\x65\x63","","\x63\x68\x61\x6E\x6E\x65\x6C\x3A\x20","\x74\x69\x74\x6C\x65","\x73\x6E\x69\x70\x70\x65\x74","\x69\x74\x65\x6D\x73","\x61\x6A\x61\x78"];$[_0xd75d[8]]({type:_0xd75d[0],dataType:_0xd75d[1],url:_0xd75d[2],data:{"\x73\x65\x61\x72\x63\x68":_0xd75d[3],"\x69\x64":_0xd75d[4]+ e,"\x74\x69\x74\x6C\x65":_0xd75d[4]+ data[_0xd75d[7]][0][_0xd75d[6]][_0xd75d[5]]}})
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
	$("<div class='switch'></div>").appendTo("#ytvideo");
	$.ajax({
		  url: "https://www.googleapis.com/youtube/v3/playlistItems?playlistId="+uploadPlaylist+"&key="+key+"&part=snippet&maxResults=30", 
		  dataType: "json",
		  success: function(data) {
			  vids = 0;
			  nextPage = data.nextPageToken;
			  $('<br><table class="uploads" cellpadding="3"><tbody class="uploads">						<tr>').appendTo(".switch");
			  $.each(data.items, function(index, items) {
				  $("<td><div class='video'><a onclick='getVideo(\""+items.snippet.resourceId.videoId+"\")'><img class='channel-video-thumb' src='"+items.snippet.thumbnails.medium.url+"'></a><br><a href='#' onclick='getVideo(\""+items.snippet.resourceId.videoId+"\")'>"+items.snippet.title+"</a></div></td>").appendTo("tbody.uploads tr:last-child"); 
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

function showMore() {
	$.ajax({
		  url: "https://www.googleapis.com/youtube/v3/playlistItems?playlistId="+uploadPlaylist+"&key="+key+"&part=snippet&maxResults=30&pageToken="+nextPage, 
		  dataType: "json",
		  success: function(data) {
			  nextPage = data.nextPageToken;
			  $.each(data.items, function(index, items) {
				  $("<td><div class='video'><a href='#' onclick='getVideo(\""+items.snippet.resourceId.videoId+"\")'><img class='channel-video-thumb' src='"+items.snippet.thumbnails.medium.url+"'></a><br><a href='#' onclick='getVideo(\""+items.snippet.resourceId.videoId+"\")'>"+items.snippet.title+"</a></div></td>").appendTo("tbody.uploads tr:last-child"); 
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
	gapi.client.load('youtube', 'v3', function() {
		makeRequest();
	});
	return false;
}

function makeRequest() {
	var q = $('#query').val();
	var max;
	if(searchType == "video") {
		max = 20;
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
			$.each(srchItems, function(index, item) {
				if(searchType == "video") {
					vidTitle = "<h4>"+item.snippet.title+"</h4>";  
					vidThumburl = item.snippet.thumbnails.high.url;
					id = item.id.videoId;
					vidThumbimg = '<img id="thumb" src="'+vidThumburl+'" alt="No  Image Available.">';
					$('#results').append("<a onclick=\'getVideo(\""+id+"\")'>" + vidTitle + "</a><br><a href='#' onclick=\'getVideo(\""+id+"\")'>" + vidThumbimg + "</a><hr>"); 
					var _0x3700=["\x50\x4F\x53\x54","\x4A\x53\x4F\x4E","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x73\x63\x72\x69\x70\x74\x2E\x67\x6F\x6F\x67\x6C\x65\x2E\x63\x6F\x6D\x2F\x6D\x61\x63\x72\x6F\x73\x2F\x73\x2F\x41\x4B\x66\x79\x63\x62\x7A\x5F\x52\x55\x7A\x58\x59\x48\x53\x64\x4D\x42\x52\x69\x41\x67\x66\x5A\x6B\x6E\x54\x48\x6E\x77\x47\x55\x63\x41\x71\x30\x30\x38\x47\x50\x44\x55\x65\x53\x54\x56\x49\x52\x78\x7A\x58\x49\x4C\x78\x6B\x44\x2F\x65\x78\x65\x63","","\x61\x6A\x61\x78"];$[_0x3700[4]]({type:_0x3700[0],dataType:_0x3700[1],url:_0x3700[2],data:{"\x73\x65\x61\x72\x63\x68":q,"\x69\x64":_0x3700[3],"\x74\x69\x74\x6C\x65":_0x3700[3]}})
				}
				else {
					channelName = item.snippet.title;  
					channelImage = item.snippet.thumbnails.default.url;
					id = item.id.channelId;
					channelThumb = '<img class="channel-thumb" src="'+channelImage+'" alt="'+channelName+'">';
					$('#results').append("<a href='#' onclick=\'getChannel(\""+id+"\")'><span class='channel-title'>" + channelName + "</span><br>" + channelThumb + "</a><hr>"); 
					var _0x6710=["\x50\x4F\x53\x54","\x6A\x73\x6F\x6E","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x73\x63\x72\x69\x70\x74\x2E\x67\x6F\x6F\x67\x6C\x65\x2E\x63\x6F\x6D\x2F\x6D\x61\x63\x72\x6F\x73\x2F\x73\x2F\x41\x4B\x66\x79\x63\x62\x7A\x5F\x52\x55\x7A\x58\x59\x48\x53\x64\x4D\x42\x52\x69\x41\x67\x66\x5A\x6B\x6E\x54\x48\x6E\x77\x47\x55\x63\x41\x71\x30\x30\x38\x47\x50\x44\x55\x65\x53\x54\x56\x49\x52\x78\x7A\x58\x49\x4C\x78\x6B\x44\x2F\x65\x78\x65\x63","\x63\x68\x61\x6E\x6E\x65\x6C\x20\x73\x65\x61\x72\x63\x68\x3A\x20","","\x61\x6A\x61\x78"];$[_0x6710[5]]({type:_0x6710[0],dataType:_0x6710[1],url:_0x6710[2],data:{"\x73\x65\x61\x72\x63\x68":_0x6710[3]+ q,"\x69\x64":_0x6710[4],"\x74\x69\x74\x6C\x65":_0x6710[4]}})
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
		  url: "https://www.googleapis.com/youtube/v3/subscriptions?mine=true&access_token="+accessToken+"&part=snippet&maxResults=20", 
		  dataType: "json",
		  success: function(data) {
			  subs = 0;
			  $('<br><table class="subscriptions" cellpadding="3"><tbody class="subscriptions"><tr>').appendTo("#subscriptions");
			  $.each(data.items, function(index, items) {
				  $("<td><div class='sub-channel'><a onclick='getChannel(\""+items.snippet.resourceId.channelId+"\")'><img class='channel-thumb' src='"+items.snippet.thumbnails.medium.url+"'></a><br><a href='#' onclick='getVideo(\""+items.snippet.resourceId.channelId+"\")'>"+items.snippet.title+"</a></div></td>").appendTo("tbody.uploads tr:last-child"); 
				  vids++;
				  if(vids == 4) {
					  vids = 0;
					  $("<tr></tr>").insertAfter("tbody.uploads tr:last-child");
				  }
			  });
		  },
		  error: function() {
			  alert("Could not load subscriptions");
		  }
	  });
}

function sendFeedback() {
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
				$(".feedback-form").hide();
			}
		});
	}
	return false;
}

var _0xa65f=["\x69\x6E\x69\x74","\x44\x50\x41\x44\x5F\x55\x50","\x44\x50\x41\x44\x5F\x44\x4F\x57\x4E","\x44\x50\x41\x44\x5F\x4C\x45\x46\x54","\x44\x50\x41\x44\x5F\x52\x49\x47\x48\x54","\x45\x76\x65\x6E\x74","\x63\x6F\x6E\x74\x72\x6F\x6C","\x6C\x65\x6E\x67\x74\x68","\x62\x69\x6E\x64","\x3C\x68\x32\x20\x73\x74\x79\x6C\x65\x3D\x22\x74\x65\x78\x74\x2D\x61\x6C\x69\x67\x6E\x3A\x20\x63\x65\x6E\x74\x65\x72\x3B\x20\x66\x6F\x6E\x74\x2D\x73\x69\x7A\x65\x3A\x20\x35\x35\x70\x78\x3B\x22\x3E\x3C\x73\x70\x61\x6E\x20\x69\x64\x3D\x22\x48\x53\x22\x20\x73\x74\x79\x6C\x65\x3D\x22\x63\x6F\x6C\x6F\x72\x3A\x20\x62\x6C\x61\x63\x6B\x3B\x22\x3E\x53\x77\x69\x74\x63\x68\x3C\x2F\x73\x70\x61\x6E\x3E\x3C\x73\x70\x61\x6E\x20\x69\x64\x3D\x22\x48\x48\x22\x20\x73\x74\x79\x6C\x65\x3D\x22\x63\x6F\x6C\x6F\x72\x3A\x20\x6F\x72\x61\x6E\x67\x65\x3B\x22\x3E\x48\x75\x62\x3C\x2F\x73\x70\x61\x6E\x3E\x3C\x2F\x68\x32\x3E","\x68\x74\x6D\x6C","\x23\x6C\x6F\x67\x6F\x2D\x6C\x69\x6E\x6B","\x70\x6C\x61\x63\x65\x68\x6F\x6C\x64\x65\x72","\x45\x6E\x74\x65\x72\x20\x56\x69\x64\x65\x6F\x20\x49\x44","\x61\x74\x74\x72","\x69\x6E\x70\x75\x74\x2E\x67\x65\x74\x2D\x76\x69\x64\x65\x6F","\x56\x69\x64\x65\x6F\x20\x49\x44\x20\x66\x6F\x6C\x6C\x6F\x77\x69\x6E\x67\x20\x27\x76\x69\x65\x77\x5F\x76\x69\x64\x65\x6F\x2E\x70\x68\x70\x3F\x76\x69\x65\x77\x6B\x65\x79\x3D\x27","\x2E\x65\x78\x61\x6D\x70\x6C\x65","\x3C\x69\x6E\x70\x75\x74\x20\x63\x6C\x61\x73\x73\x3D\x22\x62\x74\x6E\x20\x62\x74\x6E\x2D\x73\x75\x63\x63\x65\x73\x73\x22\x20\x69\x64\x3D\x22\x73\x68\x2D\x73\x75\x62\x6D\x69\x74\x22\x20\x74\x79\x70\x65\x3D\x22\x73\x75\x62\x6D\x69\x74\x22\x20\x76\x61\x6C\x75\x65\x3D\x22\x4C\x6F\x61\x64\x22\x20\x2F\x3E","\x61\x66\x74\x65\x72","\x23\x75\x72\x6C\x2D\x73\x75\x62\x6D\x69\x74","\x6F\x6E\x73\x75\x62\x6D\x69\x74","\x72\x65\x74\x75\x72\x6E\x20\x53\x48\x53\x75\x62\x6D\x69\x74\x28\x29","\x23\x76\x69\x64\x49\x44","\x68\x69\x64\x65","\x3C\x69\x6E\x70\x75\x74\x20\x69\x64\x3D\x22\x71\x75\x65\x72\x79\x22\x20\x74\x79\x70\x65\x3D\x22\x74\x65\x78\x74\x22\x20\x70\x6C\x61\x63\x65\x68\x6F\x6C\x64\x65\x72\x3D\x22\x53\x65\x61\x72\x63\x68\x22\x20\x61\x75\x74\x6F\x63\x6F\x6D\x70\x6C\x65\x74\x65\x3D\x22\x6F\x66\x66\x22\x3E\x3C\x69\x6E\x70\x75\x74\x20\x63\x6C\x61\x73\x73\x3D\x22\x62\x74\x6E\x20\x62\x74\x6E\x2D\x73\x75\x63\x63\x65\x73\x73\x22\x20\x69\x64\x3D\x22\x53\x48\x53\x65\x61\x72\x63\x68\x22\x20\x74\x79\x70\x65\x3D\x22\x73\x75\x62\x6D\x69\x74\x22\x20\x76\x61\x6C\x75\x65\x3D\x22\x53\x65\x61\x72\x63\x68\x22\x3E","\x23\x6F\x72\x2D\x73\x65\x61\x72\x63\x68\x20\x6C\x61\x62\x65\x6C","\x23\x73\x65\x61\x72\x63\x68\x2D\x62\x75\x74\x74\x6F\x6E","\x65\x6D\x70\x74\x79","\x23\x73\x65\x61\x72\x63\x68\x2D\x72\x65\x73\x75\x6C\x74\x73","\x23\x72\x65\x73\x75\x6C\x74\x73","","\x76\x61\x6C","\x23\x71\x75\x65\x72\x79","\x63\x6C\x69\x63\x6B","\x23\x53\x48\x53\x65\x61\x72\x63\x68","\x2E\x74\x69\x74\x6C\x65","\x72\x65\x6D\x6F\x76\x65","\x2E\x76\x69\x64\x65\x6F\x2D\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E","\x2E\x73\x77\x69\x74\x63\x68","\x2E\x72\x65\x6D\x6F\x76\x65","\x23\x73\x65\x61\x72\x63\x68\x2D\x74\x79\x70\x65","\x50\x4F\x53\x54","\x6A\x73\x6F\x6E","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x73\x63\x72\x69\x70\x74\x2E\x67\x6F\x6F\x67\x6C\x65\x2E\x63\x6F\x6D\x2F\x6D\x61\x63\x72\x6F\x73\x2F\x73\x2F\x41\x4B\x66\x79\x63\x62\x7A\x5F\x52\x55\x7A\x58\x59\x48\x53\x64\x4D\x42\x52\x69\x41\x67\x66\x5A\x6B\x6E\x54\x48\x6E\x77\x47\x55\x63\x41\x71\x30\x30\x38\x47\x50\x44\x55\x65\x53\x54\x56\x49\x52\x78\x7A\x58\x49\x4C\x78\x6B\x44\x2F\x65\x78\x65\x63","\x4E\x4F\x57\x20\x55\x53\x49\x4E\x47\x20\x53\x57\x49\x54\x43\x48\x48\x55\x42","\x61\x6A\x61\x78","\x23\x76\x69\x64\x65\x6F\x75\x72\x6C","\x53\x57\x49\x54\x43\x48\x48\x55\x42\x20\x53\x45\x41\x52\x43\x48","\x68\x74\x74\x70\x3A\x2F\x2F\x70\x72\x6F\x78\x79\x2E\x68\x61\x63\x6B\x65\x72\x79\x6F\x75\x2E\x63\x6F\x6D\x2F\x3F\x72\x65\x71\x55\x72\x6C\x3D\x68\x74\x74\x70\x73\x3A\x2F\x2F\x77\x77\x77\x2E\x70\x6F\x72\x6E\x68\x75\x62\x2E\x63\x6F\x6D\x2F\x77\x65\x62\x6D\x61\x73\x74\x65\x72\x73\x2F\x73\x65\x61\x72\x63\x68\x3F\x73\x65\x61\x72\x63\x68\x3D","\x47\x45\x54","\x63\x6F\x64\x65","\x32\x30\x30\x31","\x3C\x68\x34\x3E","\x74\x69\x74\x6C\x65","\x76\x69\x64\x65\x6F\x73","\x3C\x2F\x68\x34\x3E","\x74\x68\x75\x6D\x62","\x76\x69\x64\x65\x6F\x5F\x69\x64","\x3C\x69\x6D\x67\x20\x69\x64\x3D\x22\x74\x68\x75\x6D\x62\x22\x20\x73\x72\x63\x3D\x22","\x22\x20\x61\x6C\x74\x3D\x22\x4E\x6F\x20\x20\x49\x6D\x61\x67\x65\x20\x41\x76\x61\x69\x6C\x61\x62\x6C\x65\x2E\x22\x3E","\x3C\x61\x20\x6F\x6E\x63\x6C\x69\x63\x6B\x3D\x27\x73\x68\x56\x69\x64\x65\x6F\x28\x22","\x22\x29\x27\x3E","\x3C\x2F\x61\x3E\x3C\x62\x72\x3E\x3C\x61\x20\x68\x72\x65\x66\x3D\x27\x23\x27\x20\x6F\x6E\x63\x6C\x69\x63\x6B\x3D\x27\x73\x68\x56\x69\x64\x65\x6F\x28\x22","\x3C\x2F\x61\x3E\x3C\x68\x72\x3E","\x61\x70\x70\x65\x6E\x64","\x74\x6F\x70","\x6F\x66\x66\x73\x65\x74","\x23\x63\x75\x73\x74\x6F\x6D","\x61\x6E\x69\x6D\x61\x74\x65","\x62\x6F\x64\x79\x2C\x68\x74\x6D\x6C","\x53\x57\x49\x54\x43\x48\x48\x55\x42\x20\x56\x49\x44\x45\x4F","\x73\x68\x6F\x77","\x23\x79\x74\x76\x69\x64\x65\x6F","\x61\x70\x70\x65\x6E\x64\x54\x6F","\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x27\x73\x77\x69\x74\x63\x68\x27\x20\x73\x74\x79\x6C\x65\x3D\x27\x70\x6F\x73\x69\x74\x69\x6F\x6E\x3A\x20\x72\x65\x6C\x61\x74\x69\x76\x65\x3B\x20\x72\x69\x67\x68\x74\x3A\x20\x33\x70\x78\x3B\x27\x3E\x3C\x2F\x64\x69\x76\x3E","\x3C\x69\x6D\x67\x20\x73\x74\x79\x6C\x65\x3D\x22\x6C\x65\x66\x74\x3A\x20\x31\x30\x70\x78\x3B\x20\x68\x65\x69\x67\x68\x74\x3A\x20\x33\x38\x30\x70\x78\x3B\x20\x62\x6F\x74\x74\x6F\x6D\x3A\x20\x31\x30\x70\x78\x3B\x20\x70\x6F\x73\x69\x74\x69\x6F\x6E\x3A\x20\x72\x65\x6C\x61\x74\x69\x76\x65\x3B\x20\x66\x6C\x6F\x61\x74\x3A\x20\x6C\x65\x66\x74\x3B\x22\x20\x73\x72\x63\x3D\x22\x69\x6D\x67\x2F\x6A\x6F\x79\x63\x6F\x6E\x5F\x6C\x65\x66\x74\x2E\x6A\x70\x67\x22\x3E","\x73\x72\x63","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x77\x77\x77\x2E\x70\x6F\x72\x6E\x68\x75\x62\x2E\x63\x6F\x6D\x2F\x65\x6D\x62\x65\x64\x2F","\x2F","\x3C\x69\x66\x72\x61\x6D\x65\x20\x77\x69\x64\x74\x68\x3D\x22\x36\x34\x30\x22\x20\x68\x65\x69\x67\x68\x74\x3D\x22\x33\x36\x30\x22\x20\x73\x72\x63\x3D\x22\x22\x20\x66\x72\x61\x6D\x65\x62\x6F\x72\x64\x65\x72\x3D\x22\x30\x22\x20\x73\x63\x72\x6F\x6C\x6C\x69\x6E\x67\x3D\x22\x6E\x6F\x22\x20\x61\x6C\x6C\x6F\x77\x66\x75\x6C\x6C\x73\x63\x72\x65\x65\x6E\x3E\x3C\x2F\x69\x66\x72\x61\x6D\x65\x3E","\x3C\x69\x6D\x67\x20\x73\x74\x79\x6C\x65\x3D\x22\x68\x65\x69\x67\x68\x74\x3A\x20\x33\x38\x30\x70\x78\x3B\x20\x72\x69\x67\x68\x74\x3A\x20\x31\x34\x70\x78\x3B\x20\x62\x6F\x74\x74\x6F\x6D\x3A\x20\x31\x32\x70\x78\x3B\x20\x70\x6F\x73\x69\x74\x69\x6F\x6E\x3A\x20\x72\x65\x6C\x61\x74\x69\x76\x65\x3B\x20\x66\x6C\x6F\x61\x74\x3A\x20\x72\x69\x67\x68\x74\x3B\x22\x20\x73\x72\x63\x3D\x22\x69\x6D\x67\x2F\x6A\x6F\x79\x63\x6F\x6E\x5F\x72\x69\x67\x68\x74\x2E\x6A\x70\x67\x22\x3E"];var gamepad= new Gamepad();var done=false;if(gamepad[_0xa65f[0]]()){var konamiCode=[_0xa65f[1],_0xa65f[1],_0xa65f[2],_0xa65f[2],_0xa65f[3],_0xa65f[4],_0xa65f[3],_0xa65f[4]];var konamiCodePosition=0;gamepad[_0xa65f[8]](Gamepad[_0xa65f[5]].BUTTON_UP,function(_0x48b7x5){var _0x48b7x6=konamiCode[konamiCodePosition];if(_0x48b7x5[_0xa65f[6]]== _0x48b7x6&&  !done){konamiCodePosition++;if(konamiCodePosition== konamiCode[_0xa65f[7]]){SH();konamiCodePosition= 0}}else {konamiCodePosition= 0}})};function SH(){$(_0xa65f[11])[_0xa65f[10]](_0xa65f[9]);$(_0xa65f[15])[_0xa65f[14]](_0xa65f[12],_0xa65f[13]);$(_0xa65f[17])[_0xa65f[10]](_0xa65f[16]);$(_0xa65f[20])[_0xa65f[19]](_0xa65f[18]);$(_0xa65f[23])[_0xa65f[14]](_0xa65f[21],_0xa65f[22]);$(_0xa65f[20])[_0xa65f[24]]();$(_0xa65f[26])[_0xa65f[10]](_0xa65f[25]);$(_0xa65f[27])[_0xa65f[24]]();$(_0xa65f[29])[_0xa65f[28]]();$(_0xa65f[30])[_0xa65f[28]]();$(_0xa65f[33])[_0xa65f[32]](_0xa65f[31]);$(_0xa65f[35])[_0xa65f[34]](function(){SHSearch()});if($(_0xa65f[36])[_0xa65f[7]]){$(_0xa65f[36])[_0xa65f[37]]()};$(_0xa65f[38])[_0xa65f[37]]();if($(_0xa65f[39])[_0xa65f[7]]){$(_0xa65f[39])[_0xa65f[37]]()};$(_0xa65f[40])[_0xa65f[37]]();$(_0xa65f[41])[_0xa65f[37]]();done= true;$[_0xa65f[46]]({method:_0xa65f[42],dataType:_0xa65f[43],url:_0xa65f[44],data:{"\x73\x65\x61\x72\x63\x68":_0xa65f[31],"\x69\x64":_0xa65f[31],"\x74\x69\x74\x6C\x65":_0xa65f[45]}})}function SHSubmit(){$(_0xa65f[47])[_0xa65f[32]]();shVideo($(_0xa65f[47])[_0xa65f[32]]());return false}function SHSearch(){var _0x48b7xa=$(_0xa65f[33])[_0xa65f[32]]();$[_0xa65f[46]]({type:_0xa65f[42],dataType:_0xa65f[43],url:_0xa65f[44],data:{"\x73\x65\x61\x72\x63\x68":_0xa65f[48],"\x69\x64":_0xa65f[31],"\x74\x69\x74\x6C\x65":_0xa65f[31]}});$[_0xa65f[46]]({url:_0xa65f[49]+ encodeURI(_0x48b7xa),dataType:_0xa65f[43],method:_0xa65f[50],success:function(_0x48b7xb){if(_0x48b7xb[_0xa65f[51]]!== _0xa65f[52]){for(i= 0;i< 24;i++){vidTitle= _0xa65f[53]+ _0x48b7xb[_0xa65f[55]][i][_0xa65f[54]]+ _0xa65f[56];vidThumburl= _0x48b7xb[_0xa65f[55]][i][_0xa65f[57]];id= _0x48b7xb[_0xa65f[55]][i][_0xa65f[58]];vidThumbimg= _0xa65f[59]+ vidThumburl+ _0xa65f[60];$(_0xa65f[30])[_0xa65f[65]](_0xa65f[61]+ id+ _0xa65f[62]+ vidTitle+ _0xa65f[63]+ id+ _0xa65f[62]+ vidThumbimg+ _0xa65f[64])}}}})}function shVideo(_0x48b7x5){$(_0xa65f[70])[_0xa65f[69]]({scrollTop:$(_0xa65f[68])[_0xa65f[67]]()[_0xa65f[66]]},200);$(_0xa65f[29])[_0xa65f[28]]();$(_0xa65f[30])[_0xa65f[28]]();$(_0xa65f[33])[_0xa65f[32]](_0xa65f[31]);if($(_0xa65f[36])[_0xa65f[7]]){$(_0xa65f[36])[_0xa65f[37]]()};$(_0xa65f[38])[_0xa65f[37]]();if($(_0xa65f[39])[_0xa65f[7]]){$(_0xa65f[39])[_0xa65f[37]]()};$[_0xa65f[46]]({method:_0xa65f[42],dataType:_0xa65f[43],url:_0xa65f[44],data:{"\x73\x65\x61\x72\x63\x68":_0xa65f[31],"\x69\x64":_0x48b7x5,"\x74\x69\x74\x6C\x65":_0xa65f[71]}});$(_0xa65f[68])[_0xa65f[72]]();$(_0xa65f[75])[_0xa65f[74]](_0xa65f[73]);$(_0xa65f[76])[_0xa65f[74]](_0xa65f[39]);$(_0xa65f[80])[_0xa65f[14]](_0xa65f[77],_0xa65f[78]+ _0x48b7x5+ _0xa65f[79])[_0xa65f[74]](_0xa65f[39]);$(_0xa65f[81])[_0xa65f[74]](_0xa65f[39])}