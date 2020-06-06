
var slides;

var slideIndex = 1;
var aux;
var clss="mySlides";
var clss2= "slideP1";
var clss3= "mySlides3";
var panel;
var next;
var prev;
//alert(location.hash);
location.hash="";
showSlides(slideIndex, clss);	

//Botón de menú desplegable
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
     panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}


// Controles siguiente y anterior
function plusSlides(n, styl) {
  showSlides(slideIndex += n, styl);
}

// Thumbnail image controls
/*function currentSlide(n) {
  showSlides(slideIndex = n);
}
*/
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


//Funcion que esconde el carrusel principal
function esc(){
  //var img;
  var desc;
  var botonNx;
  var botonPre;
  var num;
  var j;
  var slde;
     // img = document.getElementById(ide);

      slde = document.getElementById("slideCont")
      desc = document.getElementsByClassName("description");
      botonNx =document.getElementsByClassName("next");
      botonPre =document.getElementsByClassName("prev");
      num =document.getElementsByClassName("numbertext");  
  //img.className +="hide";
      //img.style.display="none";
      slde.style.display="none";

  for (j = 0; j < botonNx.length; j++) {
      botonNx[j].style.display = "none";
      botonPre[j].style.display = "none";
      
  }
  for (j = 0; j < desc.length; j++) {
		desc[j].style.display = "none";
  }
  for (j = 0; j < num.length; j++) {
		num[j].style.display = "none";
  }
  
  //showInfo();
}

//Funcion que muestra el carrusel principal
function put(){
  var img;
  var desc;
  var botonNx;
  var botonPre;
  var num;
  var j;
  
  var slde;
  //showSlides(1, "mySlides");	
  //Primera imagen del carrusel principal
 // img = document.getElementById("img1");
 slideIndex=aux;  
  slde = document.getElementById("slideCont")
  desc = document.getElementsByClassName("description");
  botonNx =document.getElementsByClassName("next");
  botonPre =document.getElementsByClassName("prev");
  num =document.getElementsByClassName("numbertext");  
  //img.className +="show";
 // img.style.display="block";
  slde.style.display="block";


  for (j = 0; j < botonNx.length; j++) {
      botonNx[j].style.display = "block";
      botonPre[j].style.display = "block";
      
  }
  for (j = 0; j < desc.length; j++) {
    desc[j].style.display = "block";
  }
  for (j = 0; j < num.length; j++) {
    num[j].style.display = "block";
  }  
}

//Función que muestra el  carrusel y la información de cada proyecto
//function showInfo(id){
  function showInfo(id, content, btnNext, btnPrev, panelInf){
	var j;
  //var content2 =document.getElementsByClassName("slideshow-container2");
  var content2 = document.getElementById(id);

  //var slides2 = document.getElementsByClassName("mySlides2");//obtiene todos los elementos del carrusel con la misma clase
  //encabezado del proyecto
//  var info = document.getElementsByClassName("contentInfo");
  var info = document.getElementsByClassName(content);
  //botones del carrusel
  var nxt = document.getElementsByClassName(btnNext);
  var prv = document.getElementsByClassName(btnPrev);
  //Boton de retorno
  document.getElementById("btnBack").style.display="block";
//Texto del proyecto
  document.getElementById(panelInf).style.display="block";
  //content2.className += "show";
  //Se muestra el segundo carrusel correspondiente a cada proyecto
     content2.style.display="block"; 
     
 	for (j = 0; j < prv.length; j++) {
    	nxt[j].style.display = "block";
    	prv[j].style.display = "block";
    }
}

//Funcion que carga el carrusel de imágenes de cadaproyecto
function showSlides(n, clss) {
   
   slides = document.getElementsByClassName(clss);
  //var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  console.log("index: "+ slideIndex+ "clase: "+clss+" Slide "+ slides[slideIndex-1]);
  slides[slideIndex-1].style.display = "block";///Errror!!
}



//Flecha de retorno al  carrusel inicial
var btnHide=document.getElementById("btnBack");
btnHide.addEventListener("click", function() {
  var j;
  //var content2 =document.getElementById("slideCont2");
  var content2 = document.getElementsByClassName("slideshow-container2");
  //var next = document.getElementsByClassName(btnNext);
  //var prev = document.getElementsByClassName(btnPrev);

    put();
  btnHide.style.display="none";
 
//Se esconden los carruseles de cada proyecto
    for (j = 0; j < content2.length; j++) {
     // content2[j].style.display = "none";
      content2[j].style.display = "none";
    }

  for (j = 0; j < prev.length; j++) {
      next[j].style.display = "none";
      prev[j].style.display = "none";
    }
});
    
   
//Funciones del carrusel inicial
var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");
var img3 = document.getElementById("img3");
var img4 = document.getElementById("img4");
var img5 = document.getElementById("img5");
var img6 = document.getElementById("img6");
var img7 = document.getElementById("img7");
var img8 = document.getElementById("img8");
var img9 = document.getElementById("img9");
var img10 = document.getElementById("img10");
var img11 = document.getElementById("img11");
var img12 = document.getElementById("img12");
//var img13 = document.getElementById("img13");

var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");
var btn5 = document.getElementById("btn5");
var btn6 = document.getElementById("btn6");
var btn7 = document.getElementById("btn7");
var btn8 = document.getElementById("btn8");
var btn9 = document.getElementById("btn9");
var btn10 = document.getElementById("btn10");
var btn11 = document.getElementById("btn11");
var btn12 = document.getElementById("btn12");
//var btn13 = document.getElementById("btn13");


