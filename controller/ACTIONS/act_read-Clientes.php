<?php
        
        require_once (__DIR__."/../MDB/mdbCliente.php");
        

        $array_clientes=null;
        $array_clientes=leerClientes();
        

        
        

        echo json_encode($array_clientes);
?>
