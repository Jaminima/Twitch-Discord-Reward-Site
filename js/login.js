// JavaScript Document

function Login(UserName,Email,RawPassword){
	var Headers=[["Password",RawPassword]];
	if (UserName!="") {Headers.push(["UserName",UserName]);}
	if (Email!="") {Headers.push(["Email",Email]);}
	return fetch("https://owlcoin.co.uk/webapi/login", {
		method: 'post',
		headers: Headers
	}).then(function (RespData) {
		return RespData.json();
	}).then(function (JRespData) {
		return JRespData;
	});
}

function SignUp(UserName,Email,RawPassword){
	var Headers=[["Password",RawPassword]];
	if (UserName!="") {Headers.push(["UserName",UserName]);}
	if (Email!="") {Headers.push(["Email",Email]);}
	return fetch("https://owlcoin.co.uk/webapi/signup", {
		method: 'post',
		headers: Headers
	}).then(function (RespData) {
		return RespData.json();
	}).then(function (JRespData) {
		return JRespData;
	});
}

function GetCurrentLogin(AccessToken){
	return fetch("https://owlcoin.co.uk/webapi/login", {
		method: 'get',
		headers: [
			["AccessToken",AccessToken]
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