// JavaScript Document
var LoginLogout=document.getElementById("Login/Logout"),
	SignUpProfile=document.getElementById("SignUp/Profile"),
	OverlayButton=document.getElementById("OverlayButton"),
	Overlay=document.getElementById("Overlay"),
	OverlayMessage=document.getElementById("OverlayMessage");
SetProfileBar();

function SetProfileBar(){
	var CookieData=DataFromCookies();
	GetCurrentLogin(CookieData["Token"],CookieData["ID"]).then(
		function(LoginData){
			if (LoginData!=null){
				LoginLogout.innerHTML="Logout";
				LoginLogout.onclick=PerformLogout;
				SignUpProfile.innerHTML="My Profile";
				SignUpProfile.onclick=GotoProfile;
			}
			else {
				LoginLogout.innerHTML="Login";
				LoginLogout.onclick=DrawSignIn;
				SignUpProfile.innerHTML="SignUp";
				SignUpProfile.onclick=DrawSignUp;
			}
		}
	);
}

function PageForceSignedIn(){
	var CookieData=DataFromCookies();
	GetCurrentLogin(CookieData["Token"],CookieData["ID"]).then(
		function(LoginData){
			if (LoginData!=null){
			}
			else {
				location.href="/";
			}
		}
	);
}

function HideOverlay(){
	document.getElementById("OverlayUsernameField").value="";
	document.getElementById("OverlayEmailField").value="";
	document.getElementById("OverlayPasswordField").value="";
	document.getElementById("Overlay").style.display="none";
}

function PanelClicked(activity){
	var event = activity ? activity : window.event;
    if (event.stopPropagation) {event.stopPropagation();}
    else {event.cancelBubble=true;}
    return false;
}

function DrawSignUp(){
	Overlay.style.display="block";
	OverlayButton.onclick=PerformSignUp;
	OverlayButton.value="Sign Up";
}
function DrawSignIn(){
	Overlay.style.display="block";
	OverlayButton.onclick=PerformSignIn;
	OverlayButton.value="Sign In";
}

function PerformSignUp(){
	var UserName=document.getElementById("OverlayUsernameField").value,
		Email=document.getElementById("OverlayEmailField").value,
		RawPassword=document.getElementById("OverlayPasswordField").value;
	SignUp(UserName,Email,RawPassword).then(
		function(SignUpData){
			if (SignUpData["Code"]==200){
				PerformSignIn();
			}
			else { OverlayMessage.innerHTML=SignUpData["Message"].replace("Bad Request, ","").replace("header",""); }
		}
	);
}

function PerformSignIn(){
	var UserName=document.getElementById("OverlayUsernameField").value,
		Email=document.getElementById("OverlayEmailField").value,
		RawPassword=document.getElementById("OverlayPasswordField").value;
	Login(UserName,Email,RawPassword).then(
		function(SignInData){
			if (SignInData["Code"]==200){
				document.cookie="Token="+SignInData["Data"]["AccessToken"]+";path=/";
				document.cookie="ID="+SignInData["Data"]["ID"]+";path=/";
				SetProfileBar();
				HideOverlay();
			}
			else { OverlayMessage.innerHTML=SignInData["Message"].replace("Bad Request, ","").replace("header",""); }
		}
	);
}

function PerformLogout(){
	if (window.confirm("Are you sure you want to sign out?")) {
		document.cookie="ID=;";
		document.cookie="Token=;"
		document.location.href=".";
	} 
	else { return; }
}

function GotoProfile(){

}