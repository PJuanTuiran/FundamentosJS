


let IngresaPresupuestoInicial = (expRnumeros) => {
    let presupuesto;
    while (true) {
        presupuesto = prompt("ingresa tu presupuesto inicial")
        if (!expRnumeros.test(presupuesto) || presupuesto == "") {
            alert("Tipo de valor invalido!")
        } else {
            break
        }
    }
    return presupuesto
  
}
let CostoEstimadoAlojamiento = (expRnumeros) => {
    let alojamiento;
    while (true) {
        alojamiento =  prompt("ingresa costo estimado del alojamiemiento")
        if (!expRnumeros.test(alojamiento) || alojamiento == "") {
            alert("Tipo de valor invalido!!")
        } else {
            break
        }
    }
    return alojamiento
}

let CostoEstimadoTransporte = (expRnumeros) => {
    let transporte;
    while (true) {
        transporte = prompt("ingresa costo estimado del transporte")
        if (!expRnumeros.test(transporte) || transporte == "") {
            lert("Tipo de valor invalido!")
        } else {
           break
        }
    }
    return transporte
 
}
let CostoEstimadoComida = (expRnumeros) => {
    let comida;
    while (true) {
        comida = prompt("ingresa costo estimado del comida")
        if (!expRnumeros.test(comida) || comida == "") {
            alert("Tipo de valor invalido!")
        } else {
            break
        }
    }
    return comida
 
}
let limiteDeUmbral = (expRnumeros) => {
    let umbral;
    while (true) {
        umbral= prompt("ingresa limite del umbral")
        if (!expRnumeros.test(umbral) || umbral == "") {
            alert("Tipo de valor invalido!")
        } else {
            break
        }
    }
    return umbral
 
}

let calcularPresupuesto = (presupuesto, alojamiento, transporte, comida ) =>  presupuesto - (alojamiento + transporte + comida )

let sellevaelarticulo = (totalPresupuesto, umbrall) => {
  
    if (umbrall < totalPresupuesto) {
        alert("puedes considerar llevar  articulo extra")
    } else {
        alert("evite gastos adicionales para no sobrepasar su presupuesto.")
        
    }
}

const agregarArticulos = (expRegularlE, expRNumeros) => {
    let newArticles = []
    let article = confirm("quieres ingresar un articulo extra? SI(ACEPTAR)/NO(CANCELAR)")
    if (article == true) {
        let nameArticle = prompt("agrega el nombre del articulo")
        if (!expRegularlE.test(nameArticle)) {
            alert("ingresaste un dato invalido")
        }
        let precioArticle = prompt("agrega el precio del articulo")
        
        newArticles.push({nameArticle: nameArticle, precioArticle:precioArticle})
    }
    return newArticles
}

const precioDeLosArticle = (articles, totalPresupuesto) => {
    const preciosArticles = articles.filter((e) => {
        if (e.precioArticle < totalPresupuesto) {
            return e.precioArticle
        } else {
            console.log("no puedes llevar ninguno")
        }
    })
   
    return preciosArticles
}

const comparandoPrecios = (precioArticle) => {

    for (i in precioArticle) {
        console.log("puedes considera estos article "+ precioArticle[i].nameArticle)
    }

    
}

const planificacionDelItinerario = () => {
    let expRegularlE = /^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/
    let expRprecios = /^[0-9]+[.,]{1,1}\[0]{2,2}$/
    let expRnumeros = /^[0-9]+$/
    let presupuesto = IngresaPresupuestoInicial(expRnumeros)
    let alojamiento = CostoEstimadoAlojamiento(expRnumeros)
    let transporte = CostoEstimadoTransporte(expRnumeros)
    let comida = CostoEstimadoComida(expRnumeros)
    let umbral = limiteDeUmbral(expRnumeros)
    let totalPresupuesto = calcularPresupuesto(presupuesto, alojamiento, transporte, comida)
    sellevaelarticulo(totalPresupuesto, umbral)
    let articles = agregarArticulos(expRegularlE, expRnumeros)
    let preciosArticle = precioDeLosArticle(articles, totalPresupuesto)
    comparandoPrecios(preciosArticle)

}

const main = () => {
   planificacionDelItinerario()
}
main()



