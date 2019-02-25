import React, { Component } from 'react';

const Html = ({title, children, assets}) => (
	<html>
		<head>
			<meta charSet="UTF-8"/>
			<title>{title}</title>
			<link rel="stylesheet" type="text/css" href="/main.css"/>
			<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
		</head>
		<body>
			<div id="root">{children}</div>
			<script src="/app.js" />
		</body>
	</html>
)

export default Html;
