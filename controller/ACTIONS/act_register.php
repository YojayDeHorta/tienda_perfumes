<?php
        
        require_once (__DIR__."/../MDB/mdbCliente.php");	

	
        $numero_movil = $_POST['telefono'];
        $nombre = $_POST['nombre'];
        $apellido = $_POST['apellido'];        
        $password = $_POST['password'];
        $email = $_POST['correo'];

        $clientemovil=buscarClientePornumeromovil($numero_movil);
        $clienteemail=buscarClientePoremail($email);
        if($clientemovil==NULL&&$clienteemail==NULL){

            $nuevocliente=NULL;
            $nuevocliente= new Cliente('',$nombre,$apellido,$numero_movil,$password,$email);
            insertarCliente($nuevocliente);
 
            echo json_encode('registrado correctamente');
            
                    
	}else{
            echo json_encode('error');
	}

    
        
        
?>