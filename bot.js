// JavaScript Document
function CreateBot(){
	return fetch("https://owlcoin.co.uk/webapi/bot", {
		method: 'post',
		headers: [
			["AccessToken",document.cookie],
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

function GetBots(){
	return fetch("https://owlcoin.co.uk/webapi/bot", {
		method: 'get',
		headers: [
			["LoginID",AccountDetails["ID"]]
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