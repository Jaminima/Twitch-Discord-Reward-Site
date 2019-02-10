// JavaScript Document
var CookieData=DataFromCookies();
var LoginObject,CurrenciesObject,BotsObject;

LoadProfile();

function LoadProfile(){
	GetCurrentLogin(CookieData["Token"],CookieData["ID"]).then(
		function (LData){
			LoginObject=LData;
			GetCurrencies(LoginObject["ID"]).then(
				function(CData){
					CurrenciesObject=CData;
				}
			);
			GetBots(LoginObject["ID"]).then(
				function(BData){
					BotsObject=BData;
				}
			);
		}
	);
}