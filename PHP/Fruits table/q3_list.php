<?php 
	require("q3_database.php");	
	extract($_POST);
	//error_reporting(0);
	// $user = mysqli_query($cn, "SELECT * FROM mp605.user" );
	
	function status(){
		require("q3_database.php");
		extract($_POST);
		
		$loggedUser_id = $_GET['user_id'];
		$loggedUser = mysqli_query($cn, "SELECT * FROM mp605.user WHERE user_id='$loggedUser_id'");
		$users = mysqli_fetch_array($loggedUser);
		$login_status = $users["login_status"];
		
		if ( $login_status == 1){
			lists();

		} else {
			echo '<h1>You Have to login if you want to access the data</h1>';
		}
	}
	function lists(){

		require("q3_database.php");
		$loggedUser_id = $_GET['user_id'];
		$list = mysqli_query($cn, "SELECT * FROM mp605.product" );
		//$user = mysqli_query($cn, "SELECT * FROM mp605.user" );
		$loggedUser = mysqli_query($cn, "SELECT * FROM mp605.user WHERE user_id='$loggedUser_id'");

		$cnt = mysqli_num_rows($list);
		$users = mysqli_fetch_array($loggedUser);
		$user_id = $users["id"];
		$user_name = $users["user_name"];

		echo '<ul>';
		echo '<li><a href="index.php">Home</a></li>';
		
		echo '<li><a href="q3_add.php?user_id='.$user_name.'">Add New Data</a></li>';
		echo '<li><form action="q3_logout.php" method="post"><input type="hidden" name="login_status" id="login_status" value="0" /><input type="hidden" name="user_id" id="user_id" value="'.$user_id.'" /><button type="submit">Logout</button></form></li>';
		echo '</ul>';
		echo '<table><tbody><tr><th>Name</th><th>Quantity</th><th>Price(euro)</th><th>Update</th></tr>';
		for( $i = 0; $i < $cnt; $i++){
			$array = mysqli_fetch_array($list);

			$id = $array["id"];
			$name = $array["name"];
			$quantity = $array["quantity"];
			$price = $array["price"];
			$get_user_id = $_GET['user_id'];

			echo "<tr><td>$name</td><td>$quantity</td><td>$price</td>";
			echo "<td><form class='edit_wrap' method='get' action='q3_edit.php'><input type='hidden' id='id' name='id' value='$id' /><input type='hidden' value='$get_user_id' name='user_id' id='user_id'><input type='submit' id='edit' value='Edit' name='edit' /></form>";
			echo "<form method='get' action='q3_delete.php'><input type='hidden' id='id' name='id' value='$id' /><input type='hidden' value='$get_user_id' name='user_id' id='user_id'><input name='delete' type='submit' id='delete' value='delete' /></form></td>";
			echo "</tr>";
		}
		echo '</tbody></table>';
		

		
	}
?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>MP605 Yubin Chung Q3</title>
		<link rel="stylesheet" href="css/common.css" />
	</head>
	<body>
		<div class="wrap q3_wrap">
			<?php status(); ?>
			
		</div>
	</body>	
</html>
