<?php
    require_once (__DIR__."/../MDB/mdbCompra.php");	
    ini_set('display_error',1);
    ini_set('log_errors',1);
    ini_set('error_log',dirname(__FILE__).'/log.txt');
    error_reporting(E_ALL);
    
$id_cliente = $_POST['id_cliente'];
$id_producto = $_POST['id_producto'];




borrarcompras($id_cliente,$id_producto);
echo json_encode("producto borrado");






?>
