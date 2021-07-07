<?php
        
        require_once (__DIR__."/../MDB/mdbCupon.php");

        $array_cupones=leercupones();
        echo json_encode($array_cupones);



        
?>
