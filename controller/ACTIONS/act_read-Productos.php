<?php
        
        require_once (__DIR__."/../MDB/mdbProducto.php");
        
        $array_clases_productos=null;
        $array_clases_productos=(array)leerproductos();


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
