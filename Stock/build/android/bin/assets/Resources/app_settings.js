

Titanium.App.Properties.setString("baseURL" ,"http://mpsweden.mine.nu/api/api.php?format=json");
Titanium.App.Properties.setString("articleImageUrl" ,"http://pictures.infostockholm.se/info/");
Titanium.App.Properties.setString("eventImageUrl" ,"http://pictures.infostockholm.se/info/");
Titanium.App.Properties.setString("base_searchimage_url" ,"http://pictures.infostockholm.se/foretagsbilder/");


//Array.contains
Array.prototype.contains = function(obj) {
    var i = this.length;
    while (i--) {
        if (this[i] == obj) {
            return true;
        }
    }
    return false;
};

//unicode decimal representation to character representation

/**
*
*  UTF-8 data encode / decode
*  http://www.webtoolkit.info/
*
**/
 
var Utf8 = {
 
	// public method for url encoding
	encode : function (string) {
		string = string.replace(/\r\n/g,"\n");
		var utftext = "";
 
		for (var n = 0; n < string.length; n++) {
 
			var c = string.charCodeAt(n);
 
			if (c < 128) {
				utftext += String.fromCharCode(c);
			}
			else if((c > 127) && (c < 2048)) {
				utftext += String.fromCharCode((c >> 6) | 192);
				utftext += String.fromCharCode((c & 63) | 128);
			}
			else {
				utftext += String.fromCharCode((c >> 12) | 224);
				utftext += String.fromCharCode(((c >> 6) & 63) | 128);
				utftext += String.fromCharCode((c & 63) | 128);
			}
 
		}
 
		return utftext;
	},
 
	// public method for url decoding
	decode : function (utftext) {
		var string = "";
		var i = 0;
		var c = c1 = c2 = 0;
 
		while ( i < utftext.length ) {
 
			c = utftext.charCodeAt(i);
 
			if (c < 128) {
				string += String.fromCharCode(c);
				i++;
			}
			else if((c > 191) && (c < 224)) {
				c2 = utftext.charCodeAt(i+1);
				string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
				i += 2;
			}
			else {
				c2 = utftext.charCodeAt(i+1);
				c3 = utftext.charCodeAt(i+2);
				string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
				i += 3;
			}
 
		}
 
		return string;
	}
 
}



/**
* Convert a string to character references.
*
* @example "JavaScript".toCharRefs()
* @result "&#74;&#97;&#118;&#97;&#83;&#99;&#114;&#105;&#112;&#116;"
*
* @name toCharRefs
* @return String
*/
String.prototype.toCharRefs = function() {
	var charRefs = [];

	var codePoint;
	for( var i = 0; i < this.length; i++ ) {
		codePoint = this.charCodeAt(i);

		//if is high surrogate
		if( 0xD800 <= codePoint && codePoint <= 0xDBFF ) {
			i++;
			codePoint = 0x2400 + ((codePoint - 0xD800) << 10) + this.charCodeAt(i);
		}

		charRefs.push( '&#' + codePoint + ';' );
	}

	return charRefs.join('');
};

/**
* Convert character references to a string.
*
* @example String.fromCharRefs("&#74;&#97;&#118;&#97;&#83;&#99;&#114;&#105;&#112;&#116;")
* @result "JavaScript"
*
* @name fromCharRefs
* @return String
*/
String.fromCharRefs = function(str) {
	var element = document.createElement("div");
	element.innerHTML = str;
	return element.firstChild.data;
};

//This version requires E4X support:
String.fromCharRefs2 = function(str) {
	return XML(str).toString();
};



//helper methods



function log(message)
{
	Titanium.API.info(message );
}
function log_and_show(message)
{
	log(message);
	alert(message);
}

function xhr_fetch(url)
{
	var data="";
	var xhr = Titanium.Network.createHTTPClient();
    xhr.setTimeout(10000);

	xhr.onload = function() {
	//Titanium.API.info('XML: ' + this.responseXML + ' Text: ' + this.responseText);
	data = this.responseText;
	
	log(this.readyState);
	log(' JSON: ' + this.responseText);
	};

	xhr.open('GET', url);
	xhr.send(); // Sending NO data
/*
var data = xhr_fetch(url);
	log(' JSON: ' + data);
	
	try{
var	parsed_data= 	eval('('+ data+')'); //JSON.parse(data);
		log(parsed_data);
	}catch(e){
		log("exception: " + e);
	}
*/	
	return data;
}


