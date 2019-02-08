// JavaScript Document

PageForceSignedIn();
function GotoNightBot(){
	window.open("https://api.nightbot.tv/oauth2/authorize?response_type=code&client_id=3cc02672d864b818995df677b409edd9&redirect_uri=https://owlcoin.co.uk/webapi/nightbot/&scope=song_requests_queue+song_requests&state=CurrencyID="+new URL(window.location).searchParams.get("ID")+"+AuthToken="+DataFromCookies()["Token"],"_blank");
}