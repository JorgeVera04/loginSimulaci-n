class Usuario{

constructor(id, usuario, password, tipo){
this.id = id
this.usuario = usuario
this.password = password
this.tipo = tipo
}

}

const usuarios = [

new Usuario(1,"admin","Admin123!","admin"),
new Usuario(2,"juan","Juan123!","vendedor"),
new Usuario(3,"ana","Ana1234!","cliente")

]