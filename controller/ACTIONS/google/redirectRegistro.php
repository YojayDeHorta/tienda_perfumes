<?php
require_once 'vendor/autoload.php';
require_once 'config-googleRegistro.php';
require_once (__DIR__."/../../MDB/mdbCliente.php");
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
	
  $numero_movil=rand(1000000000,9999999999);
  $clienteemail=buscarClientePoremail($email);
  $passencrypt=password_hash($id, PASSWORD_DEFAULT, ['cost'=>10]);
  if($clienteemail==NULL){

    $nuevocliente=NULL;
    $nuevocliente= new Cliente('',$nombre,$apellido,$numero_movil,$passencrypt,$email);
    insertarCliente($nuevocliente);
    header("Location: /../../../view/store/registrate.html?alert=3");
    exit();
    return 1;       
      
  }else{
    header("Location: /../../../view/store/registrate.html?alert=2");
    exit();
    return 0;
        
  }
  }  
?>