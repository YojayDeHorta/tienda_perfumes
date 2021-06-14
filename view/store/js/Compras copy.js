var Precio = [290, 250, 240, 100, 150, 240, 110, 410, 210, 370];

var Precio_Producto = [] ; 

let A_Producto = 0;  let Valor_Final = 0 ; 

function Agregar_Producto() {
    A_Producto += 1 ; Numero ="Producto_"+A_Producto.toString();
    if (A_Producto <= 5) {
        Element_1 = document.createElement('div'); Element_1.className = "Flex_Compras"; Element_1.id =Numero;
        Element_1.innerHTML = `<h3>Perfume Dolce Gabbana Dolce Mujer 75 ml EDP</h3>
        <img src="img/Catalogo-${A_Producto}.png" class="Img_Producto" id="Img_Compra_1">
        <form name="Cantidad_Producto" action="" method="" id="Cantidad_Producto">
          <h4>Cantidad</h4>
          <input type="number" name="Cantidad" min="1" max="10" step="1" required="required" placeholder="1" class="Input_Cantidad" id="Input_Cantidad_${A_Producto}" onclick='Valor_Total(this,"Sub_Total_${A_Producto}")'>
        </form>
        <i class="far fa-smile-beam" id="Icon_Compras"></i>
        <i class="far fa-trash-alt" id="Icon_Compras" onclick='Eliminar_Elemento(this)'></i>
        <br> <br>
        <h2 class="Sub_Total" id="Sub_Total_${A_Producto}">SUB TOTAL <br> ${Precio[A_Producto-1]} USD</h2>`
        document.getElementById("Compras").appendChild(Element_1);
    } else {
        alert("Productos Agotados")
    }
}


Element_2 = document.createElement('div');
Element_2.className="Compra_Total_Carrito";

Element_2.innerHTML =`
      <h1>RESUMEN DEL PEDIDO</h1>
      <br> 
      <h4 class="Total_Producto" id="Precio_Final"><p>Subtotal</p>$ 0 USD</h4>
      <h4 class="Total_Producto" id="Precio_Envio"><p>Envío</p>$ 10 USD</h4>
      <h4 class="Total_Producto" id="Precio"><p>Total</p>$ 10 USD</h4>
    <button class="Comprar_Buttom">COMPRAR</button>`;

document.getElementById("Factura_Compra").appendChild(Element_2);

function Eliminar_Elemento(Articulo) {
    Padre = Articulo.parentNode;
    Padre.remove();
    Factura_Final();
}

/*----------------------------------------------------------------------------------------------------------------------*/

function Valor_Total(Cantidad, SubPrecio) {

    Padre_2 = Cantidad.parentNode; Padre_1 = Padre_2.parentNode; Nombre_Padre = Padre_1.id;
    let Numero_Producto = Nombre_Padre.split('_', )[1];
    let Valor = parseInt(Precio[Numero_Producto - 1]) * parseInt(Cantidad.value);
    
    Nuevo_h2 = document.createElement("h2")
    id_h2 = "Sub_Total_"+Numero_Producto.toString();
    Nuevo_h2.className = "Sub_Total"; Nuevo_h2.id=id_h2;
    Nuevo_h2.innerHTML = `SUB TOTAL <br> ${Valor} USD `;
    Actual_h2 = document.getElementById(SubPrecio);
    Actual = Actual_h2.parentNode;
    Actual.replaceChild(Nuevo_h2, Actual_h2);

   Factura_Final();
}

/*-------------------------------------------------------------*/
function Factura_Final(){

 let Perfumes = document.querySelectorAll('.Sub_Total')
 for (let i=0 ; i<Perfumes.length;i++){
    Texto = Perfumes[i].textContent;
    Texto = Texto.split(" ",4)[3];
    Valor_Final = Valor_Final + parseInt(Texto);
    Nuevo_h4 = document.createElement("h4");
    Actual_h4 = document.getElementById("Precio_Final");
    Actual = Actual_h4.parentNode;
    Nuevo_h4.className="Total_Producto"; Nuevo_h4.id="Precio_Final";
    Nuevo_h4.innerHTML = `<p>Subtotal</p> ${Valor_Final} USD`
    Actual.replaceChild(Nuevo_h4, Actual_h4);
 }

  Precio_Final = Valor_Final + 10 ;
  
  Actual_Final = document.getElementById("Precio");
  
  Nuevo_Final = document.createElement("h4");

 Nuevo_Final.className="Total_Producto"; Nuevo_Final.id="Precio";

 Nuevo_Final.innerHTML = `<p>Total</p> ${Precio_Final} USD`;

  Actual = Actual_Final.parentNode;
  Actual.replaceChild(Nuevo_Final, Actual_Final);
  
    if(Perfumes.length===0){
        Nuevo_h4 = document.createElement("h4");
        /*<h4 class="Total_Producto" id="Precio_Final"><p>Subtotal</p>$ 0 USD</h4>*/
        Nuevo_h4.className = "Total_Producto"; Nuevo_h4.id='Precio_Final';
        Nuevo_h4.innerHTML = `<p>Subtotal</p>$ 0 USD`;
        Actual_h4 = document.getElementById('Precio_Final');
        Actual = Actual_h4.parentNode;
        Actual.replaceChild(Nuevo_h4, Actual_h4);
    } 



 Valor_Final = 0;
 Precio_Final = 0 ;
}