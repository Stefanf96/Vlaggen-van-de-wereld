let modalWrap = null
function createModal(modalType, content) {
  if (modalWrap !== null) {
    modalWrap.remove()
  }
  if (modalType == 'Success') {
    const modal = document.getElementById('success')
    const message = document.getElementById('message')
    modal.style.display = 'flex'
    message.innerHTML = `<h1>${content}</h1>`
    // modalWrap = document.createElement('div')
    // modalWrap.className = 'modal'
    // modalWrap.id = 'modal'
    // modalWrap.setAttribute('role', 'dialog')
    // modalWrap.innerHTML = ``
  }
  if (modalType == 'Alert') {
    modalWrap = document.createElement('div')
    modalWrap.className = 'modal'
    modalWrap.id = 'modal'
    modalWrap.setAttribute('role', 'dialog')
    modalWrap.innerHTML = `
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" id ="close" onclick="">
          &times;
          </button>
        </div>

        <div class="modal-body">
          <div class="incorrectImage">
          <i class="fas fa-check-circle"></i>
            <h1>Incorrect</h1>
            <p id="messageSection">${content}</p>
          </div>
        </div>
      </div>
    </div>`
  }
  return modalWrap
}