function xhr_URL_test(url){
	var xhr = Titanium.Network.createHTTPClient();

	xhr.onload = function() {
	var return_data = this.responseText;
	try{
		
		//remove extra characters
		data =  return_data.substring(2);
		
		var	parsed_data= 	eval('('+ data+')'); //JSON.parse(data);
		log(parsed_data);
	}catch(e){
		log("exception: " + e);
	}
	
	};

	xhr.open('GET', url);
	xhr.send(); // Sending NO data	
}

//Cache implementation
function read_cache(file_name)
{
   var data = Titanium.Filesystem.getApplicationDataDirectory()+'/'+file_name;
   data = Titanium.Filesystem.getFile(data);
 
   return data.read();
};
 
function write_cache(file_name, data)
{
   var file_data = Titanium.Filesystem.getApplicationDataDirectory()+'/'+file_name;
   file_data = Titanium.Filesystem.getFile(file_data);
 
   var mod_data = Titanium.Filesystem.getApplicationDataDirectory()+'/'+file_name+'.mod';
   mod_data = Titanium.Filesystem.getFile(mod_data);
 
   date_current = new Date();
   date_current_json = "{ \"date\" : \""+date_current+"\"}";
 
   file_data.write(data);
   mod_data.write(date_current_json);
 
   return;
};
 
function get_cache_mod_date (file_name)
{
   var mod_data = Titanium.Filesystem.getApplicationDataDirectory()+'/'+file_name+'.mod';
   mod_data = Titanium.Filesystem.getFile(mod_data);
 
   if (mod_data.exists() == 0)
   {
      return false;
   } else
   {
      return JSON.parse(mod_data.read()).date;
   }
};
 
function check_cache (file_name, offset)
{
   file_date = new Date(get_cache_mod_date(file_name));
   offset_date = new Date();
   offset_date.setHours(offset_date.getHours()-offset);
 
   if (file_date == false)
   {
      return true;
   } else if (file_date < offset_date)
   {
      return true;
   } else
   {
      return false;
   }
};






//function definitions

function supported_languages()
{
	var l = new Array("eng","sv","tys","jap","rys","fra","spa");
	return l;
}

function supported_api_methods()
{
	var m = new Array("frontpage_articles","events","categories","search","customers");
	return m;
}

function current_language()
{
	return Titanium.App.Properties.getString('language');
}

function set_language(language)
{
var l = supported_languages();
	if( l.contains(language))
	{
	Titanium.App.Properties.setString('language',language);
	log("set language: " + language);
	}else{
		log("invalid language set attempted: " +language);
	}
	
	
	
	
}

function base_url()
{	
	return Titanium.App.Properties.getString("baseURL");
}

function base_image_url()
{
 	return Titanium.App.Properties.getString("eventImageUrl");
	
}

function base_searchimage_url()
{
 	return Titanium.App.Properties.getString("searchUrl");
	
}

function build_url(method)
{
	var url = base_url() +"&data="+method+"&lng=" + current_language();
	log(url);
	return  url;
	
	
}

function build_customer_url(method)
{
	var url = base_url() +"&data="+method;
	log(url);
	return  url;
	
	
}




function build_search_url(keyword){
    var url = base_url()+"&data=search&type=searchword&input="+keyword;
	log(url);
	return  url;

}


function build_subcateg_url(id){
	
	return base_url()+"&data=subcats1&lng="+current_language()+"&id_category=" + id;
}


function build_subcateg_url2(id){
	
	return base_url()+"&data=subcats2&lng="+current_language()+"&id_category=" + id;
}


function localization(param)
{
var translations = {
	
	
}
	
	
}



