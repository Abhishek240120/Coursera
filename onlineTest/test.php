<?php
$count=0;
session_start();
$_SESSION['resul']=0;
$cansubmit=0;
if(!isset($_POST['q1op1']) && !isset($_POST['q1op2'])&& isset($_POST['q1op3'])&& !isset($_POST['q1op4'])){


	$_SESSION['resul']=++$count;
	
}
if(!isset($_POST['q2op1']) && isset($_POST['q2op2'])&& !isset($_POST['q2op3'])&& !isset($_POST['q2op4'])){


	$_SESSION['resul']=++$count;
	
}
if(!isset($_POST['q3op4']) && !isset($_POST['q3op2'])&& isset($_POST['q3op3'])&& !isset($_POST['q3op1'])){


	$_SESSION['resul']=++$count;
	
}
if(!isset($_POST['q4op1']) && isset($_POST['q4op2'])&& !isset($_POST['q4op3'])&& !isset($_POST['q4op4'])){


	$_SESSION['resul']=++$count;
	
}
if(isset($_POST['q5op4']) && isset($_POST['q5op2'])&& !isset($_POST['q5op3'])&& isset($_POST['q5op1'])){


	$_SESSION['resul']=++$count;
	
}
if(!isset($_POST['q6op2']) && isset($_POST['q6op1'])&& !isset($_POST['q6op3'])&& !isset($_POST['q6op4'])){


	$_SESSION['resul']=++$count;
	
}
if(!isset($_POST['q7op4']) && !isset($_POST['q7op2'])&& !isset($_POST['q7op3'])&& isset($_POST['q7op1'])){


	$_SESSION['resul']=++$count;
	
}
if(!isset($_POST['q8op2']) && !isset($_POST['q8op1'])&& !isset($_POST['q8op3'])&& isset($_POST['q8op4'])){


	$_SESSION['resul']=++$count;
	
}
if(!isset($_POST['q9op4']) && !isset($_POST['q9op2'])&& !isset($_POST['q9op3'])&& isset($_POST['q9op1'])){


	$_SESSION['resul']=++$count;
	
}
if(!isset($_POST['q10op4']) && !isset($_POST['q10op2'])&& isset($_POST['q10op3'])&& !isset($_POST['q10op1'])){


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

</head>
<body>
    <h1 style="color: blue">
    	Welcome<?php
    
    	print "   ".$_SESSION['name'];
    	?>
    </h1>
    <div>
    	<form method="post">
    		<p>
    			Q1.The successor of 6899 is_______
    			<br/>
    			<input type="checkbox" id="q1op1" name="q1op1">
               <label for="q1op1">6898</label><br>
				<input type="checkbox" id="q1op2" name="q1op2">
				<label for="q1op2">6899</label><br>
				<input type="checkbox" id="q1op3" name="q1op3">
				<label for="q1op3">6900</label><br/>
				<input type="checkbox" id="q1op4" name="q1op4">
				<label for="q1op4">7000</label>
    		</p>
    		<p>
    			Q2.The smallest 4 digit number is______?
    			<br/>
    			<input type="checkbox" id="q2op1" name="q2op1">
               <label for="q2op1">10000</label><br>
				<input type="checkbox" id="q2op2" name="q2op2">
				<label for="q2op2">1000</label><br>
				<input type="checkbox" id="q2op3" name="q2op3">
				<label for="q2op3">999</label><br/>
				<input type="checkbox" id="q2op4" name="q2op4">
				<label for="q2op4">9999</label>
    		</p>
    		<p>
    			Q3.  105 * 56=?
    			<br/>
    			<input type="checkbox" id="q3op1" name="q3op1">
               <label for="q3op1">5780</label><br>
				<input type="checkbox" id="q3op2" name="q3op2">
				<label for="q3op2">5980</label><br>
				<input type="checkbox" id="q3op3" name="q3op3">
				<label for="q3op3">5880</label><br/>
				<input type="checkbox" id="q3op4" name="q3op4">
				<label for="q3op4">none of these</label>
    		</p>
    		<p>
    			Q4.The month which has neither 30 nor 31 days?
    			<br/>
    			<input type="checkbox" id="q4op1" name="q4op1">
               <label for="q4op1">January</label><br>
				<input type="checkbox" id="q4op2" name="q4op2">
				<label for="q4op2">February</label><br>
				<input type="checkbox" id="q4op3" name="q4op3">
				<label for="q4op3">March</label><br/>
				<input type="checkbox" id="q4op4" name="q4op4">
				<label for="q4op4">April</label>
    		</p>
    		<p>
    			Q5.Which of these are meaningless?
    			<br/>
    			<input type="checkbox" id="q5op1" name="q5op1">
               <label for="q5op1">VL</label><br>
				<input type="checkbox" id="q5op2" name="q5op2">
				<label for="q5op2">IVC</label><br>
				<input type="checkbox" id="q5op3" name="q5op3">
				<label for="q5op3">XCI</label><br/>
				<input type="checkbox" id="q5op4" name="q5op4">
				<label for="q5op4">IC</label>
    		</p>
    		<p>
    			Q6.  22 in roman numeral ________?
    			<br/>
    			<input type="checkbox" id="q6op1" name="q6op1">
               <label for="q6op1">XXII</label><br>
				<input type="checkbox" id="q6op2" name="q6op2">
				<label for="q6op2">XVVII</label><br>
				<input type="checkbox" id="q6op3" name="q6op3">
				<label for="q6op3">VVVVII</label><br/>
				<input type="checkbox" id="q6op4" name="q6op4">
				<label for="q6op4">None of these</label>
    		</p>
    		
    		<p>
    			Q7.  XIX + XXX=.......?
    			<br/>
    			<input type="checkbox" id="q7op1" name="q7op1">
               <label for="q7op1">XLIX</label><br>
				<input type="checkbox" id="q7op2" name="q7op2">
				<label for="q7op2">L</label><br>
				<input type="checkbox" id="q7op3" name="q7op3">
				<label for="q7op3">XXXIX</label><br/>
				<input type="checkbox" id="q7op4" name="q7op4">
				<label for="q7op4">LIX</label>
    		</p>
    		<p>
    			Q8.Subtract 14L 325ml from 16L.
    			<br/>
    			<input type="checkbox" id="q8op1" name="q8op1">
               <label for="q8op1">1L 625ml</label><br>
				<input type="checkbox" id="q8op2" name="q8op2">
				<label for="q8op2">675ml</label><br>
				<input type="checkbox" id="q8op3" name="q8op3">
				<label for="q8op3">2L 675ml</label><br/>
				<input type="checkbox" id="q8op4" name="q8op4">
				<label for="q8op4">1L 675ml</label>
    		</p>
    		<p>
    			Q9.Simplify:
    			   9312-3786-4112
    			<br/>
    			<input type="checkbox" id="q9op1" name="q9op1">
                <label for="q9op1">1414</label><br>
				<input type="checkbox" id="q9op2" name="q9op2">
				<label for="q9op2">2424</label><br>
				<input type="checkbox" id="q9op3" name="q9op3">
				<label for="q9op3">1514</label><br/>
				<input type="checkbox" id="q9op4" name="q9op4">
				<label for="q9op4">4141</label>
    		</p>
    		<p>
    			Q10.In a village,the number of males is 758 moe than the female.If the number of female is 3246 then What is the total population of the village?
    			<br/>
    			<input type="checkbox" id="q10op1" name="q10op1">
                <label for="q10op1">7255</label><br>
				<input type="checkbox" id="q10op2" name="q10op2">
				<label for="q10op2">4250</label><br>
				<input type="checkbox" id="q10op3" name="q10op3">
				<label for="q10op3">7250</label><br/>
				<input type="checkbox" id="q10op4" name="q10op4">
				<label for="q10op4">7000</label>
    		</p>
    	
    	     <p align="center">
    		<input type="submit" name="submit" value="submit">
    	    </p>
    	</form>
    </div>
    		
    	</form>

    </div>
   <script src="js/jquery-2.1.4.min.js"></script>
  <script src="js/bootstrap.min.js"></script>
  <script src="js/ajax-utils.js"></script>
</body>
</html>