const contenedorCompras = document.getElementById("Compras");
const Precio_Subtotal = document.getElementById("Precio_Subtotal");
const Valor_Envio = 10;
const Precio_Envio = document.getElementById("Precio_Envio");
const Precio_Total = document.getElementById("Precio_Total");
const Cupon_id = document.getElementById("Cupon_Envio");

var formularioCupon = document.getElementById("formularioCupon");
let auxCantidad = 0;
let resultados = "";
let cantidadcompra = [];
let sumaArticulos = 0;
let cupon_valor = 0;
const mostrar = (articulos) => {
  productosArticulo = articulos[1];
  comprasArticulo = articulos[0];
  //resultados += `<div class="Flex_Compras" ><h3>cupon</h3></div>  `;
  comprasArticulo.forEach((compras) => {
    cantidadcompra[compras.id_producto] = compras.cantidad_compra;
  });
  productosArticulo.forEach((articulo) => {
    sumaArticulos += articulo.precio_producto * cantidadcompra[articulo.id_producto];
    let cantidad = cantidadcompra[articulo.id_producto];
    resultados += `
    <div class="Flex_Compras" id="Producto_${articulo.id_producto}">
        <h3>${articulo.nombre_producto}</h3>
        <img src="img/Catalogo-${articulo.id_producto}.png" class="Img_Producto" id="Img_Compra_1">
        <form name="Cantidad_Producto" action="" method="" id="Cantidad_Producto">
            <h4>Cantidad</h4>
            <input type="number" name="Cantidad" min="1" max="${articulo.stock_disponible}" 
            step="1" required="required" value="${cantidad}" class="Input_Cantidad" id="Input_Cantidad_${articulo.id_producto}"  onclick="SumarYAgregar(${articulo.precio_producto},${articulo.id_producto})" >
        </form>
        <i class="fas fa-heart" id="Icon_Compras"></i>
        <i class="far fa-trash-alt" id="Icon_Compras" onclick='Eliminar_Compra(${articulo.id_producto})'></i>
        <br> <br>
        <h2 class="Sub_Total" id="Sub_Total_${articulo.id_producto}">SUB TOTAL <br> ${articulo.precio_producto * cantidad} USD</h2>
    </div>               `;
  });
  //        //<h2 class="Sub_Total" ">PRECIO INICIAL: <br> ${articulo[0].precio_producto} USD</h2>
  contenedorCompras.innerHTML = resultados;
  ActualizarTotal(sumaArticulos);

};


//Procedimiento Mostrar
fetch("/../../controller/ACTIONS/act_read-Compras.php?id_cliente=" + clienteid)
  .then((response) => response.json())
  .then((data) => mostrar(data))
  .catch((error) => console.log(error));

function SumarYAgregar(Precio, id_producto) {
  const Cantidad = document.getElementById("Input_Cantidad_" + id_producto);
  const Sub_Total = document.getElementById("Sub_Total_" + id_producto);
  let cantidadAnterior = cantidadcompra[id_producto];
  let cantidadNueva = Cantidad.value;
  let diferencia = cantidadNueva - cantidadAnterior;
  formData = new FormData();
  formData.append("id_cliente", clienteid);
  formData.append("id_producto", id_producto);
  formData.append("cantidad", cantidadNueva);
  if (cantidadAnterior == cantidadNueva) {
    return 0;
  } else {

    ActualizarTotal(sumaArticulos + (Precio * diferencia));
    Sub_Total.innerHTML = `SUB TOTAL <br> ${Precio * cantidadNueva} USD`;
    cantidadcompra[id_producto] = cantidadNueva;
    sumaArticulos = sumaArticulos + (Precio * diferencia);
    fetch("../../../controller/ACTIONS/act_edit-Compras.php", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }


}

function ActualizarTotal(sumaArticulos) {
  total = (sumaArticulos + Valor_Envio);
  descuento = 0;
  descuento = total * (cupon_valor / 100)
  Precio_Subtotal.innerHTML = `<p>Subtotal Todo:</p>$ ${sumaArticulos} USD`;
  Precio_Envio.innerHTML = `<p>Envío</p>$ ${Valor_Envio} USD`;
  Cupon_id.innerHTML = `<p><p>cupon</p>$ ${cupon_valor} %`;
  Precio_Total.innerHTML = `<p>Total</p>$ ${~~(total - descuento)} USD`;
}
function Eliminar_Compra(id_producto) {
  if (confirm('estas seguro que quieres eliminar ese elemento de la lista?')) {
    formData = new FormData();
    formData.append("id_cliente", clienteid);
    formData.append("id_producto", id_producto);
    fetch("../../../controller/ACTIONS/act_delete-Compras.php", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        location.reload();
      });

  } else {
    // Do nothing!
  }
}

//cupones
formularioCupon.addEventListener("submit", function (e) {
  e.preventDefault();
  var datos = new FormData(formularioCupon);
  //console.log(datos.get("Contraseña"));
  console.log("hola");
  fetch("../../../controller/ACTIONS/act_read-Cupones.php", {
    method: "POST",
    body: datos,
  })
    .then((respuesta) => respuesta.json())
    .then((data) => {


      if (typeof data === 'object' && data !== null) {
        cupon_valor = data.valor_cupon;
        ActualizarTotal(sumaArticulos);
        alert("cupon agregado exitosamente");
      } else {
        alert(data);
      }
    });
});