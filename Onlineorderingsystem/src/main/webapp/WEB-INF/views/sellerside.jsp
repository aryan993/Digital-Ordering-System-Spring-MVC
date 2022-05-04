<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
<style type="text/css">
body {
	margin-left: 10%;
	margin-right: 5%;
	overflow: hidden;
	/* Hide scrollbars */
	font-family: 'Open Sans', sans-serif;
	font-weight: 300;
	line-height: 1.42em;
	background: linear-gradient(45deg, #49a09d, #5f2c82);
}

h2 {
	text-align: center;
}

#header {
	width: 93.45%;
	height: 150px;
}

h1 {
	font-size: 62px;
	color: rgb(244, 244, 245);
}
.inmain {
	zoom: 1;
	vertical-align: top;
	width: 50%;
	overflow-x: hidden;
	overflow-y: auto;
	background-color: aliceblue;
	float: left;
	position: absolute;
    left: 0;
    right: 0;
    margin: auto;
	text-align: center;
	height:500px
}
img {
	width: 120px;
	height: auto;
}
table, th, td {
  border: 1px solid;
}
</style>
</head>

<body>
	<%
	String orders = (String) request.getAttribute("orders");
	%>
	
		<div id="header">
		<div style="float: left; display: inline">
			<img
				src="https://freepngimg.com/thumb/cooking/29422-3-cooking-image-thumb.png"
				alt="">
		</div>
		<div
			style="float: left; display: inline; width: 70%; text-align: center;">
			<h1>RB Restaurant</h1>
		</div>
	</div>
	<div id="main" >
		<div class="inmain">
	<table width="100%" id="insertionPoint" style="margin-bottom: 30px;">
		<thead>
			<tr>
				<th>Product</th>
				<th>Quantity</th>
				<th>Price</th>
			</tr>
		</thead>
		<tbody id="tableData"></tbody>
	</table>
	</div>
	</div>
	
</body>
<script>
	var orders =
<%=orders%>
	var k = '<tbody>'
	for (i = 0; i < orders.length; i++) {
		k += '<tr>';
		k += '<td>' + orders[i].Product + '</td>';
		k += '<td>' + orders[i].Quantity + '</td>';
		k += '<td>' + orders[i].Price + '</td>';
		k += '</tr>';
	}
	k += '</tbody>';
	document.getElementById('tableData').innerHTML = k;
</script>
</script>
</html>