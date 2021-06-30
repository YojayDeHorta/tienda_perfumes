<?php

    
    function buscardescuentoporidproducto($id_producto){
        require_once(__DIR__."/../../model/DAO/DescuentoDAO.php");
        $dao=new DescuentoDAO();
        $descuento = $dao->buscardescuentoporidproducto($id_producto);
        return $descuento;
    }
    function leerdescuentos(){
        require_once(__DIR__."/../../model/DAO/DescuentoDAO.php");
        $dao=new DescuentoDAO();
        $descuentos = $dao->leerdescuentos();
        return $descuentos;
    }

    ?>   