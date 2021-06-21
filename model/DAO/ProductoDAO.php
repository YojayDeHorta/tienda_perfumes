<?php

require_once ("DataSource.php");
require_once (__DIR__."/../ENTITIES/Producto.php");

/**
 * Description of productoDAO
 *
 * @author Admin
 */
class ProductoDAO{
    
    
    public function buscarproductoporid($id_producto){
        $data_source = new DataSource();
        $data_table= $data_source->ejecutarConsulta("SELECT * FROM productos WHERE id_producto = :id_producto", 
                                                    array(':id_producto'=>$id_producto));
        $producto=null;
        if(count($data_table)==1){
            foreach($data_table as $indice => $valor){
                $producto = new Producto(
                        $data_table[$indice]["id_producto"],
                        $data_table[$indice]["stock_disponible"],
                        $data_table[$indice]["nombre_producto"],
                        $data_table[$indice]["precio_producto"],
                        $data_table[$indice]["descripcion"],
                        $data_table[$indice]["tipo"],
                        );
            }
            return $producto;
        }else{
            return null;
        }
    } 


    public function leerproductos(){
        $data_source = new DataSource();
        $data_table = $data_source->ejecutarConsulta("SELECT * FROM productos");
        $producto=null;
        $productos=array();
        foreach($data_table as $indice=>$valor){
                $producto = new Producto(
                    $data_table[$indice]["id_producto"],
                    $data_table[$indice]["stock_disponible"],
                    $data_table[$indice]["nombre_producto"],
                    $data_table[$indice]["precio_producto"],
                    $data_table[$indice]["descripcion"],
                    $data_table[$indice]["tipo"],

                    );
                array_push($productos,$producto->toArray());
        }
        return $productos;   
    }
    
    public function insertarproducto(Producto $producto){
        $data_source= new DataSource();
        $sql = "INSERT INTO productos VALUES (:id_producto, :stock_disponible, :nombre_producto, :precio_producto, :descripcion, :tipo  )";
        $resultado = $data_source->ejecutarActualizacion($sql, array(
            ':id_producto'=>$producto->getId_producto(),
            ':stock_disponible'=>$producto->getStock_disponible(),
            ':nombre_producto'=>$producto->getNombre_producto(),
            ':precio_producto'=>$producto->getPrecio_producto(),
            ':descripcion'=>$producto->getDescripcion(),
            ':tipo'=>$producto->getTipo(),
            )
        );
        
        return $resultado;
    }
    
    //en construccion
    public function modificarproducto(Producto $producto){
        $data_source= new DataSource();
        $sql = "UPDATE productos SET stock_disponible= :stock_disponible, nombre_producto= :nombre_producto, precio_producto= :precio_producto, descripcion= :descripcion,tipo= :tipo WHERE id_producto=:id_producto";

        $resultado = $data_source->ejecutarActualizacion($sql, array(
            ':id_producto'=>$producto->getId_producto(),
            ':stock_disponible'=>$producto->getStock_disponible(),
            ':nombre_producto'=>$producto->getNombre_producto(),
            ':precio_producto'=>$producto->getPrecio_producto(),
            ':descripcion'=>$producto->getDescripcion(),
            ':tipo'=>$producto->getTipo(),
            )
        );
        
        return $resultado;
    }

    
    public function borrarproducto($id_producto){
        $data_source = new DataSource();
        $producto=  buscarproductoporid($id_producto);
        $resultado= $data_source->ejecutarActualizacion("DELETE FROM productos WHERE id_producto = :id_producto", array('id_producto'=>$id_producto));
        
        return $producto;
    }
    
    
    
}
