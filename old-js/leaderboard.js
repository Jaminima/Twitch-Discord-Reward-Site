// JavaScript Document
var CID,SortBy,Viewers,Limit=100;

LoadLeaderBoard();
function LoadLeaderBoard(){
	CID=new URL(window.location).searchParams.get("ID");
	if (CID==null){ window.alert("Missing ID in url"); window.location.href="./signin.html"; return null; }
	SortBy=new URL(window.location).searchParams.get("SortBy");
	if (SortBy==null){ SortBy="Balance"; }
	var NLimit=new URL(window.location).searchParams.get("Limit");
	if (NLimit!=null){
		NLimit=parseInt(NLimit);
		if (NLimit!=null){Limit=NLimit;}
	}
	
	GetViewers(CID,SortBy).then(
		function(ViewerData){
			Viewers=ViewerData;
			WriteLeaderBoard();
		}
	);
}

function WriteLeaderBoard(){
	document.getElementById("OrderType").innerHTML=SortBy;
	var LeaderBoard = document.getElementById("LeaderBoard");
	var Offset=0;
	for (i=0;i<Limit+Offset&&i<Viewers.length;i++){
		if (Viewers[i]["TwitchID"]==""){
			Offset++;
		}
		else {
		LeaderBoard.innerHTML+=`
    <tr>
      <td>`+(i+1-Offset).toString()+`</td>
      <td id="Name`+i+`"></td>
      <td>`+Viewers[i][SortBy]+`</td>
    </tr>`;
			WriteName(i,Viewers[i]["TwitchID"],Viewers[i]["DiscordID"])
		}
	}
}

function WriteName(i,TwitchID,DiscordID){
	if (TwitchID!=""){
		fetch("https://api.twitch.tv/helix/users?id="+TwitchID, {
			method: 'get',
			headers: [
				["Authorization","Bearer scmqcz2i4re2539pfae3v3st1ksywp"]
			]
		}).then(function (TwitchData) {
			return TwitchData.json();
		}).then(function (JTwitchData) {
			if (JTwitchData["data"].length==0){
				document.getElementById("Name"+i).innerHTML="Failed To Fetch Twitch User Name";
			}
			else {
				document.getElementById("Name"+i).innerHTML=JTwitchData["data"][0]["display_name"];
			}
		});
	}
}