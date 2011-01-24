// Media

var win = Titanium.UI.currentWindow;

var button_movie = Titanium.UI.createButton({
title: 'Movie'
});

var button_audio = Titanium.UI.createButton({
title: 'Audio',
	height:44,
	left:50,
	width:60
});
		
	var sound = Titanium.Media.createSound({
	url:'Andha Nilavathan cut.mp3'
				//~ preload:true
});
	
	button_audio.addEventListener('click',function(e){
		alert("Audio from Local ");
		Ti.API.info("Audio from Local ");
		sound.play();
		});

				//~ win.add(sound);
	
//~ sound.addEventListener('complete', function(e){
	//~ sound.release(); 
	//~ });

//~ if (parseFloat(Titanium.Platform.version) >= 3.2)
//~ {
	//~ sound.play();
//~ }
			
			
	//~ });

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


		

