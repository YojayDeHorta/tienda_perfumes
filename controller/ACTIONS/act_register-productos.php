<?php
        
        require_once (__DIR__."/../MDB/mdbProducto.php");	
        require_once (__DIR__."/../../model/ENTITIES/Producto.php");
	
        $tipo = $_POST['Tipo'];
        $nombre_producto = $_POST['Producto'];
        $descripcion = $_POST['Descripcion'];        
        $precio = $_POST['Precio'];
        $stock = $_POST['Stock'];
       
        if($tipo=="" || $nombre_producto==""||$descripcion==""||$precio==""||$stock==""){
                echo json_encode('Registro fallido,valores vacios');
                return 0;
         }

        $regexptipo= '/^[MF]{1}$/i'; 
        $regexpnombre_producto=  '/^[\w., -]{3,60}$/i';
        $regexpdescripcion = '/^[\w., -]{3,255}$/i';
        $regexpprecio= '/^[0-9]{1,15}$/';
        $regexpstock= '/^[0-9]{1,3}$/';
        
        $producto=buscarproductopornombre($nombre_producto);
        
        if (!preg_match($regexpdescripcion, $descripcion)||!preg_match($regexpprecio, $precio)||!preg_match($regexpstock,$stock)
                ||!preg_match($regexptipo,$tipo)||!preg_match($regexpnombre_producto,$nombre_producto) ){
                echo json_encode('Registro fallido,valores no validos ');
                return 0;
        }else{
                
                if($producto==NULL){
                        $nuevoproducto=NULL;
                        $nuevoproducto= new Producto('',$stock,$nombre_producto,$precio,$descripcion,$tipo);
                        insertarproducto($nuevoproducto);
                        //buscamos el producto en la base de datos para buscar el id
                        $producto=buscarproductopornombre($nombre_producto);
                        echo json_encode($producto->toArray());
                        return 1;
                }else{
                        
                        echo json_encode('Nombre del producto ya usado');
                        return 0;
                }
                
                
        }

        
            
                    

    
        
        
?>