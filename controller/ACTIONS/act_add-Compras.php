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

$comprarepetida=NULL;
$comprarepetida=buscarcomprarepetida($id_cliente,$id_producto);

if($comprarepetida==NULL){
    $compranueva=new Compra('',$id_producto,$id_cliente,$cantidad);

    //echo json_encode($compranueva->getid_cliente());
    insertarcompra($compranueva);
    echo json_encode("producto nuevo añadido exitosamente");
}else{
    $comprarepetida->setcantidad_compra($comprarepetida->getcantidad_compra()+1);
    modificarcompra($comprarepetida);
    echo json_encode("producto sumado al carrito");
}





?>
