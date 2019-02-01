// JavaScript Document
function GetViewers(CID,SortBy){
	return fetch("https://owlcoin.co.uk/webapi/viewer", {
		method: 'get',
		headers: [
			["CurrencyID",CID],
			["Order",SortBy]
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