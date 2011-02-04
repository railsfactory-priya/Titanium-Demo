 Titanium.include("app_settings.js");

log("current file: search.js");

var SearchText;

var contents =[], obj_search, jsonText_search, position_category = 0;

//activity indicator
var actInd = Titanium.UI.createActivityIndicator({
height:50,
width:10
});
actInd.show();

var xhr = Titanium.Network.createHTTPClient();
//var xhr2 = Titanium.Network.createHTTPClient();

xhr.onload = function()
{
//category start
	log('loaded');
	
	var fullText = this.responseText;
	
	jsonText_search = fullText.substring(6,(fullText.length));
	obj_search = eval('('+ jsonText_search+')'); //JSON.parse(jsonText_search);
	
	var current_window = Titanium.UI.currentWindow;
	var scrollView_category = Titanium.UI.createScrollView({
			contentHeight:'auto',
			top:50,
			showVerticalScrollIndicator:true,
			showHorizontalScrollIndicator:true
			});
Titanium.UI.currentWindow.add(scrollView_category);

var search = Titanium.UI.createSearchBar({
		barColor:'#000',
		showCancel:true,
		height:43,
		top:0
		});

search.addEventListener('cancel', function(e){
        log('search bar cancel fired');
        search.blur();
});
search.addEventListener('change', function(e){
        log('search bar: you type ' + e.value + ' act val ' + search.value);
});
search.addEventListener('focus', function(e){
log('search bar: focus received');
});
search.addEventListener('blur', function(e){
	log('search bar:blur received');
});
current_window.add(search);


search.addEventListener('return', function(e){
    search.blur();

var window_result_search = Titanium.UI.createWindow({backgroundColor:'black'});

var button_back_search = Ti.UI.createButton({
					     	 top :15,
							right :10,
							title:'Back'
						});
					//	window_result_search.add(button_back_search);

						button_back_search.addEventListener('click', function(){
						window_result_search.close();
						});

						window_result_search.leftNavButton = button_back_search;


		xhr.onload = function()
			{
				log('loaded');
				var data = [];
				actInd.show();
				var SearchFullText = this.responseText;
				SearchText = SearchFullText.substring(6,(SearchFullText.length));
					if(SearchText=='{"posts":null}') {
						//alert('no keywords');
							var label_err = Ti.UI.createLabel({
						        text:' No Keywords found',
					       		bottom:5,
								left:60,
								color:'white'
						     });	
					//	var win_err=Titanium.UI.createWindow();
					//	alert("new");
					//current_window_search.hide();
					window_result_search.open({modal:true}); 


						window_result_search.add(label_err);

		}
				obj_search = eval('('+ SearchText+')'); //JSON.parse(SearchText);
				for(var i=0;i<obj_search['posts'].length;i++)
					{
						var row_search = Ti.UI.createTableViewRow({height:80});
						var label = Ti.UI.createLabel({
					       	    text: obj_search['posts'][i]['post']['foretagsnamn'],
					       		bottom:5,
								left:60,
								color:'white'
			
						});
							var label1 = Ti.UI.createLabel({
					      		    text: obj_search['posts'][i]['post']['gata'],
									left:60,
									top:(50),
									color:'white'
			
						});
							var label2 = Ti.UI.createLabel({
						    	text: obj_search['posts'][i]['post']['postnr'],
								bottom:5,
								top: (50),
								color:'white'
							});
							var label3 = Ti.UI.createLabel({
						        text: obj_search['posts'][i]['post']['ort'],
								top:(5),
								color:'white',
	
							});
							var image_search = Ti.UI.createImageView({
							image:  base_searchimage_url()+obj_search['posts'][i]['post']['logo'],
							left:5,
							height:60,
							width:60
						});
						row_search.add(image_search);
						row_search.add(label);
						row_search.add(label1);
					//	row_search.add(label2);
					//	row_search.add(labe34);
						data[i] = row_search;		
		
					}
					var tableview_search = Titanium.UI.createTableView({
						 data:data,
						 top: 50,
						 backgroundColor:'black'
												 });		
					window_result_search.add(tableview_search);
					window_result_search.open({modal:true}); 
					//actInd.hide();
					tableview_search.addEventListener('click',function(e)
					{
						var window_desc_search = Titanium.UI.createWindow({
								backgroundColor:'#000'
								});

									xhr.onload = function()
										{	
											log("loaded..");
									var data_desc = [];
									actInd.show();


										for(var i=0;i<obj_search['posts'].length;i++)
										{



											var label_search = Ti.UI.createLabel({
										        text: obj_search['posts'][e.index]['post']['foretagsnamn'],
									       		bottom:400,
												font:{fontSize:20, fontFamily:"Courier"},
									            //top:100,
												left:60,
												color:'white'
										     });
												var label1_search = Ti.UI.createLabel({
										        text: obj_search['posts'][e.index]['post']['gata'],
												left:60,
												top:(100),
												color:'white'

											});
											var label2_search = Ti.UI.createLabel({
										    	text: obj_search['posts'][e.index]['post']['postnr'],
													left:90,
													top: (200),
													//bottom:50,
													right:10,
												color:'white'

											});
											var label3_search = Ti.UI.createLabel({
										    	text: obj_search['posts'][e.index]['post']['ort'],
												left:72,
												top: (250),
											//	bottom:5,
												right:50,
												color:'white'

											});
											var image1_search = Ti.UI.createImageView({
												image:base_searchimage_url()+obj_search['posts'][e.index]['post']['logo'],
												height:150,
												width:150,
												top:50
											});
											window_desc_search.add(image1_search);
											window_desc_search.add(label_search);
											window_desc_search.add(label1_search);
											window_desc_search.add(label2_search);
											window_desc_search.add(label3_search);
											data_desc[i] = window_desc_search;		


										}

											var backButton_search = Ti.UI.createButton({
																	 	top :15,
																		right :10,
																		title:'Back'
																	});
														            backButton_search.addEventListener('click', function(){
																	window_desc_search.close();
																	});

																	window_desc_search.leftNavButton = backButton_search;



												};


													xhr.onerror = function()
													{
												log('error');
													};

											xhr.open("GET",build_search_url(e.index));
											xhr.send();
											window_desc_search.open({modal:true});



							});
					};
				xhr.open("GET",build_search_url(e.value));
				xhr.send();
					});

				current_window.add(search);

	var button_category = new Array(20);
	for(var i=0;i<obj_search['posts'].length;i++)	{
		button_category[i] = Titanium.UI.createButton({
			title: obj_search['posts'][i]['post']['name_eng'],
			id:obj_search['posts'][i]['post']['cat_id'],
			top: (position_category + 60),
			left: 50,
			height: 40,
			width:200,
			value:"5",
			className:"5"
			});
			log(obj_search['posts'][i]['post']['cat_id']);
		position_category += 40;
			scrollView_category.add(button_category[i]);
			actInd.hide();

			

        button_category[i].addEventListener('click', function(e)
		{
//sub category fetch
					var s =String(e.source);
					var n = s.split(' ');
					var n1 = n[1].substring(0,6);

					log(e);
					log(n1);
					//log(parseInt(e));
					//log(JSON.stringify(e));
					//log(JSON.parse(e));
					//log(i);
					//log(this.id);
					//log(e.value);
					//log(e.className);
					//xhr_fetch(url);
				//	var URL;
				//	 URL1 = build_subcateg_url(n1); 
				//	 var URL2= build_subcateg_url2(n1);
				//	var fin_url= build_subcateg_url(n1)+build_subcateg_url2(n1);
					xhr.onload = function()
								{	

								log('loaded button with id: ' + n1);
								var subcategoryfulltext = this.responseText;
								log(this.responseText);
								var innerWinButtonPos = 0;
								subcategorytext = subcategoryfulltext.substring(6,(subcategoryfulltext.length));
								obj_subcategory = eval('('+ subcategorytext+')'); // JSON.parse(subcategorytext);
								
								var window_subcategory = Titanium.UI.createWindow({  
									title:'SubCategories',
								backgroundColor:'black'
								});
								var scrollView_subcategory = Titanium.UI.createScrollView({
												contentHeight:'auto',
									     		showVerticalScrollIndicator:true,
												showHorizontalScrollIndicator:true
												});
												window_subcategory.add(scrollView_subcategory);
			
								if( obj_subcategory['posts'] != null){
								//	var button_subcategory ;//= new Array(20);
								for(var i=0;i<obj_subcategory['posts'].length;i++)	
								{
								
							             var   button_subcategory = Titanium.UI.createButton({
											title: obj_subcategory['posts'][i]['post']['name_eng'],
											top: (innerWinButtonPos + 60),
											left: 50,
											height: 40,
											width:200 
										});
								innerWinButtonPos += 40;	
								log(obj_subcategory['posts'][i]['post']['name_eng']);
								scrollView_subcategory.add(button_subcategory);
								}	
								}//null
				
								var button_back_subcategory= Ti.UI.createButton({
															top :15,
															right :10,
															title:'Back'
															});
															//window_subcategory.add(button_back_subcategory);
								button_back_subcategory.addEventListener('click', function(){
															window_subcategory.close();
															});

								window_subcategory.leftNavButton = button_back_subcategory;
								

							    window_subcategory.open({modal:true});
									
							//		 button_subcategory.addEventListener('click', function(e)
							//			{
							//		log("hi");
							//		});
									
									};
			
							      			
								xhr.onerror = function()
											{
												log('error');
											};	
									//~ var build_sub1_2_url=[];
									//~ build_sub1_2_url.push(build_subcateg_url(n1));
									//~ build_sub1_2_url.push(build_subcateg_url2(n1));	
										
								
									//~ log(build_sub1_2_url[1]);
									//for(var j = 0;j<=1;j++)
									//{
								//xhr.open("GET",build_sub1_2_url[1]); 
								xhr.open("GET","http://mpsweden.mine.nu/api/api.php?format=json&data=areas1&lng=eng&id_category="+n1);//+"&id_subcategory="+this.id);
							    xhr.send();
								//}
							});	 


			}
			};

xhr.onerror = function()
{
log('error');
};

			xhr.open("GET","http://mpsweden.mine.nu/api/api.php?format=json&data=categories&lng=eng");
xhr.send();


