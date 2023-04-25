

<!DOCTYPE html>
<html>
<head>
<style>
body{

    background-position: center;
    background-size: cover;
}
#myCanvas
{
    margin-top: 10px;
	border-width:40px;
	background-color: white; 
	border-style:ridge;
}

h1,h4
{
	
	color:red!important;
	
}
</style>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
	<title>Valores ASCII</title>
</head>
<body>
canvas = document.getElementById('myCanvas');

ctx = canvas.getContext("2d")

window.addEventListener("keydown", my_keydown);


function my_keydown(e)

{
    keyPressed= e.keyCode;
    console.log(keyPressed);

    if(keyPressed >=97 && keyPressed<=122)  (keyPressed >=65 && keyPressed<=90)

   {
    alphabetkey();
    document.getElementById("d1").innerHTML="Você pressionou uma tecla alfabeto";
    console.log("alphabet key");


   } 
}

function alphabetkey()
{
    img_image="alfabeto.png";
    add();

}

<center>
<h1>Keyboard keys</h1>
	
	<div id="d1"></div>
<h4>
	<b class="text-danger">NOTE : </b> PRESSIONE QUALQUER TECLA 
</h4>

</center>
<script src="main.js">
</script>
</body>
</html>





