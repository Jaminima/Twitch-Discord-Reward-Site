// JavaScript Document
var AccountDetails,
	MyCurrencies,
	MyBots;

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
			else { document.location.href="./signin.html"; }
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
				document.getElementById("CurrencyDetails").innerHTML=JSON.stringify(MyCurrencies);
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

function SignOut(){
	document.cookie="";
	document.location.href="./signin.html";
}

function DeleteAccount(){
	if (window.confirm("Are you sure you want to delete your account?")) {
	} else { return; }
	fetch("https://owlcoin.co.uk/webapi/login/delete",
		  {method: 'post',
		   headers:[["AccessToken",document.cookie]]}).then(function(RespData){
		RespData.json().then(function(JRespData){
			if (JRespData["Code"]==200){
				document.location.href="./signup.html"
			}
			else {
				window.alert("Failed to delete account!");
			}
		});
	});
}