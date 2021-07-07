<?php
        
        require_once (__DIR__."/../MDB/mdbDescuento.php");
        require_once (__DIR__."/../MDB/mdbProducto.php");
        $productosdescuento=leerdescuentos();
        $array_productos=leerproductos();
        foreach ( $array_productos as  $producto) {
                $productospornombre[$producto["id_producto"]]=$producto["nombre_producto"];
        }

        echo json_encode(array($productosdescuento,$productospornombre));
        /*
                $cupon=buscarcuponpornombre($nombre_cupon);
                if($cupon==NULL){
                        echo json_encode('cupon no encontrado');
                        return 0;
                }else{

                        echo json_encode($cupon->toArray());     
                        return 1;
                }
        */  
        

        
?>
