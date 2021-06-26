<?php
        session_start();
        require_once (__DIR__."/../MDB/mdbCliente.php");	
        
            
        
		 $user = $_POST['email'];
		 $password = $_POST['password'];
        //reg ex 
        if($user=="" || $password==""){
            echo json_encode('Inicio de sesion fallido,email / telefono o contraseña vacio');
            return 0;
        }
        $regexpemail = '/^[-!#$%&\'*+\\.\/0-9=?A-Z^_`{|}~]+@([-0-9A-Z]+\.)+([0-9A-Z]){2,7}$/i';
        $regexppass= '/^[A-Za-z0-9]{8,30}$/';
        $regexptelefono= '/^[0-9+?]{7,14}$/';
        
        if (!(strpos($user, '@') === false) && preg_match($regexpemail, $user) && preg_match($regexppass, $password)) {
            //in case of login with mail
            $cliente = autenticarClientePorEmail($user, $password);
        }else if(preg_match($regexptelefono, $user) && preg_match($regexppass, $password)){
             //in case of login with phone
            $cliente = autenticarClientePorNumero_movil($user, $password);
        }else{
            
            echo json_encode('Inicio de sesion fallido,email / telefono o contraseña no valido');
            return 0;
        }
        
        
        
            if($cliente != null){

                $_SESSION['ID_CLIENTE'] = $cliente->getId_cliente();
                $_SESSION['NOMBRE_CLIENTE'] = $cliente->getNombre();
                $_SESSION['APELLIDO_CLIENTE'] = $cliente->getApellido();
                $_SESSION['NUMERO_CLIENTE'] = $cliente->getNumero_movil();
                $_SESSION['EMAIL_CLIENTE'] = $cliente->getEmail();


                echo json_encode('INICIO DE SESION CORRECTAMENTE');
                
                return 1;           
                //header("Location: ../../view/store/");
            }else{

                echo json_encode('Inicio de sesion fallido,email / telefono o contraseña incorrecta');
                return 0;
                

                //header("Location: ../../view/store/"); 
            }

        
		

    
        
        
?>
