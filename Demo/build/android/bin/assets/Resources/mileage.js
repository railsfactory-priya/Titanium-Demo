var db= Titanium.Database.open('vehicles');
var window_mileage= Titanium.UI.currentWindow;

var average_mileage = 0;

function calculate_mileage() {
var first_reading = 0;
var last_reading = 0;
var sum_fuel_filled = 0;
var last_fuel_filled = 0;
	
var rows = db.execute("SELECT * FROM vehicles");

var first = 0;
	
while (rows.isValidRow()) {
						if(first==0) {
						first_reading = parseInt(rows.fieldByName('current_reading'));
						first = 1;
					}	
		last_reading = parseInt(rows.fieldByName('current_reading'));
		last_fuel_filled = parseInt(rows.fieldByName('fuel_filled'));
		sum_fuel_filled += last_fuel_filled;
		rows.next();
		}
		
rows.close();
if(first_reading>0) {
average_mileage = (last_reading - first_reading) / (sum_fuel_filled - last_fuel_filled)
	}
}
calculate_mileage();
// The label to display calculated average mileage

var l = Titanium.UI.createLabel({
top:50,
left:10,
width:300,
height:'auto',
color:'#777',
font:{fontSize:13},
text:'Average mileage : ' + average_mileage.toString()
});

// The recaculate button
var recalculate = Titanium.UI.createButton({
title:'Recalculate',
width:'auto',
height:35,
top:120,
left:50
});

var late = Titanium.UI.createButton({
title:'late',
width:'auto',
height:35,
top:120
});

var media = Titanium.UI.createButton({
title:'media',
width:'auto',
height:35,
left:50
});

var online = Titanium.UI.createButton({
title:'online',
width:'auto',
height:35,
right:50
});


recalculate.addEventListener('click', function(e) {
calculate_mileage();
l.text = 'Average mileage : ' + average_mileage.toString();
});

late.addEventListener('click', function(e) {
	
	var new_win=Titanium.UI.createWindow({
		url:'late.js'
		});
		new_win.open({modal:true});
});
	
media.addEventListener('click', function(e) {
	
	var new_win1=Titanium.UI.createWindow({
		url:'media.js'
		});
		new_win1.open({modal:true});
	});
	
online.addEventListener('click', function(e) {
	
	var new_win2=Titanium.UI.createWindow({
		url:'online.js'
		});
		new_win2.open({modal:true});
	});
	

window_mileage.addEventListener('focus', function(e) {
  Ti.API.info("Window got focus");
});


// Add the view to the window
window_mileage.add(recalculate);
window_mileage.add(l);
window_mileage.add(late);
window_mileage.add(media);
window_mileage.add(online);