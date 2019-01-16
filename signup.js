// JavaScript Document
var UserName,Email,RawPassword;

function PerformLogin(){
	UserName=document.getElementById("UsernameField").value;
	Email=document.getElementById("EmailField").value;
	RawPassword=document.getElementById("PasswordField").value;
	fetch("http://localhost:4444/signup",
		  {headers:[["UserName",UserName],["Email",Email],["Password",RawPassword]]}
		  ,function(){
		
	});
}