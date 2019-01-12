function favPage() {
	var pageName = window.location.href;
	var nameArr = pageName.split("?");
	pageName = nameArr[0] + "?" + nameArr[1];
	if (window.sidebar) {
		window.sidebar.addPanel(document.title, pageName, "");
	} else if (document.all) {
		window.external.AddFavorite(pageName, document.title);
	} else {
		return true;
	}
}

function setHome() {
	var url = window.location.href;
	if (document.all) {
		document.body.style.behavior = 'url(#default#homepage)';
		document.body.setHomePage(url);
	} else if (window.sidebar) {
		if (window.netscape) {
			try {
				netscape.security.PrivilegeManager
						.enablePrivilege("UniversalXPConnect");
			} catch (e) {
				alert("该操作被浏览器拒绝，如果想启用该功能，请在地址栏内输入 about:config,然后将项 signed.applets.codebase_principal_support 值该为true");
			}
		}
		if (window.confirm("你确定要设置" + url + "为首页吗？") == 1) {
			var prefs = Components.classes['@mozilla.org/preferences-service;1']
					.getService(Components.interfaces.nsIPrefBranch);
			prefs.setCharPref('browser.startup.homepage', url);
		}
	}
}

$(function()
{
//这里是保存账户和密码的函数
	$(".savepass").show();
	var checksave=false;
	$(".savepass").click(function()
	{
		$(".suresavepass").show();
		$(".savepass").hide();
		var date = new Date();    
		date.setTime(date.getTime() + (30 * 24 * 60 * 60 * 1000));    
		$.cookie("username",$("#uname").val(), { path: '/', expires: date });
		$.cookie("userpass",$("#upass").val(),{ path: '/', expires: date });
		checksave=true;
	});

	$(".suresavepass").click(function()
	{
		checksave=false;
		$(".savepass").show();
		$(".suresavepass").hide();
		$.cookie("username", null, { path: '/' });    
		$.cookie("userpass", null, { path: '/' });    
	});
	var init=function()
	{
		if($.cookie("username")==null)
		{
			$(".savepass").show();
			$(".suresavepass").hide();
			checksave=false;
		}else
		{
			$(".suresavepass").show();
			$(".savepass").hide();
			checksave=true;
			$("#upass").val($.cookie("userpass"));
			$("#uname").val($.cookie("username"));
		}
		logininit();
	}
	$(window).load(init);
//这里是保存账户和密码的函数完---------
	
var logincontent="";
	//初始化检测是否登录
	var logininit=function()
	{
		
		var Sys = {}; 
        var ua = navigator.userAgent.toLowerCase(); 
        var s; 
        (s = ua.match(/msie ([\d.]+)/)) ? Sys.ie = s[1] : 
        (s = ua.match(/firefox\/([\d.]+)/)) ? Sys.firefox = s[1] : 
        (s = ua.match(/chrome\/([\d.]+)/)) ? Sys.chrome = s[1] : 
        (s = ua.match(/opera.([\d.]+)/)) ? Sys.opera = s[1] : 
        (s = ua.match(/version\/([\d.]+).*safari/)) ? Sys.safari = s[1] : 0; 
		if (Sys.ie=="6.0"){ if(window.confirm("尊敬的玩家请升级您的浏览器版本,当前浏览器版本过低将导致很多功能不能正常体验,点击确定跳转IE8下载页面，否则取消")){window.location.href='http://www.iefans.net/ie8-zhongwenban-guanfang-xiazai/';}}
		
		$.ajax({
		 timeout: 5000,
		 url:"login_ajaxinit.action",
		 type: 'post',
		 contentType:"application/x-www-form-urlencoded;charset=GBK",
		 data: {
				"randoms" : Math.random(),
				"sign":$("#codevalue").val()
			},
		 dataType:"json",
		 error: function(){alert("服务器繁忙请稍后在试.")},
		 success:function(ajaxdata)
		 {
			 if(ajaxdata.res==0)
			 {
				  logincontent="<center><table cellpadding='0' class='loginaftertable'>"+
											"<tr>"+
												"<td rowspan='4'><img src='newpage/images/userhead.jpg'/></td>"+
												"<td>&nbsp;欢迎,&nbsp;<font color='white'><b>"+ajaxdata.username+"</b></font>,<a href='myplace/place.jsp' target='_blank'><font color='red'>个人中心</font></a></td>"+
											"</tr>"+
											"<tr>"+
												"<td>&nbsp;当前余额：<font color='#ffcd02' id='kdianid'>"+ajaxdata.acckcoin+"&nbsp;K币</font></td>"+
											"</tr>"+
											"<tr>"+
												"<td>&nbsp;贡&nbsp;献&nbsp;值：<font color='#ffcd02' id='gongxianzhi'>"+ajaxdata.acccrite+"</font></td>"+
											"</tr>"+
											"<tr>"+
												"<td>&nbsp;<button class='buttona' onclick=window.open('login_pay.action');>充值</button>&nbsp;<button class='buttona'  id='referid'>刷新余额</button>&nbsp;<button class='buttonb' onclick=window.location.href='exitlogin.jsp'>退出</button>"+
												"</td>"+
											"</tr>"+
										"</table>"+
										"<br/>"+
									 " </center>";
				  $('#loginBoxId').html(logincontent);
				  $("#loadding").hide();
				  $("#referid").click(referclick);
			 }else
			 {
				 $("#loadding").hide();
				 $("#userinfoid").show();
			 }
			 $("#codevalue").val(ajaxdata.code);
		 }
		 });
	}
	
	var referclick=function()
	{
					 $("#kdianid").html("<img src='newpage/images/loading_1.gif' height=12 width=12/>&nbsp;K币");
					  $("#gongxianzhi").html("<img src='newpage/images/loading_1.gif' height=12 width=12/>");
					  $.ajax({
						 timeout: 6000,
						 url:"login_ajaxrefer.action",
						 type: 'post',
						 contentType:"application/x-www-form-urlencoded;charset=GBK",
						 data: {
								"randoms" : Math.random(),
								"sign":$("#codevalue").val()
							},
						 dataType:"json",
						 error: function(){alert("服务器繁忙请稍后在试.");
						 $("#kdianid").html("0");
					 	 $("#gongxianzhi").html("0");
							},
						 success:function(ajaxdata)
						 {
							 if(ajaxdata.res==0)
							 {
								$("#kdianid").html(ajaxdata.acckcoin+"&nbsp;K币");
								$("#gongxianzhi").html(ajaxdata.acccrite);
							 }else
							 {
								  $("#kdianid").html("0");
					 	 			$("#gongxianzhi").html("0");
//								 0成功 -1登录失效 -2无效刷新 -3服务器繁忙
								 if(ajaxdata.res==-1)
								 {
									 alert("登录失效");
								 }else if(ajaxdata.res==-2)
								 {
									  alert("无效连接");
								 }else if(ajaxdata.res==-3)
								 {
									  alert("服务器繁忙");
								 }
								 window.location.reload();
							 }
						 }
						});
	}
	
	//登录的函数
 $("#loginid").click(function()
 {
//	 hex_md5("xxxxxxx");//md5加密
	 //使用cookie保存账户信息
	 if(checksave)
	 {
		var date = new Date();    
		date.setTime(date.getTime() + (30 * 24 * 60 * 60 * 1000));    
		$.cookie("username",$("#uname").val(), { path: '/', expires: date });
		$.cookie("userpass",$("#upass").val(),{ path: '/', expires: date });
		checksave=true;
	 }
	 //账户信息验证
	 
						var usernames = $("input:[name=username]");
						var userpasss = $("input:[name=userpass]");
					
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
					
						//if (!cardnum.test(userpasss.val())) {
						//	alert("密码不符合规则,请重新输入!");
						//	userpasss.select();
						//	userpasss.focus();
						//	return;
						//}
			
	 
	 //开始登录
	  $("#userinfoid").hide();
	  $("#loadding").show();
	  $.ajax({
		 timeout: 6000,
		 url:"login_ajaxlogin.action",
		 type: 'post',
		 contentType:"application/x-www-form-urlencoded;charset=GBK",
		 data: {
				"randoms" : Math.random(),
				"sign":$("#codevalue").val(),
				"username":$.trim($("#uname").val()),
				"userpass":$.trim($("#upass").val())
			},
		 dataType:"json",
		 error: function(){alert("服务器繁忙请稍后在试.");
		 		$("#loadding").hide();
				$("#userinfoid").show();},
		 success:function(ajaxdata)
		 {
			 if(ajaxdata.res==0)
			 {
				  logincontent="<center><table cellpadding='0' class='loginaftertable'>"+
											"<tr>"+
												"<td rowspan='4'><img src='newpage/images/userhead.jpg'/></td>"+
												"<td>&nbsp;欢迎,&nbsp;<font color='white'><b>"+ajaxdata.username+"</b></font>,<a href='myplace/place.jsp' target='_blank'><font color='red'>个人中心</font></a></td>"+
											"</tr>"+
											"<tr>"+
												"<td>&nbsp;当前余额：<font color='#ffcd02' id='kdianid'>"+ajaxdata.acckcoin+"&nbsp;K币</font></td>"+
											"</tr>"+
											"<tr>"+
												"<td>&nbsp;贡&nbsp;献&nbsp;值：<font color='#ffcd02' id='gongxianzhi'>"+ajaxdata.acccrite+"</font></td>"+
											"</tr>"+
											"<tr>"+
												"<td>&nbsp;<button class='buttona'  onclick=window.open('login_pay.action');>充值</button>&nbsp;<button class='buttona' id='referid'>刷新余额</button>&nbsp;<button class='buttonb' onclick=window.location.href='exitlogin.jsp'>退出</button>"+
												"</td>"+
											"</tr>"+
										"</table>"+
										"<br/>"+
									 " </center>";
				  $('#loginBoxId').html(logincontent);
				  $("#loadding").hide();
				  $("#referid").click(referclick);
			 }else
			 {
//				 -1账户名称有误 -2密码有误 -3登录错误 -4账户和密码不正确 -5服务器繁忙
				 if(ajaxdata.res==-1)
				 {
					alert("用户名格式不正确"); 
				 }else  if(ajaxdata.res==-2)
				 {
					 alert("密码格式不正确"); 
				 }else  if(ajaxdata.res==-3)
				 {
					 alert("登录失败"); 
				 }else  if(ajaxdata.res==-4)
				 {
					 alert("账户名或密码不正确"); 
				 }else  if(ajaxdata.res==-5)
				 {
					 alert("服务器繁忙,请稍候再试"); 
				 }else
				 {
					 alert("系统错误");
				 }
				 $("#loadding").hide();
				 $("#userinfoid").show();
			 }
			 $("#codevalue").val(ajaxdata.code);
		 }
		 });

 });

});