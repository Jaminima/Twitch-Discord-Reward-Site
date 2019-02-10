// JavaScript Document
function CreateBot(AccessToken,ID){
	return fetch("https://owlcoin.co.uk/webapi/bot", {
		method: 'post',
		headers: [
			["AccessToken",AccessToken],
			["LoginID",ID],
			["BotName","DefaultName"]
		]
	}).then(function (RespData) {
		return RespData.json();
	}).then(function (JRespData) {
		if (JRespData["Code"] == 200) {
			return JRespData["Data"];
		} else {
			return null;;
		}
	});
}

function GetBots(LoginID){
	return fetch("https://owlcoin.co.uk/webapi/bot", {
		method: 'get',
		headers: [
			["LoginID",LoginID]
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