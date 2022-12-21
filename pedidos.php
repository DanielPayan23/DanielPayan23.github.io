<?php
include("Conexion.php");
// $conexion=conectar();

$idNombre = $_POST["IdNombre"];
$idmesa = $_POST["Idmesa"];
$idorden = $_POST["IdOrden"];

$sql = "INSERT INTO pedidos (Nombre, Num_mesa, fecha, Orden)
VALUES ('$idNombre', '$idmesa','$idFecha', '$idorden' )";

// mysqli_query($conexion, $sql)

$result = mysqli_query($enlace, $sql);

			
		if($result){
	


echo '<script type="text/javascript">'
   , 'alert("Exito");'
   , '</script>'
	
;
header("location:index.html");	
 

		}
		else{
			echo ' Favor de revisar tu consulta <div><a href="index.html">Volver</a></div> ';

		}


?>