img1.addEventListener("click", function() {

  esc();
  //document.getElementById("slideCont").style.display="none";
  //showInfo("CarruselInfo1");
  showInfo("CarruselInfo1", "contentInfo1", "next1", "prev1", "panel1");
  //showSlides(slideIndex, "slideP1");
  aux=1;
  slideIndex=1;
  showSlides(slideIndex, "slideP1");
  next = document.getElementsByClassName("next1");
  prev = document.getElementsByClassName("prev1");


  });
btn1.addEventListener("click", function() {

  esc();
  //document.getElementById("slideCont").style.display="none";
  showInfo("CarruselInfo1", "contentInfo1", "next1", "prev1", "panel1");
  aux=1;
  slideIndex=1;
  showSlides(slideIndex, "slideP1");
  next = document.getElementsByClassName("next1");
  prev = document.getElementsByClassName("prev1");
  });


img2.addEventListener("click", function() {

  esc();
  //document.getElementById("slideCont").style.display="none";
  showInfo("CarruselInfo2", "contentInfo2", "next2", "prev2", "panel2");
  aux=2;
  slideIndex=1;
  showSlides(slideIndex, "slideP2");
  next = document.getElementsByClassName("next2");
  prev = document.getElementsByClassName("prev2");
  });
btn2.addEventListener("click", function() {

  esc();
  //document.getElementById("slideCont").style.display="none";
  showInfo("CarruselInfo2", "contentInfo2", "next2", "prev2", "panel2");
  aux=2;
  slideIndex=1;
  showSlides(slideIndex, "slideP2");
  next = document.getElementsByClassName("next2");
  prev = document.getElementsByClassName("prev2");
  });


img3.addEventListener("click", function() {

  esc();
  //document.getElementById("slideCont").style.display="none";
  showInfo("CarruselInfo3", "contentInfo3", "nextP3", "prevP3", "panel3");
  aux=3;
  slideIndex=1;
  showSlides(slideIndex, "slideP3");
  next = document.getElementsByClassName("nextP3");
  prev = document.getElementsByClassName("prevP3");
  });

btn3.addEventListener("click", function() {

  esc();
  //document.getElementById("slideCont").style.display="none";
  showInfo("CarruselInfo3", "contentInfo3", "nextP3", "prevP3", "panel3");
  aux=3;
  slideIndex=1;
  showSlides(slideIndex, "slideP3");
  next = document.getElementsByClassName("nextP3");
  prev = document.getElementsByClassName("prevP3");
  });


img4.addEventListener("click", function() {

  esc();
  //document.getElementById("slideCont").style.display="none";
  showInfo("CarruselInfo4", "contentInfo4", "nextP4", "prevP4", "panel4");
  aux =4;
  slideIndex=1;
  showSlides(slideIndex, "slideP4");
  next = document.getElementsByClassName("nextP4");
  prev = document.getElementsByClassName("prevP4");
  });

btn4.addEventListener("click", function() {

  esc();
  //document.getElementById("slideCont").style.display="none";
  showInfo("CarruselInfo4", "contentInfo4", "nextP4", "prevP4", "panel4");
  aux=4;
  slideIndex=1;
  showSlides(slideIndex, "slideP4");
  next = document.getElementsByClassName("nextP4");
  prev = document.getElementsByClassName("prevP4");
  });

img5.addEventListener("click", function() {

  esc();
  //document.getElementById("slideCont").style.display="none";
  showInfo("CarruselInfo5", "contentInfo5", "nextP5", "prevP5", "panel5");
  aux=5;
  slideIndex=1;
  showSlides(slideIndex, "slideP5");
  next = document.getElementsByClassName("nextP5");
  prev = document.getElementsByClassName("prevP5");
  });

btn5.addEventListener("click", function() {

  esc();
  //document.getElementById("slideCont").style.display="none";
  showInfo("CarruselInfo5", "contentInfo5", "nextP5", "prevP5", "panel5");
  aux=5;
  slideIndex=1;
  showSlides(slideIndex, "slideP5");
  next = document.getElementsByClassName("nextP5");
  prev = document.getElementsByClassName("prevP5");
  });


img6.addEventListener("click", function() {

  esc();
  //document.getElementById("slideCont").style.display="none";
  showInfo("CarruselInfo6", "contentInfo6", "nextP6", "prevP6", "panel6");
  aux=6;
  slideIndex=1;
  showSlides(slideIndex, "slideP6");
  next = document.getElementsByClassName("nextP6");
  prev = document.getElementsByClassName("prevP6");
  });

btn6.addEventListener("click", function() {

  esc();
  //document.getElementById("slideCont").style.display="none";
  showInfo("CarruselInfo6", "contentInfo6", "nextP6", "prevP6", "panel6");
  aux=6;
  slideIndex=1;
  showSlides(slideIndex, "slideP6");
  next = document.getElementsByClassName("nextP6");
  prev = document.getElementsByClassName("prevP6");
  });

img7.addEventListener("click", function() {

  esc();
  //document.getElementById("slideCont").style.display="none";
  showInfo("CarruselInfo7", "contentInfo7", "nextP7", "prevP7", "panel7");
  aux=7;
  slideIndex=1;
  showSlides(slideIndex, "slideP7");
  next = document.getElementsByClassName("nextP7");
  prev = document.getElementsByClassName("prevP7");
  });

