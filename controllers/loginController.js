function validarPassword(password){

const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

return regex.test(password)

}

function login(){

let usuarioInput = document.getElementById("usuario").value.trim()
let passInput = document.getElementById("password").value.trim()

if(!validarPassword(passInput)){
document.getElementById("error").innerText="Contraseña inválida"
return
}

let usuarioEncontrado = usuarios.find(u => 
u.usuario === usuarioInput && u.password === passInput
)

if(usuarioEncontrado){

sessionStorage.setItem("usuario",usuarioEncontrado.usuario)
sessionStorage.setItem("tipo",usuarioEncontrado.tipo)

redireccionar(usuarioEncontrado.tipo)

}else{

document.getElementById("error").innerText="Usuario o contraseña incorrectos"

}

}