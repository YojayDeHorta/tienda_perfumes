const formCupon = document.getElementById("formulario-Cupon");
const id_cupon = document.getElementById("id_cupon");
const nombre_cupon = document.getElementById("nombre_cupon");
const valor_cupon = document.getElementById("valor_cupon");
const usos_cupon = document.getElementById("usos_cupon");
const contenedorCupones = document.getElementById("contenedor-cupones");
let resultadoscupon = "";
const mostrarcupones = (articulos) => {
    console.table(articulos);
    articulos.forEach((articulo) => {
        resultadoscupon += `<tr>
          <td>${articulo.id_cupon}</td>
          <td>${articulo.nombre_cupon}</td>
          <td>${articulo.valor_cupon}</td>
          <td>${articulo.usos_cupon}</td>
          <td class="text-center"><a class="btnEditarProducto btn btn-primary" id="editar_cupones">Editar</a><a class="btnBorrarProducto btn btn-danger" id="borrar_cupones">Borrar</a></td>
          </tr>
                    `;
    });
    contenedorCupones.innerHTML = resultadoscupon;
};

//Procedimiento Mostrarproductos
fetch("/../../controller/ACTIONS/act_read-Cupones-Admin.php")
    .then((response) => response.json())
    .then((data) => mostrarcupones(data))
    .catch((error) => console.log(error));
//Procedimiento Borrar

on(document, "click", "#borrar_cupones", (e) => {
    const fila = e.target.parentNode.parentNode;
    const id = fila.firstElementChild.innerHTML;
    alertify.confirm("esta seguro que quiere borrar?", function () {
        fetch("/../../controller/ACTIONS/act_delete-Cupones.php?id=" + id)
            .then((res) => res.json())
            .then((salida) => {
                alertify.alert(salida, function () {
                    fila.innerHTML = "";
                    //location.reload();
                });
            });
    });
});