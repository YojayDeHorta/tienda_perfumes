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
    function borrardescuentos($id_descuento){
        require_once(__DIR__."/../../model/DAO/DescuentoDAO.php");
        $dao=new DescuentoDAO();
        $resultado = $dao->borrardescuentos($id_descuento);
        return $resultado;
    }

    ?>   