btn7.addEventListener("click", function() {

  esc();
  //document.getElementById("slideCont").style.display="none";
  showInfo("CarruselInfo7", "contentInfo7", "nextP7", "prevP7", "panel7");
  aux=7;
  slideIndex=1;
  showSlides(slideIndex, "slideP7");
  next = document.getElementsByClassName("nextP7");
  prev = document.getElementsByClassName("prevP7");
  });

img8.addEventListener("click", function() {

  esc();
  //document.getElementById("slideCont").style.display="none";
  showInfo("CarruselInfo8", "contentInfo8", "nextP8", "prevP8", "panel8");
  aux=8;
  slideIndex=1;
  showSlides(slideIndex, "slideP8");
  next = document.getElementsByClassName("nextP8");
  prev = document.getElementsByClassName("prevP8");
  });

btn8.addEventListener("click", function() {

  esc();
  //document.getElementById("slideCont").style.display="none";
  showInfo("CarruselInfo8", "contentInfo8", "nextP8", "prevP8", "panel8");
  aux=8;
  slideIndex=1;
  showSlides(slideIndex, "slideP8");
  next = document.getElementsByClassName("nextP8");
  prev = document.getElementsByClassName("prevP8");
  });

img9.addEventListener("click", function() {

  esc();
  //document.getElementById("slideCont").style.display="none";
  showInfo("CarruselInfo9", "contentInfo9", "nextP9", "prevP9", "panel9");
  aux=9;
  slideIndex=1;
  showSlides(slideIndex, "slideP9");
  next = document.getElementsByClassName("nextP9");
  prev = document.getElementsByClassName("prevP9");
  });

btn9.addEventListener("click", function() {

  esc();
  //document.getElementById("slideCont").style.display="none";
  showInfo("CarruselInfo9", "contentInfo9", "nextP9", "prevP9", "panel9");
  aux=9;
  slideIndex=1;
  showSlides(slideIndex, "slideP9");
  next = document.getElementsByClassName("nextP9");
  prev = document.getElementsByClassName("prevP9");
  });

img10.addEventListener("click", function() {

  esc();
  //document.getElementById("slideCont").style.display="none";
  showInfo("CarruselInfo10", "contentInfo10", "nextP10", "prevP10", "panel10");
  aux=10;
  slideIndex=1;
  showSlides(slideIndex, "slideP10");
  next = document.getElementsByClassName("nextP10");
  prev = document.getElementsByClassName("prevP10");
  });

btn10.addEventListener("click", function() {

  esc();
  //document.getElementById("slideCont").style.display="none";
  showInfo("CarruselInfo10", "contentInfo10", "nextP10", "prevP10", "panel10");
  aux=10;
  slideIndex=1;
  showSlides(slideIndex, "slideP10");
  next = document.getElementsByClassName("nextP10");
  prev = document.getElementsByClassName("prevP10");
  });

img11.addEventListener("click", function() {

  esc();
  //document.getElementById("slideCont").style.display="none";
  showInfo("CarruselInfo11", "contentInfo11", "nextP11", "prevP11", "panel11");
  aux=11;
  slideIndex=1;
  showSlides(slideIndex, "slideP11");
  next = document.getElementsByClassName("nextP11");
  prev = document.getElementsByClassName("prevP11");
  });

btn11.addEventListener("click", function() {

  esc();
  //document.getElementById("slideCont").style.display="none";
  showInfo("CarruselInfo11", "contentInfo11", "nextP11", "prevP11", "panel11");
  aux=11;
  slideIndex=1;
  showSlides(slideIndex, "slideP11");
  next = document.getElementsByClassName("nextP11");
  prev = document.getElementsByClassName("prevP11");
  });

img12.addEventListener("click", function() {

  esc();
  //document.getElementById("slideCont").style.display="none";
  showInfo("CarruselInfo12", "contentInfo12", "nextP12", "prevP12", "panel12");
  aux=12;
  slideIndex=1;
  showSlides(slideIndex, "slideP12");
  next = document.getElementsByClassName("nextP12");
  prev = document.getElementsByClassName("prevP12");
  });

btn12.addEventListener("click", function() {

  esc();
  //document.getElementById("slideCont").style.display="none";
  showInfo("CarruselInfo12", "contentInfo12", "nextP12", "prevP12", "panel12");
  aux=12;
  slideIndex=1;
  showSlides(slideIndex, "slideP12");
  next = document.getElementsByClassName("nextP12");
  prev = document.getElementsByClassName("prevP12");
  });

var modImg1 = document.getElementById("modImgP2_1");///
var modImg2 = document.getElementById("modImgP2_2");//

var modImg3 = document.getElementById("modImgP1_1");
var modImg4 = document.getElementById("modImgP1_2");
var modImg5 = document.getElementById("modImgP1_3");
var modImg6 = document.getElementById("modImgP1_4");
var modImg7 = document.getElementById("modImgP1_5");

var modImg8 =  document.getElementById("modImgP3_1");
var modImg9 =  document.getElementById("modImgP3_2");
var modImg10 = document.getElementById("modImgP3_3");
var modImg11 = document.getElementById("modImgP3_4");
var modImg12 = document.getElementById("modImgP3_5");
var modImg13 = document.getElementById("modImgP3_6");

