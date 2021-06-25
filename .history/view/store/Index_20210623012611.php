<?php
session_start();
$login = "index.php";
if (!isset($_SESSION['NOMBRE_CLIENTE']) || $_SESSION['NOMBRE_CLIENTE'] == "inicia sesion o registrate!") {
  $_SESSION['NOMBRE_CLIENTE'] = "inicia sesion o registrate!";
  $login = "Registrate.html";
?>
  <script>
    var clienteid = 0;
  </script>
<?php
} else {
?>

  <script>
    var clienteid = <?php echo $_SESSION['ID_CLIENTE']; ?>;
  </script>

<?php
}

?>
<!DOCTYPE html>
<html lang="en">

<head>
  <title>Perfumes</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" href="img/Icon-Perfume.jpg">
  <link href="css/1.css" rel="stylesheet">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>
<body background="img/Fondo_Principal.png">
  <div class="Div-Principal">
    <header>
      <nav>
        <h1 class='Logo-h1'><a href="Index.php">PERFUMERÍA</a></h1>
        <ul class='Icons-ul'>
          <li><a href="Contacto.html"><i class="fas fa-address-book"></i></a></li> &nbsp; &nbsp; &nbsp;
          <li><a href=<?php echo $login; ?>><?php echo $_SESSION['NOMBRE_CLIENTE']; ?><i class="far fa-user-circle"></i></a></li>
          <?php
          if ($_SESSION['NOMBRE_CLIENTE'] != "inicia sesion o registrate!") {
            echo '<li><a href="Compras.php"><i class="fas fa-cart-plus"></i></a></li>
                <li><a href="/../../controller/ACTIONS/act_logout.php">cerrar sesion<i class="far fa-user-circle"></i></a></li>';
          }
          ?>
        </ul>
      </nav>
    </header>
    <div class="Frase_Busqueda">
      <h1>
        "El perfume es una historia en olor, a veces una poesía en memoria"
      </h1>
      <input class="Buscar" type="text" placeholder=" Buscar Productos"><i class="fas fa-search"></i>
    </div>
    <div class="slider">
      <!-- fade css -->
      <div class="myslide">
        <img src="img/Slider-11.jpg">
      </div>

      <div class="myslide">
        <img src="img/Slider-22.jpg">
      </div>

      <div class="myslide">
        <img src="img/Slider-33.jpg">
      </div>

      <div class="myslide">
        <img src="img/Slider-44.jpg">
      </div>
      <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
      <a class="next" onclick="plusSlides(1)">&#10095;</a>

      <div class="dotsbox" style="text-align:center">
        <span class="Dirrecion" onclick="currentSlide(1)"></span>
        <span class="Dirrecion" onclick="currentSlide(2)"></span>
        <span class="Dirrecion" onclick="currentSlide(3)"></span>
        <span class="Dirrecion" onclick="currentSlide(4)"></span>
      </div>
    </div>
    <div class="Top-Favoritos">
      <table class="Perfumes-Favoritos">
        <tr>
          <td id="Perfume_1">
            <h1 class="Letra-Top">LO + TOP</h1>
          </td>
          <td class="Perfumes" id="Perfume_2">
            <img src="img/Catalogo-1.png" alt=""><br>
            <h3>
              GIORGIO ARMANI <br>
              USD $120 <br>
              <button>Comprar</button>
            </h3>
          </td>
          <td class="Perfumes" id="Perfume_3">
            <img src="img/Catalogo-2.png" alt=""><br>
            <h3>
              ACQUA DI GIO <br>
              USD $120 <br>
              <button>COMPRAR</button>
            </h3>
          </td>
          <td class="Perfumes" id="Perfume_4">
            <img src="img/Catalogo-9.png" alt=""><br>
            <h3>
              LANCOME TRESOR <br>
              USD $120 <br>
              <button>COMPRAR</button>
            </h3>
          </td>
          <td class="Perfumes" id="Perfume_5">
            <img src="img/Catalogo-10.png" alt=""><br>
            <h3>
              LANCOME TRESOR <br>
              USD $120 <br>
              <button>COMPRAR</button>
            </h3>
          </td>
        </tr>
      </table>
    </div>
    <!-- Tab links -->
    <div class="tabs">
      <nav class="tab-list">
        <a class="tab " href="#tab-1">PERFUMES &nbsp; PARA &nbsp; ÉL</a>
        <a class="tab active" href="#tab-2">PERFUMES &nbsp; PARA &nbsp;ELLA</a>
      </nav>
      <div id="tab-1" class="tab-content ">
        <div class="Catalogo-Producto" id="Productos-Caballeros">

        </div>
      </div>
      <div id="tab-2" class="tab-content show">
        <div class="Catalogo-Producto" id="Productos-Damas">

        </div>
      </div>
    </div>
    <h1 class="Titulo_Marcas" id="Title_Videos">OPINIONES</h1>
    <table class="Tabla_Videos">
      <tr>
        <th>
          <iframe src="https://www.youtube.com/embed/_L2ZbsSH5oI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
          </iframe>
          <br> <br>
          <a href="https://www.youtube.com/watch?v=L83CqwkeHxM" target="_blank">VER VIDEO</a>
        </th>
        <th>
          <iframe src="https://www.youtube.com/embed/1ZNPZAiBQSM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <br> <br>
          <a href="https://www.youtube.com/watch?v=1ZNPZAiBQSM" target="_blank">VER VIDEO</a>
        </th>
        <th>
          <iframe src="https://www.youtube.com/embed/_L2ZbsSH5oI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
          </iframe>
          <br> <br>
          <a href="https://www.youtube.com/watch?v=L83CqwkeHxM" target="_blank">VER VIDEO</a>
        </th>
        <th> <iframe src="https://www.youtube.com/embed/NdxOlzg58jA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <br> <br>
          <a href="https://www.youtube.com/watch?v=NdxOlzg58jA" target="_blank">VER VIDEO</a>
        </th>
      </tr>
    </table>

    <!--
  <div class="Ventana-Modal">
    <div class="Sub-Ventana_Modal">
        <div class="Div-Modal_Bienvenida">
            <h2>Bienvenido a Perfumes</h2>
        </div>
        <div class="Div-Frase_Modal">
            <i class="far fa-times-circle" id="close"></i>
                <h2>
                  ¡ Encontrarás todo lo necesario para ti, un perfume único y exclusivo !
                </h2>
        </div>
    </div>
</div> -->


    <script src="js/productos.js" charset="uft-8"></script>
    <script type="text/javascript" src="js/Pagina_Principal.js"></script>
</body>

</html>