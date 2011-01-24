var xhr = Titanium.Network.createHTTPClient();

var data1=[];



xhr.onload = function()
{
	var doc = this.responseXML.documentElement;
	var elements = doc.getElementsByTagName("filename");
		Ti.API.info(elements.length);
	//~ alert(elements.item);

	for(var i=0;i<elements.length-1;i++){
		
		
				var row = Ti.UI.createTableViewRow({height:200,width:'auto',
				backgroundColor: 'black'			
					});
					
	var screenName = elements.item(i);
	//~ alert(screenName.text);
	var screenname = Ti.UI.createLabel({
		height:'auto',
		width:'auto',
		top:20,
		text:screenName.text
	});
			//~ Ti.UI.currentWindow.add(screenname);

			//~ var textarea = Ti.UI.createTextArea({borderRadius:5,borderWidth:2,borderColor:'#999',backgroundColor:'#111',color:'yellow',bottom:10,left:10,right:10,height:300,font:{fontFamily:'courier',fontSize:10}});
			//~ textarea.value = this.responseText;
			row.add(screenname);
			data1[i] = row;	
			//~ Ti.UI.currentWindow.add(textarea);
	}
			var tableview = Titanium.UI.createTableView({data:data1, top: 50,
					backgroundColor: 'black'
				});		
				
			Ti.UI.currentWindow.add(tableview);
				tableview.addEventListener('click',function(e){
					
					alert(e.index);
					});
				
				
	};


// open the client
xhr.open('GET','http://192.168.1.32:3000/session');

// send the data
xhr.send();
