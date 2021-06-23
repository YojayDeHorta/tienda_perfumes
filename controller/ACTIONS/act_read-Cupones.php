<?php
        
        require_once (__DIR__."/../MDB/mdbCupon.php");
        $nombre_cupon=$_POST['nombre_cupon'];
        $cupon=null;
        $regexpnombre_cupon=  '/^[A-Za-z0-9_-]{3,15}$/i';

        
        
        if($nombre_cupon==""){
                echo json_encode('Cupon fallido,valores vacios');
                return 0;
         }



        if (!preg_match($regexpnombre_cupon, $nombre_cupon) ){
                echo json_encode('Registro fallido,valores no validos ');
                return 0;
        }else{
                $cupon=buscarcuponpornombre($nombre_cupon);
                if($cupon==NULL){
                        echo json_encode('cupon no encontrado');
                        return 0;
                }else{

                        echo json_encode($cupon->toArray());     
                        return 1;
                }
               
        }

        
?>
