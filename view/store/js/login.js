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
        window.location.replace("index.php");
      } else {
        //alerta.innerHTML = data;
        Alerta_Mensaje('No se ha podido iniciar tu sesión, <br>email o contraseña incorrecta');
        setTimeout(() => {
          alerta.innerHTML = "";
        }, 4000);
      }
    });
});

function Alerta_Mensaje(Texto) {
  var Contenedor_Alerta = document.getElementById('Modal_Mensaje');
  Contenedor_Alerta.style.display = "block";
  console.log(Texto);
  Contenedor_Alerta.innerHTML = `
  <h2 id='Mensaje'> ${Texto} </h2>
  <div onclick="togglePopup()" class="Close-btn" id='Close'><i class="far fa-times-circle"></i></div>
  <button> <h1>Aceptar</h1></button> 
  `
}