// -------------- MENU HAMBURGUESA ----------------------

document.querySelector("#bars__menu").addEventListener("click", animateBars,);


document.getElementById("back__menu").addEventListener("click", ocultarMenu);

var line1__bars = document.querySelector(".line1__bars-menu");
var line2__bars = document.querySelector(".line2__bars-menu");
var line3__bars = document.querySelector(".line3__bars-menu");
var nav = document.getElementById("nav")
var backMenu = document.getElementById("back__menu")


function animateBars() {    
        line1__bars.classList.toggle("activeline1__bars-menu")
        line2__bars.classList.toggle("activeline2__bars-menu")
        line3__bars.classList.toggle("activeline3__bars-menu")
        
          
        if (backMenu.style.display == "block") {
            backMenu.style.display = "none" ;
            nav.style.left = "-70%";
            
        } else {
            backMenu.style.display = "block";
            nav.style.left = "0px";
            
        }
              
        

}

function ocultarMenu (){
    line1__bars.classList.remove("activeline1__bars-menu")
    line2__bars.classList.remove("activeline2__bars-menu")
    line3__bars.classList.remove("activeline3__bars-menu")

    nav.style.left = "-70%";
    backMenu.style.display = "none"


}