var modImg14 = document.getElementById("modImgP4_1");
var modImg15 = document.getElementById("modImgP4_2");

var modImgP5_1 = document.getElementById("modImgP5_1");
var modImgP5_2 = document.getElementById("modImgP5_2");
var modImgP5_3 = document.getElementById("modImgP5_3");
var modImgP5_4 = document.getElementById("modImgP5_4");
var modImgP5_5 = document.getElementById("modImgP5_5");
var modImgP5_6 = document.getElementById("modImgP5_6");
var modImgP5_7 = document.getElementById("modImgP5_7");
var modImgP5_8 = document.getElementById("modImgP5_8");
var modImgP5_9 = document.getElementById("modImgP5_9");
var modImgP5_10 = document.getElementById("modImgP5_10");
var modImgP5_11 = document.getElementById("modImgP5_11");
var modImgP5_12 = document.getElementById("modImgP5_12");

var modImgP6_1 = document.getElementById("modImgP6_1");
var modImgP6_2 = document.getElementById("modImgP6_2");
var modImgP6_3 = document.getElementById("modImgP6_3");
var modImgP6_4 = document.getElementById("modImgP6_4");
var modImgP6_5 = document.getElementById("modImgP6_5");
var modImgP6_6 = document.getElementById("modImgP6_6");
var modImgP6_7 = document.getElementById("modImgP6_7");
var modImgP6_8 = document.getElementById("modImgP6_8");
var modImgP6_9 = document.getElementById("modImgP6_9");
var modImgP6_10 = document.getElementById("modImgP6_10");
var modImgP6_11 = document.getElementById("modImgP6_11");
var modImgP6_12 = document.getElementById("modImgP6_12");
var modImgP7_1 = document.getElementById("modImgP7_1");
var modImgP7_2 = document.getElementById("modImgP7_2");
var modImgP7_3 = document.getElementById("modImgP7_3");
var modImgP7_4 = document.getElementById("modImgP7_4");
var modImgP7_5 = document.getElementById("modImgP7_5");
var modImgP7_6 = document.getElementById("modImgP7_6");
var modImgP7_7 = document.getElementById("modImgP7_7");
var modImgP7_8 = document.getElementById("modImgP7_8");
var modImgP7_9 = document.getElementById("modImgP7_9");
var modImgP7_10 = document.getElementById("modImgP7_10");
var modImgP7_11 = document.getElementById("modImgP7_11");
var modImgP7_12 = document.getElementById("modImgP7_12");
var modImgP8_1 = document.getElementById("modImgP8_1");
var modImgP8_2 = document.getElementById("modImgP8_2");
var modImgP8_3 = document.getElementById("modImgP8_3");
var modImgP8_4 = document.getElementById("modImgP8_4");
var modImgP8_5 = document.getElementById("modImgP8_5");
var modImgP8_6 = document.getElementById("modImgP8_6");
var modImgP8_7 = document.getElementById("modImgP8_7");
var modImgP8_8 = document.getElementById("modImgP8_8");
var modImgP8_9 = document.getElementById("modImgP8_9");
var modImgP8_10 = document.getElementById("modImgP8_10");
var modImgP9_1 = document.getElementById("modImgP9_1");
var modImgP9_2 = document.getElementById("modImgP9_2");
var modImgP9_3 = document.getElementById("modImgP9_3");
var modImgP9_4 = document.getElementById("modImgP9_4");
var modImgP9_5 = document.getElementById("modImgP9_5");
var modImgP9_6 = document.getElementById("modImgP9_6");
var modImgP9_7 = document.getElementById("modImgP9_7");
var modImgP10_1 = document.getElementById("modImgP10_1");
var modImgP10_2 = document.getElementById("modImgP10_2");
var modImgP10_3 = document.getElementById("modImgP10_3");
var modImgP10_4 = document.getElementById("modImgP10_4");
var modImgP10_5 = document.getElementById("modImgP10_5");
var modImgP10_6 = document.getElementById("modImgP10_6");
var modImgP10_7 = document.getElementById("modImgP10_7");
var modImgP10_8 = document.getElementById("modImgP10_8");
var modImgP10_9 = document.getElementById("modImgP10_9");
var modImgP10_10 = document.getElementById("modImgP10_10");
var modImgP10_11 = document.getElementById("modImgP10_11");
var modImgP10_12 = document.getElementById("modImgP10_12");
var modImgP10_13 = document.getElementById("modImgP10_13");
var modImgP10_14 = document.getElementById("modImgP10_14");
var modImgP10_15 = document.getElementById("modImgP10_15");
var modImgP11_1 = document.getElementById("modImgP11_1");
var modImgP11_2 = document.getElementById("modImgP11_2");
var modImgP12_1 = document.getElementById("modImgP12_1");
var modImgP12_2 = document.getElementById("modImgP12_2");
var modImgP12_3 = document.getElementById("modImgP12_3");
var modImgP12_4 = document.getElementById("modImgP12_4");
var modImgP12_5 = document.getElementById("modImgP12_5");
var modImgP12_6 = document.getElementById("modImgP12_6");
var modImgP12_7 = document.getElementById("modImgP12_7");
var modImgP12_8 = document.getElementById("modImgP12_8");
var modImgP12_9 = document.getElementById("modImgP12_9");
var modImgP12_10 = document.getElementById("modImgP12_10");
var modImgP12_11 = document.getElementById("modImgP12_11");
var modImgP12_12 = document.getElementById("modImgP12_12");
var modImgP12_13 = document.getElementById("modImgP12_13");
var modImgP12_14 = document.getElementById("modImgP12_14");
var modImgP12_15	 = document.getElementById("modImgP12_15");


