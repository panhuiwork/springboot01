<%@ page language="java" import="java.util.*" pageEncoding="GBK"%>
<%@page import="com.k5studio.skflasher.entity.Skinforamation"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
	<head>
		<title>Andy  law's Web</title>
		<meta http-equiv="Content-Type" content="text/html; charset=gb2312" />
		<meta http-equiv="X-UA-Compatible" content="IE=EmulateIE7" />
		<meta name="keywords" content="��Ϸ,flashС��Ϸ,��Ϸ����,flash����,���Ϳ��,���Ϳ��7Ӷ���۹�,��7" /> 
		<meta name="description" content="bbplayer.net��һ��flash��Ϸ���ϵ���վ���������������Ȥ��flash��Ϸ�;�����flash����" />
		<meta name="msapplication-task" content="name=���Ϳ��7Ӷ���۹�; action-uri=http://www.bbplayer.net/;icon-uri=http://andylaw.net/favicon.ico" />
		<link href="../newpage/newcss/head.css" type="text/css"  rel="stylesheet"/>
		<link href="../newpage/newcss/pay.css" rel="stylesheet" type="text/css" />
		<script src="../newpage/js/jquery-1.6.2.min.js" type="text/javascript"></script>
		<script src="../newpage/js/cookie.js" type="text/javascript"></script>
		<script src="../newpage/js/loadhead.js" type="text/javascript"></script>
		<script type="text/javascript" src="js/newpay.js"></script>
	</head>
	<body>
	<%
		
		int isshows=0; 				//0����ʾ 1�ǲ���ʾ

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
			<div class="showinfos"><button id="surepay" class="surepay">����ɳ�ֵ</button>&nbsp;&nbsp;<button id="closepay" class="surepay">��������</button></div>
		</div>
	</div>
			<!--ͷ����ʽ-->
			<div class="page_top">
			
			</div>
			<!--ͷ����ʽ-->
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
									<span style="margin-left:55px;">��ֵ����</span>
								</div>
								<div class="content_center">
									<div class="content_center_top">
									</div>
									<div class="content_center_center">
										<div class="leftnavigation">
											 <!-- <div class="box box1" id="mylove0"
												onclick="window.rightframe.location.href='paypage/yeepaybanks.htm?<%=uname %>'">
												���п���ֵ
											</div> -->
											<div class="box box1" id="mylove0"
												onclick="window.rightframe.location.href='paypage/payipays.htm?<%=uname %>'">
												֧����֧��(�Ƽ�)
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
												΢��ɨ��֧��
											</div>
											
											<div class="box" id="mylove3"
												onclick="window.rightframe.location.href='paypage/rgzfb.htm?<%=uname %>'">
												����(֧�������)
											</div>
<!-- 
<div class="box" id="mylove4"
												onclick="window.rightframe.location.href='paypage/rgjd.htm?<%=uname %>'">
												����ɨ��֧��
											</div>
										
											<div class="box" id="mylove2"
												onclick="window.rightframe.location.href='paypage/rgqq.htm?<%=uname %>'">
												QQ���֧��
											</div>

											
										-->



							<%
								}
								}
							%>
											
											<!--  ddd  -->

											<div class="box" id="mylove5"
												onclick="window.rightframe.location.href='paypage/cmccs.htm?<%=uname %>'">
												ȫ���ƶ���֧��
											</div>
											<div class="box" id="mylove6"
												onclick="window.rightframe.location.href='paypage/unicoms.htm?<%=uname %>'">
												ȫ����ͨ��֧��
											</div>
											<div class="box" id="mylove7"
												onclick="window.rightframe.location.href='paypage/telecoms.htm?<%=uname %>'">
												ȫ�����ſ�֧��
											</div>
											<div class="box" id="mylove8"
												onclick="window.rightframe.location.href='paypage/Jcards.htm?<%=uname %>'">
												����һ��֧ͨ��
											</div>
											<div class="box" id="mylove9"
												onclick="window.rightframe.location.href='paypage/otherpays.htm?<%=uname %>'">
												��Ϸ�㿨��ֵ(��������)
											</div>

