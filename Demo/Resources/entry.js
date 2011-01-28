var window_entry= Titanium.UI.currentWindow;

var db= Titanium.Database.open('vehicles');

var current_reading = Titanium.UI.createTextField({
color:'#336699',
height:35,
width:300,
top:10,
//~ hintText:'Current meter reading...'
});

var fuel_filled = Titanium.UI.createTextField({
color:'#336699',
height:35,
width:300,
top:75
//~ hintText:'Fuel...'

});

var l = Titanium.UI.createLabel({
top:50,
left:10,
width:300,
height:'auto',
color:'#777',
font:{fontSize:13},
text:'Your activity will be shown here...'
});

var save = Titanium.UI.createButton({							    
title: 'Save'
});

current_reading.addEventListener("change", function(e) {
	current_reading = e.value;
});

fuel_filled.addEventListener("change", function(e) {
	fuel_filled = e.value;
});

save.addEventListener("click", function(e) {
	
	var currentTime = new Date();
	var month = currentTime.getMonth() + 1;
	var day = currentTime.getDate();
	var year = currentTime.getFullYear();
	var dt = day + "/" + month + "/" + year;

	if (current_reading != '' && fuel_filled != '' )  
	{	
				alert("dfgg");
				l.text = "To Save Reading: " + current_reading + " And fuel filled: " + fuel_filled + " on date: " + dt + " to database.";
				db.execute('INSERT INTO vehicles (current_reading, fuel_filled, created_at) VALUES(?, ?, ?)',current_reading, fuel_filled, dt);
				l.text = "Succesfully entered record.";

	}
	else
	{
	alert('Type Valid input');
	}
	});

window_entry.add(l);
window_entry.add(current_reading);
window_entry.add(save);
window_entry.add(fuel_filled);


