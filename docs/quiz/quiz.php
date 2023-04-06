<?php
session_start();
?>

<!DOCTYPE html>
<html>

<head>
	<meta charset=UTF-8" />
	
	<title>PHP Quiz</title>
	
    <link rel="stylesheet" type="text/css" href="css.css" />
    <style>
        html{
            scroll-behavior: smooth;
        }
        body{
            background-color:#D8F0E9 ;
            font-family: "dubai";
        }   
        p{
            font-size: larger;
        }
    </style>
</head>

<body>

	<div id="page-wrap">

		<h1 style="text-align: center;">نتیجه</h1>
		
        <?php
            $answer1 = $_POST['question-1-answers'];
            $answer2 = $_POST['question-2-answers'];
            $answer3 = $_POST['question-3-answers'];
            $answer4 = $_POST['question-4-answers'];
        
            $totalCorrect = 0;
            
            if ($answer1 == "B") { $totalCorrect++; }
            if ($answer2 == "C") { $totalCorrect++; }
            if ($answer3 == "C") { $totalCorrect++; }
            if ($answer4 == "A") { $totalCorrect++; }
            
            $temp= 4-$totalCorrect;
            
            if($totalCorrect==4)
            {
                echo "<div id='results'>All the answers are correct</div>";
                $_SESSION["count"] = $_SESSION["count"] + 1;
                $temp=$_SESSION["count"];
                echo "<div id='results'>You are the $temp th person with the correct answer</div>";
            }
            else
                echo "<div id='results'>You have $temp wrong answers</div>";
            
        ?>
	
	</div>

</body>

</html>