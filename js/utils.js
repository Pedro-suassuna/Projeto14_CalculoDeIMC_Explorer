export {notAnumber, calculateIMC}


// VALIDAR OS VALORES DOS INPUTS
function notAnumber(value) {
  return isNaN(value) || value == ""
}


// CALCULAR O IMC
function calculateIMC(weight, height) {
  return (weight / (height / 100) ** 2).toFixed(2)
}