<?php
    	
?>
<!DOCTYPE html>
<html>
<head>
	<title>RESULT</title>
</head>
<body>
      <h1>YOUR SCORED <span style="color: red"><?php
        session_start();
    	print $_SESSION['resul'];
       ?></span>
       OUT OF <span style="color:red">10</span>
      </h1>
</body>
</html>