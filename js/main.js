let Producto = {
nombre: "Pantalon",
precio: 3000, 
cantidadDisponible: 60
}

console.log (Producto.nombre);

Producto.nombre = "Camiseta"

console.log (Producto.nombre)

Producto.categoria = "ropa"

console.log (Producto.categoria)

delete Producto.cantidadDisponible

console.log(Producto)

