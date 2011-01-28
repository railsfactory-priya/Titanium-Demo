// Media

var win = Titanium.UI.currentWindow;


var button_play= Titanium.UI.createButton({
title: 'play',
	height:44,
	left:50,
	width:60
});

var button_pause = Titanium.UI.createButton({
title: 'pause',
	height:44,
	right:50,
	width:60
});

var button_reset = Titanium.UI.createButton({
title: 'reset',
	height:44,
	left:50,
	width:60,
	top:25	
});

var button_stop = Titanium.UI.createButton({
title: 'stop',
	height:44,
	right:50,
	width:60,
	top:50
	});

var button_volumeUp = Titanium.UI.createButton({
	title:'Volume++',
	height:40,
	width:145,
	left:10,
	top:110
});
button_volumeUp.addEventListener('click', function()
{
	if (sound.volume < 1.0)
	{
		sound.volume += 0.1;
		button_volumeUp.title = 'Volume++ (' + String(sound.volume).substring(0,3) + ')';
		button_volumeDown.title = 'Volume--';
	}
});



var button_volumeDown = Titanium.UI.createButton({
	title:'Volume--',
	height:40,
	width:145,
	right:10,
	top:110
});
button_volumeDown.addEventListener('click', function()
{
	if (sound.volume > 0)
	{
		if (sound.volume < 0.1)
			sound.volume = 0;
		else
			sound.volume -= 0.1;
		button_volumeDown.title = 'Volume-- (' + String(sound.volume).substring(0,3) + ')';
		button_volumeUp.title = 'Volume++';
	}

});
		
	var sound = Titanium.Media.createSound({
	url:'Andha Nilavathan cut.mp3'
				//~ preload:true
});
button_play.addEventListener('click',function(e){
	
	sound.play();
});

button_pause.addEventListener('click',function(e){
		sound.pause();

});

button_reset.addEventListener('click',function(e){
sound.reset();
	
	});
	
button_stop.addEventListener('click',function(e){
sound.stop();
	
	});
	
	
		var backButton= Ti.UI.createButton({
								top :15,
								right :10,
								title:'Back'
								});
	backButton.addEventListener('click', function(){
								win.close();
								});

win.leftNavButton = backButton;
win.add(backButton);
win.add(button_play);
win.add(button_pause);
win.add(button_reset);
win.add(button_stop);
win.add(button_volumeUp);
win.add(button_volumeDown);