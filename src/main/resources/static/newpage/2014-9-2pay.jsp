<%@ page language="java" import="java.util.*" pageEncoding="GBK"%>
<%@page import="com.k5studio.skflasher.entity.Skinforamation"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
	<head>
		<title>���Ϳ��ƽ̨��վ</title>
		<meta http-equiv="Content-Type" content="text/html; charset=gb2312" />
		<meta http-equiv="X-UA-Compatible" content="IE=EmulateIE7" />
		<meta name="keywords"
			content="��Ϸ,flashС��Ϸ,��Ϸ����,flash����,���Ϳ��,���Ϳ��7Ӷ���۹�,��7" />
		<meta name="description"
			content="bbplayer.net��һ��flash��Ϸ���ϵ���վ���������������Ȥ��flash��Ϸ�;�����flash����" />
		<meta name="msapplication-task"
			content="name=���Ϳ��7Ӷ���۹�; action-uri=http://www.bbplayer.net/;icon-uri=http://www.crazyflasher.com/favicon.ico" />
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
			<div class="showinfos"><button id="surepay" class="surepay">����ɳ�ֵ</button>&nbsp;&nbsp;<button id="closepay" class="surepay">��������</button></div>
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
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="http://www.crazyflasher.com/" target="_blank">��ҳ</a>
							</li>
							<li>
									<font class="fengexian">|</font>&nbsp;&nbsp;&nbsp;&nbsp;<a href="http://crazyflasher.com/skflashermsg/newpage/content/L201308131436205001.html" target="_blank">���Ź���</a>
							</li>
							<li>
									<font class="fengexian">|</font>&nbsp;&nbsp;&nbsp;&nbsp;<a href="http://crazyflasher.com/skflashermsg/myplace/place.jsp" target="_blank">�û�����</a>
							</li>
							<li>
									<font class="fengexian">|</font>&nbsp;&nbsp;&nbsp;&nbsp;<a href="http://crazyflasher.com/skflashermsg/newpage/content/SK20110922114037888.html" target="_blank">�ͷ�����</a>
							</li>
							<li>
									<font class="fengexian">|</font>&nbsp;&nbsp;&nbsp;&nbsp;<a href="http://bbs.crazyflasher.com/" target="_blank">�ٷ���̳</a>
							</li>
							<li>
									<font class="fengexian">|</font>&nbsp;&nbsp;&nbsp;&nbsp;<a href="#">��ֵ����</a>
							</li>
						</ul>
					</div>
					<br />
					<br />
					<div class="index_center_content">
						<div class="content_topbg">
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;��ֵ����
						</div>
						<div class="content_center">
							<div class="content_center_top">
							</div>
							<div class="content_center_center">
								<div class="leftnavigation">
									<div class="box box1" id="mylove0"
										onclick="window.rightframe.location.href='paypage/yeepaybank.htm?<%=uname %>'">
										���п���ֵ
									</div>
									<div class="box " id="mylove1"
										onclick="window.rightframe.location.href='paypage/payipay.htm?<%=uname %>'">
										֧������ֵ
									</div>
									<div class="box" id="mylove2"
										onclick="window.rightframe.location.href='paypage/tenpay.htm?<%=uname %>'">
										�Ƹ�ͨ��ֵ
									</div>
									<div class="box" id="mylove3"
										onclick="window.rightframe.location.href='paypage/cmcc.htm?<%=uname %>'">
										ȫ���ƶ�����ֵ
									</div>
									<div class="box" id="mylove4"
										onclick="window.rightframe.location.href='paypage/unicom.htm?<%=uname %>'">
										ȫ����ͨ����ֵ
									</div>
									<div class="box" id="mylove5"
										onclick="window.rightframe.location.href='paypage/telecom.htm?<%=uname %>'">
										ȫ�����ſ���ֵ
									</div>
									<div class="box" id="mylove6"
										onclick="window.rightframe.location.href='paypage/Jcard.htm?<%=uname %>'">
										����һ��ͨ��ֵ
									</div>
									<div class="box" id="mylove7"
										onclick="window.rightframe.location.href='paypage/qqcard.htm?<%=uname %>'">
										Q�ҿ���ֵ(�ǵ�����)
									</div>
									<div class="box" id="mylove8"
										onclick="window.rightframe.location.href='paypage/payphone.htm?<%=uname %>'">
										ȫ���̻���ֵ��V�ң�
									</div>
									<div class="box" id="mylove9"
										onclick="window.rightframe.location.href='paypage/paymessages.htm?<%=uname %>'">
										�ֻ������ų�ֵ
									</div>
									<div class="box" id="mylove10"
										onclick="window.rightframe.location.href='paypage/otherpay.htm?<%=uname %>'">
										�����㿨��ֵ
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
								<span>�ͷ�����<b>&gt;</b>
								</span>
								<br />
								&nbsp;&nbsp;&nbsp;&nbsp;<a href="http://crazyflasher.com/skflashermsg/newpage/content/SK20110922114037888.html" target="_blank">��ֵ��ѯ</a>
								<br />
								&nbsp;&nbsp;&nbsp;&nbsp;<a href="http://crazyflasher.com/skflashermsg/newpage/content/SK20110922114037888.html" target="_blank">�ͷ�����</a>
								<br />
								&nbsp;&nbsp;&nbsp;&nbsp;<a href="http://www.yeepay.com/app-merchant-proxy/QueryStoreAccount.action" target="_blank">�ױ���ֵ���鿴</a>
							</div>
							<div class="hrf">
							</div>
							<div class="boxtem">
								&nbsp;&nbsp;&nbsp;&nbsp;
								<span>��������<b>&gt;</b>
								</span>
								<br />
								&nbsp;&nbsp;&nbsp;&nbsp;
								<a href="http://crazyflasher.com/skflashermsg/newpage/content/SK20131025160937281.html" target="_blank">û��ͨ�������Գ�ֵ��</a>
								<br />
								&nbsp;&nbsp;&nbsp;&nbsp;
								<a href="http://crazyflasher.com/skflashermsg/newpage/content/SK20131025160719005.html" target="_blank">���ֳ�ֵ�һ���Ϸ����ߣ�</a>
								<br />
							</div>
							<div class="hrf">
							</div>
							<div class="boxtem">
								&nbsp;&nbsp;&nbsp;&nbsp;
								<span>��ֵ����<b>&gt;</b>
								</span>
								<br />
								&nbsp;&nbsp;&nbsp;&nbsp;
								<a href="http://crazyflasher.com/skflashermsg/newpage/content/SK20131025160637277.html" target="_blank">����֧��ָ��</a>
								<br />
								&nbsp;&nbsp;&nbsp;&nbsp;
								<a href="http://crazyflasher.com/skflashermsg/newpage/content/SK20131025161836597.html" target="_blank">K�Ҷһ�K������</a>
								<br />
								&nbsp;&nbsp;&nbsp;&nbsp;
								<a href="http://crazyflasher.com/skflashermsg/newpage/content/SK20131025162540758.html" target="_blank">�����ֵ����</a>
							</div>
							<div class="hrf">
							</div>
							<div class="boxtem">
								&nbsp;&nbsp;&nbsp;&nbsp;
								<span>��ֵ����<b>&gt;</b>
								</span>
								<br />
								&nbsp;&nbsp;&nbsp;&nbsp;
								<a href="http://www.crazyflasher.com/mercenaryempire/context/informatin/SK20131021160510924.html" target="_blank">ƽ̨�Ҷһ������������棿</a><br />
								&nbsp;&nbsp;&nbsp;&nbsp;
								<a href="http://crazyflasher.com/skflashermsg/newpage/content/SK20131025161836597.html" target="_blank">ƽ̨�Ҷ���Ϸ�Ҷһ����棿</a>
							</div>
						</div>
						<div class="content_bottom_bottom">
						</div>
					</div>
					<div style="clear: both; font-size: 0px;"></div>
					<div style="margin-top: 20px;"></div>
					<!-- ��Ҫ��ȡ��-->
					<div class="bottom_all">
						<IFRAME id="bottom_all_ifrem" marginWidth="0" marginHeight="0"
							scrolling="no" src="bottom.htm" frameBorder="0"></IFRAME>
					</div>
					<!-- ��Ҫ��ȡ��-->
				</div>
			</div>
		</div>
	${content}
		<!-- JiaThis Button BEGIN 
		<script"text/javascript">
var jiathis_config = {
	url : "http://www.bbplayer.net",
	title : "���Ϳ��7Ӷ���۹� #��7Ӷ���۹�#",
	summary : "��ս����!����ս�Ұɡ�"
}
</script>
		<script
			src="http://v2.jiathis.com/code/jiathis_r.js?type=left&amp;move=0&amp;btn=l4.gif">
</script>
-->
		<!-- JiaThis Button END -->
	</body>
</html>
