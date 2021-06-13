<?php
    require_once (__DIR__."/../MDB/mdbCompra.php");	
    require_once (__DIR__."/../../model/ENTITIES/Compra.php");

ini_set('display_error',1);
ini_set('log_errors',1);
ini_set('error_log',dirname(__FILE__).'/log.txt');
error_reporting(E_ALL);



//$comprarepetida=buscarcomprarepetido($id_cliente,$id_producto);

    $compranueva=new Compra('',0,1,2);


    $a=insertarcompra($compranueva);

echo json_encode($a);




?>
