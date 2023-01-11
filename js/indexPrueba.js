class Ropa {
    constructor(buzoI, colorI, talleI) {
        this.ropa = buzoI,
            this.color = colorI,
            this.talle = talleI
    }
    mostrarInfo() {
        console.log(`El prodcuto es un/a ${this.ropa}, su color es ${this.color} y el talle ${this.talle}`)
    }
}

const buzo = new Ropa("Buzo", "Negro", "M");
/* console.log(buzo) */
buzo.mostrarInfo()


const array = [ 1, 2, 3, 4, 5]
array.push(`8`)
console.log