// create var for the currentWindow
var currentWin = Ti.UI.currentWindow;

// set the data from the database to the array
function setData() {

	var db = Ti.Database.install('../products.sqlite','products');

	var prodCat = Ti.UI.currentWindow.prodCat;

	var rows = db.execute('SELECT * FROM products WHERE category="' + prodCat + '"');

	// create the array
	var dataArray = [];
			
	while (rows.isValidRow())
	{
	    dataArray.push({title:'' + rows.fieldByName('name') + '', hasChild:true, path:'../products/product_specs.js'});
	    rows.next();	
	};
	
	// set the array to the tableView
	tableview.setData(dataArray);
};

// create table view
var tableview = Ti.UI.createTableView({
});

tableview.addEventListener('click', function(e)
{
	if (e.rowData.path)
	{
		var win = Ti.UI.createWindow({
			url:e.rowData.path,
			title:e.rowData.title
		});
		
		var prodName = e.rowData.title;
		win.prodName = prodName;
		Ti.UI.currentTab.open(win);
	}
});

currentWin.add(tableview);
setData();
