<?php
        
        require_once (__DIR__."/../MDB/mdbProducto.php");	
        require_once (__DIR__."/../../model/ENTITIES/Producto.php");
        $id_producto = $_POST['Id_producto'];
        $tipo = $_POST['Tipo'];
        $nombreproducto = $_POST['Producto'];
        $descripcion = $_POST['Descripcion'];        
        $Precio = $_POST['Precio'];
        $stock = $_POST['Stock'];


            $nuevoproducto=NULL;
            $nuevoproducto= new Producto($id_producto,$stock,$nombreproducto,$Precio,$descripcion,$tipo);
            modificarproducto($nuevoproducto);           
            echo json_encode('producto editado exitosamente');

        
         
       
?>