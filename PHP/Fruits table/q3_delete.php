<?php 
	require("q3_database.php");
	extract($_GET);

	if ($id = intval($id)){
		mysqli_query($cn, "DELETE FROM mp605.product WHERE id='$id'");
		header('Location:q3_list.php?user_id='.$user_id);
	} else {
		echo 'ID is not found';
		header('Location:q3_list.php?user_id='.$user_id);
	}
	
	mysqli_close($cn);
	

?>