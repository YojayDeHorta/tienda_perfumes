<?php
        
        require_once (__DIR__."/../MDB/mdbCompra.php");
        require_once (__DIR__."/../MDB/mdbProducto.php");
        $array_clases_compras=null;
        $id_cliente=$_GET['id_cliente'];
        $array_clases_compras=buscarcomprasporidcliente($id_cliente);

        $productos_usuario=array();
        
        for ($i=0; $i < sizeof($array_clases_compras); $i++) { 
            $producto=buscarproductoporid($array_clases_compras[$i]->getid_producto());
            array_push($productos_usuario,$producto);
        }


        
        //funcion para cambiar el array de clases a array de objetos
        $objetos_compras=[];
        for ($i=0; $i < sizeof($array_clases_compras) ; $i++) { 
                array_push(
                        $objetos_compras,
                        array(
                                $array_clases_compras[$i]->toArray()
                        )
                );
        }
        $objetos_productos=[];
        for ($i=0; $i < sizeof($productos_usuario) ; $i++) { 
                array_push(
                        $objetos_productos,
                        array(
                                $productos_usuario[$i]->toArray()
                        )
                );
        }
        

        //echo json_encode($objetos_productos);
        echo json_encode(array($objetos_compras,$objetos_productos));
?>