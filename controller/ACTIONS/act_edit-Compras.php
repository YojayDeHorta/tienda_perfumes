<?php
    require_once (__DIR__."/../MDB/mdbCompra.php");	
    require_once (__DIR__."/../../model/ENTITIES/Compra.php");

ini_set('display_error',1);
ini_set('log_errors',1);
ini_set('error_log',dirname(__FILE__).'/log.txt');
error_reporting(E_ALL);

$id_cliente = $_POST['id_cliente'];
$id_producto = $_POST['id_producto'];
$cantidad= $_POST['cantidad'];

$comprarepetida=NULL;
$comprarepetida=buscarcomprarepetida($id_cliente,$id_producto);

//$compranueva=new Compra('',$id_producto,$id_cliente,$cantidad);
$comprarepetida->setcantidad_compra($cantidad);


modificarcompra($comprarepetida);
echo json_encode("producto ya agregado, sumado");






?>
