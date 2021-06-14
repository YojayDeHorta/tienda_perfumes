<?php
    require_once (__DIR__."/../MDB/mdbCompra.php");	
    require_once (__DIR__."/../../model/ENTITIES/Compra.php");

ini_set('display_error',1);
ini_set('log_errors',1);
ini_set('error_log',dirname(__FILE__).'/log.txt');
error_reporting(E_ALL);


$comprarepetida=new Compra('','2','2','2');
$comprarepetida=buscarcomprarepetida(1,1);
buscarcompraporidproducto(1);
    $compranueva=new Compra(91,1,1,4);
    $comprarepetida->setcantidad_compra($comprarepetida->getcantidad_compra()+1);

    //insertarcompra($compranueva);
    modificarcompra($comprarepetida);

echo ($comprarepetida->getcantidad_compra());




?>
