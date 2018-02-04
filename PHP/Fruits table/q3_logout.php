<?php 
	require("q3_database.php");
	extract($_POST);
	$login_status = $_POST['login_status'];


	// mysqli_query($cn, "SELECT user.login_status FROM mp605.user WHERE id='$user_id'");

	mysqli_query($cn, "UPDATE user SET login_status='$login_status' WHERE id='$user_id'");
	mysqli_close($cn);
	header('Location:index.php');
?>