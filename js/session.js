function redireccionar(tipo){

if(tipo === "admin"){
window.location.href="views/admin.html"
}

if(tipo === "vendedor"){
window.location.href="views/vendedor.html"
}

if(tipo === "cliente"){
window.location.href="views/cliente.html"
}

}

function verificarSesion(){

let usuario = sessionStorage.getItem("usuario")

if(!usuario){
window.location.href="../index.html"
}

}

function logout(){

sessionStorage.clear()

window.location.href="../index.html"

}