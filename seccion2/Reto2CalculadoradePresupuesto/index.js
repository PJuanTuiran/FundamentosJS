
var presupuestoInicial = checkNaN("Insert your budget")
var comida = checkNaN("Insert your food expenses")
var libro = checkNaN("Insert the cost of a book")

if ((comida + libro) <= presupuestoInicial) {
  console.log("Your budget is enough to eat outside and buy at least one book")
} else if (comida <= presupuestoInicial) {
  console.log("Your budget is enough to eat outside")
} else if (libro <= presupuestoInicial) {
  console.log("Your budget is enough to buy a book")
} else {
  console.log("Your budget isn't enough to eat outside nor buy a book")
}

function validarPrompt(text) {
  while (true) {
    let value = Number(prompt(text))
    if (isNaN(value)) {
      console.log("Inserta un numero")
    }
    else {
      break
    }
  }

  return value
}