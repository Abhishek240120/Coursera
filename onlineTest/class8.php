<?php
$count=0;
session_start();
$_SESSION['resul']=0;
if(isset($_POST['q1']) && ($_POST['q1']=='nitrogen')){


	$_SESSION['resul']=++$count;
	
}
if(isset($_POST['q2op1'])&&($_POST['q2op1']=='sandy' )){


	$_SESSION['resul']=++$count;
	
}
if(isset($_POST['q3op1'])&&($_POST['q3op1']=='fertiliser')){


	$_SESSION['resul']=++$count;
	
}
if(isset($_POST['q4op1'])&&($_POST['q4op1']=='root nodules')){


	$_SESSION['resul']=++$count;
	
}
if(isset($_POST['q5op1'])&&($_POST['q5op1']=='kharif') ){


	$_SESSION['resul']=++$count;
	
}
if(isset($_POST['q6op1'])&&($_POST['q6op1']=='ploughing')){


	$_SESSION['resul']=++$count;
	
}
if(isset($_POST['q7op1'])&&($_POST['q7op1']=='rabi')){


	$_SESSION['resul']=++$count;
	
}
if(isset($_POST['q8op1'])&&($_POST['q8op1']=='mustard')){


	$_SESSION['resul']=++$count;
	
}
if(isset($_POST['q9op1'])&&($_POST['q9op1']=='irrigation')){


	$_SESSION['resul']=++$count;
	
}
if(isset($_POST['q10op1'])&&($_POST['q10op1']=='plough')){


	$_SESSION['resul']=++$count;
	
}
if(isset($_POST['submit'])){
	header("Location:result.php");
	return;
}

?>



<!DOCTYPE html>
<html>
<head>
	<title>ONLINE TEST</title>
	<link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body style="background:white">
    <h1>
    	Welcome  <?php
    
    	print "  ".$_SESSION['name'];
    	?>
    </h1>
    <div >
    	<form method="POST">
    		<p><span style="font-weight: bold">
    			Q1.Leguminous plant help in the replenishment of the soil with______</span>
    			<br/>
    			<input type="text" id="q1op1" name="q1" size="40">
               
				
    		</p>
    		<p>
    			<span style="font-weight: bold">
    			Q2.The soil which needs least frequent irrigation is _______
    			<br/></span>
    			<input type="text" id="q2op1" name="q2op1" size="40">
               
    		</p>
    		<p><span style="font-weight: bold">
    			Q3.Urea is a_____
    			<br/></span>
    			<input type="text" id="q3op1" name="q3op1" size="40">
               
    		</p>
    		<p><span style="font-weight: bold">
    			Q4.Rhizobium bacteria are found in _____ of leguminous plants.
    			 <br/></span>
    			<input type="text" id="q4op1" name="q4op1" size="40">
             </p>
    		<p><span style="font-weight: bold">
    			Q5.The crops that are sown in rainy season are _______ crops.
    			  </span>  			<br/>
    			<input type="text" id="q5op1" name="q5op1" size="40">
    		</p>
    		<p><span style="font-weight: bold">
    			Q6.The process of loosening and turning of soil is called____
    			<br/></span>
    			<input type="text" id="q6op1" name="q6op1" size="40">

    		</p>
    		
    		<p><span style="font-weight: bold">
    			Q7.The crops that are sown in winter season are  ____  crops.  			<br/></span>
    			<input type="text" id="q7op1" name="q7op1" size="40">
               
    		</p>
    		<p><span style="font-weight: bold">
    			Q8.In the crop rotation method,after harvesting what crop we can sow______.</span>
    			<br/>
    			<input type="text" id="q8op1" name="q8op1" size="40">
              
    		</p>
    		<p><span style="font-weight: bold">
    			Q9. Watering of plants through other sources than rain is called____  </span>
    			<br/>
    			<input type="text" id="q9op1" name="q9op1" size="40">
                
    		</p>
    		<p><span style="font-weight: bold">
    			Q10.The ploughed land is levelled with the help of_________</span>
    			<br/>
    			<input type="text" id="q10op1" name="q10op1" size="40">
    		</p>
    	     <p align="center">
    		<input type="submit" name="submit" value="submit">
    	    </p>
    	</form>
    </div>
    		
    	</form>

    </div>
   
</body>
</html>