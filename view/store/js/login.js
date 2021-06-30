/**----------------LOGIN-------------------- */

var sesion = document.getElementById("Iniciar");
var alerta = document.getElementById("alerta_login");
sesion.addEventListener("submit", function (e) {
  e.preventDefault();
  var datos = new FormData(sesion);
  /*console.log(datos.get("Contraseña"));*/
  if (
    datos.get("email") == "admin@admin.com" &&
    datos.get("password") == "admin1234"
  ) {



    window.location.replace("../admin/admin.html");
  }

  fetch("../../../controller/ACTIONS/act_login.php", {
    method: "POST",
    body: datos,
  })
    .then((respuesta) => respuesta.json())
    .then((data) => {
      if (data == "INICIO DE SESION CORRECTAMENTE") {
        Alerta_Mensaje(data);

        //alerta.innerHTML = data;
        setTimeout(() => {
         window.location.replace("index.php");
        }, 1000);

      } else {
        //alerta.innerHTML = data;
        Alerta_Mensaje("No se ha podido iniciar tu sesión, <br>email o contraseña incorrecta");
        setTimeout(() => {
          Close();
        }, 2000);
      }
    });
});



function Close() {
  $('.Ventana-Modal').removeClass('show');
  $('.Sub-Ventana_Modal').removeClass('show');
}



function Alerta_Mensaje(Texto) {
  $('.Ventana-Modal').addClass('show');
  $('.Sub-Ventana_Modal').addClass('show');
  var Contenedor_Alerta = document.getElementById('Alerta_Modal');
  Contenedor_Alerta.innerHTML = `
   <i class="far fa-times-circle" id="close" onclick="Close()"></i>
    <h2 id='Mensaje'> ${Texto} </h2>
    <button onclick="Close()">Aceptar</button>

  `
}