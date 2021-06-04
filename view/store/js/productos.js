var xhr = new XMLHttpRequest();
xhr.open("GET", "/../../controller/ACTIONS/act_read-Productos.php", true);
xhr.onload = function () {
  if (xhr.status == 200) {
    let datos = JSON.parse(xhr.responseText);
    //console.log(datos);
    let hombres = document.querySelector("#Perfumes-Hombres");
    let damas = document.querySelector("#Perfumes-Damas");
    hombres.innerHTML = "";
    damas.innerHTML = "";
    let conthombres = 0;
    let contmujeres = 0;
    for (let item of datos) {
      if (item[0].tipo == "M" && conthombres < 3) {
        hombres.innerHTML += `
          <td class="Producto" " width="100%">
                <h1 class="Titulo" ">${item[0].nombre_producto}</h1>
                <img class="Img-Producto"  src="img/Catalogo-${item[0].id_producto}.png">
                <h1 class="Precio">$ ${item[0].precio_producto} USD</h1>
                <p class="Descripcion" >
                ${item[0].descripcion}
                </p>
                <button class="Compra" >
                  <h3 class="Content-Compra" ">AGREGAR AL CARRITO</h3>
                </button>
          </td>`;
        conthombres++;
      }
      if (item[0].tipo == "F" && contmujeres < 3) {
        console.log(conthombres);
        damas.innerHTML += `
        <td class="Producto"  width="100%">
              <h1 class="Titulo" ">${item[0].nombre_producto}</h1>
              <img class="Img-Producto"  src="img/Catalogo-${item[0].id_producto}.png">
              <h1 class="Precio">$ ${item[0].precio_producto} USD</h1>
              <p class="Descripcion" >
              ${item[0].descripcion}
              </p>
              <button class="Compra" >
                <h3 class="Content-Compra" >AGREGAR AL CARRITO</h3>
              </button>
        </td>`;
        contmujeres++;
      }
    }
  } else {
    console.log("existe un error de tipo: " + xhr.status);
  }
};
xhr.send();