/* >>>>>>>>>>>> Proyecto2 <<<<<<<<<< */
modImg1.addEventListener("click", function() {
var shslides;
//document.getElementById("slide")
shslides = document.getElementsByClassName("modalSlideP2");
console.log("imagen modal"+shslides[0]);
shslides[0].style.display="block";
//document.getElementById("galeria2_1").style.display="block";

  });

modImg2.addEventListener("click", function() {
var shslides;
shslides = document.getElementsByClassName("modalSlideP2");
shslides[1].style.display="block";
  });

/*>>>>>>>>>>>>>>> Proyecto 1 <<<<<<<<<<<<<<<<<*/
modImg3.addEventListener("click", function() {
var shslides;
shslides = document.getElementsByClassName("mySlides3");
shslides[0].style.display="block";
  });

modImg4.addEventListener("click", function() {
var shslides;
shslides = document.getElementsByClassName("mySlides3");
shslides[1].style.display="block";
  });

modImg5.addEventListener("click", function() {
var shslides;
shslides = document.getElementsByClassName("mySlides3");
shslides[2].style.display="block";
  });

modImg6.addEventListener("click", function() {
var shslides;
shslides = document.getElementsByClassName("mySlides3");
shslides[3].style.display="block";
  });

modImg7.addEventListener("click", function() {
var shslides;
shslides = document.getElementsByClassName("mySlides3");
shslides[4].style.display="block";
  });

/*Carrusel modal Proyecto 3  */

modImg8.addEventListener("click", function() {
var shslides;
shslides = document.getElementsByClassName("modalSlideP3");
shslides[0].style.display="block";
console.log("Modal Slide 2 "+shslides[0]);
  });

modImg9.addEventListener("click", function() {
var shslides;
shslides = document.getElementsByClassName("modalSlideP3");
shslides[1].style.display="block";
console.log("Modal Slide 2 "+shslides[2]);
  });

modImg10.addEventListener("click", function() {
var shslides;
shslides = document.getElementsByClassName("modalSlideP3");
shslides[2].style.display="block";
console.log("Modal Slide 0 "+shslides[0]);
  });

modImg11.addEventListener("click", function() {
var shslides;
shslides = document.getElementsByClassName("modalSlideP3");
shslides[3].style.display="block";
console.log("Modal Slide 1 "+shslides[1]);
  });

modImg12.addEventListener("click", function() {
var shslides;
shslides = document.getElementsByClassName("modalSlideP3");
shslides[4].style.display="block";
console.log("Modal Slide 2 "+shslides[2]);
  });

modImg13.addEventListener("click", function() {
var shslides;
shslides = document.getElementsByClassName("modalSlideP3");
shslides[5].style.display="block";
console.log("Modal Slide 3 "+shslides[3]);
  });

/* >>>>>>>>>>  Proyecto 4 <<<<<<<<<<*/
modImg14.addEventListener("click", function() {
var shslides;
shslides = document.getElementsByClassName("modalSlideP4");
shslides[0].style.display="block";
console.log("Modal Slide 0 P4 "+shslides[0]);
  });

modImg15.addEventListener("click", function() {
var shslides;
shslides = document.getElementsByClassName("modalSlideP4");
shslides[1].style.display="block";
console.log("Modal Slide 1 P4"+shslides[1]);
  });

modImgP5_1.addEventListener("click", function() {
var shslides;
shslides = document.getElementsByClassName("modalSlideP5");
shslides[0].style.display="block";
  });

modImgP5_2.addEventListener("click", function() {
var shslides;
shslides = document.getElementsByClassName("modalSlideP5");
shslides[1].style.display="block";
  });

modImgP5_3.addEventListener("click", function() {
var shslides;
shslides = document.getElementsByClassName("modalSlideP5");
shslides[2].style.display="block";
  });

modImgP5_4.addEventListener("click", function() {
var shslides;
shslides = document.getElementsByClassName("modalSlideP5");
shslides[3].style.display="block";
  });

modImgP5_5.addEventListener("click", function() {
var shslides;
shslides = document.getElementsByClassName("modalSlideP5");
shslides[4].style.display="block";
  });

modImgP5_6.addEventListener("click", function() {
var shslides;
shslides = document.getElementsByClassName("modalSlideP5");
shslides[5].style.display="block";
  });

modImgP5_7.addEventListener("click", function() {
var shslides;
shslides = document.getElementsByClassName("modalSlideP5");
shslides[6].style.display="block";
  });

modImgP5_8.addEventListener("click", function() {
var shslides;
shslides = document.getElementsByClassName("modalSlideP5");
shslides[7].style.display="block";
  });

modImgP5_9.addEventListener("click", function() {
var shslides;
shslides = document.getElementsByClassName("modalSlideP5");
shslides[8].style.display="block";
  });

modImgP5_10.addEventListener("click", function() {
var shslides;
shslides = document.getElementsByClassName("modalSlideP5");
shslides[9].style.display="block";
  });

modImgP5_11.addEventListener("click", function() {
var shslides;
shslides = document.getElementsByClassName("modalSlideP5");
shslides[10].style.display="block";
  });

