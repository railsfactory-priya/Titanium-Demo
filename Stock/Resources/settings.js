Titanium.include("app_settings.js");

// use a closure to (a) test it and (b) not expose this into global scope
//(function()
//{
	// window container
	var welcomeWindow = Titanium.UI.createWindow({
		//height:0,
		//width:200,
		//touchEnabled:true
	});
/*
	// black view
	var indView = Titanium.UI.createView({
		height:80,
		width:200,
		backgroundColor:'#000',
		borderRadius:10,
		opacity:0.8,
		touchEnabled:true
	});
	//welcomeWindow.add(indView);
*/

// create table view data object
var data = [];

data[0] = Ti.UI.createTableViewRow({title:'English'});
data[1] = Ti.UI.createTableViewRow({title:'French'});
data[2] = Ti.UI.createTableViewRow({title:'Japanese'});
data[3] = Ti.UI.createTableViewRow({title:'Russian'});
data[4] = Ti.UI.createTableViewRow({title:'Spanish'});
data[5] = Ti.UI.createTableViewRow({title:'Sweden'});
data[6] = Ti.UI.createTableViewRow({title:'Turkish'});

// create table view
var tableview = Titanium.UI.createTableView({
	width:250,
	borderRadius: 5,
	borderColor: "blue",
	backgroundColor : "white",
	height:300,
	data:data
});


// message
var message = Titanium.UI.createLabel({
	text:'Choose Language' ,
	color:'white',
	bottom:350,
	textAlign:'center'
//	font:{fontSize:18,fontWeight:'bold'},
//	height:'auto',
//	width:'auto'
});

// create table view event listener
tableview.addEventListener('click', function(e)
{
	// event data
	var index = e.index;
	var section = e.section;
	var row = e.row;
	var rowdata = e.rowData;
	//Titanium.UI.createAlertDialog({title:'Table View',message:'row ' + row + ' index ' + index + ' section ' + section  + ' title ' + rowdata.title}).show();
	var lang='';
		switch (e.index) {
		   case 0: open_file = 'first_eng.js'; lang='eng'; break;
		   case 1: open_file = 'first_sv.js'; lang='fra'; break;
		   case 2: open_file = 'first_tys.js'; lang='jap'; break;
		   case 3: open_file = 'first_jap.js'; lang='rys'; break;
		   case 4: open_file = 'first_rys.js'; lang='spa'; break;
		   case 5: open_file = 'first_fra.js'; lang='sv'; break;
		   case 6: open_file = 'first_spa.js'; lang='tys'; break;
		}
		alert("You Have Chosen " + get_language_fullname(lang) + " as Default Language");
		set_language(lang);
		welcomeWindow.close();
		Titanium.include("first.js");
});

welcomeWindow.add(tableview);
welcomeWindow.add(message);	
	welcomeWindow.open({fullscreen:true});
