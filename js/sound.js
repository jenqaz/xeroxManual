function loadXMLDoc(){
	var xmlhttp;
	if (window.XMLHttpRequest)
	{// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest();
	}
	else
	{// code for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function()
	{
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			//document.getElementById("error").innerHTML=xmlhttp.responseText;
			//var str = $("#lnkMyOpen").text();
			var str = xmlhttp.responseText;
			str = str.substring(str.search('<a id="lnkMyOpen') + + 170, str.search('<a id="lnkMyOpen') + 171);
			document.getElementById("countCalls").innerHTML = str;
			document.getElementById("Alarm");
			if (str >= 1){
				Alarm.play();
			}	
		}
	}
	xmlhttp.open("GET","http://cishelpdesk/menu.aspx",true);
	xmlhttp.send();
}

function Refresh(){
	var startButton = document.getElementById('StartRefresh');
	var stopButton = document.getElementById('StopRefresh');
	var time = document.getElementById("timeInput").value * 1000;
	startButton.disabled = true;
	stopButton.disabled = false;
	var timer = setInterval(function() { loadXMLDoc()}, time);
	document.getElementById("status").innerHTML = "Working!";
	$("#StopRefresh").click(function(){
		//document.getElementById("myDiv").innerHTML = " ";
		clearInterval(timer);
		startButton.disabled = false;
		stopButton.disabled = true;
		document.getElementById("status").innerHTML = "Not working!";});
}	