modImgP5_12.addEventListener("click", function() {
var shslides;
shslides = document.getElementsByClassName("modalSlideP5");
shslides[11].style.display="block";
  });


modImgP6_1.addEventListener("click", function() {
var shslides;
shslides = document.getElementsByClassName("modalSlideP6");
shslides[0].style.display="block";
  });

modImgP6_2.addEventListener("click", function() {
var shslides;
shslides = document.getElementsByClassName("modalSlideP6");
shslides[1].style.display="block";
  });

modImgP6_3.addEventListener("click", function() {
var shslides;
shslides = document.getElementsByClassName("modalSlideP6");
shslides[2].style.display="block";
  });

modImgP6_4.addEventListener("click", function() {
var shslides;
shslides = document.getElementsByClassName("modalSlideP6");
shslides[3].style.display="block";
  });

modImgP6_5.addEventListener("click", function() {
var shslides;
shslides = document.getElementsByClassName("modalSlideP6");
shslides[4].style.display="block";
  });

modImgP6_6.addEventListener("click", function() {
var shslides;
shslides = document.getElementsByClassName("modalSlideP6");
shslides[5].style.display="block";
  });

modImgP6_7.addEventListener("click", function() {
var shslides;
shslides = document.getElementsByClassName("modalSlideP6");
shslides[6].style.display="block";
  });

modImgP6_8.addEventListener("click", function() {
var shslides;
shslides = document.getElementsByClassName("modalSlideP6");
shslides[7].style.display="block";
  });

modImgP6_9.addEventListener("click", function() {
var shslides;
shslides = document.getElementsByClassName("modalSlideP6");
shslides[8].style.display="block";
  });

modImgP6_10.addEventListener("click", function() {
var shslides;
shslides = document.getElementsByClassName("modalSlideP6");
shslides[9].style.display="block";
  });

modImgP6_11.addEventListener("click", function() {
var shslides;
shslides = document.getElementsByClassName("modalSlideP6");
shslides[10].style.display="block";
  });

modImgP6_12.addEventListener("click", function() {
var shslides;
shslides = document.getElementsByClassName("modalSlideP6");
shslides[11].style.display="block";
  });

// >>>>>>>>>>>   Proyecto 7   <<<<<<<<

modImgP7_1.addEventListener("click", function() {
var shslides;
shslides = document.getElementsByClassName("modalSlideP7");
shslides[0].style.display="block";
  });

modImgP7_2.addEventListener("click", function() {
var shslides;
shslides = document.getElementsByClassName("modalSlideP7");
shslides[1].style.display="block";
  });

modImgP7_3.addEventListener("click", function() {
var shslides;
shslides = document.getElementsByClassName("modalSlideP7");
shslides[2].style.display="block";
  });

modImgP7_4.addEventListener("click", function() {
var shslides;
shslides = document.getElementsByClassName("modalSlideP7");
shslides[3].style.display="block";
  });

modImgP7_5.addEventListener("click", function() {
var shslides;
shslides = document.getElementsByClassName("modalSlideP7");
shslides[4].style.display="block";
  });

modImgP7_6.addEventListener("click", function() {
var shslides;
shslides = document.getElementsByClassName("modalSlideP7");
shslides[5].style.display="block";
  });

modImgP7_7.addEventListener("click", function() {
var shslides;
shslides = document.getElementsByClassName("modalSlideP7");
shslides[6].style.display="block";
  });

modImgP7_8.addEventListener("click", function() {
var shslides;
shslides = document.getElementsByClassName("modalSlideP7");
shslides[7].style.display="block";
  });

modImgP7_9.addEventListener("click", function() {
var shslides;
shslides = document.getElementsByClassName("modalSlideP7");
shslides[8].style.display="block";
  });

modImgP7_10.addEventListener("click", function() {
var shslides;
shslides = document.getElementsByClassName("modalSlideP7");
shslides[9].style.display="block";
  });

modImgP7_11.addEventListener("click", function() {
var shslides;
shslides = document.getElementsByClassName("modalSlideP7");
shslides[10].style.display="block";
  });

modImgP7_12.addEventListener("click", function() {
var shslides;
shslides = document.getElementsByClassName("modalSlideP7");
shslides[11].style.display="block";
  });


// >>>>>>>>>>>> Proyecto 8 <<<<<<<<<<<<<<<
modImgP8_1.addEventListener("click", function() {
var shslides;
shslides = document.getElementsByClassName("modalSlideP8");
shslides[0].style.display="block";
  });
modImgP8_2.addEventListener("click", function() {
var shslides;
shslides = document.getElementsByClassName("modalSlideP8");
shslides[1].style.display="block";
  });
modImgP8_3.addEventListener("click", function() {
var shslides;
shslides = document.getElementsByClassName("modalSlideP8");
shslides[2].style.display="block";
  });
modImgP8_4.addEventListener("click", function() {
var shslides;
shslides = document.getElementsByClassName("modalSlideP8");
shslides[3].style.display="block";
  });
modImgP8_5.addEventListener("click", function() {
var shslides;
shslides = document.getElementsByClassName("modalSlideP8");
shslides[4].style.display="block";
  });
modImgP8_6.addEventListener("click", function() {
var shslides;
shslides = document.getElementsByClassName("modalSlideP8");
shslides[5].style.display="block";
  });
