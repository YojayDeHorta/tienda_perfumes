<?php
session_start();
$login="index.php";
if (!isset($_SESSION['NOMBRE_CLIENTE'])||$_SESSION['NOMBRE_CLIENTE']=="inicia sesion o registrate!") {
    $_SESSION['NOMBRE_CLIENTE']="inicia sesion o registrate!";
    $login="Registrate.html";
    ?> 
    <script>var clienteid=0;</script>
    <?php
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
  <title>Perfumes</title>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="icon" href="img/Icon-Perfume.jpg">
  <link href="css/1.css" rel="stylesheet">
  <link href="css/all.min.css" rel="stylesheet">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
</head>

<body background="img/Fondo_Principal.png">
  <br><br><br><br><br>
  <div class="Div-Principal">
    <header class="Cabecera">
      <nav class="Nav-Opciones">
        <a href="Index.php">
          <h1 class="Logo-Perfumes">PERFUMERÍA</h1>
        </a>
        <ul>
         <li><a href="Contacto.html"><i class="fas fa-address-book"></i></a></li>
          <li><a href="Compras.php"><i class="fas fa-cart-plus"></i></a></li>
          <li><a href=<?php echo $login;?>><?php echo $_SESSION['NOMBRE_CLIENTE'];?><i class="far fa-user-circle"></i></a></li>
          <?php
          if($_SESSION['NOMBRE_CLIENTE']!="inicia sesion o registrate!"){
            echo '<li><a href="/../../controller/ACTIONS/act_logout.php">cerrar sesion<i class="far fa-user-circle"></i></a></li>';
          }
          ?>
        </ul>
      </nav>
    </header>
    <h1 class="Titulo_Carrito">CARRITO DE COMPRAS</h1>
    <div class=".Container_Compras" id="Compras">
    </div>
    <div class="Factura" id="Factura_Compra">
      <div class="Compra_Total_Carrito">
        <h1>RESUMEN DEL PEDIDO</h1>
        <br> 
        <h4 class="Total_Producto" id="Precio_Subtotal"></h4>
        <h4 class="Total_Producto" id="Precio_Envio"></h4>
        <h4 class="Total_Producto" id="Precio_Total"></h4>
        <button class="Comprar_Buttom">COMPRAR</button>
      </div>
    </div>
    
  <script>
    var clienteid =<?php echo $_SESSION['ID_CLIENTE']; ?>;
  </script>
  <script src="js/Compras.js"></script>
</body>
</html>

