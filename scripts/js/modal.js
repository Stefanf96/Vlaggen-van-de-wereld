function createModal(modalType, content) {
  const modal = document.createElement('div')
  modal.className = 'modal fade'
  const modalDialog = document.createElement('div')
  modalDialog.className = 'modal-dialog modal-dialog-centered'

  const modalContent = document.createElement('div')
  modalContent.className = 'modal-content'

  const modalHeader = document.createElement('div')
  modalHeader.className = 'modal-header'

  const modalTitle = document.createElement('h5')
  modalTitle.innerHTML = modalType
  modalTitle.style.textAlign = 'center'

  const modalClose = document.createElement('button')
  modalClose.type = 'button'
  modalClose.className = 'close'
  modalClose.dataDismiss = 'modal'

  modalHeader.appendChild(modalTitle)
  modalHeader.appendChild(modalClose)

  const spanClose = document.createElement('span')
  spanClose.ariaHidden = 'true'
  spanClose.innerHTML = '&times;'

  const modalBody = document.createElement('div')
  modalBody.className = 'modal-body'
  modalBody.innerHTML = content

  modalContent.appendChild(modalHeader)
  modalContent.appendChild(modalBody)
  modalDialog.appendChild(modalContent)

  modal.appendChild(modalDialog)

  return modal
}
