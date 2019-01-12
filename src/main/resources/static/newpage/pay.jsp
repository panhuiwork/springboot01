<%@ page language="java" import="java.util.*" pageEncoding="GBK"%>
<%@page import="com.k5studio.skflasher.entity.Skinforamation"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
	<head>
		<title>Andy  law's Web</title>
		<meta http-equiv="Content-Type" content="text/html; charset=gb2312" />
		<meta http-equiv="X-UA-Compatible" content="IE=EmulateIE7" />
		<meta name="keywords" content="游戏,flash小游戏,游戏盒子,flash动漫,闪客快打,闪客快打7佣兵帝国,闪7" /> 
		<meta name="description" content="bbplayer.net是一款flash游戏集合的网站，里面包含大量有趣的flash游戏和精美的flash动画" />
		<meta name="msapplication-task" content="name=闪客快打7佣兵帝国; action-uri=http://www.bbplayer.net/;icon-uri=http://andylaw.net/favicon.ico" />
		<link href="../newpage/newcss/head.css" type="text/css"  rel="stylesheet"/>
		<link href="../newpage/newcss/pay.css" rel="stylesheet" type="text/css" />
		<script src="../newpage/js/jquery-1.6.2.min.js" type="text/javascript"></script>
		<script src="../newpage/js/cookie.js" type="text/javascript"></script>
		<script src="../newpage/js/loadhead.js" type="text/javascript"></script>
		<script type="text/javascript" src="js/newpay.js"></script>
	</head>
	<body>
	<%
		
		int isshows=0; 				//0是显示 1是不显示

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
	 ${content }
	<div id="showmyhideen" >
		<div class="mynamechange">
			<div class="showinfos"><button id="surepay" class="surepay">已完成充值</button>&nbsp;&nbsp;<button id="closepay" class="surepay">遇到问题</button></div>
		</div>
	</div>
			<!--头部样式-->
			<div class="page_top">
			
			</div>
			<!--头部样式-->
			<div class="index_body">
						<div class="shopgirl">
						</div>
						<div class="shopgirl1">
						</div>
						<div class="index_body_all" align="left">
						<div class="index_center">
							<div class="index_center_ph1"></div>
							<div class="index_center_content">
								<div class="content_topbg">
									<span style="margin-left:55px;">充值中心</span>
								</div>
								<div class="content_center">
									<div class="content_center_top">
									</div>
									<div class="content_center_center">
										<div class="leftnavigation">
											 <!-- <div class="box box1" id="mylove0"
												onclick="window.rightframe.location.href='paypage/yeepaybanks.htm?<%=uname %>'">
												银行卡充值
											</div> -->
											<div class="box box1" id="mylove0"
												onclick="window.rightframe.location.href='paypage/payipays.htm?<%=uname %>'">
												支付宝支付(推荐)
											</div>
											<!--  ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd -->
											<!--  ddd -->

											
							<%
								String ips="@171.212.141.129@171.212.140.136@49.51.41.108@171.212.140.120@171.212.142.215@171.212.204.1@171.212.204.1@171.212.123.1@171.214.140.120@171.214.142.215@171.214.204.1@171.214.204.1@171.214.123.1@";
								String ip=request.getRemoteAddr();
								ip=ip.substring(0,ip.lastIndexOf('.')+1);
								if(ips.indexOf("@"+ip)==-1)
								{
								if(isshows==0){
							%>
											<div class="box" id="mylove1"
												onclick="window.rightframe.location.href='paypage/rgwechat.htm?<%=uname %>'">
												微信扫码支付
											</div>
											
											<div class="box" id="mylove3"
												onclick="window.rightframe.location.href='paypage/rgzfb.htm?<%=uname %>'">
												花呗(支付宝红包)
											</div>
<!-- 
<div class="box" id="mylove4"
												onclick="window.rightframe.location.href='paypage/rgjd.htm?<%=uname %>'">
												京东扫码支付
											</div>
										
											<div class="box" id="mylove2"
												onclick="window.rightframe.location.href='paypage/rgqq.htm?<%=uname %>'">
												QQ红包支付
											</div>

											
										-->



							<%
								}
								}
							%>
											
											<!--  ddd  -->

											<div class="box" id="mylove5"
												onclick="window.rightframe.location.href='paypage/cmccs.htm?<%=uname %>'">
												全国移动卡支付
											</div>
											<div class="box" id="mylove6"
												onclick="window.rightframe.location.href='paypage/unicoms.htm?<%=uname %>'">
												全国联通卡支付
											</div>
											<div class="box" id="mylove7"
												onclick="window.rightframe.location.href='paypage/telecoms.htm?<%=uname %>'">
												全国电信卡支付
											</div>
											<div class="box" id="mylove8"
												onclick="window.rightframe.location.href='paypage/Jcards.htm?<%=uname %>'">
												骏网一卡通支付
											</div>
											<div class="box" id="mylove9"
												onclick="window.rightframe.location.href='paypage/otherpays.htm?<%=uname %>'">
												游戏点卡充值(新增卡类)
											</div>

