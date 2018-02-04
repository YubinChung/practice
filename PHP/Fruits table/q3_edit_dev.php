<?php 
	require("q3_database.php");
	extract($_GET);
	
	mysqli_query($cn, "UPDATE mp605.product SET name='$name', quantity='$quantity', price='$price' WHERE id='$id'");
	mysqli_close($cn);
	
	header("Location:q3_list.php?user_id=".$user_id);
	


?>