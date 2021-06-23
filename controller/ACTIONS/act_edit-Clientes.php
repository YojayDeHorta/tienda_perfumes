<?php
        require_once (__DIR__."/../MDB/mdbCliente.php");	
        require_once (__DIR__."/../../model/ENTITIES/Cliente.php");
        $id_usuario = $_POST['id_cliente'];
        $numero_movil = $_POST['numero_movil'];
        $nombre = $_POST['nombre'];
        $apellido = $_POST['apellido'];        
        $password = $_POST['password'];
        $email = $_POST['email'];

        if($email=="" || $password==""||$nombre==""||$apellido==""||$numero_movil==""||$id_usuario==""){
            echo json_encode('Edit fallido,valores vacios');
            return 0;
        }
        
        if(strpos($email, '@') === false) {
            echo json_encode('Edit fallido,email no valido');
            return 0;
        }
        
        $regexpnombre= '/^[a-zÀ-ÿ\s]{3,15}$/i'; 
        $regexpapellido=  '/^[a-zÀ-ÿ\s]{3,15}$/i';
        $regexpemail = '/^[-!#$%&\'*+\\.\/0-9=?A-Z^_`{|}~]+@([-0-9A-Z]+\.)+([0-9A-Z]){2,7}$/i';
        $regexppass= '/^\$2[ayb]\$.{56}$/';
        $regexptelefono= '/^[0-9+?]{7,14}$/';
        $regexpid='/^\d{1,14}$/';
        if (!preg_match($regexpemail, $email)||!preg_match($regexppass, $password)||!preg_match($regexptelefono,$numero_movil)
            ||!preg_match($regexpnombre,$nombre)||!preg_match($regexpapellido,$apellido)||!preg_match($regexpid,$id_usuario) ){
            echo json_encode('Edit fallido,valores no validos ');
            return 0;
        }else{
            $cliente=NULL;
            $cliente= new Cliente($id_usuario,$nombre,$apellido,$numero_movil,$password,$email);
            modificarCliente($cliente);
            echo json_encode('cliente editado exitosamente');
            return 1;
        }
        
         
       
?>