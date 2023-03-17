let receta = {}
receta.nombre = "Sandwich";
receta.ingredientes = [];
receta.ingredientes = [
    {nombre: "Pan", cantidad: 2},
    {nombre: "Queso", cantidad: 1}
]
console.log(receta.ingredientes[0].nombre);
console.log(receta.ingredientes[0].cantidad + receta.ingredientes[1].cantidad);
