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
      if (item[0].tipo == "M" && conthombres < 6) {
        hombres.innerHTML += `
          <div class="Producto" >
            <h1 class="Titulo" >${item[0].nombre_producto}</h1>
            <img class="Img-Producto"  src="img/Catalogo-${item[0].id_producto}.png">
            <h4 class="Precio" id="precioProducto${item[0].id_producto}" value="${item[0].precio_producto}">$ ${item[0].precio_producto} USD</h4>
            <p class="Descripcion" ">
            ${item[0].descripcion}
            </p>
            <button class="Compra" id="botonCompra" value="${item[0].id_producto}">
              AGREGAR AL CARRITO
            </button>
          </div>`;
        conthombres++;
      }
      if (item[0].tipo == "F" && contmujeres < 6) {
        console.log(conthombres);
        damas.innerHTML += `
        
          <div class="Producto" >
          
            <h1 class="Titulo" >${item[0].nombre_producto}</h1>
            <img class="Img-Producto"  src="img/Catalogo-${item[0].id_producto}.png">
            <h4 class="Precio" id="precioProducto${item[0].id_producto}" value="${item[0].precio_producto}">$ ${item[0].precio_producto} USD</h4>
            <p class="Descripcion" ">
            ${item[0].descripcion}
            </p>
            <button class="Compra"  id="botonCompra" value="${item[0].id_producto}" >
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

/*   <form class="formProducto">       <form>
type="submit

Procedimiento Borrar
const formArticulo = document.getElementById("formProducto");
formArticulo.addEventListener("submit", (e) => {
  e.preventDefault();
  alert(id);
});
*/
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
