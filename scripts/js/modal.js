function createModal(modalType, content, count) {
  let modalContentHeader = document.querySelector(
    'div.modal-content > div.modal-header '
  )
  let modalContentBody = document.querySelector(
    'div.modal-content > div.modal-body '
  )
  modal.style.display = 'flex'
  if (modalType == 'Alert') {
    modalContentHeader.style.cssText = `
    background-color: #f8d7da;
    border-color: red;
    `
    modalContentBody.style.cssText = `
    background-color: #f8d7da;
    border-color: red;
    font-family: Cotton Butter;
    `
  } else {
    modalContentHeader.style.cssText = `
    background: #d4edda;
    border-color: #8bc098;
    `
    modalContentBody.style.cssText = `
    background: #d4edda;
    border-color: #8bc098;
    font-family: Cotton Butter;
    `
  }
  message.innerHTML = `<h1>${content}</h1>`

  if (count == undefined) {
    setTimeout(function () {
      modal.style.display = 'none'
    }, 2000)
  } else {
    setTimeout(function () {
      modal.style.display = 'none'
    }, count)
  }
}
function dismissModal() {
  modal.style.display = 'none'
}
