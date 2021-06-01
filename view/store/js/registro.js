

var registro = document.getElementById("Registrar"); //boton registro
var alerta_registro = document.getElementById("alerta_registro"); //alerta del registro
registro.addEventListener("submit", function (e) {
  e.preventDefault();
  var datos_registro = new FormData(registro);
  var con1 = datos_registro.get("Contraseña");
  var con2 = datos_registro.get("Confirmar_contraseña");
  if (validarespacios(con1) && passwordsiguales(con1, con2)) {
    fetch("../../../controller/ACTIONS/act_register.php", {
      method: "POST",
      body: datos_registro,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alerta_registro.innerHTML = data;
      });
  }
});

function validarespacios(con1) {
  var espacios = false;
  var cont = 0;

  while (!espacios && cont < con1.length) {
    if (con1.charAt(cont) == " ") espacios = true;
    cont++;
  }

  if (espacios) {
    alerta_registro.innerHTML = `la contraseña no debe tener espacios`;
    return false;
  } else {
    return true;
  }
}

function passwordsiguales(con1, con2) {
  console.log(con1);
  if (con1 != con2) {
    alerta_registro.innerHTML = `las contraseñas no coinciden`;
    return false;
  } else {
    return true;
  }
}
function mostrarContra() {
  var tipo = document.getElementById("pass");
  var tipo2 = document.getElementById("passconfirm");
  if (tipo.type == "password") {
    tipo.type = "text";
    tipo2.type = "text";
  } else {
    tipo.type = "password";
    tipo2.type = "password";
  }
}
