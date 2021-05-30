<?php
        
        require_once (__DIR__."/../MDB/mdbCliente.php");	

	
        $numero_movil = $_POST['Telefono'];
        $nombre = $_POST['Nombre'];
        $apellido = $_POST['Apellido'];        
        $password = $_POST['Contraseña'];
        $email = $_POST['Email'];

        $cliente = autenticarCliente($email, $password);
		if($cliente == null){

            $nuevocliente=NULL;
            $nuevocliente= new Cliente('',$nombre,$apellido,$numero_movil,$password,$email);
            insertarCliente($nuevocliente);
 
            echo json_encode('registrado correctamente');
            
                    
		}else{
             echo json_encode('telefono y/o contraseña no válido o existente');
             

 
		}

    
        
        
?>