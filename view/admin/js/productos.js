const modalProductos = new bootstrap.Modal(
  document.getElementById("modalProductos")
);

const contenedorProductos = document.getElementById("contenedor-productos");

const formProducto = document.getElementById("formulario-producto");
const id_producto = document.getElementById("id_producto");
const tipo = document.getElementById("tipo");

const imagen = document.getElementById("imagen");
const producto = document.getElementById("producto");
const descripcion = document.getElementById("descripcion");
const precio = document.getElementById("precio");
const stock = document.getElementById("stock");
const divIdproducto = document.getElementById("divId_producto");
const divAvisoProducto = document.getElementById("divAvisoProducto");
let opcionProducto = "";
btnProducto.addEventListener("click", () => {
  id_producto.value = "";
  tipo.value = "";

  imagen.value = "";
  producto.value = "";
  descripcion.value = "";
  precio.value = "";
  stock.value = "";
  modalProductos.show();
  divIdproducto.style.display = "none";
  divAvisoProducto.style.display = "none";
  opcionProducto = "crear";
});

const mostrar = (articulos) => {
  articulos.forEach((articulo) => {
    resultados += `<tr>
        <td>${articulo[0].id_producto}</td>
        <td>${articulo[0].tipo}</td>
        <td></td>
        <td>${articulo[0].nombre_producto}</td>
        <td>${articulo[0].descripcion}</td>
        <td>${articulo[0].precio_producto}</td>
        <td>${articulo[0].stock_disponible}</td>
        <td class="text-center"><a class="btnEditarProducto btn btn-primary" id="editar_producto">Editar</a><a class="btnBorrarProducto btn btn-danger" id="borrar_producto">Borrar</a></td>
        </tr>
                  `;
  });
  contenedorProductos.innerHTML = resultados;
};

//Procedimiento Mostrar
fetch("/../../controller/ACTIONS/act_read-Productos.php?id=" + id_producto)
  .then((response) => response.json())
  .then((data) => mostrar(data))
  .catch((error) => console.log(error));

//Procedimiento Borrar
const recharge = (element, event, selector, handler) => {
  element.addEventListener(event, (e) => {
    if (e.target.closest(selector)) {
      handler(e);
    }
  });
};

recharge(document, "click", "#borrar_producto", (e) => {
  const fila = e.target.parentNode.parentNode;
  const id_editar = fila.firstElementChild.innerHTML;
  alertify.confirm("esta seguro que quiere borrar?", function () {
    fetch(
      "/../../controller/ACTIONS/act_delete-Productos.php?id_producto=" +
        id_editar
    )
      .then((res) => res.json())
      .then((salida) => {
        alertify.alert(salida, function () {
          location.reload();
        });
      });
  });
});

//Procedimiento Editar
let idproductoForm = 0;
on(document, "click", "#editar_producto", (e) => {
  const fila = e.target.parentNode.parentNode;
  idproductoForm = fila.children[0].innerHTML;
  const tipoForm = fila.children[1].innerHTML;
  const imagenForm = fila.children[2].innerHTML;
  const productoForm = fila.children[3].innerHTML;
  const descripcionForm = fila.children[4].innerHTML;
  const precioForm = fila.children[5].innerHTML;
  const stockForm = fila.children[6].innerHTML;
  tipo.value = tipoForm;
  imagen.value = imagenForm;
  producto.value = productoForm;
  descripcion.value = descripcionForm;
  id_producto.value = idproductoForm;
  precio.value = precioForm;
  stock.value = stockForm;
  opcionProducto = "editar";
  modalProductos.show();
  divIdproducto.style.display = "block";
});
formProducto.addEventListener("submit", (e) => {
  e.preventDefault();
  var datos = new FormData(formProducto);
  const fila = e.target.parentNode.parentNode;
  idproductoForm = fila.children[0].innerHTML;
  //submit de creacion
  if (opcionProducto == "crear") {
    fetch("../../../controller/ACTIONS/act_register-productos.php", {
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
          divAvisoProducto.style.display = "block";
          divAvisoProducto.innerHTML = "<p>error, verifique los datos</p>";
        }
      });
  }
  //submit de edicion
  if (opcionProducto == "editar") {
    fetch("../../../controller/ACTIONS/act_edit-Productos.php", {
      method: "POST",
      body: datos,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data == "producto editado exitosamente") {
          alertify.alert(data, function () {
            location.reload();
          });
        }
        if (data == "error") {
          alertify.alert(data);
        }
      });
    modalProductos.hide();
  }
});
