// Media

var win = Titanium.UI.currentWindow;

var button_movie = Titanium.UI.createButton({
title: 'Movie'
});


	var sound = Titanium.Media.createSound({
	url:'Andha Nilavathan cut.mp3'
				//~ preload:true
});

Ti.API.info("Audio from Local ");


var button_audio = Titanium.UI.createButton({
title: 'Audio',
	height:44,
	left:50,
	width:60
});
		
	
	button_audio.addEventListener('click',function(e){
		alert("Audio from Local ");
		

var win_audio = Titanium.UI.createWindow({  
    title:'Audio',
    backgroundColor:'#fff' ,
		url:'audio.js'
	
});
		win_audio.open({modal:true});

		
		});



	button_movie.addEventListener('click',function(e){
		//~ alert("Movie completed");
	
var activeMovie = Titanium.Media.createVideoPlayer({
	
			contentURL:'movie.mp4',
			backgroundColor:'#111',
			movieControlMode:Titanium.Media.VIDEO_CONTROL_DEFAULT,
			scalingMode:Titanium.Media.VIDEO_SCALING_MODE_FILL

	});
	
Titanium.API.info("Movie playing");

if (parseFloat(Titanium.Platform.version) >= 3.2)
{
	activeMovie.movieControlStyle = Titanium.Media.VIDEO_CONTROL_EMBEDDED;
	win.add(activeMovie);
}
activeMovie.play();
	
	
	
win.addEventListener('close', function() {
	alert("Window closed");
	activeMovie.stop();
});
		
});	
win.add(button_movie);
		win.add(button_audio);

		

