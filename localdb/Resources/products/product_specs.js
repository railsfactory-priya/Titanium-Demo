// create var for the currentWindow
var currentWin = Ti.UI.currentWindow;

var db = Ti.Database.install('../products.sqlite','productSpecs');

var prodName = Ti.UI.currentWindow.prodName;

var rows = db.execute('SELECT * FROM products WHERE name="' + prodName + '"');
var data = [
{title:'' + rows.fieldByName('width') + '', header:'Width'},
{title:'' + rows.fieldByName('height') + '', header:'Height'},
{title:'' + rows.fieldByName('color') + '', header:'Color'},
{title:'' + rows.fieldByName('qty') + '', header:'Quantity'}
];

var tableview = Ti.UI.createTableView({
	data:data
});

currentWin.add(tableview);
