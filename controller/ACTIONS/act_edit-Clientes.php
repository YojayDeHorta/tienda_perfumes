<?php
        require_once (__DIR__."/../MDB/mdbCliente.php");	
        require_once (__DIR__."/../../model/ENTITIES/Cliente.php");
        $id_usuario = $_POST['Id_usuario'];
        $numero_movil = $_POST['Telefono'];
        $nombre = $_POST['Nombre'];
        $apellido = $_POST['Apellido'];        
        $email = $_POST['Email'];
        $password = $_POST['Contraseña'];

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