<?php

$nameisset=1;
if(isset($_POST['name'])){
session_start() ;
$_SESSION['name']=$_POST['name'];
}
if((isset($_POST['start'])) && ($_POST['class']=='8')&&(isset($_POST['name']) && strlen($_POST['name'])>1)){
	header("Location:class8.php");
	return;
}

if((isset($_POST['start'])) && ($_POST['class']=='4')){

	header("Location:test.php");
	return;
}
if(isset($_POST['name']) && isset($_POST['start']) && strlen($_POST['name'])<1){
   $nameisset=0;
}
    
	
?>

<!DOCTYPE html>
<html lang="en">
<head>
	<title>Online Test</title>
	<meta charset="utf-8">
	<meta  http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	
</head>
<body>
<header style="font-size: 40px;color: red">
	ONLINE TEST
</header>
<div>
	<form method="post" action="index.php">
		<p><label for="
			name">ENTER YOUR NAME:</label>
			<input type="text" name="name" id="name" size="40">

		</p>
		<p><label for="
			class">ENTER YOUR CLASS:</label>
			<select name="class" id="class">
				<option value="0">--please select--</option>
				<option value="1">1</option>
				<option value="2">2</option>
				<option value="3">3</option>
				<option value="4">4</option>
				<option value="5">5</option>
				<option value="6">6</option>
				<option value="7">7</option>
				<option value="8">8</option>
				<option value="9">9</option>
				<option value="10">10</option>
			</select>
		</p>
		<p>
			<input type="submit" name="start" value="START TEST">
       
		</p>
		
		
	</form>
	<div style="font-weight: bold">
		<?php
		if($nameisset==0){
			print "Please Enter your name";
		}
		?>
	</div>
</div>
</body>
</html>