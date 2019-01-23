// JavaScript Document
var Currency;
LoadHelp();
function LoadHelp(){
	var CID;
	CID=new URL(window.location).searchParams.get("ID");
	if (CID==null){ window.alert("Missing ID in url"); window.location.href="./signin.html"; return null; }
	GetCurrency(CID).then(
		function(CurrencyData){
			Currency=CurrencyData;
			if (Currency!=null){ WriteHelp(); }
			else { window.alert("Invalid Currency ID"); window.location.href="./signin.html"; return null; }
		}
	);
}

function WriteHelp(){
	var Prefix=Currency["CommandConfig"]["Prefix"];
	for (Key in Currency["CommandConfig"]["CommandSetup"]){
		WriteCommand("",Key,Currency["CommandConfig"]["CommandSetup"][Key]["Commands"],Prefix);
	}
	for (Key in Currency["CommandConfig"]["CommandSetup"]["NightBot"]){
		WriteCommand("NightBot",Key,Currency["CommandConfig"]["CommandSetup"]["NightBot"][Key]["Commands"],Prefix);
	}
	var SimpleResponsesElement = document.getElementById("SimpleResponsesCommands");
	for (Key in Currency["CommandConfig"]["CommandSetup"]["SimpleResponses"]["Commands"]){
		if (SimpleResponsesElement.innerHTML != "") {
			SimpleResponsesElement.innerHTML += "<br>";
		}
		SimpleResponsesElement.innerHTML+=Prefix+Key;
	}
}
function WriteCommand(PreKey, Key, CommandSet, Prefix) {
	var Element = document.getElementById(PreKey + Key + "Commands");
	if (Element != null && CommandSet != null && Key != "SimpleResponses") {
		CommandSet.forEach(
			function (Text) {
				if (Element.innerHTML != "") {
					Element.innerHTML += " ";
				}
				Element.innerHTML += Prefix + Text;
			}
		);
	}
}