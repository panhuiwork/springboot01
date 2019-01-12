$(function() {
	$(".leftnavigation > .box").click(function() {
		for ( var i = 0; i < 11; i++) {
			$("#mylove" + i).removeAttr("class");
			if (this.id != "mylove" + i) {
				$("#mylove" + i).attr("class", "box");
			} else {
				$("#" + this.id).addClass("box1");
			}
		}
	});
	$("#surepay").click(function(){window.location.href='http://andylaw.net/';});
	$("#closepay").click(function(){
		window.open('http://wpa.qq.com/msgrd?v=3&uin=917345325&site=qq&menu=yes');
		window.location.reload();	
	});
});
function submitshow() {
	$("#showmyhideen").fadeTo("slow", 0.90);
	$("body").eq(0).css("overflow", "hidden");
}