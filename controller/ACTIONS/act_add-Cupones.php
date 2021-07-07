<?php
        
    require_once (__DIR__."/../MDB/mdbCliente.php");	

	
    $id_cupon = $_POST['id_cupon'];
    $nombre_cupon = $_POST['nombre_cupon'];
    $apellido = $_POST['apellido'];        
    $password = $_POST['password'];
    $email = $_POST['email'];
    //reg ex 

    //registro de usuario y encriptacion 
    $passencrypt=password_hash($password, PASSWORD_DEFAULT, ['cost'=>10]);
    $clientemovil=buscarClientePornumeromovil($numero_movil);//ver si movil repetido
    $clienteemail=buscarClientePoremail($email);//ver si email repetido
    if($clientemovil==NULL&&$clienteemail==NULL){

        $nuevocliente=NULL;
        $nuevocliente= new Cliente('',$nombre,$apellido,$numero_movil,$passencrypt,$email);
        insertarCliente($nuevocliente);
        //una vez se inserta el usuario se envia el usuario para impresion
        $cliente=buscarClientePoremail($email);
        echo json_encode($cliente->toArray());
        return 1;            
	}else{
        echo json_encode('el email o numero movil ya ha sido usado en otra cuenta, porfavor inicia sesion en dicha cuenta');
        return 0;
	}

    
        
        
?>