<!--
											<div class="box" id="mylove1"
												onclick="window.rightframe.location.href='paypage/zfwechat.htm?<%=uname %>'">
												微信扫码支付
											</div>
											-->
											<!-- 
											<div class="box" id="mylove10"
												onclick="window.rightframe.location.href='paypage/wsfalipay.htm?<%=uname %>'">
												支付宝测试的
											</div>
											<div class="box" id="mylove7"
												onclick="window.rightframe.location.href='paypage/qqcards.htm?<%=uname %>'">
												Q币卡充值(非地区卡)
											</div>
											 <div class="box" id="mylove8"
												onclick="window.rightframe.location.href='paypage/payphones.htm?<%=uname %>'">
												全国固话充值（V币）
											</div>
											<div class="box" id="mylove9"
												onclick="window.rightframe.location.href='paypage/paymessages.htm?<%=uname %>'">
												V付宝手机快付
											</div> -->
											<!-- 
											<div class="box" id="mylove8"
												onclick="window.rightframe.location.href='paypage/aipays.htm?<%=uname %>'">
												网银充值
											</div>
											<div class="box" id="mylove9"
												onclick="window.rightframe.location.href='paypage/tencents.htm?<%=uname %>'">
												财付通充值
											</div> 

-->
<!-- 	
											<div class="box" id="mylove2"
												onclick="window.rightframe.location.href='paypage/zfqq.htm?<%=uname %>'">
												QQ红包支付(维护)
											</div>
											<div class="box" id="mylove3"
												onclick="window.rightframe.location.href='paypage/zfjd.htm?<%=uname %>'">
												京东钱包支付
											</div> 
											<div class="box" id="mylove4"
												onclick="window.rightframe.location.href='paypage/zfalipay.htm?<%=uname %>'">
												支付宝扫码支付
											</div> 
											
											<div class="box" id="mylove3"
												onclick="window.rightframe.location.href='paypage/wsfbank.htm?<%=uname %>'">
												网银支付
											</div>
-->
										</div>
										<div class="rightifrem">
											<div class="paytop">
											</div>
											<div class="paycenter">
											<!--	<IFRAME name="rightframe" id="mypay" marginWidth="0" marginHeight="0" scrolling="no" src="paypage/yeepaybank.htm" frameBorder="0" onload="this.height=0;if(rightframe.document.body.scrollHeight<500){this.height=500}else{this.height=rightframe.document.body.scrollHeight}"></IFRAME>-->
											<IFRAME name="rightframe" id="mypay" marginWidth="0" marginHeight="0" scrolling="no" src="paypage/payipays.htm?<%=uname %>" frameBorder="0"  height="700"></IFRAME>
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
									<div style="width: 1px; float: left;">
										&nbsp;
									</div>
									<div class="boxtem">
										&nbsp;&nbsp;
										<span>客服服务<b>&gt;</b>
										</span>
										<br />
										&nbsp;&nbsp;<a href="../newpage/content/SK20110922114037888.html" target="_blank">充值咨询</a>
										<br />
										&nbsp;&nbsp;<a href="../newpage/content/SK20110922114037888.html" target="_blank">客服服务</a>
										<br />
										&nbsp;&nbsp;<a href="http://www.yeeyk.com/yeex-xcard-app/queryCard/showJsp" target="_blank">易宝充值余额查看</a>
									</div>
									<div class="hrf">
									</div>
									<div class="boxtem">
										&nbsp;&nbsp;
										<span>常见问题<b>&gt;</b>
										</span>
										<br />
										&nbsp;&nbsp;
										<a href="../newpage/content/SK20131025160937281.html" target="_blank">没开通网银可以充值吗？</a>
										<br />
										&nbsp;&nbsp;
										<a href="../newpage/content/SK20131025160719005.html" target="_blank">哪种充值兑换游戏币最高？</a>
										<br />
									</div>
									<div class="hrf">
									</div>
									<div class="boxtem">
										&nbsp;&nbsp;
										<span>充值帮助<b>&gt;</b>
										</span>
										<br />
										&nbsp;&nbsp;
										<a href="../newpage/content/SK20131025160637277.html" target="_blank">网银支付指南</a>
										<br />
										&nbsp;&nbsp;
										<a href="../newpage/content/SK20131025161836597.html" target="_blank">K币兑换K点流程</a>
										<br />
										&nbsp;&nbsp;
										<a href="../newpage/content/SK20131025162540758.html" target="_blank">卡类充值帮助</a>
									</div>
									<div class="hrf">
									</div>
									<div class="boxtem">
										&nbsp;&nbsp;
										<span>充值公告<b>&gt;</b>
										</span>
										<br />
										&nbsp;&nbsp;
										<a href="http://www.crazyflasher.com/mercenaryempire/context/informatin/SK20131021160510924.html" target="_blank">平台币兑换比例调整公告？</a><br />
										&nbsp;&nbsp;
										<a href="../newpage/content/SK20131025161836597.html" target="_blank">平台币对游戏币兑换公告？</a>
									</div>
								</div>
								<div class="content_bottom_bottom">
								</div>
							</div>
						</div>
						<div class="index_center_ph2">
						</div>
					</div>
			</div>
			<br/>
	</body>
</html>