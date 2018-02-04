<?php 
	require("q3_database.php");
	extract($_POST);
	$user_id = $_POST['user_id'];
	$pw = $_POST['user_pw'];
	$login_status = $_POST['login_status'];
	
	$getID = "SELECT user_id FROM mp605.user WHERE user_id='$user_id'";
	$getID = mysqli_query($cn, $getID);
	$getID = mysqli_fetch_array($getID);
	
	if($getID['user_id']) {
		
		$getPASS = "SELECT pw FROM mp605.user WHERE user_id='$user_id'";
		$getPASS = mysqli_query($cn, $getPASS);
		$getPASS = mysqli_fetch_assoc($getPASS);
		
		if($getPASS['pw'] == $pw) {
			require("q3_database.php");
			extract($_POST);
			mysqli_query($cn, "UPDATE mp605.user SET login_status='1' WHERE user_id='$user_id'");
			$ls = mysqli_query($cn, "SELECT login_status FROM mp605.user WHERE user_id='$user_id'");
			header("Location:q3_list.php?user_id=$user_id");
			
		}
		else {
			$login_status = 0;
			echo "<h1>ID or PASSWORD Error</h1>";
			readfile("index.php");
		}
	}
	
	else {
		$login_status = 0;
		echo "<h1>ID or PASSWORD Error</h1>";
		readfile("index.php");
	}
?>
