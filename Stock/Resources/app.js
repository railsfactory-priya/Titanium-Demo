Titanium.include( "app_settings.js"); //Titanium.Filesystem.resourcesDirectory +

Titanium.UI.setBackgroundColor('#000');

//debug and intial language settings
//Titanium.App.Properties.removeProperty('language');
//set_language('eng'); //"eng","sv","tys","jap","rys","fra","spa"


log("current file: app.js");
log(current_language());

var mode = "production"; 
//var mode = "testing"; 

if(mode=="testing"){
	//load testing code	
		Titanium.include("testing.js");

	//language selection
		Ti.include("welcome.js");

}else{ //load production code


		//var tabGroup1 = Titanium.UI.createTabGroup();


		log("current language: " +  current_language());
		if ( current_language() === null)
		{  // language is not selected / first run

			Ti.include("welcome.js");

		}
		else
		{
			Titanium.include("first.js");
}

} //end mode if
