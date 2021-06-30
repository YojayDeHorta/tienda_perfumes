<?php

require_once ("DataSource.php");
require_once (__DIR__."/../ENTITIES/Cupon.php");

/**
 * Description of CuponDAO
 *
 * @author Admin
 */
class CuponDAO{
    
    
    
    public function buscarcuponpornombre($nombre_cupon){
        $data_source = new DataSource();
        $data_table= $data_source->ejecutarConsulta("SELECT * FROM cupones WHERE nombre_cupon = :nombre_cupon", 
                                                    array(':nombre_cupon'=>$nombre_cupon));
        $cupon=null;
        if(count($data_table)==1){
            foreach($data_table as $indice => $valor){
                $cupon = new Cupon(
                        $data_table[$indice]["id_cupon"],
                        $data_table[$indice]["nombre_cupon"],
                        $data_table[$indice]["valor_cupon"],
                        $data_table[$indice]["usos_cupon"],
                        );
            }
            return $cupon;
        }else{
            return null;
        }
    } 
    
    
    
    
    
}
