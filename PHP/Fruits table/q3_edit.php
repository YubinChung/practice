<?php
	require("q3_database.php");
	extract($_GET);
	$list = mysqli_query($cn, "SELECT * FROM mp605.product WHERE id='$id'" );
	$array = mysqli_fetch_array($list);

	$id = $array["id"];
	$name = $array["name"];
	$quantity = $array["quantity"];
	$price = $array["price"];

?>

<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>MP605 Yubin Chung Q3</title>
		<link rel="stylesheet" href="css/common.css" />
	</head>
	<body>
		<div class="wrap q3_wrap edit_wrap">
			<h3>Edit</h3>
			<ul>
				<li><a href="index.php">Home</a></li>
				<li><a href="q3_add.php?user_id=<?php echo $_GET['user_id']?>">Add New Data</a></li>
				<li><form action="q3_logout.php" method="post"><input type="hidden" name="login_status" id="login_status" value="0" /><input type="hidden" name="user_id" id="user_id" value=<?php 
					require("q3_database.php");
					$user_real_id = $_GET['user_id'];
					$list = mysqli_query($cn, "SELECT * FROM mp605.user WHERE user_id='$user_real_id'" );
					$array = mysqli_fetch_array($list);
					$user_id = $array["id"];
				echo $user_id;
				?> /><button type="submit">Logout</button></form></li>
			</ul>
			<form action="q3_edit_dev.php" method="get">
				<table>
					<tbody>
						<tr>
							<th>Name</th>
							<th>Quantity</th>
							<th>Price(euro)</th>
							<th>Update</th>
						</tr>
						<tr>
							<?php
							require("q3_database.php");
							$id = $_GET['id'];

							$list = mysqli_query($cn, "SELECT * FROM mp605.product WHERE id=$id" );
							$array = mysqli_fetch_array($list);

							$id = $array["id"];
							$name = $array["name"];
							$quantity = $array["quantity"];
							$price = $array["price"];
							$get_user_id = $_GET['user_id'];
							
							echo "<td><input type='hidden' id='id' name='id' value='$id' /><input type='text' id='name' name='name' value='$name' /></td>";
							echo "<td><input type='text' id='quantity' name='quantity' value='$quantity' pattern='[^a-zA-Z]*$' /></td>";
							echo "<td><input type='text' id='price' name='price' value='$price' pattern='[^a-zA-Z]*$' /></td>";
							echo "<td><input type='hidden' value='$get_user_id' name='user_id' id='user_id'><button type='submit'>Submit</button></td>";

						?>
						</tr>
					</tbody>
				</table>
			</form>
		</div>
	</body>	
</html>