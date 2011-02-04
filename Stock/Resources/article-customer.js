
Titanium.include("app_settings.js");
//~ Titanium.UI.setBackgroundColor('black');

log("current file: article_customer.js");
log(current_language());


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
				var row = Ti.UI.createTableViewRow({height:80,backgroundColor: '#000'});
				
				var label_articles = Ti.UI.createLabel({
					text: obj_event['posts'][i]['post']['textrubrik_'+ current_language()],
					left:50,
					top: (5),
					bottom:5,
					right:60,
					//~ color: 'white',
					backgroundColor: 'black'				
				});
				
					var image_article = Ti.UI.createImageView({
							image: base_image_url()+ obj_event['posts'][i]['post']['bild'],
							right:15,
							height:30,
							width:20
		});
		var image= Ti.UI.createImageView({
			image: 'arrow-right-double-2.png',
			right:2,
			height:70,
			width:64
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
						title:obj_event['posts'][e.index]['post']['textrubrik_'+ current_language()],
						backgroundColor:'#000'
					   });	

			xhr.onload = function()
			{	
				actInd.show();  			
		  	var desc= Titanium.UI.createLabel({
			        text: obj_event['posts'][e.index]['post']['text_'+ current_language()],
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
					log(obj_event['posts'][e.index]['post']['text_'+ current_language()]);
			
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
		
xhr.open("GET",build_url("frontpage_articles"));
		  xhr.send();
		  window_desc_articles.open({modal:true}); 
		}); 
	}; //if null

xhr.open("GET",build_url("frontpage_articles"));
xhr.send();

});



/*---------------------------------Customer search starts----------------------------- */

 button_customer.addEventListener('click',function()
 {
xhr.onload = function()
{
actInd.show();
log('loaded button_customer');
var CustomerFullText = this.responseText;
CustomerText = CustomerFullText.substring(6);//customerFullText.substring(6,(customerFullText.length));	
try {
  var  obj_customer = eval('('+ CustomerText+')');
 }
 catch (exception) {
  //It's advisable to always catch an exception since eval() is a javascript executor...
 log(exception)
  obj_customer = null;
 }

if (obj_customer) {
  //this is json
 log("-------- this is valid json--------------")
 var obj_customer = eval('('+ CustomerText+')'); //JSON.parse(CustomerText);
//log(obj_Customer);
var data = [];
for(var i=0;i<obj_customer['posts'].length;i++)	
{			
	var row_customer = Ti.UI.createTableViewRow({
		height:80,
		color:'black'
		});
	var label = Ti.UI.createLabel({
		text: obj_customer['posts'][i]['post']['foretagsnamn'],//['textrubrik_'+current_language()],
		left:72,
		top: (5),
		bottom:5,
		Color: 'white',
		right:5				
	});

	var image_customer = Ti.UI.createImageView({
		image: (base_searchimage_url()+ obj_customer['posts'][i]['post']['bild'].split(',')[0]),
		left:5,
		height:60,
		width:60
	});
	row_customer.add(image_customer);
	row_customer.add(label);
	data[i] = row_customer;		
	buttonPosition += 5;
}	
var table_customer = Titanium.UI.createTableView({
	data:data,
	top: 50,
	backgroundColor: 'black'
});		
window_article_customer.add(table_customer);
actInd.hide();

}
else
{
//		alert("No Valid JSON");
	var lab_err = Ti.UI.createLabel({
		text:'No Valid JSON',
			top:200, 
		//	left:12,
			height:40,
			width:150,
			color:'white'			
	});
	window_article_customer.add(lab_err);
	
	
log("------------ not valid json ----------");
}

var table_customer = Titanium.UI.createTableView({
 data:data,
 top: 50,
 backgroundColor: 'black'
});

table_customer.addEventListener('click', function(e)
						{
								actInd.show();
							
									var window_desc_customer = Titanium.UI.createWindow(
									{  
									title:obj_customer['posts'][e.index]['post']['text_'+current_language()],
									backgroundColor:'black'
									});
								
									var scrollView_customer = Titanium.UI.createScrollView({
									contentHeight:'auto',
								//	top:50,
									bottom:100,
									showVerticalScrollIndicator:true,
									showHorizontalScrollIndicator:true
									});
						xhr.onload = function()
						{	
									var CustomerFullText = this.responseText;
									CustomerText = CustomerFullText.substring(6);//CustomerFullText.substring(6,(CustomerFullText.length));
								    obj_customer = JSON.parse(CustomerText);

						var desc=Titanium.UI.createLabel({
									text: obj_customer['posts'][e.index]['post']['information_'+current_language()],
									top: 250,
									Color:"white",
									right:5	
						});

						var image_desc_customer = Ti.UI.createImageView({
									image:(base_searchimage_url()+ obj_customer['posts'][e.index]['post']['bild'].split(',')[0]), //base_image_url()+obj_customer['posts'][e.index]['post']['bild'],
									top:20,
									//bottom:20,
									height:150,
									width:150
						});
									window_desc_customer.add(image_desc_customer);
                                    window_desc_customer.add(desc);
									
			         	var backButton_customer = Ti.UI.createButton({
					                top :15,
									right :10,
									title:'Back'
								});
					//window_desc_customer.add(backButton_customer);

			    	scrollView_customer.add(image_desc_customer);
					backButton_customer.addEventListener('click', function(){
					window_desc_customer.close();
					});
					window_desc_customer.leftNavButton = backButton_customer;
									actInd.hide();
									};

									xhr.onerror = function()
									{
								log('error');
									};
									xhr.open("GET",build_customer_url("customers"));
									xhr.send();
									window_desc_customer.open({modal:true});
				});
};

xhr.onerror = function()
{
log('error');
};

									xhr.open("GET",build_customer_url("customers"));
xhr.send();
});

/*---------------------------------Customer search ends----------------------------- */





window_articles.add(button_article);
window_articles.add(button_customer);