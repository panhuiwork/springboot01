<%@ page language="java" import="java.util.*" pageEncoding="GBK"%>
<%@page import="com.k5studio.skflasher.entity.Skinforamation"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
	<head>
		<title>闪客快打平台网站</title>
		<meta http-equiv="Content-Type" content="text/html; charset=gb2312" />
		<meta http-equiv="X-UA-Compatible" content="IE=EmulateIE7" />
		<meta name="keywords"
			content="游戏,flash小游戏,游戏盒子,flash动漫,闪客快打,闪客快打7佣兵帝国,闪7" />
		<meta name="description"
			content="bbplayer.net是一款flash游戏集合的网站，里面包含大量有趣的flash游戏和精美的flash动画" />
		<meta name="msapplication-task"
			content="name=闪客快打7佣兵帝国; action-uri=http://www.bbplayer.net/;icon-uri=http://www.crazyflasher.com/favicon.ico" />
		<link href="css/pay.css" rel="stylesheet" type="text/css" />
		<script type="text/javascript" src="js/jquery-1.6.2.min.js"></script>
		<script type="text/javascript" src="js/newpay.js"></script>
	
	</head>
	<body>
	<%
		String uname="uname=";
		String ty="";
		String rg="";
		if(request.getParameter("username")==null)
		{
			if(request.getSession().getAttribute("user")!=null)
			{
				Skinforamation skinforamation = (Skinforamation) request.getSession().getAttribute("user");
				uname+= skinforamation.getSkusername();
			}
		}else
		{
			uname+=request.getParameter("username").toString();
			if(request.getParameter("type")!=null)
			{
				ty=request.getParameter("type").toString();
				uname+="&ty="+ty;
			}
			if(request.getParameter("region")!=null)
			{
				rg=request.getParameter("region").toString();
				uname+="&rg="+rg;
			}
		}
		
	 %>
	<div id="showmyhideen">
		<div class="mynamechange">
			<div class="showinfos"><button id="surepay" class="surepay">已完成充值</button>&nbsp;&nbsp;<button id="closepay" class="surepay">遇到问题</button></div>
		</div>
	</div>
		<div class="index_body">
			<div class="index_body_all" align="left">
				<div class="index_center">
					<div class="index_center_top">
						<ul>
							<li style="width:220px;line-height:20px;">
										<div class="index_center_top_div"></div><span  class="index_center_top_div_span">CRAZYFLASHER.COM</span>
							</li>
							<li>
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="http://www.crazyflasher.com/" target="_blank">首页</a>
							</li>
							<li>
									<font class="fengexian">|</font>&nbsp;&nbsp;&nbsp;&nbsp;<a href="http://crazyflasher.com/skflashermsg/newpage/content/L201308131436205001.html" target="_blank">新闻公告</a>
							</li>
							<li>
									<font class="fengexian">|</font>&nbsp;&nbsp;&nbsp;&nbsp;<a href="http://crazyflasher.com/skflashermsg/myplace/place.jsp" target="_blank">用户中心</a>
							</li>
							<li>
									<font class="fengexian">|</font>&nbsp;&nbsp;&nbsp;&nbsp;<a href="http://crazyflasher.com/skflashermsg/newpage/content/SK20110922114037888.html" target="_blank">客服中心</a>
							</li>
							<li>
									<font class="fengexian">|</font>&nbsp;&nbsp;&nbsp;&nbsp;<a href="http://bbs.crazyflasher.com/" target="_blank">官方论坛</a>
							</li>
							<li>
									<font class="fengexian">|</font>&nbsp;&nbsp;&nbsp;&nbsp;<a href="#">充值中心</a>
							</li>
						</ul>
					</div>
					<br />
					<br />
					<div class="index_center_content">
						<div class="content_topbg">
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;充值中心
						</div>
						<div class="content_center">
							<div class="content_center_top">
							</div>
							<div class="content_center_center">
								<div class="leftnavigation">
									<div class="box box1" id="mylove0"
										onclick="window.rightframe.location.href='paypage/yeepaybank.htm?<%=uname %>'">
										银行卡充值
									</div>
									<div class="box " id="mylove1"
										onclick="window.rightframe.location.href='paypage/payipay.htm?<%=uname %>'">
										支付宝充值
									</div>
									<div class="box" id="mylove2"
										onclick="window.rightframe.location.href='paypage/tenpay.htm?<%=uname %>'">
										财付通充值
									</div>
									<div class="box" id="mylove3"
										onclick="window.rightframe.location.href='paypage/cmcc.htm?<%=uname %>'">
										全国移动卡充值
									</div>
									<div class="box" id="mylove4"
										onclick="window.rightframe.location.href='paypage/unicom.htm?<%=uname %>'">
										全国联通卡充值
									</div>
									<div class="box" id="mylove5"
										onclick="window.rightframe.location.href='paypage/telecom.htm?<%=uname %>'">
										全国电信卡充值
									</div>
									<div class="box" id="mylove6"
										onclick="window.rightframe.location.href='paypage/Jcard.htm?<%=uname %>'">
										骏网一卡通充值
									</div>
									<div class="box" id="mylove7"
										onclick="window.rightframe.location.href='paypage/qqcard.htm?<%=uname %>'">
										Q币卡充值(非地区卡)
									</div>
									<div class="box" id="mylove8"
										onclick="window.rightframe.location.href='paypage/payphone.htm?<%=uname %>'">
										全国固话充值（V币）
									</div>
									<div class="box" id="mylove9"
										onclick="window.rightframe.location.href='paypage/paymessages.htm?<%=uname %>'">
										手机大额短信充值
									</div>
									<div class="box" id="mylove10"
										onclick="window.rightframe.location.href='paypage/otherpay.htm?<%=uname %>'">
										其它点卡充值
									</div>
								</div>
								<div class="rightifrem">
									<div class="paytop">
									</div>
									<div class="paycenter">
										<IFRAME name="rightframe" id="mypay" marginWidth="0" marginHeight="0" scrolling="no" src="paypage/yeepaybank.htm?<%=uname %>" frameBorder="0" onload="this.height=0;if(rightframe.document.body.scrollHeight<500){this.height=500}else{this.height=rightframe.document.body.scrollHeight}"></IFRAME>
									</div>
									<!-- this.height=rightframe.document.body.scrollHeight-->
									<div class="paybottom">
									</div>
									<br />
								</div>
							</div>
							<div class="content_center_bottom">
							</div>
						</div>
					</div>
					<br />
					<div class="index_center_bottom">
						<div class="content_bottom_top">
						</div>
						<div class="content_bottom_center">
							<div style="width: 10px; float: left;">
								&nbsp;
							</div>
							<div class="boxtem">
								&nbsp;&nbsp;&nbsp;
								<span>客服服务<b>&gt;</b>
								</span>
								<br />
								&nbsp;&nbsp;&nbsp;&nbsp;<a href="http://crazyflasher.com/skflashermsg/newpage/content/SK20110922114037888.html" target="_blank">充值咨询</a>
								<br />
								&nbsp;&nbsp;&nbsp;&nbsp;<a href="http://crazyflasher.com/skflashermsg/newpage/content/SK20110922114037888.html" target="_blank">客服服务</a>
								<br />
								&nbsp;&nbsp;&nbsp;&nbsp;<a href="http://www.yeepay.com/app-merchant-proxy/QueryStoreAccount.action" target="_blank">易宝充值余额查看</a>
							</div>
							<div class="hrf">
							</div>
							<div class="boxtem">
								&nbsp;&nbsp;&nbsp;&nbsp;
								<span>常见问题<b>&gt;</b>
								</span>
								<br />
								&nbsp;&nbsp;&nbsp;&nbsp;
								<a href="http://crazyflasher.com/skflashermsg/newpage/content/SK20131025160937281.html" target="_blank">没开通网银可以充值吗？</a>
								<br />
								&nbsp;&nbsp;&nbsp;&nbsp;
								<a href="http://crazyflasher.com/skflashermsg/newpage/content/SK20131025160719005.html" target="_blank">哪种充值兑换游戏币最高？</a>
								<br />
							</div>
							<div class="hrf">
							</div>
							<div class="boxtem">
								&nbsp;&nbsp;&nbsp;&nbsp;
								<span>充值帮助<b>&gt;</b>
								</span>
								<br />
								&nbsp;&nbsp;&nbsp;&nbsp;
								<a href="http://crazyflasher.com/skflashermsg/newpage/content/SK20131025160637277.html" target="_blank">网银支付指南</a>
								<br />
								&nbsp;&nbsp;&nbsp;&nbsp;
								<a href="http://crazyflasher.com/skflashermsg/newpage/content/SK20131025161836597.html" target="_blank">K币兑换K点流程</a>
								<br />
								&nbsp;&nbsp;&nbsp;&nbsp;
								<a href="http://crazyflasher.com/skflashermsg/newpage/content/SK20131025162540758.html" target="_blank">卡类充值帮助</a>
							</div>
							<div class="hrf">
							</div>
							<div class="boxtem">
								&nbsp;&nbsp;&nbsp;&nbsp;
								<span>充值公告<b>&gt;</b>
								</span>
								<br />
								&nbsp;&nbsp;&nbsp;&nbsp;
								<a href="http://www.crazyflasher.com/mercenaryempire/context/informatin/SK20131021160510924.html" target="_blank">平台币兑换比例调整公告？</a><br />
								&nbsp;&nbsp;&nbsp;&nbsp;
								<a href="http://crazyflasher.com/skflashermsg/newpage/content/SK20131025161836597.html" target="_blank">平台币对游戏币兑换公告？</a>
							</div>
						</div>
						<div class="content_bottom_bottom">
						</div>
					</div>
					<div style="clear: both; font-size: 0px;"></div>
					<div style="margin-top: 20px;"></div>
					<!-- 需要提取的-->
					<div class="bottom_all">
						<IFRAME id="bottom_all_ifrem" marginWidth="0" marginHeight="0"
							scrolling="no" src="bottom.htm" frameBorder="0"></IFRAME>
					</div>
					<!-- 需要提取的-->
				</div>
			</div>
		</div>
	${content}
		<!-- JiaThis Button BEGIN 
		<script"text/javascript">
var jiathis_config = {
	url : "http://www.bbplayer.net",
	title : "闪客快打7佣兵帝国 #闪7佣兵帝国#",
	summary : "想战斗吗!来挑战我吧。"
}
</script>
		<script
			src="http://v2.jiathis.com/code/jiathis_r.js?type=left&amp;move=0&amp;btn=l4.gif">
</script>
-->
		<!-- JiaThis Button END -->
	</body>
</html>
