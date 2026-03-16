// Esperar a que cargue la página
document.addEventListener("DOMContentLoaded", function () {

    const botonLogin = document.querySelector("button");

    botonLogin.addEventListener("click", function () {
        login();
    });

    // Permitir login con tecla ENTER
    document.getElementById("password").addEventListener("keypress", function(e){
        if(e.key === "Enter"){
            login();
        }
    });

});