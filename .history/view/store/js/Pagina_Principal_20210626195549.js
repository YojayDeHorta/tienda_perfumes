
/*-------------------VENTANA MODAL---------------------------*/
/* $(document).ready(function () {

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

});*/

//-------------------VENTANA MODAL--------------------------

//-----------------------------SLIDE---------------------------------------------

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



/*-------------------------- */
/*-------------------------- */
var tabs_bottom=null, tabs_contenido=null , tabs = null;

function Tabs_Principal(evt, Pestaña) {

  if (tabs_bottom!=null){
     tabs_bottom.style.border = 'none';
  }
  
  if (Pestaña===tabs){
    tabs_bottom.style = 'border-bottom:5px solid red'
  }



  



  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");

  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(Pestaña).style.display = "block";
  evt.currentTarget.className += " active";

  localStorage.setItem("Tabs", JSON.stringify(Pestaña));

}


var tabs = JSON.parse(localStorage.getItem("Tabs"));

tabs_bottom = document.getElementById(tabs.toLowerCase());

tabs_contenido = document.getElementById(tabs);

tabs_bottom.style = 'border-bottom:5px solid red'

tabs_contenido.style.display = 'block';
if(tabs=='Pestaña_1'){
  document.getElementById('Pestaña_2').style.display = "none";
}

/*-------------------------- */

/*--------------TABS----------------*/


