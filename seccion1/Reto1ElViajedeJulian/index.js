const establecerViaje = (expRegularLe) => {
    let destino;
    while (true) {
        destino =  prompt("ingresa el destino")
        if (!expRegularLe.test(destino)) {
            alert("ingresaste un lugar invalido")
           
        } else {
            break
        
        }
    }
    return destino
}
const DiasEstimados = (expRNumeros) => {
    let dias;
    while (true) {
        dias = prompt("ingresa los dias estimados de tu viaje")
        if (!expRNumeros.test(dias) || dias == null) {
            alert("ingresaste algo invalido!")
        } else {
           break
        }
    }
    return dias
}
const presupuestoInicial = (expRNumeros) => {
    let presupuesto;
    while (true) {
        presupuesto = prompt("ingresa tu presupuesto para este viaje")
        if (!expRNumeros.test(presupuesto) || presupuesto == null) {
            alert("ingresaste un valor invalido!")
        }
        else {
            break
        }
    
    }
    return presupuesto
}
const validarPresupuesto = ( dias,presupuesto, costoDiario) => {
    let calculo = costoDiario * dias
    if (presupuesto > calculo) {
        alert(` Julian tienes suficiente dinero tu presupuesto es de ${presupuesto} supera el costo estidmado de ${calculo}`)
    } else {
        alert(`JULIAN TU COSTO ESTIMADO ES DE ${calculo} SUPERA TU PRESUPUESTO DE ${presupuesto}`)
    }
}

const viajeDeJulian = () => {
    let expRegularlE = /^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/
    let expRprecios = /^[0-9]+[.,]{1,1}\[0]{2,2}$/
    let expRnumeros = /^[0-9]+$/
    let costoDiarioEstimado = 300
    const lugar =  establecerViaje(expRegularlE)
    let dias = DiasEstimados(expRnumeros)
    let presupuesto = presupuestoInicial(expRnumeros)
    validarPresupuesto(dias, presupuesto, costoDiarioEstimado)
    
}
const main = () => {
    viajeDeJulian()

}

main ()

