document.getElementById("btn__iniciar-sesion").addEventListener("click",iniciarSesion);
document.getElementById("btn__registrarse").addEventListener("click",registro);



var contenedor_login_registro = document.querySelector(".contenedor__login-registro");
var formulario_login = document.querySelector(".formulario__login");
var formulario_registro = document.querySelector(".formulario__registro");
var caja_login = document.querySelector(".caja__login");
var caja_registro = document.querySelector(".caja__registro");


function iniciarSesion(){
    formulario_registro.style.display = "none";
    contenedor_login_registro.style.left = "10px";
    formulario_login.style.display = "block";
    caja_registro.style.opacity = "1";
    caja_login.style.opacity = "0";
}

function registro(){
    formulario_registro.style.display = "block";
    contenedor_login_registro.style.left = "410px";
    formulario_login.style.display = "none";
    caja_registro.style.opacity = "0";
    caja_login.style.opacity = "1";
}
