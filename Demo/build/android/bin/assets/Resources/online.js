var win = Ti.UI.currentWindow;
 var url = "http://www.nch.com.au/acm/8kmp38.wav";
var media_url = "http://phreadz.com/service/encoder.php?g=5LPOKP754&iph=1";
//~ var media_url = "http://www.youtube.com/watch?v=Tz4TWqAmlc0";


var buttonOpenRoute = Ti.UI.createButton({
    title: "Open Route",
    height: 40,
    width: 200,
    top: 10
});
 
buttonOpenRoute.addEventListener('click', function(evt) {
    Ti.Platform.openURL("	http://maps.google.co.in/maps?q=mad,&sa=N&hl=en&tab=wl");
	
	});
 
win.add(buttonOpenRoute);
var web_audio = Ti.UI.createButton({
    title: "Web Audio",
    height: 40,
    width: 200
});

var sound = Titanium.Media.createSound({url:url,preload:true});
web_audio.addEventListener('click', function(evt) {

				sound.play();

	});
 
//~ win.add(web_audio);
	
	var web_movie = Ti.UI.createButton({
    title: "Web Movie",
    height: 40,
    width: 200,
		top: 50
});
	web_movie.addEventListener('click', function(evt) {
		
		

var activeMovie = Titanium.Media.createVideoPlayer({
	url:media_url,
	backgroundColor:'#111',
	movieControlMode:Titanium.Media.VIDEO_CONTROL_DEFAULT,
	scalingMode:Titanium.Media.VIDEO_SCALING_MODE_FILL
});

if (parseFloat(Titanium.Platform.version) >= 3.2)
{
	win.add(activeMovie);
}
activeMovie.play();

win.addEventListener('close', function() {
	alert("Window closed");
	activeMovie.stop();
});

});
//~ win.add(web_movie);