modImgP8_7.addEventListener("click", function() {
var shslides;
shslides = document.getElementsByClassName("modalSlideP8");
shslides[6].style.display="block";
  });
modImgP8_8.addEventListener("click", function() {
var shslides;
shslides = document.getElementsByClassName("modalSlideP8");
shslides[7].style.display="block";
  });
modImgP8_9.addEventListener("click", function() {
var shslides;
shslides = document.getElementsByClassName("modalSlideP8");
shslides[8].style.display="block";
  });
modImgP8_10.addEventListener("click", function() {
var shslides;
shslides = document.getElementsByClassName("modalSlideP8");
shslides[9].style.display="block";
  });


//>>>>>>>>>>>>> Proyecto 9 <<<<<<<<<<<<<<<

modImgP9_1.addEventListener("click", function() {
var shslides;
shslides = document.getElementsByClassName("modalSlideP9");
shslides[0].style.display="block";
  });

modImgP9_2.addEventListener("click", function() {
var shslides;
shslides = document.getElementsByClassName("modalSlideP9");
shslides[1].style.display="block";
  });

modImgP9_3.addEventListener("click", function() {
var shslides;
shslides = document.getElementsByClassName("modalSlideP9");
shslides[2].style.display="block";
  });

modImgP9_4.addEventListener("click", function() {
var shslides;
shslides = document.getElementsByClassName("modalSlideP9");
shslides[3].style.display="block";
  });

modImgP9_5.addEventListener("click", function() {
var shslides;
shslides = document.getElementsByClassName("modalSlideP9");
shslides[4].style.display="block";
  });

modImgP9_6.addEventListener("click", function() {
var shslides;
shslides = document.getElementsByClassName("modalSlideP9");
shslides[5].style.display="block";
  });

modImgP9_7.addEventListener("click", function() {
var shslides;
shslides = document.getElementsByClassName("modalSlideP9");
shslides[6].style.display="block";
  });

// >>>>>>>>>>>>>>>>>>> Proyecto 10 <<<<<<<<<<<<<<<<<<<<<<<<<<<

modImgP10_1.addEventListener("click", function() {
var shslides;
shslides = document.getElementsByClassName("modalSlideP10");
shslides[0].style.display="block";
  });
modImgP10_2.addEventListener("click", function() {
var shslides;
shslides = document.getElementsByClassName("modalSlideP10");
shslides[1].style.display="block";
  });
modImgP10_3.addEventListener("click", function() {
var shslides;
shslides = document.getElementsByClassName("modalSlideP10");
shslides[2].style.display="block";
  });
modImgP10_4.addEventListener("click", function() {
var shslides;
shslides = document.getElementsByClassName("modalSlideP10");
shslides[3].style.display="block";
  });
modImgP10_5.addEventListener("click", function() {
var shslides;
shslides = document.getElementsByClassName("modalSlideP10");
shslides[4].style.display="block";
  });
modImgP10_6.addEventListener("click", function() {
var shslides;
shslides = document.getElementsByClassName("modalSlideP10");
shslides[5].style.display="block";
  });
modImgP10_7.addEventListener("click", function() {
var shslides;
shslides = document.getElementsByClassName("modalSlideP10");
shslides[6].style.display="block";
  });
modImgP10_8.addEventListener("click", function() {
var shslides;
shslides = document.getElementsByClassName("modalSlideP10");
shslides[7].style.display="block";
  });
modImgP10_9.addEventListener("click", function() {
var shslides;
shslides = document.getElementsByClassName("modalSlideP10");
shslides[8].style.display="block";
  });
modImgP10_10.addEventListener("click", function() {
var shslides;
shslides = document.getElementsByClassName("modalSlideP10");
shslides[9].style.display="block";
  });
modImgP10_11.addEventListener("click", function() {
var shslides;
shslides = document.getElementsByClassName("modalSlideP10");
shslides[10].style.display="block";
  });
modImgP10_12.addEventListener("click", function() {
var shslides;
shslides = document.getElementsByClassName("modalSlideP10");
shslides[11].style.display="block";
  });
modImgP10_13.addEventListener("click", function() {
var shslides;
shslides = document.getElementsByClassName("modalSlideP10");
shslides[12].style.display="block";
  });
modImgP10_14.addEventListener("click", function() {
var shslides;
shslides = document.getElementsByClassName("modalSlideP10");
shslides[13].style.display="block";
  });
modImgP10_15.addEventListener("click", function() {
var shslides;
shslides = document.getElementsByClassName("modalSlideP10");
shslides[14].style.display="block";
  });


//>>>>>>>>>>>>>>>>>> Proyecto 11 <<<<<<<<<<<<<<<<<<
modImgP11_1.addEventListener("click", function() {
var shslides;
shslides = document.getElementsByClassName("modalSlideP11");
shslides[0].style.display="block";
  });
modImgP11_2.addEventListener("click", function() {
var shslides;
shslides = document.getElementsByClassName("modalSlideP11");
shslides[1].style.display="block";
  });



//>>>>>>>>>>>>>>>>>> Proyecto 12 <<<<<<<<<<<<<<<<<<

modImgP12_1.addEventListener("click", function() {
var shslides;
shslides = document.getElementsByClassName("modalSlideP12");
shslides[0].style.display="block";
  });

modImgP12_2.addEventListener("click", function() {
var shslides;
shslides = document.getElementsByClassName("modalSlideP12");
shslides[1].style.display="block";
  });

