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


//��¼�ķ���
	$("#loginid").click(function() 
	{
						var usernames = $("#uname");
						var userpasss = $("#upass");
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
						if (!cardnum.test(userpasss.val())) {
							alert("���벻���Ϲ���,����������!");
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
										alert("�������쳣,�����µ�¼��");
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
											alert("�û�������ȷ");
											$(".head_logincn").show();
											$(".loadding").hide();
										} else if (ajaxdata.res == -2) {
											alert("�����ʽ����ȷ");
											$(".head_logincn").show();
											$(".loadding").hide();
										} else if (ajaxdata.res == -3) {
											alert("��¼ʧ��");
											$(".head_logincn").show();
											$(".loadding").hide();
										} else if (ajaxdata.res == -4) {
											alert("�˻��������벻��ȷ");
											$(".head_logincn").show();
											$(".loadding").hide();
										} else if (ajaxdata.res == -5) {
											alert("��������æ,���Ժ�����");
											$(".head_logincn").show();
											$(".loadding").hide();
										} else {
											alert("ϵͳ����");
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
	//����Ƿ��½
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
					.confirm("�𾴵��������������������汾,��ǰ������汾���ͽ����ºܶ๦�ܲ�����������,���ȷ����תIE8����ҳ�棬����ȡ��")) {
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