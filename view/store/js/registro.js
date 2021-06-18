/*-------------------------- */

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

/*-------------------------- */

/*--------------FUNCIONES DEL REGISTRO------------ */
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
  console.log("ca");
  var tipo = document.getElementById("Registrar-Contraseña_1");
  var tipo2 = document.getElementById("Registrar-Contraseña_2");
  if (tipo.type == "password") {
    tipo.type = "text";
    tipo2.type = "text";
  } else {
    tipo.type = "password";
    tipo2.type = "password";
  }
}
/*-------------------------- */

/*-------------VALIDACIONES------------- */

var input = document.getElementById("nombre");
var form = document.getElementById("Registrar");
var elem = document.createElement("span");
elem.id = "notify";
elem.style.display = "none";
form.appendChild(elem);

input.addEventListener("invalid", function (event) {
  event.preventDefault();
  if (!event.target.validity.valid) {
    elem.textContent = "el nombre solo puede contener letras, ej:john";
    elem.className = "error";
    elem.style.display = "block";
    input.className = "invalid animated shake";
  }
});
input.addEventListener("input", function (event) {
  if ("block" === elem.style.display) {
    input.className = "";
    elem.style.display = "none";
  }
});
