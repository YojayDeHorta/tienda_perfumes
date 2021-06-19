<?php
        require_once (__DIR__."/../MDB/mdbCliente.php");	
        require_once (__DIR__."/../../model/ENTITIES/Cliente.php");
        $id_usuario = $_POST['Id_usuario'];
        $numero_movil = $_POST['telefono'];
        $nombre = $_POST['nombre'];
        $apellido = $_POST['apellido'];        
        $password = $_POST['password'];
        $email = $_POST['correo'];

        /*$clientemovil=buscarClientePornumeromovil($numero_movil);
        $clienteemail=buscarClientePoremail($email);
        if($clientemovil==NULL&&$clienteemail==NULL){*/
            $cliente=NULL;
            $cliente= new Cliente($id_usuario,$nombre,$apellido,$numero_movil,$password,$email);
            modificarCliente($cliente);
            echo json_encode('cliente editado exitosamente');
        //}else{
            //echo json_encode('numero o email existente');
        //}
        
         
       
?>