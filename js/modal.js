// OBJECT LITERAL (OBJETO COM PROPRIEDADES E VALORES)
export const Modal = {
  form: document.querySelector("form"),
  inputWeight: document.querySelector("#weight"),
  inputHeight: document.querySelector("#height"),
  wrapper: document.querySelector(".modal-wrapper"),
  message: document.querySelector(".modal span"),
  buttonClose: document.querySelector(".close"),

  open() {
    Modal.wrapper.classList.add("open")

    Modal.inputWeight.value = ""
    Modal.inputHeight.value = ""
  },
  close() {
    Modal.wrapper.classList.remove("open")
  },
}


