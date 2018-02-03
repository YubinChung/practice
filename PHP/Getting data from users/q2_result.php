<html>
	<head>
		<title>PHP Practice</title>
		<link rel="stylesheet" href="../css/common.css" />
	</head>
	<body>
		<div class="wrap q2_wrap">
			<h1 class="tl">Your Favourite Seasons and Weather are :-</h1>
			<p>Your favourite weather in 
				<span class="uppercase">
					<?php 
						$city = $_POST['city'];
						echo $city;
 					?>
				</span> is: <br>
				<div class="uppercase">
					<?php 
					echo '<ul>';
						
						foreach ($_POST['weather'] as $weather){
							echo '<li>'.$weather.'</li>';
						}
						
						
						echo '</ul>';
				?>
				</div>
			</p>
			<p>Your favourite seasons are <br>
				<div class="uppercase">
					<?php 
						
						echo '<ul>';
						
						foreach ($_POST['seasons'] as $seasons){
							echo '<li>'.$seasons.'</li>';
						}
						
						
						echo '</ul>';
						
					?>
				</div>
			</p>
		</div>	
	</body>
</html>