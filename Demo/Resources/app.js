
Titanium.UI.setBackgroundColor('#000');

//Creating database:

var db = Titanium.Database.open('vehicles');
db.execute('CREATE TABLE IF NOT EXISTS vehicles (id INTEGER PRIMARY KEY, current_reading char(50), fuel_filled char(5), created_at datetime)');


var tabGroup = Titanium.UI.createTabGroup();

var win_mileage = Titanium.UI.createWindow({  
    title:'Bike Mileage',
    backgroundColor:'#fff' ,
		url:'mileage.js'
	
});
var tab_mileage = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Mileage',
    window:win_mileage
});


var win_addentry = Titanium.UI.createWindow({  
    title:'Add Entry',
    backgroundColor:'#fff',
	url:'entry.js'
});

var tab_addentry = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Add Entry',
    window:win_addentry
});

var win_listing = Titanium.UI.createWindow({  
    title:'Listing Mileage',
    backgroundColor:'#fff',
		url:'listing.js'
});

var tab_listing = Titanium.UI.createTab({  
    icon:'list.png',
    title:'Listing Mileage',
    window:win_listing
});


var win_animate = Titanium.UI.createWindow({  
    title:'animate',
    backgroundColor:'black',
		url:'animate.js'
});

var tab_animate= Titanium.UI.createTab({  
    icon:'list.png',
    title:'Animate',
    window:win_animate
});


tabGroup.addTab(tab_mileage);  
tabGroup.addTab(tab_addentry);  
tabGroup.addTab(tab_listing);  
tabGroup.addTab(tab_animate);  


// open tab group
tabGroup.open();
