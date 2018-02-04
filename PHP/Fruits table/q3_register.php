
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>MP605 Yubin Chung Q3</title>
		<link rel="stylesheet" href="css/common.css" />
	</head>
	<body>
		<div class="wrap q3_wrap register_wrap">
			<ul>
				<li><a href="index.php">Home</a></li>
				<li><a href="index.php">Login</a></li>
			</ul>
			<form action="q3_register_dev.php" method="post" name="form1">
				<div class="center">
					<p>
						<label for="user_id">ID</label><br>
						<input type="text" name="user_id" id="user_id" required="required">
					</p>

					<p>
						<label for="user_name">Name</label><br>
						<input type="text" name="user_name" id="user_name" required="required">
					</p>
					<p>
						<label for="pw">Password</label><br>
						<input type="password" name="pw" id="pw" required="required">
					</p>
					<p>
						<label for="address">Address</label><br>
						<input type="text" name="address" id="address" required="required">
					</p>
					<p>
						<label for="phone">Phone</label><br>
						<input type="text" name="phone" id="phone" required="required" pattern="[0-9]*$">
					</p>
					<p>
						<label for="email">Email</label><br>
						<input type="email" name="email" id="email" required="required">
					</p>
					<br>
					<input type="submit" id="join" value="Join" />
				</div>
			</form>
		</div>
	</body>	
</html>