function get_language_fullname(lang)
		{
			var message = "";
			switch (lang) {
			   case "eng": message = "English"; break;
			   case 'sv': message = "Sweden"; break;
			   case 'tys': message = "Turkish"; break;
			   case 'jap': message = "Japanese"; break;
			   case 'rys': message = "Russian"; break;
			   case 'fra': message = "French"; break;
			   case 'spa': message = "Spanish"; break;
			}
			return message;
		}


//localised content
//tab headers, titles etc

function getsearchname()
		{
			var message = "";
			switch (current_language()) {
			   case "eng": message = "Search"; break;
			   case 'sv': message = "Sök"; break;
			   case 'tys': message = "Arama"; break;
			   case 'jap': message = "検索"; break;
			   case 'rys': message = "Поиск"; break;
			   case 'fra': message = "Rechercher"; break;
			   case 'spa': message = "Búsqueda"; break;
			}
			return message;
		}


		function gethistoryname()
				{
					var message = "";
					switch (current_language()) {
					   case "eng": message = "History"; break;
					   case 'sv': message = "Historia"; break;
					   case 'tys': message = "Geçmişi"; break;
					   case 'jap': message = "履歴"; break;
					   case 'rys': message = "История"; break;
					   case 'fra': message = "Histoire"; break;
					   case 'spa': message = "Historia"; break;
					}
					return message;
				}

function getnearestname()
	{
		var message = "";
		switch (current_language()) {
		   case "eng": message = "Nearest"; break;
		   case 'sv': message = "Närmaste"; break;
		   case 'tys': message = "En yakın"; break;
		   case 'jap': message = "最寄りの"; break;
		   case 'rys': message = "Ближайший"; break;
		   case 'fra': message = "Le plus proche"; break;
		   case 'spa': message = "Más cercana"; break;
		}
		return message;
	}


function getarticlename()
		{
			var message = "";
			switch (current_language()) {
			   case "eng": message = "Article"; break;
			   case 'sv': message = "Artikel"; break;
			   case 'tys': message = "Makale"; break;
			   case 'jap': message = "条"; break;
			   case 'rys': message = "Статья"; break;
			   case 'fra': message = "L'article"; break;
			   case 'spa': message = "Artículo"; break;
			}
			return message;
		}

	function getcustomername()
			{
				var message = "";
				switch (current_language()) {
				   case "eng": message = "Customer"; break;
				   case 'sv': message = "Kund"; break;
				   case 'tys': message = "Müşteri"; break;
				   case 'jap': message = "お客様"; break;
				   case 'rys': message = "Клиентов"; break;
				   case 'fra': message = "Client"; break;
				   case 'spa': message = "Cliente"; break;
				}
				return message;
			}
	
	function geteventname()
			{
				var message = "";
				switch (current_language()) {
				   case "eng": message = "Events"; break;
				   case 'sv': message = "Evenemang"; break;
				   case 'tys': message = "Olaylar"; break;
				   case 'jap': message = "イベント"; break;
				   case 'rys': message = "События"; break;
				   case 'fra': message = "Evénements"; break;
				   case 'spa': message = "Eventos"; break;
				}
				return message;
			}
	
	function getsettingsname()
			{
				var message = "";
				switch (current_language()) {
				   case "eng": message = "Settings"; break;
				   case 'sv': message = "Inställningar"; break;
				   case 'tys': message = "Ayarları"; break;
				   case 'jap': message = "設定"; break;
				   case 'rys': message = "Настройки"; break;
				   case 'fra': message = "Paramètres"; break;
				   case 'spa': message = "Configuración"; break;
				}
				return message;
			}

	
	function getstartname()
			{
				var message = "";
				switch (current_language()) {
				   case "eng": message = "Start"; break;
				   case 'sv': message = "Start"; break;
				   case 'tys': message = "Start"; break;
				   case 'jap': message = "[スタート]"; break;
				   case 'rys': message = "Начало"; break;
				   case 'fra': message = "Démarrer"; break;
				   case 'spa': message = "Inicio"; break;
				}
				return message;
			}			
			
//activity indicator
function activity_ind()

{
		var actInd = Titanium.UI.createActivityIndicator({
		height:50,
		width:10
	
});
	return actInd;
}
