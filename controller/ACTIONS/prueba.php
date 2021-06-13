<?php
    require_once (__DIR__."/../MDB/mdbCompra.php");	

$id_cliente = $_POST['id_cliente'];
$id_producto = $_POST['id_producto'];
$precio = $_POST['precio'];

echo json_encode($precio);






?>
