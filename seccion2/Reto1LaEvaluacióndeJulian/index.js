const HowFeel = {
    nvEnegia: null,
    clima: false,
    cargaDeldia:true

}

const actividades = () => {
    return new Promise((resolve, reject) => {
        if (HowFeel.cargaDeldia === false) {
            reject("no puedes hacer nada hoy")
        } else {
            resolve(HowFeel)
        }
    })
}


actividades()
.then((HowFeel) => {
    setTimeout(() => {
        console.log("hola carlos jaja")
    })
    if (HowFeel.nvEnegia === null) {
        return "tomate el dia de descanso"
    } else if(HowFeel.clima == false){
        return "quedarse en casa trabajando en proyectos personales o simplemente relajarse."
    }
    else {
        return "puedes decidir salir un rato"
    }
    
}).then((menssge) => {
        console.log(menssge)

        
    }).catch((err) => {
        console.log(err)
        
    })
    
   


