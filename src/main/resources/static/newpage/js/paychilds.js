$(function() {

	var pagetype = $("#pagetype").val();//页面写的类别A代表银行卡
	var moneybl = 0.8;//兑换的比例
	var selecedata = new Array();
	var ty;
	var rg;
	$(".rdochange").click(function() {
		if (this.id == "ipay") {
			$(".changegame").hide();
			$(".changeregion").hide();
		} else if (this.id == "game") {
			$(".changegame").show();
			$(".changeregion").show();
		} else {
			return;
		}
	});
	var init = function() {
		$("#token").val(new Date().getTime());
		$.ajax( {
			timeout : 6000,
			url : "login_gameinfo.action",
			type : 'get',
			contentType : "application/x-www-form-urlencoded;charset=GBK",
			data : {
				"randoms" : Math.random()
			},
			dataType : "json",
			error : function() {
				alert("服务器繁忙请稍后在试或者刷新网页(F5)");
			},
			success : function(ajaxdata) {
				if (ajaxdata.length <= 0) {
					alert("服务器繁忙请稍后在试或者刷新网页(F5)")
					return;
				}
				for ( var i = (ajaxdata.length - 1); i >= 0; i--) {
					var jsonxx = eval("(" + ajaxdata[i].toString() + ")");
					if (ty == jsonxx.gid) 
					{
						$("#gameid").append(
							"<option value='" + jsonxx.gid + "' selected>"
									+ jsonxx.gamename + "</option>");
					}else
					{
						$("#gameid").append(
							"<option value='" + jsonxx.gid + "'>"
									+ jsonxx.gamename + "</option>");
					}
					
					selecedata.push(jsonxx.region);
				}
				if (parseInt(ty) <= 2) {
					$("#gameid")[0].selectedIndex = parseInt(ty) - 1;
				}
				var regionarr = selecedata[$("#gameid").get(0).selectedIndex].split(",");
				for ( var i = 0; i < regionarr.length; i++) {
					if (rg == regionarr[i]) {
						$("#regionid").append(
								"<option value='" + regionarr[i] + "' selected>"
										+ regionarr[i] + "区</option>");
					} else {
						$("#regionid").append(
								"<option value='" + regionarr[i] + "'>"
										+ regionarr[i] + "区</option>");
					}
				}
			}
		});
		if (pagetype == "A")//网银
		{
			moneybl = 1;
		} else if (pagetype == "B")//支付宝
		{
			moneybl = 1;
		} else if (pagetype == "C")//财付通
		{
			moneybl = 1;
		} else if (pagetype == "D")//v币统一电话
		{
			moneybl = 0.6;
		} else if (pagetype == "E")//大额短信
		{
			moneybl = 0.6;
		} else if (pagetype == "F")//移动充值卡
		{
			moneybl = 0.9;
		} else if (pagetype == "G")//联通
		{
			moneybl = 0.9;
		} else if (pagetype == "H")//电信
		{
			moneybl = 0.9;
		} else if (pagetype == "I")//骏网一卡通
		{
			moneybl = 0.8;
		} else if (pagetype == "J")//Q币卡
		{
			moneybl = 0.8;
		} else if (pagetype == "K")//其它
		{
			moneybl = 0.8;
		} else if (pagetype == "L")//爱贝支付
		{
			moneybl = 0.75;
		} else if (pagetype == "M")//微信
		{
			moneybl = 1;
		}

		$("#paymoneyid").val($(".paymoneyradoclass:[checked=true]").val());
		$("#showmoneyk").html(
				parseInt(parseInt($(".paymoneyradoclass:[checked=true]").val())
						 * 100* moneybl));
		$("#showmoneyp").html(
				parseInt(parseInt($(".paymoneyradoclass:[checked=true]").val())
						* moneybl));
		
		//AA
		$("#payjlid").html(jlmethod(parseInt($(".paymoneyradoclass:[checked=true]").val())));
		$("#showkkbi").html(moneybl);
		$("#showkdian").html(moneybl * 100);
		var unmaes = urlparam("uname");
		if (unmaes == undefined || unmaes == null) {
			unmaes = "";
		}
		ty = urlparam("ty");
		if (ty == undefined || ty == null) {
			ty = "1";
		}
		rg = urlparam("rg");
		if (rg == undefined || rg == null) {
			rg = "1";
		}
		$("#playerid").val(unmaes);
		$("#sureplayerid").val(unmaes);
		//判断是否包含uname
	}

	var urlparam = function(sArgName) {
		var sHref = window.location.href;
		var args = sHref.split("?");
		var retval = "";
		if (args[0] == sHref.toString()) /*参数为空*/
		{
			return retval; /*无需做任何处理*/
		}
		var str = args[1];
		args = str.split("&");
		for ( var i = 0; i < args.length; i++) {
			str = args[i];
			var arg = str.split("=");
			if (arg.length <= 1)
				continue;
			if (arg[0] == sArgName)
				retval = arg[1];
		}
		return retval;
	}
	$("#gameid").change(
			function() {
				var regionarr = selecedata[$("#gameid").get(0).selectedIndex]
						.split(",");
				$("#regionid option").remove();
				for ( var i = 0; i < regionarr.length; i++) {
					$("#regionid").append(
							"<option value='" + regionarr[i] + "'>"
									+ regionarr[i] + "区</option>");
				}
			});
	$(window).load(init);
	$(".paymoneyradoclass").click(
			function() {
				if (this.value == 0) {
					$("#paymoneyid").select();
					$("#paymoneyid").focus();
				} else {
					$("#paymoneyid").val(this.value);
					$("#showmoneyk").html(
							parseInt(parseInt(this.value) *100* moneybl ));
					$("#showmoneyp").html(
							parseInt(parseInt(this.value) * moneybl));
					$("#payjlid").html(jlmethod(parseInt(this.value)));
				}
			});
	$("#paymoneyid").focus(function() {
		$("#paymoneyradoid").attr("checked", true);
	});
	$("#paymoneyid").blur(function() {
		//数字验证
			$("#showmoneyk").html(
					parseInt(parseInt(this.value)* 100 * moneybl ));
			$("#showmoneyp").html(parseInt(parseInt(this.value) * moneybl));
			$("#payjlid").html(jlmethod(parseInt(this.value)));
		});
	$("#surepayid")
			.click(function() {
				//判断是否直充和平台
					var changeid = $(".rdochange:checked").attr("id");
					if (changeid == "game") {
						if ($("#gameid").val() == ""
								|| $("#gameid").val() == null) {
							alert("请先选择冲入的游戏");
							return;
						}
					} else if (changeid == "ipay") {
					} else {
						alert("请重新选择充值到哪里");
						return;
					}
					//验证账户
					var usernames = $("#playerid");
					var sureusernames = $("#sureplayerid");
					var hanzi = /^[\u4e00-\u9fbf]+$/;
					var cardnum = /^[0-9a-zA-Z]{6,16}$/;
					var mytestnum = /^[0-9]+$/;
					var mytestnumzimu = /^[a-zA-Z0-9_]+$/;
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
					//确认账户
					if (sureusernames.val() != usernames.val()) {
						alert("两次输入的用户名不同,请重新输入");
						sureusernames.focus();
						sureusernames.select();
						return;
					}
					usernames.val($.trim(usernames.val()));
					sureusernames.val($.trim(sureusernames.val()));

					//验证充值金额
					var moneycheck = /^[0-9]{1,5}$/;
					var money = $("#paymoneyid");
					if ($.trim(money.val()) == "") {
						alert('充值金额不能为空');
						money.focus();
						money.select();
						return;
					}
					if (!moneycheck.test($.trim(money.val()))) {
						alert('充值金额格式不对,必须为整数');
						money.focus();
						money.select();
						return;
					}
					money.val(parseInt($.trim(money.val())));
					if (money.val() < 1) {
						alert('充值金额最少为1元');
						money.focus();
						money.select();
						return;
					}

					if (pagetype == "E")//大额短信
					{
						if (money.val() != "5" && money.val() != "10"
								&& money.val() != "20" && money.val() != "30" && money.val() != "1" && money.val() != "2" && money.val() != "3" && money.val() != "4") {
							alert("移动大额短信支付目前只支持5元、10元、20元、30元的面额！");
							return;
						}
					} else if (pagetype == "F" || pagetype == "G"
							|| pagetype == "H" || pagetype == "I"
							|| pagetype == "J") {
						//充值卡金额
						if (parseInt($("#paymoneyid").val()) > parseInt($(
								"input:[name=paymoney][checked=true]").val())) {
							alert("卡面面额不足于充值当前金额");
							return;
						}
						if ($.trim($("input:[name=paycardid]").val()) == "") {
							alert("请输入充值卡序列号!");
							$("input:[name=paycardid]").focus();
							$("input:[name=paycardid]").select();
							return;
						}
						if (!mytestnum.test($.trim($("input:[name=paycardid]")
								.val()))) {
							alert("充值卡序列号只能为数字!");
							$("input:[name=paycardid]").focus();
							$("input:[name=paycardid]").select();
							return;
						}
						if (pagetype == "I") {
							if ($.trim($("input:[name=paycardid]").val()).length != 16) {
								alert("充值卡序列号位数不正确!");
								$("input:[name=paycardid]").focus();
								$("input:[name=paycardid]").select();
								return;
							}
						} else if (pagetype == "J") {
							if ($.trim($("input:[name=paycardid]").val()).length != 9) {
								alert("充值卡序列号位数不正确!");
								$("input:[name=paycardid]").focus();
								$("input:[name=paycardid]").select();
								return;
							}
						} else if (pagetype == "G") {
							if ($.trim($("input:[name=paycardid]").val()).length != 15) {
								alert("充值卡序列号位数不正确!");
								$("input:[name=paycardid]").focus();
								$("input:[name=paycardid]").select();
								return;
							}
						} else if (pagetype == "H") {
							if ($.trim($("input:[name=paycardid]").val()).length != 19) {
								alert("充值卡序列号位数不正确!");
								$("input:[name=paycardid]").focus();
								$("input:[name=paycardid]").select();
								return;
							}
						} else {
							if ($.trim($("input:[name=paycardid]").val()).length != 17) {
								alert("充值卡序列号位数不正确!");
								$("input:[name=paycardid]").focus();
								$("input:[name=paycardid]").select();
								return;
							}
						}
						if ($.trim($("input:[name=paycardpass]").val()) == "") {
							alert("请输入充值卡密码!");
							$("input:[name=paycardpass]").focus();
							$("input:[name=paycardpass]").select();
							return;
						}
						if (!mytestnum.test($
								.trim($("input:[name=paycardpass]").val()))) {
							alert("充值卡密码只能为数字!");
							$("input:[name=paycardpass]").focus();
							$("input:[name=paycardpass]").select();
							return;
						}
						if (pagetype == "I") {
							if ($.trim($("input:[name=paycardpass]").val()).length != 16) {
								alert("充值卡密码位数不正确!");
								$("input:[name=paycardpass]").focus();
								$("input:[name=paycardpass]").select();
								return;
							}
						} else if (pagetype == "J") {
							if ($.trim($("input:[name=paycardpass]").val()).length != 12) {
								alert("充值卡密码位数不正确!");
								$("input:[name=paycardpass]").focus();
								$("input:[name=paycardpass]").select();
								return;
							}
						} else if (pagetype == "G") {
							if ($.trim($("input:[name=paycardpass]").val()).length != 19) {
								alert("充值卡密码位数不正确!");
								$("input:[name=paycardpass]").focus();
								$("input:[name=paycardpass]").select();
								return;
							}
						} else {
							if ($.trim($("input:[name=paycardpass]").val()).length != 18) {
								alert("充值卡密码位数不正确!");
								$("input:[name=paycardpass]").focus();
								$("input:[name=paycardpass]").select();
								return;
							}
						}
					} else if (pagetype == "K") {
						//充值卡金额
						if (parseInt($("#paymoneyid").val()) > parseInt($(
								"input:[name=paymoney][checked=true]").val())) {
							alert("卡面面额不足于充值当前金额");
							return;
						}
						var changechekc = 0;//验证是否需要字母
						var changesids = 0;//序列号长度
						var changesids1 = 0;//序列号长度1
						var changespss = 0;//密码长度
						var changespss1 = 0;//密码长度1
						var mytestnum1 = /^[0-9]+$/;
						var mytestnumzimu1 = /^[a-zA-Z0-9]+$/;
						switch ($("#cardchange").val()) {
						case "JW":
							//骏网一卡通
							changechekc = 0;
							changesids = 16;
							changespss = 16;
							changesids1 = 16;
							changespss1 = 16;
							break;
					case "SD": //SNDACARD
						//盛大卡
						changechekc = 1;
						changesids = 15;
						changespss = 8;
						changesids1 = 15;
						changespss1 = 9;
						break;
				case "ZT": //ZHENGTU
					//征途卡
					changechekc = 0;
					changesids = 16;
					changespss = 8;
					changesids1 = 16;
					changespss1 = 8;
					break;
			case "QQ": //QQCARD
				//Q币卡
				changechekc = 0;
				changesids = 9;
				changespss = 12;
				changesids1 = 9;
				changespss1 = 12;
				break;
		case "JY": //JIUYOU
			//久游卡
			changechekc = 0;
			changesids = 13;
			changespss = 10;
			changesids1 = 13;
			changespss1 = 10;
			break;
	case "WY"://NETEASE
		//网易卡
		changechekc = 0;
		changesids = 13;
		changespss = 9;
		changesids1 = 13;
		changespss1 = 9;
		break;
case "WM"://WANMEI
	//完美卡
	changechekc = 0;
	changesids = 10;
	changespss = 15;
	changesids1 = 10;
	changespss1 = 15;
	break;
case "SH"://SOHU
//搜狐
changechekc = 0;
changesids = 20;
changespss = 12;
changesids1 = 20;
changespss1 = 12;
break;
case "ZY"://ZONGYOU
//纵游一卡通
changechekc = 0;
changesids = 15;
changespss = 15;
changesids1 = 15;
changespss1 = 15;
break;
case "TX": //TIANXIA
//天下一卡通
changechekc = 0;
changesids = 15;
changespss = 8;
changesids1 = 15;
changespss1 = 8;
break;
case "TH": //TIANHONG
//天宏一卡通
changechekc = 1;
changesids = 12;
changespss = 15;
changesids1 = 10;
changespss1 = 10;
break;

//32卡
case "CARDTW":
changechekc = 1;
changesids = 15;
changespss = 10;
changesids1 = 15;
changespss1 = 10;
break;
//玖佰卡
case "JIUB":
changechekc = 1;
changesids = 15;
changespss = 9;
changesids1 = 15;
changespss1 = 9;
break;

default:
return "";
break;
}
if ($.trim($("input:[name=paycardid]").val()) == "") {
alert("请输入充值卡序列号!");
$("input:[name=paycardid]").focus();
$("input:[name=paycardid]").select();
return;
}
if (changechekc == 0) {
if (!mytestnum1.test($.trim($("input:[name=paycardid]").val()))) {
alert("充值卡序列号只能为数字!");
$("input:[name=paycardid]").focus();
$("input:[name=paycardid]").select();
return;
}
} else {
if (!mytestnumzimu1.test($.trim($("input:[name=paycardid]").val()))) {
alert("充值卡序列号只能为字母和数字!");
$("input:[name=paycardid]").focus();
$("input:[name=paycardid]").select();
return;
}
}
if ($.trim($("input:[name=paycardid]").val()).length != changesids
&& $.trim($("input:[name=paycardid]").val()).length != changesids1) {
alert("充值卡序列号位数不正确,长度应该为" + changesids + "位或" + changesids1 + "位");
$("input:[name=paycardid]").focus();
$("input:[name=paycardid]").select();
return;
}
if ($.trim($("input:[name=paycardpass]").val()) == "") {
alert("请输入充值卡密码!");
$("input:[name=paycardpass]").focus();
$("input:[name=paycardpass]").select();
return;
}
if (!mytestnum1.test($.trim($("input:[name=paycardpass]").val()))) {
alert("充值卡密码只能为数字!");
$("input:[name=paycardpass]").focus();
$("input:[name=paycardpass]").select();
return;
}
if ($.trim($("input:[name=paycardpass]").val()).length != changespss
&& $.trim($("input:[name=paycardpass]").val()).length != changespss1) {
alert("充值卡密码位数不正确,长度应该为" + changespss + "位或" + changespss1 + "位");
$("input:[name=paycardpass]").focus();
$("input:[name=paycardpass]").select();
return;
}
}

//验证充值条款
if (!$("#agreenid").is(":checked")) {
alert("请先勾选闪客平台游戏软件许可及服务协议.");
return;
}
if (changeid == "ipay") {
if (money.val() <= 1) {
alert('充值到平台必须金额必须大于1元');
money.focus();
money.select();
return;
} else {
if (!confirm("充值到平台的金额必须在兑换比例后为整数,否则将得到整数部分金额,是否提交?")) {
money.focus();
money.select();
return;
}
}
}
	
window.parent.window.submitshow();
//显示层

$("#token").val(new Date().getTime());
$("#myforms").submit();
}			);
})
function jlmethod(nowmoney)
	{
		var changeid = $(".rdochange:checked").attr("id");
		if(changeid=="game")
		{
		var moneyk=0;
		var scale=100;//k点比例
		if(nowmoney>=60 && nowmoney<100)//满60送10  6-1
		{
			moneyk=10*scale;
		}
		else if(nowmoney>=100 && nowmoney<200)//满100送20  5-1  
		{
			moneyk=20*scale;
		}else if(nowmoney>=200 && nowmoney<600)//满200送50  4-1
		{
			moneyk=50*scale;
		}else if(nowmoney>=600 && nowmoney<1200)//满600送200元  3-1
		{
			moneyk=200*scale;
		}else if(nowmoney>=1200 && nowmoney<2000)//满1200送600 2-1
		{
			moneyk=600*scale;
		}else if(nowmoney>=2000 && nowmoney<3000)//满2000送1500  4-3
		{
			moneyk=1500*scale;
		}else if(nowmoney>=3000)//满3000充多少送多少
		{
			moneyk=nowmoney*scale;
		}
		 if($("#gameid").val()=="1")
	  	 {	
		   	return moneyk;
		 }
		}
		return 0;
	}