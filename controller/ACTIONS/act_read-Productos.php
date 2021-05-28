<?php
        
        require_once (__DIR__."/../MDB/mdbProducto.php");
        
        $productos_activos=null;
        $productos_activos=leerproductos();
        /*
        prueba
	echo "a";	
        $nombreproducto=$productos_activos[0]->getNombre_producto();
        echo "$nombreproducto";    
        echo $productos_activos[0]->getNombre_producto();*/
        
?>