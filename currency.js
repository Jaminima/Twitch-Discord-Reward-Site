// JavaScript Document
function CreateCurrency(){
	fetch("https://owlcoin.co.uk/webapi/currency",
		  {method: 'post',
		   headers:[["AccessToken",document.cookie]]}).then(function(RespData){
		RespData.json().then(function(JRespData){
			if (JRespData["Code"]==200){
				GetCurrencies();
			}
			else { window.alert("Unable to create currency!"); }
		});
	});
}