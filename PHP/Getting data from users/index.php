<?php
	error_reporting(0);
	
	function makeListWeather($list){
		
		for ($i = 0; $i < count($list); $i++) {
			if ($i != 0 && $i != 1){
				echo "<input type='checkbox' name='weather[]' id='w_0".$i."' value='".$list[$i]."'>"."<label for='w_0".$i."'>".$list[$i]."</label><br>";
			} else {
				echo "<input type='checkbox' name='weather[]' checked='checked' id='w_0".$i."' value='".$list[$i]."'>"."<label for='w_0".$i."'>".$list[$i]."</label><br>";
			}
		}
	}

	function makeListSeason($list2){
		
		for ($i = 0; $i < count($list2); $i++) {
			
			if ($i != 0 && $i != 1){
				echo "<input type='checkbox' name='seasons[]' id='s_0".$i."' value='".$list2[$i]."'>"."<label for='s_0".$i."'>".$list2[$i]."</label><br>";
				
				
			} else {
				echo "<input type='checkbox' name='seasons[]' checked='checked' id='s_0".$i."' value='".$list2[$i]."'>"."<label for='s_0".$i."'>".$list2[$i]."</label><br>"; 
			}
		}
	}
?>
<!DOCTYPE html>
<html>
	<head>	
		<meta charset="utf-8">
		<title>PHP Practice</title>
		<link rel="stylesheet" href="../css/common.css" />
	</head>
	<body>
		<div class="wrap q2_wrap">
			<h1 class="tl">Your Favourite Seasons and Weather are :-</h1>
			<p>Please enter the city of your choice :<br></p>
			<br>
			<form action="q2_result.php" method="post">
				<label for="city">City : </label>
				<input type="text" required="required" name="city" id="city" pattern="[^0-9]*$" title="It must not have number">
				<br><br>
				<p>Please choose the kinds of seasons and weather you like from the list below.<br>Choose all that apply</p>
				<br>
				<h3>Weather</h3>
				<div>
				<?php 
					$list = array( 'Sunshine', 'Clouds', 'Rain', 'Hail', 'Sleer','Snow', 'Wind', 'Cold', 'Heat');
					makeListWeather($list); 
				?>
				</div>
				<br>
				<h3>Season</h3>
				<div>
				<?php 
					$list2 = array( 'Spring', 'Summer', 'Autumn', 'Winter');
					makeListSeason($list2); 
				?>
				</div>
				<button type="submit" style="border:1px solid #000;padding: 5px 10px;text-decoration: none;color: #000;">Go</button>
				<input type="text" value="ttttttt" id="ttttttt" name="ttttttt" />
			</form>	
		</div>	
	</body>
</html>