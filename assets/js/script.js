

document.querySelector(".bars__menu").addEventListener("click", animateBars);

var line1__bars = document.querySelector(".line1__bars-menu");
var line2__bars = document.querySelector(".line2__bars-menu");
var line3__bars = document.querySelector(".line3__bars-menu");

function animateBars() {
    line1__bars.classList.toggle("activeline1__bars-menu")
    line2__bars.classList.toggle("activeline2__bars-menu")
    line3__bars.classList.toggle("activeline3__bars-menu")
}




const $formulario = document.getElementById("form");
const $input = document.querySelectorAll("#form input");

const expresiones = {
    nombre : /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    correo : /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    asunto : /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    mensaje : /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}

const campos = {
    nombre : false,
    correo : false,
    asunto : false,
    mensaje : false,
}

const validarFormulario = (e) => {
    switch(e.target.name) {
        case "usuario":
            validarCampo(expresiones.usuario, e.target, "usuario");
        break;
        case "nombre":
            validarCampo(expresiones.nombre, e.target, "nombre");
        break;
        case "password":
            validarCampo(expresiones.password, e.target, "password");
            validarPassword2();
        break;
        case "password2":
            validarPassword2();
        break;
        case "correo":
            validarCampo(expresiones.correo, e.target, "correo");
        break;
        case "telefono":
            validarCampo(expresiones.telefono, e.target, "telefono");
        break;
    }
}


const validarCampo = (expresiones, input, campo) => {
    if (expresiones.test(input.value)){
        document.getElementById(`grupo__${campo}`).classList.remove("form__grupo-incorrecto");
        document.getElementById(`grupo__${campo}`).classList.add("form__grupo-correcto");
        document.querySelector(`#grupo__${campo} i`).classList.remove("fa-times-circle");
        document.querySelector(`#grupo__${campo} i`).classList.add("fa-check-circle");
        document.querySelector(`#grupo__${campo} .form__input-error`).classList.remove("form__input-error-activo");
        campos[campo] = true;

    } 
    
    else {
        document.getElementById(`grupo__${campo}`).classList.add("form__grupo-incorrecto");
           document.getElementById(`grupo__${campo}`).classList.remove("form__grupo-correcto");
           document.querySelector(`#grupo__${campo} i`).classList.add("fa-times-circle");
           document.querySelector(`#grupo__${campo} i`).classList.remove("fa-check-circle");
           document.querySelector(`#grupo__${campo} form__input-error`).classList.add("form__input-error-activo");
           campos[campo] = false;

    }

}

$inputs.forEach((input) => {
    input.addEventListener("keyup", validarFormulario);
    input.addEventListener("blur", validarFormulario);
});

$formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const $terminos = document.getElementById("terminos");
    if(campos.usuario && campos.nombre && campos.password && campos.correo && campos.telefono && $terminos.checked) {
        // formulario.reset();

        document.getElementById("form__mensaje-exito").classList.add("form__mensaje-exito-active");
        setTimeout(() => {
            document.getElementById("form__mensaje-exito").classList.remove("form__mensaje-exito-active");
            document.getElementById("form__grupo-terminos").style.display = "none";

        }, 3000);

        document.querySelectorAll("form__grupo--correcto").forEach ((icono) => {
            icono.classList.remove("form__grupo--correcto");
        });

        setTimeout(() => {
            location.reload();
        }, 5000);

    } else {
        document.getElementById("form__mensaje").classList.add("form__mensaje-active");
    }
});
