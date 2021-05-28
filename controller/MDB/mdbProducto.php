<?php

    function buscarproductoporid($id_producto){
        require_once(__DIR__."/../../model/DAO/ProductoDAO.php");
        $dao=new ProductoDAO();
        $producto = $dao->buscarproductoporid($id_producto);
        return $producto;
    }

    function leerproductos(){
        require_once(__DIR__."/../../model/DAO/ProductoDAO.php");
        $dao=new ProductoDAO();
        $productos = $dao->leerproductos();
        return $productos;
    }
   
    
    
    function insertarproducto($producto){
        require_once(__DIR__."/../../model/DAO/ProductoDAO.php");
        $dao=new ProductoDAO();
        $resultado=$dao->insertarproducto($producto);
        return $resultado;
    }
    

    function  modificarproducto($producto){
        require_once(__DIR__."/../../model/DAO/ProductoDAO.php");
        $dao=new ProductoDAO();
        $resultado=$dao->modificarproducto($producto);
        return $resultado;
    }

    ?>   