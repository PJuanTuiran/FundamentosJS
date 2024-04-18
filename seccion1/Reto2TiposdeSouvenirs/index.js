const listaDeSouvenirs = [
]

const addNamesouvenir = (expRegularlE) => {
    let nameSou 
    while (true) {
        nameSou = prompt("ingresa el nombre del souvenir")
        if (!expRegularlE.test(nameSou) || nameSou == "") {
            alert("No es el dato esperado!")
        } else {
           break
        }
    }
    return nameSou
}
const addPrice = (expRNumeros) => {
    let precio;
    while (true) {
        precio = prompt("ingresa el precio del souvenir")
        if (!expRNumeros.test(precio) || precio == "") {
            alert("No es el dato esperado!")
        } else {
            break
        }
    }
    return precio

}
const addIsAvailable = () => confirm("Esta disponible el souvenir SI(ACEPTAR)/ NO(CANCELAR)")
const salirDelPrograma = () => {
    return confirm("desea continuar agregando Souvenirs SI(ACEPTAR) / NO (CANCELAR)")
}
const addSouvenir = (name, price, available) => {

    listaDeSouvenirs.push({ name:name, price:price, available:available })
    console.log(`name:${name} | price: ${price} | available: ${available}`)
    
}
function verificarDatos(name, price, available) {
    if (typeof name == "string") {
          console.log(`el nombre del souvenir si es un string`)
    } 

    if (typeof price !== "number") {
        console.log("ingresaste un tipo de dato en el precio correcto")
    }
    
    if (typeof available == "boolean" ) {
        console.log(`en la disponibilidad si es  un tipo de dato booleano`)
    }

    console.log("----------------------------------------------------------")

}


const alldetailsSouvenir = () => {
    let expRegularlE = /^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/
    let expRprecios = /^[0-9]+[.,]{1,1}\[0]{2,2}$/
    let expRnumeros = /^[0-9]+$/
    let name = addNamesouvenir(expRegularlE)
    let price = addPrice(expRnumeros)
    let available = addIsAvailable()
    addSouvenir(name, price, available)
    verificarDatos(name, price, available)
}

let main = () => {
    let salir;
    while (true) {
        alldetailsSouvenir()
        salir = salirDelPrograma()
        if (salir === false){
            break
        }
    }
    
}

main()


