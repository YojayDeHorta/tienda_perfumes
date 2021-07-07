<?php

    
    function buscarcuponpornombre($nombre_cupon){
        require_once(__DIR__."/../../model/DAO/CuponDAO.php");
        $dao=new CuponDAO();
        $cupon = $dao->buscarcuponpornombre($nombre_cupon);
        return $cupon;
    }
    function leercupones(){
        require_once(__DIR__."/../../model/DAO/CuponDAO.php");
        $dao=new CuponDAO();
        $cupones = $dao->leercupones();
        return $cupones;
    }
    function borrarcupones($id_cupon){
        require_once(__DIR__."/../../model/DAO/CuponDAO.php");
        $dao=new CuponDAO();
        $resultado = $dao->borrarcupones($id_cupon);
        return $resultado;
    }
    ?>   