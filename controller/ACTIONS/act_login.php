<?php
        session_start();
        require_once (__DIR__."/../MDB/mdbCliente.php");	
		$errMsg = 'OK';
	
		$Email = $_POST['Email'];
		$password = $_POST['Contraseña'];
        
        $cliente = autenticarCliente($Email, $password);
        
        if($Email == "admin" ){
            
            header("Location: ../../view/admin/");
        }else{
            if($cliente != null){

                $_SESSION['ID_CLIENTE'] = $cliente->getId_cliente();
                $_SESSION['NOMBRE_CLIENTE'] = $cliente->getNombre();
                $_SESSION['APELLIDO_CLIENTE'] = $cliente->getApellido();
                $_SESSION['NUMERO_CLIENTE'] = $cliente->getNumero_movil();
                $_SESSION['EMAIL_CLIENTE'] = $cliente->getEmail();


                echo'<script type="text/javascript">
                alert("INICIO DE SESION CORRECTAMENTE");
                window.location.href="../../view/store/";
                </script>';
                        
                //header("Location: ../../view/store/");
            }else{
                $errMsg .= 'usuario y/o contraseña no válido';

                echo'<script type="text/javascript">
                alert("Inicio de sesion fallido, cliente no encontrado");
                window.location.href="../../view/store/registrate.html";
                </script>';

                //header("Location: ../../view/store/"); 
            }

        }
		

    
        
        
?>
