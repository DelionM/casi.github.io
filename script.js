let menuVisible = false;
//funcion que oculat o muestra el menu
function mostrarOcultarMenu() {
    if (menuVisible){
        document.getElementById("nav").classList="";
        menuVisible = false;
    }
    else{
        document.getElementById("nav").classList="responsive";
        menuVisible = true;
    }
}

function seleccionar() {
    //ocultar despues de seleciionar
    document.getElementById("nav").classList="";
        menuVisible = false;
}

const responsive = document.querySelector('.responsive');
document.addEventListener('click', function(event) {
  if (!responsive.contains(event.target)) {
    menu.style.display = 'none';
  }
});