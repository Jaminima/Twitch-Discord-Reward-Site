// JavaScript Document
function CreateBot(){
	fetch("https://owlcoin.co.uk/webapi/bot",
		  {method: 'post',
		   headers:[["AccessToken",document.cookie]]}).then(function(RespData){
		RespData.json().then(function(JRespData){
			if (JRespData["Code"]==200){
				GetBots();
			}
			else { window.alert("Unable to create bot!"); }
		});
	});
}