<html>
	<head>
		<title>MP605 Yubin Chung Q1 - Result</title>
		<link rel="stylesheet" href="../css/common.css">
	</head>
	<body>
		<div style="width:80%;margin:0 auto">
			<?php 
			error_reporting(0);
			extract($_POST);	

			$file_name ="../form.txt";

			$file = fopen($file_name, 'a') or die("Can not open the file.");

			$content = "Student Name - ".$s_name."\r\n";
			$content .= "Date of Birth (m) - ".$dob_m."\r\n";			
			$content .= "Date of Birth (d) - ".$dob_d."\r\n";			
			$content .= "Date of Birth (y) - ".$dob_y."\r\n";			
			$content .= "Street - ".$street."\r\n";			
			$content .= "City - ".$city."\r\n";			
			$content .= "Zip Code - ".$zipCode."\r\n";			
			$content .= "Student E-mail - ".$s_email."\r\n";			
			$content .= "Primary Phone - ".$p_phone."\r\n";			
			$content .= "Secondary Phone - ".$s_phone."\r\n";			
			$content .= "Lesson Day - ".$lessonDay."\r\n";			
			$content .= "Lesson Time - ".$lessonTime."\r\n";			
			$content .= "Country - ".$country."\r\n";			
			$content .= "Phone - (+".$phone_01.")".$phone_02.$phone_03."\r\n";			
			$content .= "Gender - ".$gender."\r\n";			
			$content .= "Starting Session - ".$starting_session."\r\n";
			$content .= "Comments Questions - ".$comments."\r\n";

			fwrite($file, $content);
			fclose($file);

			$fileOpen = fopen($file_name, 'r') or die("Cannot open the files.");
			while(!feof($fileOpen)){
				echo fgets($fileOpen);
				echo "<br>";
			}
			fclose($fileOpen);
		?>
		</div>
	</body>
</html>

