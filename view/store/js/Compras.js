const contenedorCompras = document.getElementById("Compras");
const Precio_Subtotal = document.getElementById("Precio_Subtotal");
const Valor_Envio=10;
const Precio_Envio = document.getElementById("Precio_Envio");
const Precio_Total = document.getElementById("Precio_Total");

let auxCantidad=0;
let resultados = "";
let cantidadcompra = [];
let sumaArticulos=0;
const mostrar = (articulos) => {
  productosArticulo = articulos[1];
  comprasArticulo = articulos[0];
  comprasArticulo.forEach((compras) => {
    //cantidadcompra.push(compras[0].cantidad_compra);
    cantidadcompra[compras[0].id_producto] = compras[0].cantidad_compra;
    //console.log(compras[0].cantidad_compra);
  });
  console.table(cantidadcompra);
  productosArticulo.forEach((articulo) => {
    sumaArticulos+=articulo[0].precio_producto*cantidadcompra[articulo[0].id_producto];
    let cantidad =cantidadcompra[articulo[0].id_producto];
    console.log(sumaArticulos);
    resultados += `
    <div class="Flex_Compras" id="Producto_${articulo[0].id_producto}">
        <h3>${articulo[0].nombre_producto}</h3>
        <img src="img/Catalogo-${articulo[0].id_producto}.png" class="Img_Producto" id="Img_Compra_1">
        <form name="Cantidad_Producto" action="" method="" id="Cantidad_Producto">
            <h4>Cantidad</h4>
            <input type="number" name="Cantidad" min="1" max="${articulo[0].stock_disponible}" 
            step="1" required="required" value="${cantidad}" class="Input_Cantidad" id="Input_Cantidad_${articulo[0].id_producto}"  onclick="SumarYAgregar(${articulo[0].precio_producto},${articulo[0].id_producto})" >
        </form>
        <i class="fas fa-heart" id="Icon_Compras"></i>
        <i class="far fa-trash-alt" id="Icon_Compras" onclick='Eliminar_Compra(${articulo[0].id_producto})'></i>
        <br> <br>
        <h2 class="Sub_Total" id="Sub_Total_${articulo[0].id_producto}">SUB TOTAL <br> ${articulo[0].precio_producto*cantidad} USD</h2>
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

function SumarYAgregar( Precio,id_producto){
  const Cantidad = document.getElementById("Input_Cantidad_"+id_producto);
  const Sub_Total = document.getElementById("Sub_Total_"+id_producto);
  let cantidadAnterior= cantidadcompra[id_producto];
  let cantidadNueva= Cantidad.value;
  let diferencia=cantidadNueva-cantidadAnterior ;
  formData = new FormData();
  formData.append("id_cliente", clienteid);
  formData.append("id_producto", id_producto);
  formData.append("cantidad", cantidadNueva);
   if(cantidadAnterior==cantidadNueva){
    console.log("es igual");

  }else{
    console.log("es mayor");
    console.log(diferencia);
    ActualizarTotal(sumaArticulos+(Precio*diferencia));
    Sub_Total.innerHTML= `SUB TOTAL <br> ${Precio*cantidadNueva} USD`;
    cantidadcompra[id_producto]=cantidadNueva;
    sumaArticulos=sumaArticulos+(Precio*diferencia);
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

function ActualizarTotal(sumaArticulos){
  total=sumaArticulos+Valor_Envio;
  Precio_Subtotal.innerHTML= `<p>Subtotal Todo:</p>$ ${sumaArticulos} USD`;
  Precio_Envio.innerHTML= `<p>Envío</p>$ ${Valor_Envio} USD`;
  Precio_Total.innerHTML= `<p>Total</p>$ ${(total)} USD`;
}
function Eliminar_Compra(id_producto){
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