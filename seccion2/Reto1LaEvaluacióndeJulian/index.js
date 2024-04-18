const HowFell = {
    nvEnegia: null,
    clima: false,
    cargaDeldia:true

}

const actividades = () => {
    return new Promise((resolve, reject) => {
        if (HowFell.cargaDeldia === false) {
            reject("no puedes hacer nada hoy")
        } else {
            resolve(HowFell)
        }
    })
}


actividades()
    .then((HowFell) => {
        if (HowFell.nvEnegia === null) {
            return "tomate el dia de descanso"
        } else {
            return "puedes decidir salir un rato"
        }
     
    }).then((men) => {
        console.log(men)
        if (HowFell.clima == false) {
            return "quedarse en casa trabajando en proyectos personales o simplemente relajarse."
        }
    }).then(res => {
        console.log(res)
        
    }).catch((err) => {
        console.log(err)
        
    })
    
   


