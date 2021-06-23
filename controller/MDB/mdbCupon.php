<?php

    
    function buscarcuponpornombre($nombre_cupon){
        require_once(__DIR__."/../../model/DAO/CuponDAO.php");
        $dao=new CuponDAO();
        $producto = $dao->buscarcuponpornombre($nombre_cupon);
        return $producto;
    }
    

    ?>   