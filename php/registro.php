
<?php
$conexion=mysqli_connect("sql212.epizy.com","epiz_31456355","YmkkDuJpi0vGEwK","epiz_31456355_registro") or die("error de conexion");
mysqli_query($conexion,"insert into usuario(nombre,correo,celular)values('$_POST[nombre]','$_POST[correo]','$_POST[celular]')")or die("error de seleccion".mysqli_error($conexion));
mysqli_close($conexion);
header('Location:http://servicioswebgenius.epizy.com/');
?>
