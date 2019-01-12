$(function()
{
	var t;
	$(".head_logo").mouseover(function()
	{	
		$(".head_titleline").show();
	});
	
//	$(document).click(function(){
////		$(".head_cn").delay(5000).queue(function(){$(".head_cn").hide()});
//		$(".head_titleline").hide();
// 	 })
//	
	$(".head_titleline").mouseout(function()
	{
		$(".head_titleline").hide();
	})
	
	$("#loginbtn").click(function()
	{
		$(".head_loginline").show();
	});
	$(".head_loginline").mouseover(function()
	{
		$(".head_loginline").show();
	})
	$(".head_loginline").mouseout(function()
	{
		$(".head_loginline").hide();
	})


//登录的方法
	$("#loginid").click(function() 
	{
						var usernames = $("#uname");
						var userpasss = $("#upass");
						var hanzi = /^[\u4e00-\u9fbf]+$/;
						var cardnum = /^[0-9a-zA-Z]{6,16}$/;
						var reg = /^\w{3,}@\w+(\.\w+)+$/;
						if (usernames.val() == "") {
							alert("账户不能为空,请重新输入!");
							usernames.focus();
							usernames.select();
							return;
						}
						if (hanzi.test(usernames.val())) {
							alert("账户不能为中文,请重新输入!");
							usernames.focus();
							usernames.select();
							return;
						}
						if (!cardnum.test(usernames.val())) {
							alert("账户不符合规则,请重新输入!");
							usernames.focus();
							usernames.select();
							return;
						}
						if (userpasss.val() == "") {
							alert("密码不能为空,请重新输入!");
							userpasss.select();
							userpasss.focus();
							return;
						}
						if (hanzi.test(userpasss.val())) {
							alert("密码不能为中文,请重新输入!");
							userpasss.select();
							userpasss.focus();
							return;
						}
						if (!cardnum.test(userpasss.val())) {
							alert("密码不符合规则,请重新输入!");
							userpasss.select();
							userpasss.focus();
							return;
						}
						
						$(".head_logincn").hide();
						$(".loadding").show();
						$.ajax({
									timeout : 6000,
									url : "login_ajaxlogin.action",
									type : 'post',
									contentType : "application/x-www-form-urlencoded;charset=GBK",
									data : {
										"randoms" : Math.random(),
										"sign" : $("#codevalue").val(),
										"username" : $.trim($("#uname").val()),
										"userpass" : $.trim($("#upass").val())
									},
									dataType : "json",
									error : function() {
										alert("服务器异常,请重新登录！");
										$(".head_logincn").show();
										$(".loadding").hide();
									},
									success : function(ajaxdata) {
										if (ajaxdata.res == 0) {
											$("#unameid").html(ajaxdata.username);
											$("#isloginid").show();
											$(".head_loginline").hide();
											$("#loginbtn").hide();
										} else if (ajaxdata.res == -1) {
											alert("用户名不正确");
											$(".head_logincn").show();
											$(".loadding").hide();
										} else if (ajaxdata.res == -2) {
											alert("密码格式不正确");
											$(".head_logincn").show();
											$(".loadding").hide();
										} else if (ajaxdata.res == -3) {
											alert("登录失败");
											$(".head_logincn").show();
											$(".loadding").hide();
										} else if (ajaxdata.res == -4) {
											alert("账户名或密码不正确");
											$(".head_logincn").show();
											$(".loadding").hide();
										} else if (ajaxdata.res == -5) {
											alert("服务器繁忙,请稍候再试");
											$(".head_logincn").show();
											$(".loadding").hide();
										} else {
											alert("系统错误");
											$(".head_logincn").show();
											$(".loadding").hide();
										}
										$("#codevalue").val(ajaxdata.code);
								}
						});

	});


















	var init=function()
	{
		logininit();
	}
	//检查是否登陆
	var logininit = function() {
		if ($.cookie("username") == null) {
			$(".savepass").show();
			$(".suresavepass").hide();
			checksave = false;
		} else {
			$(".suresavepass").show();
			$(".savepass").hide();
			checksave = true;
			$("#upass").val($.cookie("userpass"));
			$("#uname").val($.cookie("username"));
		}
		var Sys = {};
		var ua = navigator.userAgent.toLowerCase();
		var s;
		(s = ua.match(/msie ([\d.]+)/)) ? Sys.ie = s[1] : (s = ua
				.match(/firefox\/([\d.]+)/)) ? Sys.firefox = s[1] : (s = ua
				.match(/chrome\/([\d.]+)/)) ? Sys.chrome = s[1] : (s = ua
				.match(/opera.([\d.]+)/)) ? Sys.opera = s[1] : (s = ua
				.match(/version\/([\d.]+).*safari/)) ? Sys.safari = s[1] : 0;
		if (Sys.ie == "6.0") {
			if (window
					.confirm("尊敬的玩家请升级您的浏览器版本,当前浏览器版本过低将导致很多功能不能正常体验,点击确定跳转IE8下载页面，否则取消")) {
				window.location.href = 'http://www.iefans.net/ie8-zhongwenban-guanfang-xiazai/';
			}
		}
		$.ajax( {
				timeout : 8000,
				url : "login_ajaxinit.action",
				type : 'post',
				contentType : "application/x-www-form-urlencoded;charset=GBK",
				data : {
					"randoms" : Math.random(),
					"sign" : $("#codevalue").val()
				},
				dataType : "json",
				error : function() {
				},
				success : function(ajaxdata) {
							if (ajaxdata.res == 0) {
									$("#unameid").html(ajaxdata.username);
									$("#isloginid").show();
									$(".head_loginline").hide();
									$("#loginbtn").hide();
							} else {
								$("#loginbtn").show();
							}
					$("#codevalue").val(ajaxdata.code);
				}
			});
	}
	$(".savepass").show();
	var checksave = false;
	$(".savepass").click(function() {
		$(".suresavepass").show();
		$(".savepass").hide();
		var date = new Date();
		date.setTime(date.getTime() + (30 * 24 * 60 * 60 * 1000));
		$.cookie("username", $("#uname").val(), {
			path : '/',
			expires : date
		});
		$.cookie("userpass", $("#upass").val(), {
			path : '/',
			expires : date
		});
		checksave = true;
	});

	$(".suresavepass").click(function() {
		checksave = false;
		$(".savepass").show();
		$(".suresavepass").hide();
		$.cookie("username", null, {
			path : '/'
		});
		$.cookie("userpass", null, {
			path : '/'
		});
	});
$(window).load(init);
});