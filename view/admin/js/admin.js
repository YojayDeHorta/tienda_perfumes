const modalArticulo = new bootstrap.Modal(
  document.getElementById("modalArticulo")
);

const contenedor = document.getElementById("contenedor-clientes");

const formArticulo = document.getElementById("formulario-usuario");
const id_usuario = document.getElementById("id_usuario");
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const telefono = document.getElementById("telefono");
const email = document.getElementById("email");
const password = document.getElementById("password");
const divId = document.getElementById("divId");
const divAviso = document.getElementById("divAviso");
let opcion = "";
let resultados = "";
//btncliente = document.getElementById("btnCliente");

btnAdmin.addEventListener("click", () => {
  nombre.value = "";
  apellido.value = "";
  telefono.value = "";
  email.value = "";
  password.value = "";
  password.readOnly = false;
  modalArticulo.show();
  divId.style.display = "none";
  divAviso.style.display = "none";
  opcion = "crear";

});

//procedimiento mostrar
var xhr = new XMLHttpRequest();
xhr.open("GET", "/../../controller/ACTIONS/act_read-Clientes.php", true);
xhr.onload = function () {
  if (xhr.status == 200) {
    let datos = JSON.parse(xhr.responseText);
    for (let item of datos) {
      contenedor.innerHTML += `<tr>
        <td>${item.id_cliente}</td>
        <td>${item.nombre}</td>
        <td>${item.apellido}</td>
        <td>${item.numero_movil}</td>
        <td>${item.email}</td>
        <td>${item.password}</td>
        <td class="text-center"><a class="btnEditar btn btn-primary" id="editar_usuario">Editar</a><a class="btnBorrar btn btn-danger" id="borrar_usuario">Borrar</a></td>
        </tr>
        `;
    }
  } else {
    console.log("existe un error de tipo: " + xhr.status);
  }
};
xhr.send();
//Procedimiento Borrar
const on = (element, event, selector, handler) => {
  element.addEventListener(event, (e) => {
    if (e.target.closest(selector)) {
      handler(e);
    }
  });
};

on(document, "click", "#borrar_usuario", (e) => {
  const fila = e.target.parentNode.parentNode;
  const id = fila.firstElementChild.innerHTML;
  alertify.confirm("esta seguro que quiere borrar?", function () {
    fetch("/../../controller/ACTIONS/act_delete-Clientes.php?id=" + id)
      .then((res) => res.json())
      .then((salida) => {
        alertify.alert(salida, function () {
          location.reload();
        });
      });
  });
});

//Procedimiento Editar
let idForm = 0;
on(document, "click", "#editar_usuario", (e) => {
  const fila = e.target.parentNode.parentNode;
  idForm = fila.children[0].innerHTML;
  const nombreForm = fila.children[1].innerHTML;
  const apellidoForm = fila.children[2].innerHTML;
  const telefonoForm = fila.children[3].innerHTML;
  const emailForm = fila.children[4].innerHTML;
  const passForm = fila.children[5].innerHTML;
  nombre.value = nombreForm;
  apellido.value = apellidoForm;
  telefono.value = telefonoForm;
  email.value = emailForm;
  id_usuario.value = idForm;
  password.value = passForm;
  password.readOnly = true;
  opcion = "editar";
  modalArticulo.show();
  divId.style.display = "block";
});

//submit de editar y crear
formArticulo.addEventListener("submit", (e) => {
  e.preventDefault();
  var datos = new FormData(formArticulo);
  const fila = e.target.parentNode.parentNode;
  idForm = fila.children[0].innerHTML;
  //submit de creacion
  if (opcion == "crear") {
    fetch("../../../controller/ACTIONS/act_register.php", {
      method: "POST",
      body: datos,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data == "registrado correctamente") {
          alertify.alert(data, function () {
            location.reload();
          });
        } else {
          divAviso.style.display = "block";
          divAviso.innerHTML =
            "<p>error, correo o telefono no valido o existente</p>";
        }
      });
  }
  //submit de edicion
  if (opcion == "editar") {
    fetch("../../../controller/ACTIONS/act_edit-Clientes.php", {
      method: "POST",
      body: datos,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data == "cliente editado exitosamente") {
          alertify.alert(data, function () {
            location.reload();
          });
        }
        if (data == "numero o email existente") {
          alertify.alert(data);
        }
      });
    modalArticulo.hide();
  }
});
