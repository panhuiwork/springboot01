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
				alert("�ò�����������ܾ�����������øù��ܣ����ڵ�ַ�������� about:config,Ȼ���� signed.applets.codebase_principal_support ֵ��Ϊtrue");
			}
		}
		if (window.confirm("��ȷ��Ҫ����" + url + "Ϊ��ҳ��") == 1) {
			var prefs = Components.classes['@mozilla.org/preferences-service;1']
					.getService(Components.interfaces.nsIPrefBranch);
			prefs.setCharPref('browser.startup.homepage', url);
		}
	}
}

$(function()
{
//�����Ǳ����˻�������ĺ���
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
//�����Ǳ����˻�������ĺ�����---------
	
var logincontent="";
	//��ʼ������Ƿ��¼
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
		if (Sys.ie=="6.0"){ if(window.confirm("�𾴵��������������������汾,��ǰ������汾���ͽ����ºܶ๦�ܲ�����������,���ȷ����תIE8����ҳ�棬����ȡ��")){window.location.href='http://www.iefans.net/ie8-zhongwenban-guanfang-xiazai/';}}
		
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
		 error: function(){alert("��������æ���Ժ�����.")},
		 success:function(ajaxdata)
		 {
			 if(ajaxdata.res==0)
			 {
				  logincontent="<center><table cellpadding='0' class='loginaftertable'>"+
											"<tr>"+
												"<td rowspan='4'><img src='newpage/images/userhead.jpg'/></td>"+
												"<td>&nbsp;��ӭ,&nbsp;<font color='white'><b>"+ajaxdata.username+"</b></font>,<a href='myplace/place.jsp' target='_blank'><font color='red'>��������</font></a></td>"+
											"</tr>"+
											"<tr>"+
												"<td>&nbsp;��ǰ��<font color='#ffcd02' id='kdianid'>"+ajaxdata.acckcoin+"&nbsp;K��</font></td>"+
											"</tr>"+
											"<tr>"+
												"<td>&nbsp;��&nbsp;��&nbsp;ֵ��<font color='#ffcd02' id='gongxianzhi'>"+ajaxdata.acccrite+"</font></td>"+
											"</tr>"+
											"<tr>"+
												"<td>&nbsp;<button class='buttona' onclick=window.open('login_pay.action');>��ֵ</button>&nbsp;<button class='buttona'  id='referid'>ˢ�����</button>&nbsp;<button class='buttonb' onclick=window.location.href='exitlogin.jsp'>�˳�</button>"+
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
					 $("#kdianid").html("<img src='newpage/images/loading_1.gif' height=12 width=12/>&nbsp;K��");
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
						 error: function(){alert("��������æ���Ժ�����.");
						 $("#kdianid").html("0");
					 	 $("#gongxianzhi").html("0");
							},
						 success:function(ajaxdata)
						 {
							 if(ajaxdata.res==0)
							 {
								$("#kdianid").html(ajaxdata.acckcoin+"&nbsp;K��");
								$("#gongxianzhi").html(ajaxdata.acccrite);
							 }else
							 {
								  $("#kdianid").html("0");
					 	 			$("#gongxianzhi").html("0");
//								 0�ɹ� -1��¼ʧЧ -2��Чˢ�� -3��������æ
								 if(ajaxdata.res==-1)
								 {
									 alert("��¼ʧЧ");
								 }else if(ajaxdata.res==-2)
								 {
									  alert("��Ч����");
								 }else if(ajaxdata.res==-3)
								 {
									  alert("��������æ");
								 }
								 window.location.reload();
							 }
						 }
						});
	}
	
	//��¼�ĺ���
 $("#loginid").click(function()
 {
//	 hex_md5("xxxxxxx");//md5����
	 //ʹ��cookie�����˻���Ϣ
	 if(checksave)
	 {
		var date = new Date();    
		date.setTime(date.getTime() + (30 * 24 * 60 * 60 * 1000));    
		$.cookie("username",$("#uname").val(), { path: '/', expires: date });
		$.cookie("userpass",$("#upass").val(),{ path: '/', expires: date });
		checksave=true;
	 }
	 //�˻���Ϣ��֤
	 
						var usernames = $("input:[name=username]");
						var userpasss = $("input:[name=userpass]");
					
						var hanzi = /^[\u4e00-\u9fbf]+$/;
						var cardnum = /^[0-9a-zA-Z]{6,16}$/;
						var reg = /^\w{3,}@\w+(\.\w+)+$/;
						if (usernames.val() == "") {
							alert("�˻�����Ϊ��,����������!");
							usernames.focus();
							usernames.select();
							return;
						}
						if (hanzi.test(usernames.val())) {
							alert("�˻�����Ϊ����,����������!");
							usernames.focus();
							usernames.select();
							return;
						}
						if (!cardnum.test(usernames.val())) {
							alert("�˻������Ϲ���,����������!");
							usernames.focus();
							usernames.select();
							return;
						}
						if (userpasss.val() == "") {
							alert("���벻��Ϊ��,����������!");
							userpasss.select();
							userpasss.focus();
							return;
						}
						if (hanzi.test(userpasss.val())) {
							alert("���벻��Ϊ����,����������!");
							userpasss.select();
							userpasss.focus();
							return;
						}
					
						//if (!cardnum.test(userpasss.val())) {
						//	alert("���벻���Ϲ���,����������!");
						//	userpasss.select();
						//	userpasss.focus();
						//	return;
						//}
			
	 
	 //��ʼ��¼
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
		 error: function(){alert("��������æ���Ժ�����.");
		 		$("#loadding").hide();
				$("#userinfoid").show();},
		 success:function(ajaxdata)
		 {
			 if(ajaxdata.res==0)
			 {
				  logincontent="<center><table cellpadding='0' class='loginaftertable'>"+
											"<tr>"+
												"<td rowspan='4'><img src='newpage/images/userhead.jpg'/></td>"+
												"<td>&nbsp;��ӭ,&nbsp;<font color='white'><b>"+ajaxdata.username+"</b></font>,<a href='myplace/place.jsp' target='_blank'><font color='red'>��������</font></a></td>"+
											"</tr>"+
											"<tr>"+
												"<td>&nbsp;��ǰ��<font color='#ffcd02' id='kdianid'>"+ajaxdata.acckcoin+"&nbsp;K��</font></td>"+
											"</tr>"+
											"<tr>"+
												"<td>&nbsp;��&nbsp;��&nbsp;ֵ��<font color='#ffcd02' id='gongxianzhi'>"+ajaxdata.acccrite+"</font></td>"+
											"</tr>"+
											"<tr>"+
												"<td>&nbsp;<button class='buttona'  onclick=window.open('login_pay.action');>��ֵ</button>&nbsp;<button class='buttona' id='referid'>ˢ�����</button>&nbsp;<button class='buttonb' onclick=window.location.href='exitlogin.jsp'>�˳�</button>"+
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
//				 -1�˻��������� -2�������� -3��¼���� -4�˻������벻��ȷ -5��������æ
				 if(ajaxdata.res==-1)
				 {
					alert("�û�����ʽ����ȷ"); 
				 }else  if(ajaxdata.res==-2)
				 {
					 alert("�����ʽ����ȷ"); 
				 }else  if(ajaxdata.res==-3)
				 {
					 alert("��¼ʧ��"); 
				 }else  if(ajaxdata.res==-4)
				 {
					 alert("�˻��������벻��ȷ"); 
				 }else  if(ajaxdata.res==-5)
				 {
					 alert("��������æ,���Ժ�����"); 
				 }else
				 {
					 alert("ϵͳ����");
				 }
				 $("#loadding").hide();
				 $("#userinfoid").show();
			 }
			 $("#codevalue").val(ajaxdata.code);
		 }
		 });

 });

});