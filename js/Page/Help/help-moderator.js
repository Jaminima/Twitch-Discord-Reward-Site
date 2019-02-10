// JavaScript Document
var Currency;
LoadHelp();
function LoadHelp(){
	var CID;
	CID=new URL(window.location).searchParams.get("ID");
	if (CID==null){ window.alert("Missing ID in url"); window.location.href="/"; return null; }
	GetCurrency(CID).then(
		function(CurrencyData){
			Currency=CurrencyData;
			if (Currency!=null){ WriteHelp(); }
			else { window.alert("Invalid Currency ID"); window.location.href="/"; return null; }
		}
	);
}

function WriteHelp(){
	var Prefix=Currency["CommandConfig"]["Prefix"];
	for (Key in Currency["CommandConfig"]["CommandSetup"]["Moderator"]){
		WriteCommand("",Key,Currency["CommandConfig"]["CommandSetup"]["Moderator"][Key]["Commands"],Prefix);
	}
	for (Key in Currency["CommandConfig"]["CommandSetup"]["NightBot"]["Moderator"]){
		WriteCommand("NightBot",Key,Currency["CommandConfig"]["CommandSetup"]["NightBot"]["Moderator"][Key]["Commands"],Prefix);
	}
}
function WriteCommand(PreKey, Key, CommandSet, Prefix) {
	var Element = document.getElementById(PreKey + Key + "Commands");
	if (Element != null && CommandSet != null && Key != "SimpleResponses") {
		CommandSet.forEach(
			function (Text) {
				if (Element.innerHTML != "") {
					Element.innerHTML += "<br>";
				}
				Element.innerHTML += Prefix + Text;
			}
		);
	}
}