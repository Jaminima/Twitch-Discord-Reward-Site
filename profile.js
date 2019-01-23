// JavaScript Document
var AccountDetails,
	MyCurrencies,
	MyBots;

CheckLoggedin();
LoadProfile();

function CheckLoggedin(){
	fetch("https://owlcoin.co.uk/webapi/login",
		  {method: 'get',
		   headers:[["AccessToken",document.cookie]]}).then(function(RespData){
		RespData.json().then(function(JRespData){
			if (JRespData["Code"]==200){
			}
			else { document.location.href="./signin.html"; }
		});
	});
}

function LoadProfile(){
	GetProfile().then(
		function (AccountData){
			AccountDetails = AccountData;
			GetCurrencies().then(
				function(CurrencyData){
					MyCurrencies=CurrencyData;
					if (MyCurrencies!=null){
						document.getElementById("CurrencyCount").innerHTML="You have "+MyCurrencies.length+" Currencies";
						document.getElementById("CurrencySet").innerHTML="";
						MyCurrencies.forEach(WriteCurrencyItem);
					}
					else { document.getElementById("CurrencyCount").innerHTML="You dont have any currencies"; }
				}
			);
			GetBots().then(
				function(BotData){
					MyBots=BotData;
					if (MyBots!=null){
						document.getElementById("BotCount").innerHTML="You have "+MyBots.length+" Bots";
						document.getElementById("BotSet").innerHTML="";
						MyBots.forEach(WriteBotItem);
					}
					else { document.getElementById("BotCount").innerHTML="You dont have any bots"; }
				}
			);
		}
	);
}

function DoCreateBot(){
	CreateBot().then(
		function(BotData){
			if (BotData!=null){
				LoadProfile();
			}
			else { window.alert("Failed to create bot!"); }
		}
	);
}

function DoCreateCurrency(){
	CreateCurrency().then(
		function(CurrencyData){
			if (CurrencyData!=null){
				LoadProfile();
			}
			else { window.alert("Failed to create currency!"); }
		}
	);
}

function GetProfile(){
	return fetch("https://owlcoin.co.uk/webapi/login", {
		method: 'get',
		headers: [
			["AccessToken",document.cookie]
		]
	}).then(function (RespData) {
		return RespData.json();
	}).then(function (JRespData) {
		if (JRespData["Code"] == 200) {
			return JRespData["Data"];
		} else {
			return null;
		}
	});
}

function WriteCurrencyItem(item){
	document.getElementById("CurrencySet").innerHTML+="<a href='./Currency.html?ID="+item["ID"]+"'>"+item["CommandConfig"]["CurrencyName"]+"</a><br>";
}

function WriteBotItem(item){
	var Name=item["BotName"];
	if (Name==""){Name=item["ID"];}
	document.getElementById("BotSet").innerHTML+="<a href='./Bot.html?ID="+item["ID"]+"'>"+Name+"</a><br>";
}

function SignOut(){
	document.cookie="";
	document.location.href="./signin.html";
}

function DeleteAccount(){
	if (window.confirm("Are you sure you want to delete your account?")) {
		SendDeleteAccount().then(
			function(DeleteData){
				if (DeleteData){
					document.location.href="./signup.html";
				}
				else { window.alert("Failed to delete account!"); }
			}
		);
	} 
	else { return; }
}

function SendDeleteAccount(){
	return fetch("https://owlcoin.co.uk/webapi/login/delete", {
		method: 'post',
		headers: [
			["AccessToken",document.cookie]
		]
	}).then(function (RespData) {
		return RespData.json();
	}).then(function (JRespData) {
		if (JRespData["Code"] == 200) {
			return true;
		} else {
			return false;
		}
	});
}