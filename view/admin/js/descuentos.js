const formdescuento = document.getElementById("formulario-descuento");
const id_descuento = document.getElementById("id_descuento");
const nombre_descuento = document.getElementById("nombre_descuento");
const valor_descuento = document.getElementById("valor_descuento");
const usos_descuento = document.getElementById("usos_descuento");
const contenedordescuentos = document.getElementById("contenedor-descuentos");
let resultadosdescuento = "";
const mostrardescuentos = (articulos) => {
    console.table(articulos);
    productosArticulo = articulos[1];
    descuentosArticulo = articulos[0];
    descuentosArticulo.forEach((articulo) => {
        resultadosdescuento += `<tr>
          <td>${articulo.id_descuento}</td>
          <td id="${articulo.id_producto}">${productosArticulo[articulo.id_producto]}</td>
          <td>${articulo.valor_descuento}</td>
          <td>${articulo.usos_descuento}</td>
          <td class="text-center"><a class="btnEditarProducto btn btn-primary" id="editar_descuentos">Editar</a><a class="btnBorrarProducto btn btn-danger" id="borrar_descuentos">Borrar</a></td>
          </tr>
                    `;
    });
    contenedordescuentos.innerHTML = resultadosdescuento;
};

//Procedimiento Mostrarproductos
fetch("/../../controller/ACTIONS/act_read-descuentos.php")
    .then((response) => response.json())
    .then((data) => mostrardescuentos(data))
    .catch((error) => console.log(error));

on(document, "click", "#borrar_descuentos", (e) => {
    const fila = e.target.parentNode.parentNode;
    const id = fila.firstElementChild.innerHTML;
    alertify.confirm("esta seguro que quiere borrar?", function () {
        fetch("/../../controller/ACTIONS/act_delete-Descuentos.php?id=" + id)
            .then((res) => res.json())
            .then((salida) => {
                alertify.alert(salida, function () {
                    fila.innerHTML = "";
                    //location.reload();
                });
            });
    });
});