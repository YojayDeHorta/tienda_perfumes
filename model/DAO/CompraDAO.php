<?php

require_once ("DataSource.php");
require_once (__DIR__."/../ENTITIES/Compra.php");

/**
 * Description of productoDAO
 *
 * @author Admin
 */
class CompraDAO {
    
    
    public function buscarcompraporidcliente($id_cliente){
        $data_source = new DataSource();
        //password_hash("rasmuslerdorf", PASSWORD_DEFAULT)
        $data_table= $data_source->ejecutarConsulta("SELECT * FROM compras WHERE id_cliente = :id_cliente", 
                                                    array(':id_cliente'=>$id_cliente));
        $compra=null;
        $compras=array();
        
            foreach($data_table as $indice => $valor){
                $compra = new Compra(
                        $data_table[$indice]["id_cliente"],
                        $data_table[$indice]["id_producto"],
                        $data_table[$indice]["cantidad"],
                        
                        );
                        array_push($compras,$compra);
            }
            return $compras;
        
    } 

    public function buscarcompraporidproducto($id_producto){
        $data_source = new DataSource();
        //password_hash("rasmuslerdorf", PASSWORD_DEFAULT)
        $data_table= $data_source->ejecutarConsulta("SELECT * FROM compras WHERE id_producto = :id_producto", 
                                                    array(':id_producto'=>$id_producto));
        $compra=null;
        if(count($data_table)==1){
            foreach($data_table as $indice => $valor){
                $compra = new compra(
                    $data_table[$indice]["id_compra"],
                    $data_table[$indice]["id_producto"],
                    $data_table[$indice]["id_cliente"],
                    $data_table[$indice]["cantidad_compra"]
                        );
                        
            }
            return $compra;
        }else{
            echo ($id_producto);
            return null;
        }
    } 
    public function buscarcomprarepetida($id_cliente,$id_producto){
        $data_source = new DataSource();
        //password_hash("rasmuslerdorf", PASSWORD_DEFAULT)
        $data_table= $data_source->ejecutarConsulta("SELECT * FROM compras WHERE id_cliente = :id_cliente AND id_producto=:id_producto", 
                                                    array(':id_cliente'=>$id_cliente,':id_producto'=>$id_producto));
        $compra=null;
        if(count($data_table)==1){
            foreach($data_table as $indice => $valor){
                $compra = new Compra(
                    $data_table[$indice]["id_compra"],
                    $data_table[$indice]["id_producto"],
                    $data_table[$indice]["id_cliente"],
                    $data_table[$indice]["cantidad_compra"]
                    );
                        
            }
            
            return $compra;
        }else{
            

            return null;
        }
    } 
    public function buscarcomprarepetidoARRAY($id_cliente,$id_producto){
        $data_source = new DataSource();
        //password_hash("rasmuslerdorf", PASSWORD_DEFAULT)
        $data_table= $data_source->ejecutarConsulta("SELECT * FROM compras WHERE id_cliente = :id_cliente AND id_producto=:id_producto", 
                                                    array(':id_cliente'=>$id_cliente,':id_producto'=>$id_producto));
        $compra=null;
        $compras=array();
        if(count($data_table)>=1){
            foreach($data_table as $indice => $valor){
                $compra = new Compra(
                        $data_table[$indice]["id_compra"],
                        $data_table[$indice]["id_producto"],
                        $data_table[$indice]["id_cliente"],
                        $data_table[$indice]["cantidad_compra"],
                        );
                        array_push($compras,$compra);
            }
            return $compras;
        }else{
            return null;
        }
    } 
    
    public function leercompras(){
        $data_source = new DataSource();
        $data_table = $data_source->ejecutarConsulta("SELECT * FROM compras");
        $compra=null;
        $compras=array();
        foreach($data_table as $indice=>$valor){
            $compra = new Compra(
                $data_table[$indice]["id_cliente"],
                $data_table[$indice]["id_producto"],
                $data_table[$indice]["cantidad"],
                );
                array_push($compras,$compra);
        }
        return $compras;   
    }
    
    public function insertarcompra(Compra $compra){
        echo $compra->getid_compra();
        $data_source= new DataSource();
        $sql = "INSERT INTO compras VALUES (:id_compra,:id_producto,:id_cliente, :cantidad_compra)";
        $resultado = $data_source->ejecutarActualizacion($sql, array(
            ':id_compra'=>$compra->getid_compra(),
            ':id_producto'=>$compra->getid_producto(),
            ':id_cliente'=>$compra->getid_cliente(),
            ':cantidad_compra'=>$compra->getcantidad_compra()
           
            )
        );
       
        return $resultado;
    }
    public function modificarcompra(Compra $compra){
        $data_source= new DataSource();
        $sql = "UPDATE compras SET id_compra= :id_compra,  cantidad_compra= :cantidad_compra WHERE id_cliente=:id_cliente AND id_producto= :id_producto";

        $resultado = $data_source->ejecutarActualizacion($sql, array(
            ':id_compra'=>$compra->getid_compra(),
            ':id_producto'=>$compra->getid_producto(),
            ':id_cliente'=>$compra->getid_cliente(),
            ':cantidad_compra'=>$compra->getcantidad_compra()
            )
        );
        $resultado="b";
        return $resultado;
    }
    
    
    
       public function borrarcompras($id_producto){
        $data_source = new DataSource();
        $producto=  buscarcompraporidproducto($id_producto);
        $resultado= $data_source->ejecutarActualizacion("DELETE FROM compras WHERE id_producto = :id_producto", array('id_producto'=>$id_producto));
        
        return $resultado;
    }
    
    
    
}