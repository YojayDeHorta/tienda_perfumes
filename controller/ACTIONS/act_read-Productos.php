<?php
        
        require_once (__DIR__."/../MDB/mdbProducto.php");
        
        $array_clases_productos=null;
        $array_clases_productos=leerproductos();
        /*
        foreach($array_clases_productos as $producto){
                if($producto->getTipo()=="M"){
                        $productosmujeres=array();
                        array_push($productosmujeres,$producto);
                }else{
                        $productoshombres=array();
                        array_push($productosmujeres,$producto);  
                }
        }
*/
        //funcion para cambiar el array de clases a array de objetos
        $objetos_productos=[];
        for ($i=0; $i < sizeof($array_clases_productos) ; $i++) { 
                array_push(
                        $objetos_productos,
                        array(
                                $array_clases_productos[$i]->toArray()
                        )
                );
        }
        

        echo json_encode($objetos_productos);
?>
