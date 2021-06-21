<?php
        
        require_once (__DIR__."/../MDB/mdbCliente.php");
        

        $array_clases_clientes=null;
        $array_clases_clientes=leerClientes();
        
        //funcion para cambiar el array de clases a array de objetos
        $objetos_clientes=[];
        for ($i=0; $i < sizeof($array_clases_clientes) ; $i++) { 
                array_push(
                        $objetos_clientes,
                        
                                $array_clases_clientes[$i]->toArray()
                        
                );
        }
        

        echo json_encode($objetos_clientes);
?>
