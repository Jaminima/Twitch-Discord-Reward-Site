// JavaScript Document
var AccountDetails,MyCurrencies,MyBots;
LoadProfile();

function LoadProfile(){
	fetch("https://owlcoin.co.uk/webapi/login",
		  {method: 'get',
		   headers:[["AccessToken",document.cookie]]}).then(function(RespData){
		RespData.json().then(function(JRespData){
			if (JRespData["Code"]==200){
				AccountDetails=JRespData["Data"];
				GetCurrencies();
				GetBots();
			}
		});
	});
}

function GetCurrencies(){
	fetch("https://owlcoin.co.uk/webapi/currency",
		  {method: 'get',
		   headers:[["LoginID",AccountDetails["ID"]]]}).then(function(RespData){
		RespData.json().then(function(JRespData){
			if (JRespData["Code"]==200){
				MyCurrencies=JRespData["Data"];
			}
		});
	});
}

function GetBots(){
	fetch("https://owlcoin.co.uk/webapi/bot",
		  {method: 'get',
		   headers:[["LoginID",AccountDetails["ID"]]]}).then(function(RespData){
		RespData.json().then(function(JRespData){
			if (JRespData["Code"]==200){
				MyBots=JRespData["Data"];
			}
		});
	});
}