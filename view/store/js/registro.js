

/*-------------------------- */
var tabs_bottom = null, tabs_contenido = null, tabs = null;

function Tabs_Principal(evt, Pestaña) {

  if (tabs_bottom != null) {
    tabs_bottom.style.border = 'none';
  }

  if (Pestaña === tabs) {
    tabs_bottom.style = 'border-bottom:5px solid red'
  }


  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");

  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(Pestaña).style.display = "block";
  evt.currentTarget.className += " active";

  localStorage.setItem("Tabs", JSON.stringify(Pestaña));

}


var tabs = JSON.parse(localStorage.getItem("Tabs"));

tabs_bottom = document.getElementById(tabs.toLowerCase());

tabs_contenido = document.getElementById(tabs);

tabs_bottom.style = 'border-bottom:5px solid red'

tabs_contenido.style.display = 'block';
if (tabs == 'Pestaña_1') {
  document.getElementById('Pestaña_2').style.display = "none";
}


//console.log('Prueba', tabs_bottom);*/


/*-------------------------- */



/*-------------VALIDACIONES------------- */
const formulario = document.getElementById('Registro');
const inputs = document.querySelectorAll('#Registro input');
var totalTime = 3;
var comprobacionbd = false;
const expresiones = {
  apellido: /^[a-zA-ZÀ-ÿ\s]{3,15}$/, // Letras, numeros, guion y guion_bajo
  nombre: /^[a-zA-ZÀ-ÿ\s]{3,15}$/, // Letras y espacios, pueden llevar acentos.
  password: /^[A-Za-z0-9]{8,30}$/, // 8 a 30 digitos.
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  numero_movil: /^\d{7,14}$/, // 7 a 14 numeros.
};
const campos = {
  apellido: false,
  nombre: false,
  password: false,
  email: false,
  numero_movil: false
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
    case "email":
      validarCampo(expresiones.email, e.target, 'email');
      break;
    case "numero_movil":
      validarCampo(expresiones.numero_movil, e.target, 'numero_movil');
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
  if (campos.apellido && campos.nombre && campos.password && campos.email && campos.numero_movil && terminos.checked) {
    fetch("../../../controller/ACTIONS/act_register.php", {
      method: "POST",
      body: datos_registro,
    })
      .then((res) => res.json())
      .then((data) => {

        if (typeof data === 'object' && data !== null) {
          formulario.reset();
          comprobacionbd = false;
          //updateClock();

          document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
          setTimeout(() => {
            document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
          }, 3000);

          document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
            icono.classList.remove('formulario__grupo-correcto');
          });



        } else {
          document.getElementById('formulario__mensaje-bd').innerHTML = `
          <p><i class="fas fa-exclamation-triangle"></i> <b>Error:</b> `+ data + `</p>`

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
//modal terminos



function close_Terminos() {
  $('.Ventana-Modal').removeClass('show');
  $('.Sub-Ventana_Modal').removeClass('show');
}



function Alerta_Terminos() {
  $('.Ventana-Modal').addClass('show');
  $('.Sub-Ventana_Modal').addClass('show');
  var Contenedor_Alerta = document.getElementById('Alerta_Terminos');
  console.log(Contenedor_Alerta)
  Contenedor_Alerta.innerHTML = `
 <i class="far fa-times-circle" id="close_Terminos" onclick="close_Terminos()"></i>
   <div class='Terminos_div'>
     <p id='Error'>
     Lorem, ipsum dolor, sit amet consectetur adipisicing elit. Tempora molestias dignissimos rem atque, eligendi! A numquam animi voluptatum rem
      expedita culpa vero reprehenderit, dolor, quod quos tempore asperiores placeat corrupti. Lorem ipsum dolor sit amet, consectetur adipisicing 
      elit. Laudantium nisi ullam, dignissimos in placeat adipisci incidunt, fuga obcaecati quam ab laborum iure, doloribus at possimus quibusdam 
      rem soluta numquam vel. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores totam unde quibusdam eos ex sapiente iste
       assumenda qui, magnam ullam, veniam perferendis accusamus sint aliquid excepturi cum odio sequi nemo!
              Lorem, ipsum dolor, sit amet consectetur adipisicing elit. Tempora molestias dignissimos rem atque, eligendi! A numquam animi voluptatum rem
      expedita culpa vero reprehenderit, dolor, quod quos tempore asperiores placeat corrupti. Lorem ipsum dolor sit amet, consectetur adipisicing 
      elit. Laudantium nisi ullam, dignissimos in placeat adipisci incidunt, fuga obcaecati quam ab laborum iure, doloribus at possimus quibusdam 
      rem soluta numquam vel. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores totam unde quibusdam eos ex sapiente iste
       assumenda qui, magnam ullam, veniam perferendis accusamus sint aliquid excepturi cum odio sequi nemo!
     </p>
  </div> <br>
  <button onclick="close_Terminos()"> <h1>Aceptar</h1></button><button onclick="close_Terminos()"> <h1>Cancelar</h1></button>

`
}