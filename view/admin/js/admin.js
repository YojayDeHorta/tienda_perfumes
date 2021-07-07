const modalArticulo = new bootstrap.Modal(
  document.getElementById("modalArticulo")
);

const contenedor = document.getElementById("contenedor-clientes");

const formArticulo = document.getElementById("formulario-usuario");
const id_usuario = document.getElementById("id_cliente");
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const telefono = document.getElementById("numero_movil");
const email = document.getElementById("email");
const password = document.getElementById("password");
const divId = document.getElementById("divId");
const divAviso = document.getElementById("divAviso");
let opcion = "";
let resultadosuser = "";
let editarclienteaux = "";
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

const mostrarclientes = (articulos) => {
  articulos.forEach((articulo) => {
    resultadosuser += `<tr>
    <td>${articulo.id_cliente}</td>
    <td>${articulo.nombre}</td>
    <td>${articulo.apellido}</td>
    <td>${articulo.numero_movil}</td>
    <td>${articulo.email}</td>
    <td>${articulo.password}</td>
    <td class="text-center"><a class="btnEditar btn btn-primary" id="editar_usuario">Editar</a><a class="btnBorrar btn btn-danger" id="borrar_usuario">Borrar</a></td>
    </tr>`;
  });
  contenedor.innerHTML = resultadosuser;
};

//Procedimiento Mostrar
fetch("/../../controller/ACTIONS/act_read-Clientes.php")
  .then((response) => response.json())
  .then((data) => mostrarclientes(data))
  .catch((error) => console.log(error));


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
          fila.innerHTML = "";
          //location.reload();
        });
      });
  });
});

//Procedimiento Editar
let idForm = 0;
on(document, "click", "#editar_usuario", (e) => {
  const fila = e.target.parentNode.parentNode;
  editarproductoaux = e.target.parentNode.parentNode;
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

  //cambiar formdata a object para añadir


  //submit de creacion
  if (opcion == "crear") {
    fetch("../../../controller/ACTIONS/act_register.php", {
      method: "POST",
      body: datos,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (typeof data === 'object' && data !== null) {
          alertify.alert("cliente registrado correctamente", function () {
            const nuevousuario = [];
            nuevousuario.push(data);
            mostrarclientes(nuevousuario);
            modalArticulo.hide();
          });
        } else {
          divAviso.style.display = "block";
          divAviso.innerHTML =
            "<p>" + data + "</p>";
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
            editarproductoaux.innerHTML = `<tr>
            <td>${datos.get("id_cliente")}</td>
            <td>${datos.get("nombre")}</td>
            <td>${datos.get("apellido")}</td>
            <td>${datos.get("numero_movil")}</td>
            <td>${datos.get("email")}</td>
            <td>${datos.get("password")}</td>
            <td class="text-center"><a class="btnEditar btn btn-primary" id="editar_usuario">Editar</a><a class="btnBorrar btn btn-danger" id="borrar_usuario">Borrar</a></td>
            </tr>`;;
            modalArticulo.hide();
          });
        }
        else {
          alertify.alert(data);
        }
      });

  }
});
