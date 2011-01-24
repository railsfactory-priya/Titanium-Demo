//LOCAL DB

// create tab group
var tabGroup = Ti.UI.createTabGroup();

// create main window
var main = Ti.UI.createWindow({
	title:'Product Categories',
	url:'products/product_category.js'
});

// create main tab
var tab = Ti.UI.createTab({
	icon:'new.png',
	title:'Products',
	window:main
});

// add the tab to the tab group
tabGroup.addTab(tab);

// open tab group
tabGroup.open();

