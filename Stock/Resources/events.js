
Titanium.include("app_settings.js");

log("current file: events.js");
log(current_language());


//activity indicator
var actInd = Titanium.UI.createActivityIndicator({
message:'Loading',
height:50,
color:'white'
});

	var EventText, buttonPosition = 50;
	var window_events = Titanium.UI.currentWindow;
	var xhr = Titanium.Network.createHTTPClient();



xhr.onload = function()
{
			actInd.show();
			var EventFullText = this.responseText;
			EventText = EventFullText.substring(6); //EventFullText.substring(6,(EventFullText.length));
			obj_event = eval('('+ EventText+')'); // JSON.parse(EventText);
			var data1 = [];
			//if(	!obj_event){

			for(var i=0;i<obj_event['posts'].length;i++)
			{
				var row = Ti.UI.createTableViewRow({height:60,backgroundColor: 'black'});
				
				var label_events = Ti.UI.createLabel({
					text: obj_event['posts'][i]['post']['textrubrik_'+ current_language()],
					left:50,
					top: (5),
					bottom:5,
					right:60,
					color: 'white',
					backgroundColor: 'black'				
				});
					var image= Ti.UI.createImageView({
							image: 'arrow-right-double-2.png',
							right:2,
							height:70,
							width:64
					});
				var image_events = Ti.UI.createImageView({
					image: base_image_url() +obj_event['posts'][i]['post']['bild'],
					left:5,
					height:50,
					width:50
				});
		
				row.add(image_events);
				row.add(image);
				row.add(label_events);
				data1[i] = row;		
				buttonPosition += 5;
			}
		//}
			var tableview = Titanium.UI.createTableView({data:data1, top: 50,backgroundColor: 'black'});		
			window_events.add(tableview);
			actInd.hide();
			
			tableview.addEventListener('click', function(e)
					{
					var window_desc_events = Titanium.UI.createWindow({
						title:obj_event['posts'][e.index]['post']['textrubrik_'+ current_language()],
						backgroundColor:'#000'
					   });	

			xhr.onload = function()
			{	
				actInd.show();  			
		  	var desc= Titanium.UI.createLabel({
			        text: obj_event['posts'][e.index]['post']['text_'+ current_language()],
							top: 250,
							Color:"white",
							right:5,
							height: 'auto'
							});
							
				var image_desc_events = Ti.UI.createImageView({
										image: base_image_url()+obj_event['posts'][e.index]['post']['bild'],
										top:20,
										height:150,
										width:150
							});
										window_desc_events.add(image_desc_events);


	//~ var scrollView = Titanium.UI.createScrollView({
					//~ contentWidth:320,
					//~ contentHeight:'auto',
					//~ top:0,
					//~ showVerticalScrollIndicator:true,
					//~ showHorizontalScrollIndicator:true
			//~ }); 
						
						
					//~ scrollView.add(desc);
					//~ scrollView.add(image_events);
					log(obj_event['posts'][e.index]['post']['text_'+ current_language()]);
			
 		  	var backButton_events = Ti.UI.createButton({
								top :15,
								right :10,    
							  title:'Back'
								});
								window_desc_events.add(backButton_events);
								backButton_events.addEventListener('click', function(){
								window_desc_events.close();
								});

								window_desc_events.leftNavButton = backButton_events;
								//~ window_desc_events.add(desc);
								//~ window_desc_events.add(image_events);
								window_desc_events.add(desc);
								actInd.hide();
			};				 
		
xhr.open("GET",build_url("events"));
		  xhr.send();
		  window_desc_events.open({modal:true}); 
		}); 
	}; //if null

xhr.open("GET",build_url("events"));
xhr.send();
