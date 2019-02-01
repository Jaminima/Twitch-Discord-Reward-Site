// JavaScript Document
function CreateCurrency(){
	return fetch("https://owlcoin.co.uk/webapi/currency", {
		method: 'post',
		headers: [
			["AccessToken",document.cookie]
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

function GetCurrency(CID){
	return fetch("https://owlcoin.co.uk/webapi/currency", {
		method: 'get',
		headers: [
			["ID", CID]
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

function GetCurrencies(){
	return fetch("https://owlcoin.co.uk/webapi/currency", {
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