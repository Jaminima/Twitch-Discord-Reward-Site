function DataFromCookies(){
	var Dictionary = {};
	var Cookies=document.cookie.split(";");
	for (var i=0;i<Cookies.length;i++){
		var Cookie=Cookies[i].split("=");
		Dictionary[Cookie[0].replace(" ","")]=Cookie[1];
	}
	return Dictionary;
}