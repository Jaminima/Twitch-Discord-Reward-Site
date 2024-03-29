// JavaScript Document
var UserName,Email,RawPassword;

CheckLoggedin();

function Signin(){
	UserName=document.getElementById("UsernameField").value;
	Email=document.getElementById("EmailField").value;
	RawPassword=document.getElementById("PasswordField").value;
	var Headers=[["Password",RawPassword]];
	if (UserName!="") {Headers.push(["UserName",UserName]);}
	if (Email!="") {Headers.push(["Email",Email]);}
	fetch("https://owlcoin.co.uk/webapi/login",
		  {method: 'post',
		   headers:Headers}).then(function(RespData){
		RespData.json().then(function(JRespData){
			if (JRespData["Code"]==200){
				document.getElementById("LoginMessage").innerHTML="SignedIn";
				document.cookie=JRespData["Data"]["AccessToken"];
				document.location.href="./profile.html";
			}
			else {document.getElementById("LoginMessage").innerHTML=JRespData["Message"].replace("Bad Request, ","");}
		});
	});
}

function Signup(){
	UserName=document.getElementById("UsernameField").value;
	Email=document.getElementById("EmailField").value;
	RawPassword=document.getElementById("PasswordField").value;
	var Headers=[["Password",RawPassword]];
	if (UserName!="") {Headers.push(["UserName",UserName]);}
	if (Email!="") {Headers.push(["Email",Email]);}
	fetch("https://owlcoin.co.uk/webapi/signup",
		  {method: 'post',
		   headers:Headers}).then(function(RespData){
		RespData.json().then(function(JRespData){
			if (JRespData["Code"]==200){
				document.getElementById("LoginMessage").innerHTML="SignedUp";
				Signin();
			}
			else {document.getElementById("LoginMessage").innerHTML=JRespData["Message"].replace("Bad Request, ","");}
		});
	});
}

function CheckLoggedin(){
	fetch("https://owlcoin.co.uk/webapi/login",
		  {method: 'get',
		   headers:[["AccessToken",document.cookie]]}).then(function(RespData){
		RespData.json().then(function(JRespData){
			if (JRespData["Code"]==200){
				document.location.href="./profile.html";
			}
			else { }
		});
	});
}
