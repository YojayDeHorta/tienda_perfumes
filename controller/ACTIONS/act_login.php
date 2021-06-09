<?php
        session_start();
        require_once (__DIR__."/../MDB/mdbCliente.php");	
	
		$Email = $_POST['Email'];
		$password = $_POST['Contraseña'];
        
        $cliente = autenticarCliente($Email, $password);
        
        
            if($cliente != null){

                $_SESSION['ID_CLIENTE'] = $cliente->getId_cliente();
                $_SESSION['NOMBRE_CLIENTE'] = $cliente->getNombre();
                $_SESSION['APELLIDO_CLIENTE'] = $cliente->getApellido();
                $_SESSION['NUMERO_CLIENTE'] = $cliente->getNumero_movil();
                $_SESSION['EMAIL_CLIENTE'] = $cliente->getEmail();


                echo json_encode('INICIO DE SESION CORRECTAMENTE');
                
                        
                //header("Location: ../../view/store/");
            }else{

                echo json_encode('Inicio de sesion fallido,email o contraseña incorrecta');

                

                //header("Location: ../../view/store/"); 
            }

        
		

    
        
        
?>
