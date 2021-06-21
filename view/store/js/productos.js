/**----------------IMPRIMIR PRODUCTOS-------------------- */
var xhr = new XMLHttpRequest();
xhr.open("GET", "/../../controller/ACTIONS/act_read-Productos.php", true);
xhr.onload = function () {
  if (xhr.status == 200) {
    let datos = JSON.parse(xhr.responseText);
    //console.log(datos);
    let hombres = document.querySelector("#Productos-Caballeros");
    let damas = document.querySelector("#Productos-Damas");
    hombres.innerHTML = "";
    damas.innerHTML = "";
    let conthombres = 0;
    let contmujeres = 0;

    for (let item of datos) {
      if (item.tipo == "M" && conthombres < 6) {
        hombres.innerHTML += `
          <div class="Producto" >
            <h1 class="Titulo" >${item.nombre_producto}</h1>
            <img class="Img-Producto"  src="img/Catalogo-${item.id_producto}.png">
            <h4 class="Precio" id="precioProducto${item.id_producto}" value="${item.precio_producto}">$ ${item.precio_producto} USD</h4>
            <p class="Descripcion" ">
            ${item.descripcion}
            </p>
            <button class="Compra" id="botonCompra" value="${item.id_producto}">
              AGREGAR AL CARRITO
            </button>
          </div>`;
        conthombres++;
      }
      if (item.tipo == "F" && contmujeres < 6) {
        damas.innerHTML += `
        
          <div class="Producto" >
          
            <h1 class="Titulo" >${item.nombre_producto}</h1>
            <img class="Img-Producto"  src="img/Catalogo-${item.id_producto}.png">
            <h4 class="Precio" id="precioProducto${item.id_producto}" value="${item.precio_producto}">$ ${item.precio_producto} USD</h4>
            <p class="Descripcion" ">
            ${item.descripcion}
            </p>
            <button class="Compra"  id="botonCompra" value="${item.id_producto}" >
              AGREGAR AL CARRITO
            </button>
          </div>
        `;

        contmujeres++;
      }
    }
  } else {
    console.log("existe un error de tipo: " + xhr.status);
  }
};
xhr.send();


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

    console.log(clienteid);
    console.log(formData);
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
