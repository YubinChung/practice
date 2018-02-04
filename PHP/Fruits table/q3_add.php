<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>MP605 Yubin Chung Q3</title>
		<link rel="stylesheet" href="css/common.css" />
	</head>
	<body>
		<div class="wrap q3_wrap edit_wrap">
			<h3>Add New Data</h3>
			<ul>
				<li><a href="index.php">Home</a></li>
				<li><a href="q3_add.php?user_id=<?php echo $_GET['user_id']?>">Add New Data</a></li>
				<li><a href="q3_logout.php">Logout</a></li>
			</ul>
			<form action="q3_add_dev.php" method="get">
				<table>
					<tbody>
						<tr>
							<th>Name</th>
							<th>Quantity</th>
							<th>Price(euro)</th>
							<th>Update</th>
						</tr>
						<tr>
							<td>
								<input type='text' id='name' name='name' />
								</td>
							<td>
								<input type='text' id='quantity' name='quantity' pattern='[^a-zA-Z]*$' />
							</td>
							<td>
								<input type='text' id='price' name='price' pattern='[^a-zA-Z]*$' />

								</td>
							<td>
								<input type="hidden" value=<?php echo $_GET['user_id'] ?> name="user_id" id="user_id">
								<button type='submit'>Submit</button>
							</td>
						</tr>
					</tbody>
				</table>
			</form>
		</div>
	</body>	
</html>