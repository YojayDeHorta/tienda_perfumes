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
let Numero_Articulo = 0;
const mostrar = (articulos) => {

    productosArticulo = articulos[1];
    comprasArticulo = articulos[0];
    descuentoArticulo = articulos[2];
    cantidadcompra = comprasArticulo;

    productosArticulo.forEach((articulo) => {
        Numero_Articulo += 1;
        let descuento = 0;
        resultados += `
    <div class="Flex_Compras" id='Compras_${Numero_Articulo}'>`
        if (typeof descuentoArticulo[articulo.id_producto] !== 'undefined') {
            resultados += `<div class="ribbon one"><span>${descuentoArticulo[articulo.id_producto]}%</span></div>`;
            descuento = Math.trunc(articulo.precio_producto * (descuentoArticulo[articulo.id_producto] / 100));

        }
        sumaArticulos += (articulo.precio_producto - descuento) * cantidadcompra[articulo.id_producto];
        let cantidad = cantidadcompra[articulo.id_producto];
        resultados += `
    
        <h3>${articulo.nombre_producto}</h3>
        <img src="img/productos/Catalogo-${articulo.id_producto}.png" class="Img_Producto" id="Img_Compra_1">
        <form name="Cantidad_Producto" action="" method="" id="Cantidad_Producto">
            <h4>Cantidad</h4>
            <input type="number" name="Cantidad" min="1" max="${articulo.stock_disponible}" 
            step="1" required="required" value="${cantidad}" class="Input_Cantidad" id="Input_Cantidad_${articulo.id_producto}"  onclick="SumarYAgregar(${(articulo.precio_producto - descuento)},${articulo.id_producto})" >
        </form>
        <i class="fas fa-heart" id="Icon_Compras"></i>
        <a id='seleccion' href="Compras.php#ventana"><i class="far fa-trash-alt" id="Icon_Compras" onclick='Alerta_Borrar(${articulo.id_producto},${Numero_Articulo})'></i></a>
        <br> <br>
        <h2 class="Sub_Total" id="Sub_Total_${articulo.id_producto}">SUB TOTAL <br> ${((articulo.precio_producto - descuento) * cantidad)} USD</h2>
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
        Sub_Total.innerHTML = `SUB TOTAL <br> ${(Precio * cantidadNueva)} USD`;
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
    cupon = 0;
    cupon = Math.trunc(total * (cupon_valor / 100));
    Precio_Subtotal.innerHTML = `<p>Subtotal</p>$ ${(sumaArticulos)} USD`;
    Precio_Envio.innerHTML = `<p>Envío</p>$ ${Valor_Envio} USD`;
    Cupon_id.innerHTML = `<p><p>Cupón</p>$ ${cupon_valor} %`;
    Precio_Total.innerHTML = `<p>Total</p>$ ${(total - cupon)} USD`;
}

function Eliminar_Compra(id_producto) {

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

}
//ventana modal
function Close() {
    $('.Ventana-Modal').removeClass('show');
    $('.Sub-Ventana_Modal').removeClass('show');
}





function Alerta_Borrar(id_producto, Producto_Seleccinado) {
        
    /*var top_modal = '-1000px';
    var cantidad_productos = document.getElementsByClassName('Flex_Compras').length;
    //var a = cantidad_productos[0]; var b = cantidad_productos[cantidad_productos.length-1]
    */
    $('.Ventana-Modal').addClass('show');
    $('.Sub-Ventana_Modal').addClass('show');
    
    var Contenedor_Alerta = document.getElementById('Alerta_Modal');
    var Contenedor_Principal = document.getElementById('ventana')

    Contenedor_Alerta.name="Alerta_Borrar_Producto";

    Contenedor_Alerta.innerHTML = `
    <i class="far fa-times-circle" id="close" onclick="Close()"></i>
    <h2 id='Mensaje'> ¿ESTÁS SEGURO QUE QUIERES ELIMINAR ESTE PRODUCTO?</h2>
    <button onclick='Eliminar_Compra(${id_producto})'> <h1>Aceptar</h1></button><button onclick='Close()'> <h1>Cancelar</h1></button>`

    /*
    console.log('id_producto ', id_producto)

    if(id_producto!==1){
     Contenedor_Principal.style.top = top_modal.toString()+'px';
     /*console.log(top_modal)*//*
    }/*else if(id_producto.toString()==='1'){
        Contenedor_Principal.style.top = top_modal;
    }*/

    

    
 /*   console.log('Numero_Producto',id_producto)
    if(id_producto.toString()=='1') {
       ventana.style.top = '260px';
    }if(id_producto.toString()!='1'){
        var top = 215 * id_producto ;
        top = top.toString()+'px'; 
        console.log(top)
        ventana.style.top = top;
    }
    top = "";*/
}



//cupones
formularioCupon.addEventListener("submit", function(e) {
    e.preventDefault();
    var datos = new FormData(formularioCupon);
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