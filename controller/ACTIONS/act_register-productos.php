<?php
        
        require_once (__DIR__."/../MDB/mdbProducto.php");	
        require_once (__DIR__."/../../model/ENTITIES/Producto.php");
	ini_set('display_error',1);
        ini_set('log_errors',1);
        ini_set('error_log',dirname(__FILE__).'/log.txt');
        error_reporting(E_ALL);
        $tipo = $_POST['Tipo'];
        $nombre_producto = $_POST['Producto'];
        $descripcion = $_POST['Descripcion'];        
        $precio = $_POST['Precio'];
        $stock = $_POST['Stock'];
        //$imagen=$_POST['Imagen'];

        if($tipo=="" || $nombre_producto==""||$descripcion==""||$precio==""||$stock==""){
                echo json_encode('Registro fallido,valores vacios');
                return 0;
         }

        $regexptipo= '/^[MF]{1}$/i'; 
        $regexpnombre_producto=  '/^[^$|<>]{3,60}$/i';
        $regexpdescripcion = '/^[^$|<>]{3,255}$/i';
        $regexpprecio= '/^[0-9]{1,15}$/';
        $regexpstock= '/^[0-9]{1,3}$/';
        
        
        
        if (!preg_match($regexpdescripcion, $descripcion)||!preg_match($regexpprecio, $precio)||!preg_match($regexpstock,$stock)
                ||!preg_match($regexptipo,$tipo)||!preg_match($regexpnombre_producto,$nombre_producto) ){
                echo json_encode('Registro fallido,valores no validos ');
                return 0;
        }else{
                $producto=buscarproductopornombre($nombre_producto);
                
                if($producto==NULL){
                        $nuevoproducto=NULL;
                        
                        $nuevoproducto= new Producto('',$stock,$nombre_producto,$precio,$descripcion,$tipo);
                        insertarproducto($nuevoproducto);
                        //buscamos el producto en la base de datos para buscar el id
                        $producto=buscarproductopornombre($nombre_producto);
                        agregarimg($producto->getId_producto());
                        echo json_encode($producto->toArray());
                        return 1;
                }else{
                        
                        echo json_encode('Nombre del producto ya usado');
                        return 0;
                }
                
                
        }

        function agregarimg($id_producto){
        
                $file=$_FILES['Imagen'];
                $filename=$_FILES['Imagen']['name'];
                $filetmpname=$_FILES['Imagen']['tmp_name'];
                $filesize=$_FILES['Imagen']['size'];
                $fileerror=$_FILES['Imagen']['error'];
                $fileType=$_FILES['Imagen']['type'];
                $fileext=explode('.',$filename);
                $fileactualext=strtolower(end($fileext));
                $allowed=array('jpg','jpeg','png');
                if( $fileactualext=='jpeg'||$fileactualext=='jpg'){
                        $imagenaux = imagecreatefromjpeg($filetmpname); 
                        $imagen =imagescale($imagenaux , 229, 321);
                        imagejpeg($imagen, $filetmpname); 
                        imagedestroy($imagen);  
                        imagedestroy($imagenaux);
                }
                if($fileactualext=='png'){
                        $imagenaux = imagecreatefrompng($filetmpname); 

                        $image_p = imagecreatetruecolor(229, 321);
                        imageAlphaBlending($image_p, false);
                        imageSaveAlpha($image_p, true);
                        imagecopyresampled($image_p, $imagenaux, 0, 0, 0, 0, 229, 321, imagesx($imagenaux), imagesy($imagenaux));

                        imagepng($image_p, $filetmpname);   
                        imagedestroy($image_p);
                        imagedestroy($imagenaux);
                }
                

                
                
                
                
                if(in_array($fileactualext,$allowed)){
                    if($fileerror===0){
                        if($filesize<500000){
                                
                            $filenamenew=uniqid('',true).".".$fileactualext;
                            $filedestination='../../view/store/img/productos/Catalogo-'.$id_producto.'.png';
                           
                            move_uploaded_file($filetmpname,$filedestination);
                            //$filecopy='../../view/store/images/productos/'.$nombre_producto.'grandes.png';
                            //copy($filedestination,$filecopy);
                        }else{
                            echo json_encode("tu archivo es muy grande");
                        }
            
                    }else{
                        echo json_encode("ha habido un error intenta de nuevo");
                    }
                }else{
                    echo json_encode("no puedes subir ese tipo de archivo");
                }
            
       } 
                    

    
        
        
?>