<!--
											<div class="box" id="mylove1"
												onclick="window.rightframe.location.href='paypage/zfwechat.htm?<%=uname %>'">
												΢��ɨ��֧��
											</div>
											-->
											<!-- 
											<div class="box" id="mylove10"
												onclick="window.rightframe.location.href='paypage/wsfalipay.htm?<%=uname %>'">
												֧�������Ե�
											</div>
											<div class="box" id="mylove7"
												onclick="window.rightframe.location.href='paypage/qqcards.htm?<%=uname %>'">
												Q�ҿ���ֵ(�ǵ�����)
											</div>
											 <div class="box" id="mylove8"
												onclick="window.rightframe.location.href='paypage/payphones.htm?<%=uname %>'">
												ȫ���̻���ֵ��V�ң�
											</div>
											<div class="box" id="mylove9"
												onclick="window.rightframe.location.href='paypage/paymessages.htm?<%=uname %>'">
												V�����ֻ��츶
											</div> -->
											<!-- 
											<div class="box" id="mylove8"
												onclick="window.rightframe.location.href='paypage/aipays.htm?<%=uname %>'">
												������ֵ
											</div>
											<div class="box" id="mylove9"
												onclick="window.rightframe.location.href='paypage/tencents.htm?<%=uname %>'">
												�Ƹ�ͨ��ֵ
											</div> 

-->
<!-- 	
											<div class="box" id="mylove2"
												onclick="window.rightframe.location.href='paypage/zfqq.htm?<%=uname %>'">
												QQ���֧��(ά��)
											</div>
											<div class="box" id="mylove3"
												onclick="window.rightframe.location.href='paypage/zfjd.htm?<%=uname %>'">
												����Ǯ��֧��
											</div> 
											<div class="box" id="mylove4"
												onclick="window.rightframe.location.href='paypage/zfalipay.htm?<%=uname %>'">
												֧����ɨ��֧��
											</div> 
											
											<div class="box" id="mylove3"
												onclick="window.rightframe.location.href='paypage/wsfbank.htm?<%=uname %>'">
												����֧��
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
										<span>�ͷ�����<b>&gt;</b>
										</span>
										<br />
										&nbsp;&nbsp;<a href="../newpage/content/SK20110922114037888.html" target="_blank">��ֵ��ѯ</a>
										<br />
										&nbsp;&nbsp;<a href="../newpage/content/SK20110922114037888.html" target="_blank">�ͷ�����</a>
										<br />
										&nbsp;&nbsp;<a href="http://www.yeeyk.com/yeex-xcard-app/queryCard/showJsp" target="_blank">�ױ���ֵ���鿴</a>
									</div>
									<div class="hrf">
									</div>
									<div class="boxtem">
										&nbsp;&nbsp;
										<span>��������<b>&gt;</b>
										</span>
										<br />
										&nbsp;&nbsp;
										<a href="../newpage/content/SK20131025160937281.html" target="_blank">û��ͨ�������Գ�ֵ��</a>
										<br />
										&nbsp;&nbsp;
										<a href="../newpage/content/SK20131025160719005.html" target="_blank">���ֳ�ֵ�һ���Ϸ����ߣ�</a>
										<br />
									</div>
									<div class="hrf">
									</div>
									<div class="boxtem">
										&nbsp;&nbsp;
										<span>��ֵ����<b>&gt;</b>
										</span>
										<br />
										&nbsp;&nbsp;
										<a href="../newpage/content/SK20131025160637277.html" target="_blank">����֧��ָ��</a>
										<br />
										&nbsp;&nbsp;
										<a href="../newpage/content/SK20131025161836597.html" target="_blank">K�Ҷһ�K������</a>
										<br />
										&nbsp;&nbsp;
										<a href="../newpage/content/SK20131025162540758.html" target="_blank">�����ֵ����</a>
									</div>
									<div class="hrf">
									</div>
									<div class="boxtem">
										&nbsp;&nbsp;
										<span>��ֵ����<b>&gt;</b>
										</span>
										<br />
										&nbsp;&nbsp;
										<a href="http://www.crazyflasher.com/mercenaryempire/context/informatin/SK20131021160510924.html" target="_blank">ƽ̨�Ҷһ������������棿</a><br />
										&nbsp;&nbsp;
										<a href="../newpage/content/SK20131025161836597.html" target="_blank">ƽ̨�Ҷ���Ϸ�Ҷһ����棿</a>
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