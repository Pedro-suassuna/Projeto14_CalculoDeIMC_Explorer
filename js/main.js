
// IMPORTAÇÕES
import { Modal } from "./modal.js"
import { AlertError } from "./alert-error.js"
import { notAnumber, calculateIMC } from "./utils.js"

// EVENTOS DO PROGRAMA
Modal.form.addEventListener("submit", showIMCresult)
Modal.buttonClose.addEventListener("click", backToMainScreen)
window.addEventListener("keydown", keyESCpressed)
Modal.inputHeight.addEventListener("input", AlertError.close)
Modal.inputWeight.addEventListener("input", AlertError.close)


// FUNÇÕES DO PROGRAMA

// CALCULAR IMC E MOSTRAR RESULTADO NA TELA SECUNDÁRIA
function showIMCresult(event) {
  event.preventDefault()

  var weight = Modal.inputWeight.value
  var height = Modal.inputHeight.value
  const result = calculateIMC(weight, height)

  const weightOrHeightIsNotAnumber = notAnumber(weight) || notAnumber(height)

  if (weightOrHeightIsNotAnumber) {
    AlertError.open()
    return
  }

  
  displayResultMessage(result)
}

// VOLTAR PARA A TELA PRIMÁRIA DOS INPUTS
function backToMainScreen() {
  Modal.close()
}

// PEGAR O CLIQUE EM 'ESC' DO TECLADO E FECHAR TELA DE RESULTADO
function keyESCpressed(e) {
  if (e.key == "Escape") {
    Modal.close()
  }
}

// ATRIBUI O VALOR DO IMC NA MENSAGEM E MOSTRA NA TELA
function displayResultMessage(result) {
  const message = `Seu IMC é de ${result}`
  Modal.message.innerText = message

  Modal.open()
}

