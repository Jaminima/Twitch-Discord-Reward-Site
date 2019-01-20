// JavaScript Document
var UserName,Email,RawPassword;

function Signin(){
	UserName=document.getElementById("UsernameField").value;
	Email=document.getElementById("EmailField").value;
	RawPassword=document.getElementById("PasswordField").value;
	fetch("https://owlcoin.co.uk/webapi/login",
		  {method: 'post',
		   headers:[["UserName",UserName],["Email",Email],["Password",RawPassword]]}).then(function(RespData){
		RespData.json().then(function(JRespData){
			if (JRespData["Code"]==200){
				document.getElementById("LoginMessage").innerHTML="SignedIn";
				document.cookie=JRespData["Data"]["AccessToken"];
			}
			else {document.getElementById("LoginMessage").innerHTML=JRespData["Message"];}
		});
	});
}