import React, { Component } from 'react';

const Html = ({title, children, assets}) => (
	<html>
		<head>
			<meta charSet="UTF-8"/>
			<title>{title}</title>
			<link rel="stylesheet" type="text/css" href="/main.css"/>
		</head>
		<body>
			<div id="root">{children}</div>
			<script src="/app.js" />
		</body>
	</html>
)

export default Html;
