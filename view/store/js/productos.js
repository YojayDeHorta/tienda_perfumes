/**----------------IMPRIMIR PRODUCTOS-------------------- */

let hombres = document.querySelector("#Productos-Caballeros");
let damas = document.querySelector("#Productos-Damas");

const mostrar = (articulos) => {
  let datosdescuento;
  let descuentosproductos = [];
  let conthombres = 0;
  let contmujeres = 0;
  datosdescuento = productosdescuento();
  datosdescuento.then(response => {
    response.forEach((variable) => {
      descuentosproductos[variable.id_producto] = variable.valor_descuento;
    });
    articulos.forEach((item) => {
      var producto = document.createElement("div");
      producto.setAttribute("class", "Producto");
      let descuento = 0;
      if (typeof descuentosproductos[item.id_producto] !== 'undefined') {
        producto.innerHTML += `<div class="ribbon one"><span>${descuentosproductos[item.id_producto]}%</span></div>`
        descuento = item.precio_producto * (descuentosproductos[item.id_producto] / 100);
      }
      producto.innerHTML += `
          <div class="contenedor_nombre">
            <h1 class="Titulo two" >${item.nombre_producto}</h1>
          </div >   
          <img class="Img-Producto"  src="img/productos/Catalogo-${item.id_producto}.png">
          <h4 class="Precio" id="precioProducto${item.id_producto}" value="${item.precio_producto}">$ ${Math.trunc(item.precio_producto - descuento)} USD</h4>
          <p class="Descripcion" ">${item.descripcion}</p> 
          <button class="Compra" id="botonCompra" value="${item.id_producto}">AGREGAR AL CARRITO </button>
        `;
      if (item.tipo == "M" && conthombres < 6) {
        hombres.appendChild(producto);
        conthombres++;
      }
      if (item.tipo == "F" && contmujeres < 6) {
        damas.appendChild(producto);
        contmujeres++;
      }
    });
  });
};
function productosdescuento() {
  return fetch("../../../controller/ACTIONS/act_read-Descuentos.php")
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
}




fetch("/../../controller/ACTIONS/act_read-Productos.php")
  .then((response) => response.json())
  .then((data) => mostrar(data))
  .catch((error) => console.log(error));

/**----------------FUNCION AGREGAR A CARRITO-------------------- */
const on = (element, event, selector, handler) => {
  element.addEventListener(event, (e) => {
    if (e.target.closest(selector)) {
      handler(e);
    }
  });
};

on(document, "click", "#botonCompra", (e) => {
  if (clienteid != 0) {
    const fila = e.target.parentNode.parentNode;
    const id = fila.firstElementChild.innerHTML;
    formData = new FormData();
    precio_especifico = document.getElementById(
      "precioProducto" + e.target.value
    );
    formData.append("id_cliente", clienteid);
    formData.append("id_producto", e.target.value);
    formData.append("precio", precio_especifico.getAttribute("value"));
    formData.append("cantidad", 1);
    fetch("../../../controller/ACTIONS/act_add-Compras.php", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data);
      });
  } else {
    alert("primero registrate o inicia sesion antes de comprar");
  }
});
