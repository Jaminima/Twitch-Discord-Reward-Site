// JavaScript Document
var Currency;
LoadHelp();
function LoadHelp(){
	GetCurrency(1).then(
		function(CurrencyData){
			Currency=CurrencyData;
			WriteHelp();
		}
	);
}

function WriteHelp(){
	Currency["CommandConfig"]["CommandSetup"]["Balance"]["Commands"].forEach(
		function(Text){
			var Element=document.getElementById("BalanceCommands");
			if (Element.innerHTML!=""){ Element.innerHTML+=", "; }
			Element.innerHTML+=Text;
		}
	);
	Currency["CommandConfig"]["CommandSetup"]["Pay"]["Commands"].forEach(
		function(Text){
			var Element=document.getElementById("PayCommands");
			if (Element.innerHTML!=""){ Element.innerHTML+=", "; }
			Element.innerHTML+=Text;
		}
	);
}