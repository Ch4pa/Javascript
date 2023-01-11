
function preguntarProducto() {
    let preguntarColor = prompt(`Estas buscando un color en especial. Ingrese si o no.`)
    if (preguntarColor.toLowerCase() == `si`) {
        let color = prompt(`Ingresa el color`);
        let talle = prompt(`Ingrese talle S, M, L, XL`);
        mostrarProducto(color, talle)
    }
    else if (preguntarColor.toLowerCase() == `no`) {
        let talle = prompt(`Ingrese tu talle`);
        mostrarProducto(talle)
    }
    
    const producto = {
        color: color,
        talle: talle,

    }
    console.log(producto)
    mostrarProducto(colorI, talleI)

}

function mostrarProducto(color, talle){
    alert(`Estas buscando un producto ${color} y talle ${talle}`)
}

function preguntarAccesorio() {

    let accesorio = prompt(`Estas buscando un producto en especial. Ingrese Si o No.`)
    if (accesorio.toLowerCase() == `si`) {
        let accesorioIngresado = prompt(`Ingrese el producto que deseas.`);
        alert(`No tenemos ese producto`)

    }
    else (accesorio.toLowerCase() == `no`)

}


alert(`Bienvenido a nuestra pagina a continuacion le va aparecer el catalogo`)

let salirMenu = false
console.log(salirMenu)
do {
    let opcionIngresada = parseInt(prompt(`Ingrese el producto que estas buscando en nuestra tienda
   1 - Remera
   2 - Buzo
   3 - Otros
   0 - Salir del menu`))
    switch (opcionIngresada) {
        case 1:
            preguntarProducto()
            break
        case 2:
            preguntarProducto()
            break
        case 3:
            preguntarAccesorio()
            break
        case 0:
            console.log(`Gracias por visitar nuestra Tienda. Saludos!`)
            salirMenu = true
            break
        default:
            console.log("Por favor, ingrese un producto que este en la tienda")
            break
    }
} while (!salirMenu)






