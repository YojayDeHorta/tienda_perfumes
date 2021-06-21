<?php
        
        require_once (__DIR__."/../MDB/mdbProducto.php");	
        require_once (__DIR__."/../../model/ENTITIES/Producto.php");
	
        $tipo = $_POST['Tipo'];
        $nombreproducto = $_POST['Producto'];
        $descripcion = $_POST['Descripcion'];        
        $Precio = $_POST['Precio'];
        $stock = $_POST['Stock'];


        $nuevoproducto=NULL;
        $nuevoproducto= new Producto('',$stock,$nombreproducto,$Precio,$descripcion,$tipo);
        insertarproducto($nuevoproducto);
 
        echo json_encode('registrado correctamente');
            
                    

    
        
        
?>