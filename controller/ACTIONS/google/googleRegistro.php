<?php

require_once 'vendor/autoload.php';
require_once 'config-googleRegistro.php';
 
$client = new Google_Client();
$client->setClientId($clientID);
$client->setClientSecret($clientSecret);
$client->setRedirectUri($redirectUri);
$client->addScope("email");
$client->addScope("profile");

header("Location: ".$client->createAuthUrl());
exit();
?>