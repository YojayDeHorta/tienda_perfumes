/*--------------TABS-Admin----------------*/

function Tabs_Principal(evt, Tabs) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(Tabs).style.display = "block";
  evt.currentTarget.className += " active";
}
/*--------------TABS----------------*/
/**----------------LOGIN-------------------- */

var sesion = document.getElementById("Iniciar");
var alerta = document.getElementById("alerta_login");
sesion.addEventListener("submit", function (e) {
  e.preventDefault();
  var datos = new FormData(sesion);
  //console.log(datos.get("Contraseña"));
  if (
    datos.get("Email") == "admin@admin.com" &&
    datos.get("Contraseña") == "administrador"
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
        alerta.innerHTML = data;
        window.location.replace("index.php");
      } else {
        alerta.innerHTML = data;
        setTimeout(() => {
          alerta.innerHTML = "";
        }, 4000);
      }
    });
});
