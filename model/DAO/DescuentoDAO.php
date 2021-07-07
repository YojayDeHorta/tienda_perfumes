<?php

require_once ("DataSource.php");
require_once (__DIR__."/../ENTITIES/Descuento.php");

/**
 * Description of DescuentoDAO
 *
 * @author Admin
 */
class DescuentoDAO{
    
    
    
    public function buscardescuentoporidproducto($id_producto){
        $data_source = new DataSource();
        $data_table= $data_source->ejecutarConsulta("SELECT * FROM descuentos WHERE id_producto = :id_producto", 
                                                    array(':id_producto'=>$id_producto));
        $descuento=null;
        if(count($data_table)==1){
            foreach($data_table as $indice => $valor){
                $descuento = new Descuento(
                        $data_table[$indice]["id_descuento"],
                        $data_table[$indice]["id_producto"],
                        $data_table[$indice]["valor_descuento"],
                        $data_table[$indice]["usos_descuento"],
                        );
            }
            return $descuento;
        }else{
            return null;
        }
    } 
    public function leerdescuentos(){
        $data_source = new DataSource();
        $data_table = $data_source->ejecutarConsulta("SELECT * FROM descuentos");
        $descuento=null;
        $descuentos=array();
        foreach($data_table as $indice=>$valor){
                $descuento = new Descuento(
                    $data_table[$indice]["id_descuento"],
                        $data_table[$indice]["id_producto"],
                        $data_table[$indice]["valor_descuento"],
                        $data_table[$indice]["usos_descuento"],

                    );
                array_push($descuentos,$descuento->toArray());
        }
        return $descuentos;   
    }
    public function borrardescuentos($id_descuento){
        $data_source = new DataSource();
        $resultado= $data_source->ejecutarActualizacion("DELETE FROM descuentos WHERE id_descuento = :id_descuento", array('id_descuento'=>$id_descuento));  
        return $resultado;
    }
    
    
    
    
}
