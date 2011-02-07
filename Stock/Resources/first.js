// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('black');
log(current_language());


// create tab group
var tabGroup = Titanium.UI.createTabGroup();


//Tab 1

var win1 = Titanium.UI.createWindow({  
    title:'Tab 1',
	   url:'events.js'
});
var tab1 = Titanium.UI.createTab({  
    icon:'tab1.png',
    title:'Events',
    window:win1
});



var label1 = Titanium.UI.createLabel({
	color:'#999',
	text:'Events',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

win1.add(label1);


//Tab 2

var win2 = Titanium.UI.createWindow({  
    title:'Tab 2',
	  url:'search.js'
});
var tab2 = Titanium.UI.createTab({  
    icon:'tab3.png',
    title:'Search',
    window:win2
});


var label2 = Titanium.UI.createLabel({
	color:'#999',
	text:'Search',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

win2.add(label2);



//Tab 3


var win3 = Titanium.UI.createWindow({  
    title:'Tab 3',
		url:'article-customer.js'
});
var tab3 = Titanium.UI.createTab({  
    icon:'tab5.png',
    title:'Article-Customer',
    window:win3
});


var label3 = Titanium.UI.createLabel({
	color:'#999',
	text:'Article-Customer',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

win3.add(label3);

//Tab 4

var win4 = Titanium.UI.createWindow({  
    title:'Tab 4',
		url:'history.js'
});
var tab4= Titanium.UI.createTab({  
    icon:'tab2.png',
    title:'History',
    window:win4
});



var label4 = Titanium.UI.createLabel({
	color:'#999',
	text:'History',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

win4.add(label4);

//Tab 5

var win5 = Titanium.UI.createWindow({  
    title:'Tab 5',
		url:'welcome.js'
});
var tab5 = Titanium.UI.createTab({  
    icon:'tab6.png',
    title:'Settings',
    window:win5
});


var label5 = Titanium.UI.createLabel({
	color:'#999',
	text:'Settings',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

win5.add(label5);

//
//  add tabs
//
tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);  
tabGroup.addTab(tab3);  
tabGroup.addTab(tab4);  
tabGroup.addTab(tab5);  



// open tab group
tabGroup.open();
