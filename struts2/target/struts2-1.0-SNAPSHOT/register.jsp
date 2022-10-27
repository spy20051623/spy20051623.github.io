<%--
  Created by IntelliJ IDEA.
  User: spy
  Date: 2022/9/30
  Time: 18:46
  To change this template use File | Settings | File Templates.
--%>
<%@ taglib prefix="s" uri="/struts-tags" %>
<%@ page language="java" import="java.util.*" pageEncoding="UTF-8" %>
<html>
<head>
	<title>用户注册界面</title>
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
</head>
<body>
<s:form action="/test/register" method="post">
	<s:textfield name="id" label="ID"/>
	<s:textfield name="userName" label="用户名"/>
	<s:password name="password" label="密码"/>
	<s:password name="repeatPassword" label="重复密码"/>
	<s:submit value="提交"/>
</s:form>
</body>
</html>
