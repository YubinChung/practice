
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>MP605 Yubin Chung Q3</title>
		<link rel="stylesheet" href="css/common.css" />
	</head>
	<body>
		<div class="wrap q3_wrap">

			<ul>
				<li><a href="index.php">Home</a></li>
				<li><a href="q3_register.php">Register</a></li>
			</ul>
			<form action="q3_login.php" method="post" name="form1">
				<div class="center login_wrap">
					<p>
						<label for="user_id">ID</label><br>
						<input type="text" name="user_id" id="user_id">
					</p>
					<p>
						<label for="user_pw">Password</label><br>
						<input type="password" name="user_pw" id="user_pw">
						<input type="hidden" name="login_status" id="login_status" value="0" />
					</p><br>
					<input type="submit" id="submit" value="Login" />
				</div>
			</form>
		</div>
	</body>	
</html>