modImgP12_3.addEventListener("click", function() {
var shslides;
shslides = document.getElementsByClassName("modalSlideP12");
shslides[2].style.display="block";
  });

modImgP12_4.addEventListener("click", function() {
var shslides;
shslides = document.getElementsByClassName("modalSlideP12");
shslides[3].style.display="block";
  });

modImgP12_5.addEventListener("click", function() {
var shslides;
shslides = document.getElementsByClassName("modalSlideP12");
shslides[4].style.display="block";
  });

modImgP12_6.addEventListener("click", function() {
var shslides;
shslides = document.getElementsByClassName("modalSlideP12");
shslides[5].style.display="block";
  });

modImgP12_7.addEventListener("click", function() {
var shslides;
shslides = document.getElementsByClassName("modalSlideP12");
shslides[6].style.display="block";
  });

modImgP12_8.addEventListener("click", function() {
var shslides;
shslides = document.getElementsByClassName("modalSlideP12");
shslides[7].style.display="block";
  });

modImgP12_9.addEventListener("click", function() {
var shslides;
shslides = document.getElementsByClassName("modalSlideP12");
shslides[8].style.display="block";
  });

modImgP12_10.addEventListener("click", function() {
var shslides;
shslides = document.getElementsByClassName("modalSlideP12");
shslides[9].style.display="block";
  });

modImgP12_11.addEventListener("click", function() {
var shslides;
shslides = document.getElementsByClassName("modalSlideP12");
shslides[10].style.display="block";
  });

modImgP12_12.addEventListener("click", function() {
var shslides;
shslides = document.getElementsByClassName("modalSlideP12");
shslides[11].style.display="block";
  });

modImgP12_13.addEventListener("click", function() {
var shslides;
shslides = document.getElementsByClassName("modalSlideP12");
shslides[12].style.display="block";
  });

modImgP12_14.addEventListener("click", function() {
var shslides;
shslides = document.getElementsByClassName("modalSlideP12");
shslides[13].style.display="block";
  });

modImgP12_15.addEventListener("click", function() {
var shslides;
shslides = document.getElementsByClassName("modalSlideP12");
shslides[14].style.display="block";
  });




var extMod 

extMod = document.getElementById("ext");
extMod.addEventListener("click", function(){
var shslides;
shslides = document.getElementsByClassName("mySlides3");
    for (var k = 0; k < shslides.length; k++) {
      shslides[k].style.display="none";
    }
});


 extMod = document.getElementById("extP2");
extMod.addEventListener("click", function(){
var shslides;

  shslides = document.getElementsByClassName("modalSlideP2");
    for (var k = 0; k < shslides.length; k++) {
      shslides[k].style.display="none";
    }
});

 extMod = document.getElementById("extP3");
extMod.addEventListener("click", function(){
var shslides;

  shslides = document.getElementsByClassName("modalSlideP3");
    for (var k = 0; k < shslides.length; k++) {
      shslides[k].style.display="none";
    }
});

extMod = document.getElementById("extP4");
extMod.addEventListener("click", function(){
var shslides;

  shslides = document.getElementsByClassName("modalSlideP4");
    for (var k = 0; k < shslides.length; k++) {
      shslides[k].style.display="none";
    }
});

extMod = document.getElementById("extP5");
extMod.addEventListener("click", function(){
var shslides;

  shslides = document.getElementsByClassName("modalSlideP5");
    for (var k = 0; k < shslides.length; k++) {
      shslides[k].style.display="none";
    }
});

extMod = document.getElementById("extP6");
extMod.addEventListener("click", function(){
var shslides;

  shslides = document.getElementsByClassName("modalSlideP6");
    for (var k = 0; k < shslides.length; k++) {
      shslides[k].style.display="none";
    }
});

extMod = document.getElementById("extP7");
extMod.addEventListener("click", function(){
var shslides;

  shslides = document.getElementsByClassName("modalSlideP7");
    for (var k = 0; k < shslides.length; k++) {
      shslides[k].style.display="none";
    }
});

extMod = document.getElementById("extP8");
extMod.addEventListener("click", function(){
var shslides;

  shslides = document.getElementsByClassName("modalSlideP8");
    for (var k = 0; k < shslides.length; k++) {
      shslides[k].style.display="none";
    }
});

extMod = document.getElementById("extP9");
extMod.addEventListener("click", function(){
var shslides;

  shslides = document.getElementsByClassName("modalSlideP9");
    for (var k = 0; k < shslides.length; k++) {
      shslides[k].style.display="none";
    }
});

extMod = document.getElementById("extP10");
extMod.addEventListener("click", function(){
var shslides;

  shslides = document.getElementsByClassName("modalSlideP10");
    for (var k = 0; k < shslides.length; k++) {
      shslides[k].style.display="none";
    }
});

extMod = document.getElementById("extP11");
extMod.addEventListener("click", function(){
var shslides;

  shslides = document.getElementsByClassName("modalSlideP11");
    for (var k = 0; k < shslides.length; k++) {
      shslides[k].style.display="none";
    }
});

extMod = document.getElementById("extP12");
extMod.addEventListener("click", function(){
var shslides;

  shslides = document.getElementsByClassName("modalSlideP12");
    for (var k = 0; k < shslides.length; k++) {
      shslides[k].style.display="none";
    }
});

