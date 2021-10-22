function opennavoptions() {
    var x = document.getElementById("enlaces");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
function leermas(video){
let leerb = document.querySelector(`.mainvideos[data-video="${video}"] .leermas`);
let texto = document.querySelector(`.mainvideos[data-video="${video}"] .texto`);
 if (texto.style.display === "block"){
  texto.style.display ="block";
  leerb.textContent ="Detalles";
  texto.style.display ="none";
 }else{
  leerb.style.display = "block";
  leerb.textContent ="Ocultar";
  texto.style.display ="block";

 }
}