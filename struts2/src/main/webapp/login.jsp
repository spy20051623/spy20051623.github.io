<%@ taglib prefix="s" uri="/struts-tags" %>
<%@ page language="java" import="java.util.*" pageEncoding="UTF-8" %>
<html>
<head>
	<title>用户登录界面</title>
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
</head>
<body>
<s:form action="/test/login" method="post">
	<s:textfield name="userName" label="用户名"/>
	<s:password name="password" label="密码"/>
	<s:submit value="提交"/>
</s:form>
</body>
</html>
