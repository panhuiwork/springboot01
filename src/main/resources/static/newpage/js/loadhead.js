
$(document).ready(function(){
	var mark1=window.location.href.substring(0,window.location.href.lastIndexOf("/"));
	var mark=mark1.substring(mark1.lastIndexOf("/")+1);
	if(mark=="skflashermsg")
	{
		mark="newpage/";
	}else if(mark=="newpage")
	{
		mark="";
	}else if(mark=="myplace")
	{
		mark="../newpage/";
	}
	else if(mark=="content")
	{
		mark="../";
	}else if(mark=="AdminManage")
	{
		mark="../newpage/";
	}
	else
	{
		mark="http://andylaw.net:8080/skflashermsg/newpage/";
	}
	mark="";
	$(".page_top").load(mark+"head.html"); 
});