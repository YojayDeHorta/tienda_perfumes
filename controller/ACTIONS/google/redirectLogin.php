<?php
require_once 'vendor/autoload.php';
require_once 'config-googleLogin.php';
require_once (__DIR__."/../../MDB/mdbCliente.php");
session_start();
$client = new Google_Client();
$client->setClientId($clientID);
$client->setClientSecret($clientSecret);
$client->setRedirectUri($redirectUri);
$client->addScope("email");
$client->addScope("profile");

if (isset($_GET['code'])) {
  $token = $client->fetchAccessTokenWithAuthCode($_GET['code']);
  $client->setAccessToken($token['access_token']);

  // get profile info
  $google_oauth = new Google_Service_Oauth2($client);
  $google_account_info = $google_oauth->userinfo->get();
  $email =  $google_account_info->email;
  $name =  $google_account_info->name;
  $id =  $google_account_info->id;
  $nombre =  $google_account_info->givenName;
  $apellido =  $google_account_info->familyName;
	
  echo $nombre;
  $cliente = autenticarClientePorEmail($email, $id);
  if($cliente != null){

    $_SESSION['ID_CLIENTE'] = $cliente->getId_cliente();
    $_SESSION['NOMBRE_CLIENTE'] = $cliente->getNombre();
    $_SESSION['APELLIDO_CLIENTE'] = $cliente->getApellido();
    $_SESSION['NUMERO_CLIENTE'] = $cliente->getNumero_movil();
    $_SESSION['EMAIL_CLIENTE'] = $cliente->getEmail();
    header("Location: /../../../view/store/");
    exit();
    return 1;           
  }else{
   
    header("Location: /../../../view/store/registrate.html?alert=1");
    exit();
    return 0;

  }
  }  
?>