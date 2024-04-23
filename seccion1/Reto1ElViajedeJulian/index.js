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
const DiasEstimados = (expRp) => {
    let dias;
    while (true) {
        dias = prompt("ingresa los dias estimados de tu viaje")
        if (!expRp.test(dias) || dias == null) {
            alert("ingresaste algo invalido!")
        } else {
           break
        }
    }
    return dias
}
const presupuestoInicial = (expRp) => {
    let presupuesto;
    while (true) {
        presupuesto = prompt("ingresa tu presupuesto para este viaje")
        if (!expRp.test(presupuesto) || presupuesto == null) {
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
    let expRprecios = /^[0-9]+[.,]{0,1}\[0]{0,2}$/
    let expRnumeros = /^[0-9]+$/
    let costoDiarioEstimado = 300
    const lugar =  establecerViaje(expRegularlE)
    let dias = DiasEstimados(expRprecios)
    let presupuesto = presupuestoInicial(expRprecios)
    validarPresupuesto(dias, presupuesto, costoDiarioEstimado)
    
}
const main = () => {
    viajeDeJulian()

}

main ()

