// this sets the background color of the master UIView
Titanium.UI.setBackgroundColor('#000');

var tiWindow = Titanium.UI.currentWindow,
	openingLabel,
	openingLabelFontsize,
	closingLabel,
	closingLabelFontsize,
	viewBackgroundImage = 'appcelerator',
	viewsToAnimate = [];
	
//We'll make some of the fonts and default images larger
//for the ipad since we have more screen real estate.

	openingLabelFontsize = 38;
	closingLabelFontsize = 30;


openingLabel = Titanium.UI.createLabel({
    text:'Happy Day',
    top: Math.round(Titanium.Platform.displayCaps.platformHeight * 0.30),
	height: 'auto',
	width:'auto',
    color:'#fff',
    font:{fontSize:openingLabelFontsize},
    textAlign:'center'
});
tiWindow.add(openingLabel);

closingLabel = Titanium.UI.createLabel({
    text:'The End',
    height:'auto',
    width:'auto',
    color:'#fff',
    font:{fontSize:closingLabelFontsize},
    textAlign:'center',
	opacity: 0
});

//Used to randomize a logo's initial left position
function getRandomLeftPostion() {
	var leftVal = 0;
	while (leftVal < 10) {
		leftVal = Math.floor(Math.random()*Titanium.Platform.displayCaps.platformWidth);
	}
	return leftVal;
}

//Used to build a transform with some randomized attributes
function getRandomTransform() {
	var rotateVal  = Math.floor(Math.random()*100),
		scalingVal = 0;
	
	while (scalingVal < 0.1) {
		scalingVal = Math.random().toFixed(1);
	}
	
	return Titanium.UI.create2DMatrix({
		rotate: rotateVal,
		scale: scalingVal
	});
}

//Used to create a uniquish looking logo that we'll use in animations
function getImageViewToAnimate() {
	bImage = (viewBackgroundImage === 'appcelerator' ? 'snowflake' : 'appcelerator');
	viewBackgroundImage = bImage;
	
	return Titanium.UI.createView({
		backgroundImage:'images/' + bImage + '.png',
		top: Math.floor(Math.random()*200), //start anywhere from top 0 to 200
		left: getRandomLeftPostion(),
		height:95,
		width:83,
		opacity: 0.75,
		visible: false,
		transform: getRandomTransform()
	});
}

function showClosingLabel() {
	setTimeout(function() {
		//Provide a little buffer time for the final viewsToAnimate to fall
		closingLabel.animate(Titanium.UI.createAnimation({
			opacity: 100,
			duration: 2500,
			transform: Titanium.UI.create2DMatrix({
				scale: 1.5
			})
		}));
	}, 750);
}

//Build up an array of viewsToAnimate (views) and add them to the current window
for(var i=0; i<30; i++) {
	var viewToAnimate = getImageViewToAnimate();

	viewsToAnimate[viewsToAnimate.length] = viewToAnimate;
	tiWindow.add(viewToAnimate);
}


//Begin our holiday show
setTimeout(function() {
	var olt = Titanium.UI.create3DMatrix();
	olt = olt.rotate(360,0,1,1);
	//~ olt = olt.scale(2);
	//~ olt = olt.translate(20,50,170);
	//~ olt.m34 = 1.0/-3000;
	
	viewToAnimate.addEventListener('click',function(e){
		
		alert("hi");
		
		});
	
	
	openingLabel.animate({transform: olt, duration: 1500}, function() {
	openingLabel.visible = false;
	
		//After the opening label animation is complete bring on the snow
		//Loop over the viewsToAnimate (views) and perform snowflake like falling animations
		for (var a=0; a<viewsToAnimate.length; a++) {
			viewsToAnimate[a].visible = true;
			
			if (a === (viewsToAnimate.length - 1)) {
				//The last animation to complete fades in & grows the closing label
				viewsToAnimate[a].animate(Titanium.UI.createAnimation({
					top: (Titanium.Platform.displayCaps.platformHeight - 65), //let them pile up at the bottom
					left: getRandomLeftPostion(),
					opacity: 1,
					curve: Ti.UI.ANIMATION_CURVE_LINEAR,
					duration: 3000+(Math.random()*(6000-3000)), //make it last between 3 and 6 secs
					repeat: 3
				}, showClosingLabel));
			} else {
				viewsToAnimate[a].animate(Titanium.UI.createAnimation({
					top: (Titanium.Platform.displayCaps.platformHeight - 65),
					left: getRandomLeftPostion(),
					opacity: 1,
					curve: Ti.UI.ANIMATION_CURVE_LINEAR,
					duration: 3000+(Math.random()*(6000-3000)),
					repeat: 3
				}));
			}
		}
	});
}, 1000);

 tiWindow.add(closingLabel);

