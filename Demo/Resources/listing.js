var db= Titanium.Database.open('vehicles');

var window_listing= Titanium.UI.currentWindow;

var data = [];

function fetch_data() {
var rows = db.execute("SELECT * FROM vehicles ORDER BY id ");
Ti.API.info(rows.getRowCount() );

while (rows.isValidRow()) {
data.push({
title: "On: " + rows.fieldByName('created_at') + ", Reading was : " + rows.fieldByName('current_reading') + " And you filled: " + rows.fieldByName('fuel_filled'),
id: rows.fieldByName('id')
});

Ti.API.info(rows.fieldByName('current_reading') );
rows.next();
}
rows.close();
}

var tableview = Titanium.UI.createTableView({
		data:data,
		top: 50,
		backgroundColor: 'black'
});

tableview.addEventListener('click',function(e){

	alert('Deleted '+e.index+' from db');
	
	db.execute('DELETE FROM vehicles where id=?',e.index);
	Titanium.API.info('deleted');


	});

var refreshData = Titanium.UI.createButton({
title:'Refresh',
width:'auto',
height:35,
top:20,
left:100
});


refreshData.addEventListener('click', function(e) {
fetch_data();
tableview.setData(data);
});

window_listing.add(tableview);
window_listing.add(refreshData);