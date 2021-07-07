const modalProductos = new bootstrap.Modal(
  document.getElementById("modalProductos")
);

const contenedorProductos = document.getElementById("contenedor-productos");
const formProducto = document.getElementById("formulario-producto");
const id_producto = document.getElementById("id_producto");
const tipo = document.getElementById("tipo");
const productoimg = document.getElementById("productoimg");
const imagen = document.getElementById("imagen");
const producto = document.getElementById("producto");
const descripcion = document.getElementById("descripcion");
const precio = document.getElementById("precio");
const stock = document.getElementById("stock");
const divIdproducto = document.getElementById("divId_producto");
const divAvisoProducto = document.getElementById("divAvisoProducto");
const button = document.getElementById("imagenbtn");
let editarproductoaux = "";


let file;

let opcionProducto = "";
let resultados = "";
btnProducto.addEventListener("click", () => {
  id_producto.value = "";
  tipo.value = "";
  imagen.value = "";
  productoimg.innerHTML = "no se ha elegido imagen";
  producto.value = "";
  descripcion.value = "";

  precio.value = "";
  stock.value = "";
  modalProductos.show();
  divIdproducto.style.display = "none";
  divAvisoProducto.style.display = "none";
  opcionProducto = "crear";
});

const mostrarproductos = (articulos) => {
  articulos.forEach((articulo) => {
    resultados += `<tr>
        <td>${articulo.id_producto}</td>
        <td>${articulo.tipo}</td>
        <td><img src="/view/store/img/productos/Catalogo-${articulo.id_producto}.png " width="50" height="60"></td>
        <td>${articulo.nombre_producto}</td>
        <td>${articulo.descripcion}</td>
        <td>${articulo.precio_producto}</td>
        <td>${articulo.stock_disponible}</td>
        <td class="text-center"><a class="btnEditarProducto btn btn-primary" id="editar_producto">Editar</a><a class="btnBorrarProducto btn btn-danger" id="borrar_producto">Borrar</a></td>
        </tr>
                  `;
  });
  contenedorProductos.innerHTML = resultados;
};

//Procedimiento Mostrarproductos
fetch("/../../controller/ACTIONS/act_read-Productos.php?id=" + id_producto)
  .then((response) => response.json())
  .then((data) => mostrarproductos(data))
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
          fila.innerHTML = "";
        });
      });
  });
});

//Procedimiento Editar
let idproductoForm = 0;
recharge(document, "click", "#editar_producto", (e) => {
  const fila = e.target.parentNode.parentNode;
  editarproductoaux = e.target.parentNode.parentNode;
  idproductoForm = fila.children[0].innerHTML;
  const tipoForm = fila.children[1].innerHTML;
  const imagenForm = fila.children[2].innerHTML;
  const productoForm = fila.children[3].innerHTML;
  const descripcionForm = fila.children[4].innerHTML;
  const precioForm = fila.children[5].innerHTML;
  const stockForm = fila.children[6].innerHTML;
  tipo.value = tipoForm;
  imagen.value = "";
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

        if (typeof data === 'object' && data !== null) {
          alertify.alert("producto agregado exitosamente", function () {
            const nuevoproducto = [];
            nuevoproducto.push(data);
            mostrarproductos(nuevoproducto);
            modalProductos.hide();
          });

        } else {
          divAvisoProducto.style.display = "block";
          divAvisoProducto.innerHTML = "<p>" + data + "</p>";
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
            editarproductoaux.innerHTML = `<tr>
            <td>${datos.get("Id_producto")}</td>
            <td>${datos.get("Tipo")}</td>
            <td><img src="/view/store/img/productos/Catalogo-${datos.get("Id_producto")}.png " width="50" height="60"></td>
            <td>${datos.get("Producto")}</td>
            <td>${datos.get("Descripcion")}</td>
            <td>${datos.get("Precio")}</td>
            <td>${datos.get("Stock")}</td>
            <td class="text-center"><a class="btnEditarProducto btn btn-primary" id="editar_producto">Editar</a><a class="btnBorrarProducto btn btn-danger" id="borrar_producto">Borrar</a></td>
            </tr>`;
            modalProductos.hide();
            //location.reload();
          });
        } else {
          alertify.alert(data);
        }
      });

  }
});


//Procedimiento para la imagen
button.onclick = () => {
  imagen.click();
}
imagen.addEventListener("change", function () {
  file = this.files[0];
  mostrarimagen();
});

function mostrarimagen() {

  let fileType = file.type;
  let validador = ["image/jpeg", "image/jpg", "image/png"];
  if (validador.includes(fileType)) {

    let fileReader = new FileReader();
    fileReader.onload = () => {
      let fileURL = fileReader.result;
      let imgTag = `<img src="${fileURL}"  class="img-thumbnail mx-auto d-block" alt="Responsive image" width="50%" height="60%">`;
      productoimg.innerHTML = imgTag;
    }
    fileReader.readAsDataURL(file);
  } else {
    alert("usa una imagen de tipo jpg, png y jpeg!");
    imagen.value = "";
  }
}