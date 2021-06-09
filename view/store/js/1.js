













/*
/*-------------------VENTANA MODAL---------------------------*/
/*
$(document).ready(function () {

  function showPopup(){
      $('.Ventana-Modal').addClass('show');
      $('.Sub-Ventana_Modal').addClass('show');
  }

  $("#close").click(function(){
      $('.Ventana-Modal').removeClass('show');
      $('.Sub-Ventana_Modal').removeClass('show');
  });

  $(".btn-abrir").click(showPopup);

  setTimeout(showPopup, 1000);

});

//-------------------VENTANA MODAL--------------------------
*/
//-----------------------------SLIDE---------------------------------------------
/*
const myslide = document.querySelectorAll(".myslide"),
  dot = document.querySelectorAll(".Dirrecion");
let counter = 1;
slidefun(counter);

let timer = setInterval(autoSlide, 3000);

function autoSlide() {
  counter += 1;
  slidefun(counter);
}

function plusSlides(n) {
  counter += n;
  slidefun(counter);
  resetTimer();
}

function currentSlide(n) {
  counter = n;
  slidefun(counter);
  resetTimer();
}

function resetTimer() {
  clearInterval(timer);
  timer = setInterval(autoSlide, 1000);
}

function slidefun(n) {
  let i;
  for (i = 0; i < myslide.length; i++) {
    myslide[i].style.display = "none";
  }
  for (i = 0; i < dot.length; i++) {
    dot[i].className = dot[i].className.replace(" active", "");
  }
  if (n > myslide.length) {
    counter = 1;
  }
  if (n < 1) {
    counter = myslide.length;
  }
  myslide[counter - 1].style.display = "block";
  dot[counter - 1].className += " active";
}

//-----------------------------SLIDE---------------------------------------------



/*--------------TABS----------------*/
/*
$(".tab-list").on("click", ".tab", function(event) {
	event.preventDefault();

  $(".tab").removeClass("active");
	$(".tab-content").removeClass("show");

	$(this).addClass("active");
	$($(this).attr('href')).addClass("show");	
});

/*--------------TABS----------------*/

/*--------------TABS-Admin----------------*/
/*
function Tabs_Principal(evt, Tabs) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(Tabs).style.display = "block";
  evt.currentTarget.className += " active";
}

/*--------------TABS----------------*/


/*-----------------------------SECCION CARRITO DE COMPRAS---------------------------------------*/

/*--------------------------------Eliminar y Agregar--------------------------------------------------------------------------------------*/



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
      <h3 class="Total_Producto" id="Precio_Final">Subtotal :  $ 0 USD</h3>
      <h4 class="Total_Envio" id="Precio_Envio">Envío :  $ 10 USD</h4>
    <button class="Comprar_Buttom">COMPRAR</button>`;

document.getElementById("Factura_Compra").appendChild(Element_2);

console.log(A_Producto);

function Eliminar_Elemento(Articulo) {
    Padre = Articulo.parentNode;
    Padre.remove();
}

/*----------------------------------------------------------------------------------------------------------------------*/




/*--------------------------------------*/




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
    console.log(Texto);
    
 }



}



/*
    Nuevo_h3 = document.createElement("h3");

    Nuevo_h3.className="Total_Producto"; Nuevo_h3.id="Precio_Final";

    Nuevo_h3.innerHTML = `Subtotal :  ${Valor_Final} USD`
    */
 






 
/*
Precio_Producto.push(Valor);

    
    Valor_Final =  Valor + Valor_Final ; 
    
    Nuevo_h3 = document.createElement("h3");
    
    Nuevo_h3.className="Total_Producto"; 

    Nuevo_h3.id="Precio_Final";
    
    Nuevo_h3.innerHTML = `Subtotal :  ${Valor_Final} USD`
    
    Actual_h3 = document.getElementById("Precio_Final")
     
    Actual = Actual_h3.parentNode;
   
    Actual.replaceChild(Nuevo_h3, Actual_h3);

   */



/*-------------------------------------------------------------*/






/*-----------------------------SECCION CARRITO DE COMPRAS---------------------------------------*/

