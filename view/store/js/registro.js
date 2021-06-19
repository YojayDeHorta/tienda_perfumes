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
/*
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
-------------------------- */

/*-------------VALIDACIONES------------- */
const formulario = document.getElementById('Registro');
const inputs = document.querySelectorAll('#Registro input');
var totalTime = 3;
var comprobacionbd = false;
const expresiones = {
  apellido: /^[a-zA-ZÀ-ÿ\s]{3,15}$/, // Letras, numeros, guion y guion_bajo
  nombre: /^[a-zA-ZÀ-ÿ\s]{3,15}$/, // Letras y espacios, pueden llevar acentos.
  password: /^[A-Za-z0-9]{8,30}$/, // 8 a 30 digitos.
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  telefono: /^\d{7,14}$/, // 7 a 14 numeros.
};
const campos = {
  usuario: false,
  nombre: false,
  password: false,
  correo: false,
  telefono: false
}


const validarFormulario = (e) => {
  switch (e.target.name) {
    case "apellido":
      validarCampo(expresiones.apellido, e.target, 'apellido');
      break;
    case "nombre":
      validarCampo(expresiones.nombre, e.target, 'nombre');
      break;
    case "password":
      validarCampo(expresiones.password, e.target, 'password');
      validarPassword2();
      break;
    case "password2":
      validarPassword2();
      break;
    case "correo":
      validarCampo(expresiones.correo, e.target, 'correo');
      break;
    case "telefono":
      validarCampo(expresiones.telefono, e.target, 'telefono');
      break;
  }
}

const validarCampo = (expresion, input, campo) => {
  if (expresion.test(input.value)) {
    document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
    document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
    document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
    document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
    document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
    campos[campo] = true;
  } else {
    document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
    document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
    document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
    document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
    document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
    campos[campo] = false;
  }
}
const validarPassword2 = () => {
  const inputPassword1 = document.getElementById('password');
  const inputPassword2 = document.getElementById('password2');

  if (inputPassword1.value !== inputPassword2.value) {
    document.getElementById(`grupo__password2`).classList.add('formulario__grupo-incorrecto');
    document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-correcto');
    document.querySelector(`#grupo__password2 i`).classList.add('fa-times-circle');
    document.querySelector(`#grupo__password2 i`).classList.remove('fa-check-circle');
    document.querySelector(`#grupo__password2 .formulario__input-error`).classList.add('formulario__input-error-activo');
    campos['password'] = false;
  } else {
    document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-incorrecto');
    document.getElementById(`grupo__password2`).classList.add('formulario__grupo-correcto');
    document.querySelector(`#grupo__password2 i`).classList.remove('fa-times-circle');
    document.querySelector(`#grupo__password2 i`).classList.add('fa-check-circle');
    document.querySelector(`#grupo__password2 .formulario__input-error`).classList.remove('formulario__input-error-activo');
    campos['password'] = true;
  }
}






inputs.forEach((input) => {
  input.addEventListener('keyup', validarFormulario);
  input.addEventListener('blur', validarFormulario);
});

/**----------------REGISTRO-------------------- */
formulario.addEventListener('submit', (e) => {
  e.preventDefault();
  var datos_registro = new FormData(formulario);
  const terminos = document.getElementById('terminos');
  if (campos.apellido && campos.nombre && campos.password && campos.correo && campos.telefono && terminos.checked) {
    fetch("../../../controller/ACTIONS/act_register.php", {
      method: "POST",
      body: datos_registro,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data == "registrado correctamente") {
          formulario.reset();
          comprobacionbd = false;
          updateClock();

          document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
          setTimeout(() => {
            document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
          }, 3000);

          document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
            icono.classList.remove('formulario__grupo-correcto');
          });



        } else {
          document.getElementById('formulario__mensaje-bd').classList.add('formulario__mensaje-activo');
          setTimeout(() => {
            document.getElementById('formulario__mensaje-bd').classList.remove('formulario__mensaje-activo');
          }, 5000);

        }
      });

  } else {
    document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
    setTimeout(() => {
      document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo');
    }, 5000);
  }
});


function updateClock() {
  //document.getElementById('countdown').style.display = "block";
  document.getElementById('countdown').innerHTML = totalTime;

  if (totalTime == 0) {
    document.getElementById('Tabs_1').classList.remove('active');
    document.getElementById('Tabs_2').classList.add('active');
    document.getElementById('countdown').style.display = "none";
  } else {
    totalTime -= 1;
    setTimeout("updateClock()", 1000);
  }
}