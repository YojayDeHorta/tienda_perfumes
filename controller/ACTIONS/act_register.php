<?php
        
    require_once (__DIR__."/../MDB/mdbCliente.php");	

	
    $numero_movil = $_POST['numero_movil'];
    $nombre = $_POST['nombre'];
    $apellido = $_POST['apellido'];        
    $password = $_POST['password'];
    $email = $_POST['email'];
    //reg ex 
    
    
    if($email=="" || $password==""||$nombre==""||$apellido==""||$numero_movil==""){
        echo json_encode('Registro fallido,valores vacios');
        return 0;
    }
    
    if(strpos($email, '@') === false) {
        echo json_encode('Registro fallido,email no valido');
        return 0;
    }
    
    $regexpnombre= '/^[a-zÀ-ÿ\s]{3,15}$/i'; 
    $regexpapellido=  '/^[a-zÀ-ÿ\s]{3,15}$/i';
    $regexpemail = '/^[-!#$%&\'*+\\.\/0-9=?A-Z^_`{|}~]+@([-0-9A-Z]+\.)+([0-9A-Z]){2,7}$/i';
    $regexppass= '/^[A-Za-z0-9]{8,30}$/';
    $regexptelefono= '/^[0-9+?]{7,14}$/';
    if (!preg_match($regexpemail, $email)||!preg_match($regexppass, $password)||!preg_match($regexptelefono,$numero_movil)||!preg_match($regexpnombre,$nombre)||!preg_match($regexpapellido,$apellido)){
        echo json_encode('Registro fallido,valores no validos ');
        return 0;
    }
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