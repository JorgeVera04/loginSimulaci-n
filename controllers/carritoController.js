let carrito = []

function mostrarCatalogo(){

let catalogo = document.getElementById("catalogo")

catalogo.innerHTML = ""

productos.forEach(p => {

catalogo.innerHTML += `
<div class="producto">
<h3>${p.nombre}</h3>
<p>Precio: $${p.precio}</p>
<button onclick="agregarCarrito(${p.id})">Agregar al carrito</button>
</div>
`

})

}

function agregarCarrito(id){

let producto = productos.find(p => p.id === id)

carrito.push(producto)

mostrarCarrito()

}

function mostrarCarrito(){

let contenedor = document.getElementById("carrito")
let totalElemento = document.getElementById("total")

contenedor.innerHTML = ""

let total = 0

carrito.forEach((p,index) => {

contenedor.innerHTML += `
<div class="itemCarrito">
${p.nombre} - $${p.precio}
<button onclick="eliminarDelCarrito(${index})">Eliminar</button>
</div>
`

total += Number(p.precio)

})

totalElemento.innerText = total

}

function eliminarDelCarrito(index){

carrito.splice(index,1)

mostrarCarrito()

}

function comprar(){

if(carrito.length === 0){

alert("El carrito está vacío")

return

}

let total = 0

carrito.forEach(p=>{
total += Number(p.precio)
})

alert("Compra realizada. Total: $" + total)

carrito = []

mostrarCarrito()

}

window.onload = mostrarCatalogo