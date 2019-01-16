// JavaScript Document
var UserName,Email,RawPassword;

function PerformLogin(){
	UserName=document.getElementById("UsernameField").value;
	Email=document.getElementById("EmailField").value;
	RawPassword=document.getElementById("PasswordField").value;
	fetch("http://localhost:775/signup",
		  {method: 'post',
		   headers:[["UserName",UserName],["Email",Email],["Password",RawPassword]]}).then(function(RespData){
		RespData.json().then(function(JRespData){
			if (JRespData["Code"]==200){
				document.getElementById("LoginMessage").innerHTML="SignedUp";
			}
			else {document.getElementById("LoginMessage").innerHTML=JRespData["Message"];}
		});
	});
}