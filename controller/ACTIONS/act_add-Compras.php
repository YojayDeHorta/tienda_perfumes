<?php
    require_once (__DIR__."/../MDB/mdbCompra.php");	
    require_once (__DIR__."/../../model/ENTITIES/Compra.php");

ini_set('display_error',1);
ini_set('log_errors',1);
ini_set('error_log',dirname(__FILE__).'/log.txt');
error_reporting(E_ALL);

$id_cliente = $_POST['id_cliente'];
$id_producto = $_POST['id_producto'];
$precio = $_POST['precio'];
$cantidad= $_POST['cantidad'];

//$comprarepetida=buscarcomprarepetido($id_cliente,$id_producto);
$comprarepetida=0;
//echo $comprarepetida->getcantidad_compra();
//console_log($id_producto);
if($comprarepetida==0){
    $compranueva=new Compra('',$id_producto,$id_cliente,$cantidad);


    $a=insertarcompra($compranueva);
}else{
    //$comprarepetida->setcantidad_compra($comprarepetida->getcantidad_compra()+1);
    //modificarcompra($comprarepetida);
}
echo json_encode($a);




?>
