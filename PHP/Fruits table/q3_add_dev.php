<?php 
	require("q3_database.php");
	extract($_POST);
	extract($_GET);
	$loggedUser_id = $_GET['user_id'];

	mysqli_query($cn, "INSERT INTO mp605.product(name, quantity, price) VALUES ('$name', '$quantity', '$price')");
	

	$loggedUser = mysqli_query($cn, "SELECT * FROM mp605.user WHERE user_id='$loggedUser_id'");

	$users = mysqli_fetch_array($loggedUser);
	$user_id = $users["id"];
	$user_name = $users["user_name"];
	mysqli_close($cn);
	//echo $user_name;
	header('Location:q3_list.php?user_id='.$user_name);

?>