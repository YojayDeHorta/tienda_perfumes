<?php

    function buscarcompraporidusuario($id_usuario){
        require_once(__DIR__."/../../model/DAO/CompraDAO.php");
        $dao=new CompraDAO();
        $compras = $dao->buscarcompraporidusuario($id_usuario);
        return $compras;
    }
    function buscarcompraporidproducto($id_producto){
        require_once(__DIR__."/../../model/DAO/CompraDAO.php");
        $dao=new CompraDAO();
        $compras = $dao->buscarcompraporidproducto($id_producto);
        return $compras;
    }
    function buscarcomprarepetido($id_usuario,$id_producto){
        require_once(__DIR__."/../../model/DAO/CompraDAO.php");
        $dao=new CompraDAO();
        $compra = $dao->buscarcomprarepetido($id_usuario,$id_producto);
        return $compra;
    }
    function leercompras(){
        require_once(__DIR__."/../../model/DAO/CompraDAO.php");
        $dao=new CompraDAO();
        $compras = $dao->leercompras();
        return $compras;
    }
   
    
    
    function insertarcompra($compra){
        require_once(__DIR__."/../../model/DAO/CompraDAO.php");
        $dao=new CompraDAO();
        $resultado=$dao->insertarcompra($compra);
        return $resultado;
    }
    function modificarcompra($compra){
        require_once(__DIR__."/../../model/DAO/CompraDAO.php");
        $dao=new CompraDAO();
        $resultado=$dao->modificarcompra($compra);
        return $resultado;
    }


    function borrarcompras($id_producto){
        require_once(__DIR__."/../../model/DAO/CompraDAO.php");
        $dao=new CompraDAO();
        $resultado=$dao->borrarcompras($id_producto);
        return $resultado;
    }