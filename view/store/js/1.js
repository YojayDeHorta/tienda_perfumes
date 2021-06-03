
/*-------------------VENTANA MODAL---------------------------*/
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
$(".tab-list").on("click", ".tab", function(event) {
	event.preventDefault();

  $(".tab").removeClass("active");
	$(".tab-content").removeClass("show");

	$(this).addClass("active");
	$($(this).attr('href')).addClass("show");	
});

/*--------------TABS----------------*/

/*--------------TABS----------------*/

$(".tab-list").on("click", ".tab", function(event) {
	event.preventDefault();

  $(".tab").removeClass("active");
	$(".tab-content").removeClass("show");

	$(this).addClass("active");
	$($(this).attr('href')).addClass("show");	
});





/*--------------TABS----------------*/