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
            <h4 class="Precio">$ ${item[0].precio_producto} USD</h4>
            <p class="Descripcion" ">
            ${item[0].descripcion}
            </p>
            <button class="Compra" id="Compra_${item[0].id_producto}">
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
            <h4 class="Precio">$ ${item[0].precio_producto} USD</h4>
            <p class="Descripcion" ">
            ${item[0].descripcion}
            </p>
            <button class="Compra" id="Compra_${item[0].id_producto}">
              AGREGAR AL CARRITO
            </button>
          </div>`;
        contmujeres++;
      }
    }
  } else {
    console.log("existe un error de tipo: " + xhr.status);
  }
};
xhr.send();
