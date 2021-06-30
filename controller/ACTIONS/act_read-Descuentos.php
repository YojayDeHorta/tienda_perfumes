<?php
        
        require_once (__DIR__."/../MDB/mdbDescuento.php");

        $productosdescuento=leerdescuentos();
        echo json_encode($productosdescuento);
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
