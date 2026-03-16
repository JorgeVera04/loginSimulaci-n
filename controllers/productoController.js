function mostrarProductos(){

let contenedor = document.getElementById("listaProductos")

contenedor.innerHTML = ""

productos.forEach(p => {

contenedor.innerHTML += `
<div>
<b>${p.nombre}</b> - $${p.precio} (${p.categoria})
<button onclick="eliminarProducto(${p.id})">Eliminar</button>
</div>
`

})

}

function agregarProducto(){

let nombre = document.getElementById("nombre").value
let precio = document.getElementById("precio").value
let categoria = document.getElementById("categoria").value

let id = productos.length + 1

let nuevo = new Producto(id,nombre,precio,categoria)

productos.push(nuevo)

mostrarProductos()

}

function eliminarProducto(id){

let index = productos.findIndex(p => p.id === id)

productos.splice(index,1)

mostrarProductos()

}

window.onload = mostrarProductos