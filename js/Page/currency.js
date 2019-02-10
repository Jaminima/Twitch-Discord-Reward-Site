// JavaScript Document

//PageForceSignedIn();

if (new URL(window.location).searchParams.get("ID")==null){
	//window.location.href="/Dev/Pages/profile.html";
}

function GotoNightBot(){
	window.open("https://api.nightbot.tv/oauth2/authorize?response_type=code&client_id=6ceab86f16ba11e55d0bbb4524205af9&redirect_uri=https://owlcoin.co.uk/webapi/nightbot/&scope=song_requests_queue+song_requests&state=currencyid="+new URL(window.location).searchParams.get("ID")+"+accesstoken="+DataFromCookies()["Token"],"_blank");
}
function GotoStreamLabs(){
	window.open("https://www.streamlabs.com/api/v1.0/authorize?client_id=8ORPRenm9wkZGlw2wAtkOCL5edI1N5RwjcqLK12h&redirect_uri=https://owlcoin.co.uk/webapi/streamlabs/&response_type=code&scope=donations.read+donations.create+alerts.create&state=currencyid="+new URL(window.location).searchParams.get("ID")+"+accesstoken="+DataFromCookies()["Token"],"_blank");
}
function GotoTwitch(){
	window.open("https://id.twitch.tv/oauth2/authorize?response_type=code&client_id=y4r6245w71pjz8jm6k85qob6ivufh2&redirect_uri=https://owlcoin.co.uk/webapi/twitch/&scope=channel_subscriptions+channel_editor&state=currencyid="+new URL(window.location).searchParams.get("ID")+"+accesstoken="+DataFromCookies()["Token"],"_blank");
}