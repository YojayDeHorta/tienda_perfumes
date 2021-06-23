<?php
        session_start();
        require_once (__DIR__."/../MDB/mdbCliente.php");	
	
		$Email = $_POST['Email'];
		$password = $_POST['Contraseña'];
        //reg ex 
        if($Email=="" || $password==""){
            echo json_encode('Inicio de sesion fallido,email o contraseña no valido');
            return 0;
        }
            
        if(strpos($Email, '@') === false) {
            echo json_encode('Inicio de sesion fallido,email o contraseña no valido');
            return 0;
        }  
        $regexpuser = '/^[-!#$%&\'*+\\.\/0-9=?A-Z^_`{|}~]+@([-0-9A-Z]+\.)+([0-9A-Z]){2,7}$/i';
        $regexppass= '/^[A-Za-z0-9]{8,30}$/';
        if (!preg_match($regexpuser, $Email)||!preg_match($regexppass, $password)){
            echo json_encode('Inicio de sesion fallido,email o contraseña no valido');
            return 0;
        }
            
      


        $cliente = autenticarCliente($Email, $password);
        
        
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

                echo json_encode('Inicio de sesion fallido,email o contraseña incorrecta');
                return 0;
                

                //header("Location: ../../view/store/"); 
            }

        
		

    
        
        
?>
