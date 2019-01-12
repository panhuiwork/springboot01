<%@ page language="java"  pageEncoding="utf-8"%>
<%@page import="com.k5studio.skflasher.entity.Skinforamation"%>
<html>
	<head>
		<title>Andy  law's Web</title>
		<meta http-equiv="Content-Type" content="text/html; charset=gb2312" />
		<meta http-equiv="X-UA-Compatible" content="IE=EmulateIE7" />
		<meta name="keywords" content="游戏,flash小游戏,游戏盒子,flash动漫,闪客快打,闪客快打7佣兵帝国,闪7" /> 
		<meta name="description" content="bbplayer.net是一款flash游戏集合的网站，里面包含大量有趣的flash游戏和精美的flash动画" />
		<meta name="msapplication-task" content="name=闪客快打7佣兵帝国; action-uri=http://www.bbplayer.net/;icon-uri=http://andylaw.net/favicon.ico" />
		<link href="newcss/head.css" type="text/css"  rel="stylesheet"/>
		<link href="newcss/list.css" rel="stylesheet" type="text/css" />
		<script src="js/jquery-1.6.2.min.js" type="text/javascript"></script>
		<script src="js/cookie.js" type="text/javascript"></script>
		<script src="js/loadhead.js" type="text/javascript"></script>
		<script type="text/javascript" src="../js/findPs.js">
		</script>
	</head>
	<body>
		<!--头部样式-->
			<div class="page_top">
			
			</div>
			<!--头部样式-->
					<style>
.showconfigx {
	height: 22px;
	line-height: 22px;
	display: inline;
	margin-left: 10px;
	margin-top: 0px;
}

#showmyhideen {
	position: absolute;
	z-index: 3;
	width: 100%;
	height: 840px;
	background: black;
	display: none;
}

.mynamechange {
	width: 520px;
	height: 80px;
	background: white;
	color: black;
	margin-top: 20%;
	margin-left: 30%;
	text-align: center;
}

.mynamechange .showinfos {
	width: 520px;
	height: 60px;
	padding-top: 20px;
}

.mytable {
	color: white;
	fon-size: 12px;
	text-align: right;
}

.fontshow {
	color: red;
	text-align: left;
	font-size: 12px;
	padding-left: 10px;
}

.fontshow input {
	width: 158px;
	height: 22px;
	line-height: 22px;
	background: #1D1D1D;
	color: white;
}

.inputskus {
	width: 158px;
	height: 22px;
	line-height: 22px;
	background: #1D1D1D;
	color: white;
	border: 1px solid gray;
}

.setState button {
	cursor: pointer;
}

.setState input {
	border: 1px solid gray;
}

.inputborcorred {
	border: 2px solid red;
}

.inputborcorgreen {
	border: 2px solid blue;
}

#resultshow {
	font-size: 12px;
	color: #FF9000;
	padding-left: 20px;
	line-height: 30px;
	text-align: left;
	margin-top: 5px;
}

.surebutton {
	font-size: 12px;
	cursor: pointer;
	width: 90px;
	height: 30px;
	line-height: 31px;
	text-align: center;
	color: #cccccc;
	border:0px;
	background: url('../images/my-index-button.png');
	_filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='../images/my-index-button.png',sizingMethod='crop');
	_background-image: none;
}
</style>
			<div class="index_body">
				<div class="list_bg">
						<div class="bg_1">
						</div>
						<div class="bg_2"><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
						<center>
							<font color="#FF9000">*&nbsp;${content}</font>
						</center>	
						</div>
						<div class="bg_3">
						</div>
				</div>
			</div>
	</body>
</html>
