

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
  document.getElementById('Pestaña_3').style.display = "none";
  document.getElementById('Pestaña_4').style.display = "none";
}
if(tabs=='Pestaña_2'){
  document.getElementById('Pestaña_1').style.display = "none";
  document.getElementById('Pestaña_3').style.display = "none";
  document.getElementById('Pestaña_4').style.display = "none";
}
if(tabs=='Pestaña_3'){
  document.getElementById('Pestaña_1').style.display = "none";
  document.getElementById('Pestaña_2').style.display = "none";
  document.getElementById('Pestaña_4').style.display = "none";
}
if(tabs=='Pestaña_4'){
  document.getElementById('Pestaña_1').style.display = "none";
  document.getElementById('Pestaña_2').style.display = "none";
  document.getElementById('Pestaña_3').style.display = "none";
}



//console.log('Prueba', tabs_bottom);*/


/*-------------------------- */