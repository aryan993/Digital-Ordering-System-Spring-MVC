<!DOCTYPE html>
<html lang="en">

<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Document</title>

<style type="text/css">
.cards-list {
	z-index: 0;
	width: 100%;
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
}

.card {
	margin: 30px auto;
	width: 300px;
	height: 300px;
	border-radius: 40px;
	box-shadow: 5px 5px 30px 7px rgba(0, 0, 0, 0.25), -5px -5px 30px 7px
		rgba(0, 0, 0, 0.22);
	cursor: pointer;
	transition: 0.4s;
}

h1 {
	text-align: center;
	font-family: sans-serif;
	font-weight: bold;
	font-size: 30px;
	
}
</style>
</head>

<body>
	<div class="cards-list">

		<div class="card 1"
			style="background-color: rgba(187, 81, 81, 0.242);"
			onclick="location.href='http://localhost:8080/Onlineorderingsystem/userside';">
			<h1>Users's side</h1>
		</div>

		<div class="card 2"
			style="background-color: rgba(81, 111, 187, 0.242);"
			onclick="location.href='http://localhost:8080/Onlineorderingsystem/sellerside';">
			<h1>Seller's side</h1>
		</div>
	</div>
</body>
</html>