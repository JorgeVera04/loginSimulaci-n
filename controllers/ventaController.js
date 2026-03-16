let ventas = []

function cargarProductos(){

let select = document.getElementById("productoSelect")

productos.forEach(p => {

let option = document.createElement("option")

option.value = p.id
option.text = p.nombre + " - $" + p.precio

select.appendChild(option)

})

}

function registrarVenta(){

let idProducto = document.getElementById("productoSelect").value

let producto = productos.find(p => p.id == idProducto)

ventas.push(producto)

mostrarVentas()

}

function mostrarVentas(){

let contenedor = document.getElementById("ventas")

contenedor.innerHTML = ""

ventas.forEach(v => {

contenedor.innerHTML += `
<div>${v.nombre} - $${v.precio}</div>
`

})

}

window.onload = cargarProductos