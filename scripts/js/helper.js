function successHelper() {
  const quizHelper = document.createElement('div')
  quizHelper.className = 'alert alert-success alert-dismissible'
  quizHelper.role = 'alert'

  const closeButton = document.createElement('button')
  closeButton.className = 'close'
  closeButton.dataDismiss = 'alert'
  closeButton.ariaLabel = 'close'

  const spanClose = document.createElement('span')
  spanClose.ariaHidden = 'true'
  closeButton.appendChild(spanClose)

  quizHelper.appendChild(closeButton)

  return quizHelper
}
function alertHelper() {
  const quizHelper = document.createElement('div')
  quizHelper.className = 'alert alert-danger alert-dismissible'
  quizHelper.role = 'alert'

  const closeButton = document.createElement('button')
  closeButton.className = 'close'
  closeButton.dataDismiss = 'alert'
  closeButton.ariaLabel = 'close'

  const spanClose = document.createElement('span')
  spanClose.ariaHidden = 'true'
  closeButton.appendChild(spanClose)

  quizHelper.appendChild(closeButton)

  return quizHelper
}
