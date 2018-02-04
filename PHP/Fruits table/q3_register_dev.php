<?php 
	require("q3_database.php");
	extract($_POST);

	mysqli_query($cn, "INSERT INTO mp605.user(user_id, user_name, pw, address, phone, email) VALUES ('$user_name', '$user_name', '$pw', '$address', '$phone', '$email')");

	echo 'Thank you for Join us';
	echo '<br><a href="index.php">Home</a>';
	mysqli_close($cn);


?>