$(function() {

	var pagetype = $("#pagetype").val();//ҳ��д�����A�������п�
	var moneybl = 0.8;//�һ��ı���
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
				alert("��������æ���Ժ����Ի���ˢ����ҳ(F5)");
			},
			success : function(ajaxdata) {
				if (ajaxdata.length <= 0) {
					alert("��������æ���Ժ����Ի���ˢ����ҳ(F5)")
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
										+ regionarr[i] + "��</option>");
					} else {
						$("#regionid").append(
								"<option value='" + regionarr[i] + "'>"
										+ regionarr[i] + "��</option>");
					}
				}
			}
		});
		if (pagetype == "A")//����
		{
			moneybl = 1;
		} else if (pagetype == "B")//֧����
		{
			moneybl = 1;
		} else if (pagetype == "C")//�Ƹ�ͨ
		{
			moneybl = 1;
		} else if (pagetype == "D")//v��ͳһ�绰
		{
			moneybl = 0.6;
		} else if (pagetype == "E")//������
		{
			moneybl = 0.6;
		} else if (pagetype == "F")//�ƶ���ֵ��
		{
			moneybl = 0.9;
		} else if (pagetype == "G")//��ͨ
		{
			moneybl = 0.9;
		} else if (pagetype == "H")//����
		{
			moneybl = 0.9;
		} else if (pagetype == "I")//����һ��ͨ
		{
			moneybl = 0.8;
		} else if (pagetype == "J")//Q�ҿ�
		{
			moneybl = 0.8;
		} else if (pagetype == "K")//����
		{
			moneybl = 0.8;
		} else if (pagetype == "L")//����֧��
		{
			moneybl = 0.75;
		} else if (pagetype == "M")//΢��
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
		//�ж��Ƿ����uname
	}

	var urlparam = function(sArgName) {
		var sHref = window.location.href;
		var args = sHref.split("?");
		var retval = "";
		if (args[0] == sHref.toString()) /*����Ϊ��*/
		{
			return retval; /*�������κδ���*/
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
									+ regionarr[i] + "��</option>");
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
		//������֤
			$("#showmoneyk").html(
					parseInt(parseInt(this.value)* 100 * moneybl ));
			$("#showmoneyp").html(parseInt(parseInt(this.value) * moneybl));
			$("#payjlid").html(jlmethod(parseInt(this.value)));
		});
	$("#surepayid")
			.click(function() {
				//�ж��Ƿ�ֱ���ƽ̨
					var changeid = $(".rdochange:checked").attr("id");
					if (changeid == "game") {
						if ($("#gameid").val() == ""
								|| $("#gameid").val() == null) {
							alert("����ѡ��������Ϸ");
							return;
						}
					} else if (changeid == "ipay") {
					} else {
						alert("������ѡ���ֵ������");
						return;
					}
					//��֤�˻�
					var usernames = $("#playerid");
					var sureusernames = $("#sureplayerid");
					var hanzi = /^[\u4e00-\u9fbf]+$/;
					var cardnum = /^[0-9a-zA-Z]{6,16}$/;
					var mytestnum = /^[0-9]+$/;
					var mytestnumzimu = /^[a-zA-Z0-9_]+$/;
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
					//ȷ���˻�
					if (sureusernames.val() != usernames.val()) {
						alert("����������û�����ͬ,����������");
						sureusernames.focus();
						sureusernames.select();
						return;
					}
					usernames.val($.trim(usernames.val()));
					sureusernames.val($.trim(sureusernames.val()));

					//��֤��ֵ���
					var moneycheck = /^[0-9]{1,5}$/;
					var money = $("#paymoneyid");
					if ($.trim(money.val()) == "") {
						alert('��ֵ����Ϊ��');
						money.focus();
						money.select();
						return;
					}
					if (!moneycheck.test($.trim(money.val()))) {
						alert('��ֵ����ʽ����,����Ϊ����');
						money.focus();
						money.select();
						return;
					}
					money.val(parseInt($.trim(money.val())));
					if (money.val() < 1) {
						alert('��ֵ�������Ϊ1Ԫ');
						money.focus();
						money.select();
						return;
					}

					if (pagetype == "E")//������
					{
						if (money.val() != "5" && money.val() != "10"
								&& money.val() != "20" && money.val() != "30" && money.val() != "1" && money.val() != "2" && money.val() != "3" && money.val() != "4") {
							alert("�ƶ�������֧��Ŀǰֻ֧��5Ԫ��10Ԫ��20Ԫ��30Ԫ����");
							return;
						}
					} else if (pagetype == "F" || pagetype == "G"
							|| pagetype == "H" || pagetype == "I"
							|| pagetype == "J") {
						//��ֵ�����
						if (parseInt($("#paymoneyid").val()) > parseInt($(
								"input:[name=paymoney][checked=true]").val())) {
							alert("���������ڳ�ֵ��ǰ���");
							return;
						}
						if ($.trim($("input:[name=paycardid]").val()) == "") {
							alert("�������ֵ�����к�!");
							$("input:[name=paycardid]").focus();
							$("input:[name=paycardid]").select();
							return;
						}
						if (!mytestnum.test($.trim($("input:[name=paycardid]")
								.val()))) {
							alert("��ֵ�����к�ֻ��Ϊ����!");
							$("input:[name=paycardid]").focus();
							$("input:[name=paycardid]").select();
							return;
						}
						if (pagetype == "I") {
							if ($.trim($("input:[name=paycardid]").val()).length != 16) {
								alert("��ֵ�����к�λ������ȷ!");
								$("input:[name=paycardid]").focus();
								$("input:[name=paycardid]").select();
								return;
							}
						} else if (pagetype == "J") {
							if ($.trim($("input:[name=paycardid]").val()).length != 9) {
								alert("��ֵ�����к�λ������ȷ!");
								$("input:[name=paycardid]").focus();
								$("input:[name=paycardid]").select();
								return;
							}
						} else if (pagetype == "G") {
							if ($.trim($("input:[name=paycardid]").val()).length != 15) {
								alert("��ֵ�����к�λ������ȷ!");
								$("input:[name=paycardid]").focus();
								$("input:[name=paycardid]").select();
								return;
							}
						} else if (pagetype == "H") {
							if ($.trim($("input:[name=paycardid]").val()).length != 19) {
								alert("��ֵ�����к�λ������ȷ!");
								$("input:[name=paycardid]").focus();
								$("input:[name=paycardid]").select();
								return;
							}
						} else {
							if ($.trim($("input:[name=paycardid]").val()).length != 17) {
								alert("��ֵ�����к�λ������ȷ!");
								$("input:[name=paycardid]").focus();
								$("input:[name=paycardid]").select();
								return;
							}
						}
						if ($.trim($("input:[name=paycardpass]").val()) == "") {
							alert("�������ֵ������!");
							$("input:[name=paycardpass]").focus();
							$("input:[name=paycardpass]").select();
							return;
						}
						if (!mytestnum.test($
								.trim($("input:[name=paycardpass]").val()))) {
							alert("��ֵ������ֻ��Ϊ����!");
							$("input:[name=paycardpass]").focus();
							$("input:[name=paycardpass]").select();
							return;
						}
						if (pagetype == "I") {
							if ($.trim($("input:[name=paycardpass]").val()).length != 16) {
								alert("��ֵ������λ������ȷ!");
								$("input:[name=paycardpass]").focus();
								$("input:[name=paycardpass]").select();
								return;
							}
						} else if (pagetype == "J") {
							if ($.trim($("input:[name=paycardpass]").val()).length != 12) {
								alert("��ֵ������λ������ȷ!");
								$("input:[name=paycardpass]").focus();
								$("input:[name=paycardpass]").select();
								return;
							}
						} else if (pagetype == "G") {
							if ($.trim($("input:[name=paycardpass]").val()).length != 19) {
								alert("��ֵ������λ������ȷ!");
								$("input:[name=paycardpass]").focus();
								$("input:[name=paycardpass]").select();
								return;
							}
						} else {
							if ($.trim($("input:[name=paycardpass]").val()).length != 18) {
								alert("��ֵ������λ������ȷ!");
								$("input:[name=paycardpass]").focus();
								$("input:[name=paycardpass]").select();
								return;
							}
						}
					} else if (pagetype == "K") {
						//��ֵ�����
						if (parseInt($("#paymoneyid").val()) > parseInt($(
								"input:[name=paymoney][checked=true]").val())) {
							alert("���������ڳ�ֵ��ǰ���");
							return;
						}
						var changechekc = 0;//��֤�Ƿ���Ҫ��ĸ
						var changesids = 0;//���кų���
						var changesids1 = 0;//���кų���1
						var changespss = 0;//���볤��
						var changespss1 = 0;//���볤��1
						var mytestnum1 = /^[0-9]+$/;
						var mytestnumzimu1 = /^[a-zA-Z0-9]+$/;
						switch ($("#cardchange").val()) {
						case "JW":
							//����һ��ͨ
							changechekc = 0;
							changesids = 16;
							changespss = 16;
							changesids1 = 16;
							changespss1 = 16;
							break;
					case "SD": //SNDACARD
						//ʢ��
						changechekc = 1;
						changesids = 15;
						changespss = 8;
						changesids1 = 15;
						changespss1 = 9;
						break;
				case "ZT": //ZHENGTU
					//��;��
					changechekc = 0;
					changesids = 16;
					changespss = 8;
					changesids1 = 16;
					changespss1 = 8;
					break;
			case "QQ": //QQCARD
				//Q�ҿ�
				changechekc = 0;
				changesids = 9;
				changespss = 12;
				changesids1 = 9;
				changespss1 = 12;
				break;
		case "JY": //JIUYOU
			//���ο�
			changechekc = 0;
			changesids = 13;
			changespss = 10;
			changesids1 = 13;
			changespss1 = 10;
			break;
	case "WY"://NETEASE
		//���׿�
		changechekc = 0;
		changesids = 13;
		changespss = 9;
		changesids1 = 13;
		changespss1 = 9;
		break;
case "WM"://WANMEI
	//������
	changechekc = 0;
	changesids = 10;
	changespss = 15;
	changesids1 = 10;
	changespss1 = 15;
	break;
case "SH"://SOHU
//�Ѻ�
changechekc = 0;
changesids = 20;
changespss = 12;
changesids1 = 20;
changespss1 = 12;
break;
case "ZY"://ZONGYOU
//����һ��ͨ
changechekc = 0;
changesids = 15;
changespss = 15;
changesids1 = 15;
changespss1 = 15;
break;
case "TX": //TIANXIA
//����һ��ͨ
changechekc = 0;
changesids = 15;
changespss = 8;
changesids1 = 15;
changespss1 = 8;
break;
case "TH": //TIANHONG
//���һ��ͨ
changechekc = 1;
changesids = 12;
changespss = 15;
changesids1 = 10;
changespss1 = 10;
break;

//32��
case "CARDTW":
changechekc = 1;
changesids = 15;
changespss = 10;
changesids1 = 15;
changespss1 = 10;
break;
//���ۿ�
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
alert("�������ֵ�����к�!");
$("input:[name=paycardid]").focus();
$("input:[name=paycardid]").select();
return;
}
if (changechekc == 0) {
if (!mytestnum1.test($.trim($("input:[name=paycardid]").val()))) {
alert("��ֵ�����к�ֻ��Ϊ����!");
$("input:[name=paycardid]").focus();
$("input:[name=paycardid]").select();
return;
}
} else {
if (!mytestnumzimu1.test($.trim($("input:[name=paycardid]").val()))) {
alert("��ֵ�����к�ֻ��Ϊ��ĸ������!");
$("input:[name=paycardid]").focus();
$("input:[name=paycardid]").select();
return;
}
}
if ($.trim($("input:[name=paycardid]").val()).length != changesids
&& $.trim($("input:[name=paycardid]").val()).length != changesids1) {
alert("��ֵ�����к�λ������ȷ,����Ӧ��Ϊ" + changesids + "λ��" + changesids1 + "λ");
$("input:[name=paycardid]").focus();
$("input:[name=paycardid]").select();
return;
}
if ($.trim($("input:[name=paycardpass]").val()) == "") {
alert("�������ֵ������!");
$("input:[name=paycardpass]").focus();
$("input:[name=paycardpass]").select();
return;
}
if (!mytestnum1.test($.trim($("input:[name=paycardpass]").val()))) {
alert("��ֵ������ֻ��Ϊ����!");
$("input:[name=paycardpass]").focus();
$("input:[name=paycardpass]").select();
return;
}
if ($.trim($("input:[name=paycardpass]").val()).length != changespss
&& $.trim($("input:[name=paycardpass]").val()).length != changespss1) {
alert("��ֵ������λ������ȷ,����Ӧ��Ϊ" + changespss + "λ��" + changespss1 + "λ");
$("input:[name=paycardpass]").focus();
$("input:[name=paycardpass]").select();
return;
}
}

//��֤��ֵ����
if (!$("#agreenid").is(":checked")) {
alert("���ȹ�ѡ����ƽ̨��Ϸ�����ɼ�����Э��.");
return;
}
if (changeid == "ipay") {
if (money.val() <= 1) {
alert('��ֵ��ƽ̨������������1Ԫ');
money.focus();
money.select();
return;
} else {
if (!confirm("��ֵ��ƽ̨�Ľ������ڶһ�������Ϊ����,���򽫵õ��������ֽ��,�Ƿ��ύ?")) {
money.focus();
money.select();
return;
}
}
}
	
window.parent.window.submitshow();
//��ʾ��

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
		var scale=100;//k�����
		if(nowmoney>=60 && nowmoney<100)//��60��10  6-1
		{
			moneyk=10*scale;
		}
		else if(nowmoney>=100 && nowmoney<200)//��100��20  5-1  
		{
			moneyk=20*scale;
		}else if(nowmoney>=200 && nowmoney<600)//��200��50  4-1
		{
			moneyk=50*scale;
		}else if(nowmoney>=600 && nowmoney<1200)//��600��200Ԫ  3-1
		{
			moneyk=200*scale;
		}else if(nowmoney>=1200 && nowmoney<2000)//��1200��600 2-1
		{
			moneyk=600*scale;
		}else if(nowmoney>=2000 && nowmoney<3000)//��2000��1500  4-3
		{
			moneyk=1500*scale;
		}else if(nowmoney>=3000)//��3000������Ͷ���
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