Titanium.include("app_settings.js");

log("current file: history.js");

 //~ alert("am in " + Titanium.App.Properties.getString('language'));
var actInd = Titanium.UI.createActivityIndicator({
height:50,
width:10
});
actInd.show();

	actInd.show();

var win=Titanium.UI.currentWindow;
var myWindow = Titanium.UI.createWindow({fullscreen:false

	});

//~ var button = Titanium.UI.createButton({
	//~ top :15,
	//~ right :10,
	//~ title: 'Back'
//~ });
//~ button.addEventListener('click',function(e)
//~ {
		//~ win.close();
//~ });


//~ var backBtn = Titanium.UI.createButton({
   //~ title:'Back',
 //~ style:Titanium.UI.iPhone.SystemButtonStyle.BORDERED
//~ });
 
//~ backBtn.addEventListener( 'click', function() {
	
	
	//~ win.close();

//~ webview.goBack();
//~ });



var backButton = Ti.UI.createButton({
								top :15,
								right :10,    
							  title:'Back'
								});
								myWindow.add(backButton);
								backButton.addEventListener('click', function(){
																var win_mail_new = Titanium.UI.createWindow({  
																url:'event.js'
																});
								win_mail_new.open({modal:true});
								});

								win.leftNavButton = backButton;
 
actInd.show();

 var web_eng = Titanium.UI.createWebView({url:'about_eng.html' ,width:300, height:300});
myWindow.add(web_eng);
 //~ myWindow.add(button);
 actInd.hide();

 myWindow.open({modal:true});

  

/*-
//~ log(current_language());

//activity indicator
		var actInd = Titanium.UI.createActivityIndicator({
		height:50,
		width:10
		});

actInd.show();


			var load_file = "";
			var title_text="";
			var history_file="";
			switch (current_language()) {
			   case "eng": load_file = 'first_eng.js';title_text="back";history_file='about_eng.html'; break;
			   case 'sv' : load_file = 'first_sv.js' ;title_text="back";history_file='about_swe.html'; break;
			   case 'tys': load_file = 'first_tys.js';title_text="back";history_file='about_jpn.html'; break;
			   case 'jap': load_file = 'first_jap.js';title_text="back";history_file='about_jpn.html'; break;
			   case 'rys': load_file = 'first_rys.js';title_text="back";history_file='about_rus.html'; break;
			   case 'fra': load_file = 'first_fra.js';title_text="back";history_file='about_fra.html'; break;
			   case 'spa': load_file = 'first_spa.js';title_text="back";history_file='about_spa.html'; break;
     			}

			
			
    var window_history = Titanium.UI.createWindow(); //{fullscreen:false}
		var v = Titanium.UI.createView({
		    left:0,
		    width:400, //Don't use "auto"
		    height:600  //Don't use "auto"
		});
		
		
		var button_back_history = Titanium.UI.createButton({
			//top :15,
			//right :10,
			title: "Back"
		});
		
		    button_back_history.addEventListener('click',function(e)
		    {	
			window_history.close();
	    	Titanium.include("first.js");
			});	
				
			    //~ log(history_file);
				 var webview_history = Titanium.UI.createWebView({url:'about_eng.html',height:500}); //width:300, height:300
				//v.add(button_back_history);
				
		    	 v.add(webview_history);
				 window_history.add(v); 
				 window_history.leftNavButton = button_back_history;
				 actInd.hide();

				 window_history.open({modal:true});
				
				
	*/