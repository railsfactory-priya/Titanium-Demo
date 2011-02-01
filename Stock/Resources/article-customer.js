
Titanium.include("app_settings.js");
//~ Titanium.UI.setBackgroundColor('black');

log("current file: article_customer.js");
//~ log(current_language());


//activity indicator
var actInd = Titanium.UI.createActivityIndicator({
message:'Loading',
height:50,
color:'white'
});

	var EventText, buttonPosition = 50;
	var window_articles = Titanium.UI.currentWindow;
	var xhr = Titanium.Network.createHTTPClient();


	var button_article = Titanium.UI.createButton({
 		title:'Article',
		top:10, 
		left:12,
		height:30,
		width:150
		//bottom:100
	});
    var button_customer = Titanium.UI.createButton({
	title:'Customer',
	top:10,
	right:5,
	height:30,
	width:150
    });

     button_article.addEventListener('click',function()
     {
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
				var row = Ti.UI.createTableViewRow({height:60,backgroundColor: '#000'});
				
				var label_articles = Ti.UI.createLabel({
					text: obj_event['posts'][i]['post']['textrubrik_eng'],
					left:50,
					top: (5),
					bottom:5,
					right:30,
					//~ color: 'white',
					backgroundColor: 'black'				
				});
				
					var image_article = Ti.UI.createImageView({
			image: base_image_url()+ obj_event['posts'][i]['post']['bild'],
			left:5,
			height:50,
			width:50
		});
		var image= Ti.UI.createImageView({
			image: 'arrow-right-double-2.png',
			right:10,
			height:20,
			width:20
		});
				row.add(image_article);
				row.add(image);
				row.add(label_articles);
				data1[i] = row;		
				buttonPosition += 5;
			}
		//}
			var tableview = Titanium.UI.createTableView({data:data1, top: 50,backgroundColor: 'black'});		
			window_articles.add(tableview);
			actInd.hide();
			
			tableview.addEventListener('click', function(e)
					{
					var window_desc_articles = Titanium.UI.createWindow({
						title:obj_event['posts'][e.index]['post']['textrubrik_eng'],
						backgroundColor:'#000'
					   });	

			xhr.onload = function()
			{	
				actInd.show();  			
		  	var desc= Titanium.UI.createLabel({
			        text: obj_event['posts'][e.index]['post']['text_eng'],
							top: 250,
							//~ Color:"white",
							right:5,
							height: 'auto'
							});
							
				
							var image_desc_article = Ti.UI.createImageView({
										image: base_image_url()+obj_event['posts'][e.index]['post']['bild'],
										top:20,
										height:150,
										width:150
							});
										window_desc_articles.add(image_desc_article);


	//~ var scrollView = Titanium.UI.createScrollView({
					//~ contentWidth:320,
					//~ contentHeight:'auto',
					//~ top:0,
					//~ showVerticalScrollIndicator:true,
					//~ showHorizontalScrollIndicator:true
			//~ }); 
						
						
					//~ scrollView.add(desc);
					//~ scrollView.add(image_articles);
					log(obj_event['posts'][e.index]['post']['text_eng']);
			
 		  	var backButton_articles = Ti.UI.createButton({
								top :15,
								right :10,    
							  title:'Back'
								});
								window_desc_articles.add(backButton_articles);
								backButton_articles.addEventListener('click', function(){
								window_desc_articles.close();
								});

								window_desc_articles.leftNavButton = backButton_articles;
								//~ window_desc_articles.add(desc);
								//~ window_desc_articles.add(image_articles);
								window_desc_articles.add(desc);
								 

								actInd.hide();
			};				 
		
			xhr.open("GET","http://mpsweden.mine.nu/api/api.php?format=json&data=frontpage_articles&lng=eng");
		  xhr.send();
		  window_desc_articles.open({modal:true}); 
		}); 
	}; //if null

xhr.open("GET","http://mpsweden.mine.nu/api/api.php?format=json&data=frontpage_articles&lng=eng");
xhr.send();

});

window_articles.add(button_article);
window_articles.add(button_customer);