var sesion = document.getElementById("Iniciar");
var alerta = document.getElementById("alerta_login");
sesion.addEventListener("submit", function (e) {
  e.preventDefault();
  var datos = new FormData(sesion);
  console.log(datos.get("Email"));
  fetch("../../../controller/ACTIONS/act_login.php", {
    method: "POST",
    body: datos,
  })
    .then((respuesta) => respuesta.json())
    .then((data) => {
      console.log(data);
      alerta.innerHTML = data;
      if (data == "INICIO DE SESION CORRECTAMENTE") {
        window.location.replace("/../");
      }
    });
});
