<?php
        
        require_once (__DIR__."/../MDB/mdbProducto.php");
        
        $array_productos=null;
        $array_productos=leerproductos();
        
        

        echo json_encode($array_productos);
?>
